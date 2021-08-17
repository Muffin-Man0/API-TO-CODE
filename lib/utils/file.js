const { join } = require('path');
let {quickTypeJSON,quicktypeJSONSchema} = require('./core')
let {
    createReadStream,
    createWriteStream,
    readdirSync,
    existsSync,
    mkdirSync,
    write,
    writeFile,
} = require('fs')
let {UNIAPP_PACKAGE,AXIOS_PACKAGE} = require('./package.config')

const {formatJSON,formatQueryObj} = require('../json_format');

const handleError = err => err && console.error(err) && process.exit(-1);



/**
 * copy模板
 *
 * @param {*} fromPath 需要copy的目录
 * @param {*} toPath 写入目录
 * @returns Promise
 */
const copyTemplate = (fromPath, toPath) => {
    if (!existsSync(fromPath)) return;
    
    !existsSync(toPath) && mkdirSync(toPath);

    const files = readdirSync(fromPath, { withFileTypes: true });
  
    for (const file of files) {

        const fromFilePath = join(fromPath, file.name);
        const toFilePath = join(toPath, file.name);

        if (file.isFile()) {
          // copy file

          const reader = createReadStream(fromFilePath);
          const writer = createWriteStream(toFilePath);
          reader.pipe(writer);
        } else {
            copyTemplate(fromFilePath, toFilePath);
        }
    }
};



/**
 * 生成URl文件
 *
 * @param {*} data 数据
 * @returns Promise
 */

 const generatorUrl =  (data)=>{
  return new Promise(async (resolve,reject)=>{
      try {
        const APIS = formatJSON(data);
        const urls = []
        // 生成url
        for(let item in  APIS) {
            urls.push(`${item}: "${APIS[item].url}",`)
        }
        // 返回模板
        resolve( `export default {\n${urls.join('\n')}\n};`)
       
      } catch (error) {
        reject(error)
      }
  })
}



/**
 * 生成调用方法
 *
 * @param {*} data 数据
 * @returns Promise
 */

 const generatorFunction =  (data)=>{
  return new Promise(async (resolve,reject)=>{
      try {
        const APIS = formatJSON(data);
        const Functions = []
        // 生成url
        for(let item in  APIS) {
          Functions.push(`
    /**
       @method ${item}
       @param:{${Object.keys(APIS[item].query).join(',')}}
       @description ${APIS[item].tags}
    */
       ${item}: params => ${APIS[item].method.toLocaleUpperCase()}(url.${item}, params), 
          `)
        }
        // 返回模板
        resolve( `${UNIAPP_PACKAGE}\n\nexport default {\n${Functions.join('\n')}\n};
        `)
      } catch (error) {
        reject(error)
      }
  })
}

/**
 * 生成调用方法
 *
 * @param {*} data 数据
 * @returns Promise
 */

 const generatorAxiosFunction =  (data)=>{
  return new Promise(async (resolve,reject)=>{
      try {
        const APIS = formatJSON(data);
        const Functions = []
        // 生成url
        for(let item in  APIS) {
          Functions.push(`
    /**
       @method ${item}
       @param:{${Object.keys(APIS[item].query).join(',')}}
       @description ${APIS[item].tags}
    */
       ${item}: (params:Api2CodeObject['${item}']) => ${APIS[item].method.toLocaleUpperCase()}(url.${item}, params), 
          `)
        }
        // 返回模板
        resolve( `${AXIOS_PACKAGE}\n\nexport default {\n${Functions.join('\n')}\n};
        `)
      } catch (error) {
        reject(error)
      }
  })
}


/**
 * 生成interface文件
 *
 * @param {*} data 数据
 * @returns Promise
 */

const generatorInterface =  (data)=>{
  return new Promise(async (resolve,reject)=>{
      try {

      const {lines} = await quicktypeJSONSchema(
        "typescript",
        "api2code",
        typeof data == 'object' ? JSON.stringify(data) : data
      );
      
      resolve(lines.join('\n'))
      } catch (error) {
        reject(error)
      }
  })
   
}



/**
 * 写入文件
 *
 * @param {*} data 数据
 * @param {*} toFile 写入文件
 * @returns Promise
 */

const WriteAPI = (data, toFile) => {
  return new Promise((resolve,reject)=>{
    writeFile(toFile, data, 'utf8', err => {
      if (err) {
        handleError(err);
        reject(err);
        return;
      }
      resolve(true);
    });
  })
};


  module.exports = {
    copyTemplate,
    WriteAPI,
    generatorInterface,
    generatorUrl,
    generatorAxiosFunction,
    generatorFunction
  }