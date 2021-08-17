
//将模板数据中的入参转成
/**
{
  "importExcel":{
      "importFile":"string",
      "gradeId":"string"
  }
}
*/
function filterType(type){
  return ['Long','int','Double','Integer'].includes(type) ? 'Number' : type
}

const handleQueryType = (target,keyName='') => {

  const cloneTarget = Array.isArray(target) || keyName ==='items' ? [] : {};
   
  switch(keyName){
    case 'properties':
      handleObject();
      break;
    case 'items':
      handleArray()
      break;
    default:
      handleStatic();
      break;
  }
  function IS_OBJECT(type){
    return Boolean(type === 'object')
  }

  function IS_ARRAY(type){
    return Boolean(type === 'array')
  }

  function IS_STATIC(type){
    return !IS_ARRAY(type) &&  !IS_OBJECT(type)
  }




  function handleObject(){
    for(const i in target){
      if(IS_STATIC(target[i].type)){
        cloneTarget[i] = filterType(target[i].type)
      }else if(IS_ARRAY(target[i].type)){
        cloneTarget[i] = handleQueryType(target[i]['items'],'items')
      }else if(IS_OBJECT(target[i].type)){
        // 如果参数为空对象
        cloneTarget[i] = JSON.stringify(handleQueryType(target['properties'],"properties")) == '{}' 
          ? 'Object' 
          : handleQueryType(target['properties'],"properties")
      }
    }
  }

  function handleArray(){
    for( const i in target){
      if(target['properties']){
        //数据类型{ array:[{a:string,b:string,c:string...}]}
        cloneTarget[0] = handleQueryType(target['properties'],"properties")
      }else if(!target['properties'] && ['Long','int','Double','Integer'].includes(target.type)){
        //数据类型{ array:[1,2,3,4]}
        cloneTarget[0] = 1;
      }
    }
  }

  function handleStatic(){
    for(const i in target){
      if(i==='name' && IS_STATIC(target.type)){
        cloneTarget[target[i]] = filterType(target.type)
      }else if(i==='name' && IS_OBJECT(target.type)){
        cloneTarget[target[i]] = 
          handleQueryType(target['properties'],'properties')
      }
    }
  }
  
  return cloneTarget;
}

//深层拷贝
const queryCopy = ({target,keyName ='',requires = []}) => {
  // 对于传入参数处理
  if (typeof target !== 'object' || target === null) {
    return target;
  }

  const cloneTarget = Array.isArray(target) ? [] : {};



  Object.keys(target).map((i,idx)=>{

    
    if(keyName && keyName !=='properties'){
      cloneTarget.name = keyName;
    }
    if(typeof target[i] !== 'object'){
      if(['name','tags','type','required'].includes(i)){
        cloneTarget[i] = filterType(target[i]);
      }
      // if(requires.length && target.required == null && requires.includes(keyName)){
      //   cloneTarget['required'] = true
      // }else{
      //   cloneTarget['required'] = false
      // }
      


    }else if(typeof target[i] === 'object'){
      
      cloneTarget[i] =
        typeof target[i] === 'object' && target[i] !== null
          ? queryCopy({target:target[i],keyName:i,requires:requires})
          : target[i]
    }

  })
  return cloneTarget;
}

const reNameType = (json)=>{
  let map = {
    "Long": "number",
    "int": "number",
    "Double": "number",
    "Integer": "number",
    "string": "string",
    "String": "string",
    "Object": "object",
    "Date" : "string"
  }
  
  let reStr = '(' + Object.keys(map).map(it => '\\' + it).join('|') + ')'
  
  let re = new RegExp(reStr, 'g')
  return json.replace(re, it => map[it] ? map[it] : 'string')
}



//转换json为模板数据
const formatJSON = (json) =>{
  const api = json.paths;

  const urlList = Object.keys(api)
  
  let apiConfig = {}

  urlList.map((key,idx)=>{
    const apiParams = {
      tags:'',
      method:'',
      header:'',
      url:'',
      query:{},
      response:{}
    }
    
    // url
    apiParams.url = key
    // method
    for(method in api[key]){
      apiParams['method'] = method
    }
  
    //header
    api[key][apiParams.method].consumes.map(item=>{
      apiParams.header = item;
    })
  

    //tags
    api[key][apiParams.method].tags.map(item=>{
      apiParams.tags = item + '__' + api[key][apiParams.method].summary;
    })
    // query
    api[key][apiParams.method].parameters.map((item,index)=>{
     
      
      let obj = JSON.parse(reNameType(JSON.stringify(item)))
      
      apiParams.query.properties = {...apiParams.query.properties,...{}}
      if(obj.in === 'query'){
        apiParams.query.properties[obj.name] = queryCopy({target:obj})
        // apiParams.query[obj.name] = queryCopy(obj)
      }else if (obj.in === 'body'){
        apiParams.query.properties = obj.schema.properties;
        apiParams.query.required = obj.schema.required;
        // queryCopy({target:obj.schema.properties,requires:obj.schema.required})
      }
        
    })
  
    // response
    for(const i in api[key][apiParams.method].responses){
      apiParams.response.status = i;
      
      const data = api[key][apiParams.method]['responses'][i].schema;
      const obj = JSON.parse(JSON.stringify(data).replace(/description/g,'tags'))
      apiParams.response.parameters = obj.properties;
  
    }
  
    //生成接口名
    let clearKey = key.endsWith('.json') ? key.slice(0,-5) : key //截掉.json
    
    const keyArr = clearKey.split('/')
    const len = keyArr.length
    apiName = keyArr[len-2] + keyArr[len-1].charAt(0).toUpperCase() +  keyArr[len-1].slice(1) //驼峰命名

    apiConfig[apiName] = apiParams;
  })
  
  return apiConfig;
}


//提取模板数据的入参
const formatQueryObj = (params) =>{
  let apiQueryObj = {}
  Object.entries(params).map((item,index)=>{
    let interface = item[0]
    apiQueryObj[interface] = {};
    // apiQueryObj[interface]
    Object.keys(item[1].query).map(key=>{
        apiQueryObj[interface]['type'] = 'object'
        apiQueryObj[interface][key] = item[1]['query'][key]
    })
  })
  return {properties:{
    ...apiQueryObj
  }
}
}

module.exports = {
  formatQueryObj,
  formatJSON
}

//模板数据
// const API = {
//   'classImportExcel':{
//     method:'post',
//     header:'application/json',
//     url:'/api/v1/class/importExcel.json',
//     query:{
//       importFile:{
//         name: "importFile",
//         tags: "(MultipartFile)",
//         type: "string"
//       },
//       gradeId:{
//         type: "string",
//         tags: "(MultipartFile)"
//       },
//       arr:{
//         type:array,
//         name:arr,
//         items:{
//           // xxx:{
//           //   xxxx
//           // } ...
//         }
//       }
//     },
//     response:{
//       status:200,
//       data:{  //parameters
//         flag: {
//           type: "int",
//           tags: "状态,1:成功(兼容0成功),-1:失败",
//         },
//         msg:{
//           type: "String",
//           tags: "提示消息",
//         },
//         data: {
//           type: "object",
//           tags: "备注",
//           data: {
//             // ...
//           }
//         }
//       }
//     }
//   }
// }


