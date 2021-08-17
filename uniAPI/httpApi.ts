import url from "./url";
import { POST, GET, POSTBody,JSONP} from "./apiFn";
import APIType from "./http.interface";

export default {

    /**
       @method classImportExcel
       @param:{properties}
       @description PC端-校园管理-班级管理__excel导入
    */
       classImportExcel: (params:Api2CodeObject['classImportExcel']) => POST(url.classImportExcel, params), 
          

    /**
       @method classUpdate
       @param:{properties,required}
       @description PC端-校园管理-班级管理__修改班级基础
    */
       classUpdate: (params:Api2CodeObject['classUpdate']) => POST(url.classUpdate, params), 
          

    /**
       @method classPage
       @param:{properties}
       @description PC端-校园管理-班级管理__分页查询
    */
       classPage: (params:Api2CodeObject['classPage']) => GET(url.classPage, params), 
          

    /**
       @method classRefreshStudentNum
       @param:{}
       @description PC端-校园管理-班级管理__刷新学生数量
    */
       classRefreshStudentNum: (params:Api2CodeObject['classRefreshStudentNum']) => GET(url.classRefreshStudentNum, params), 
          

    /**
       @method classAdd
       @param:{properties,required}
       @description PC端-校园管理-班级管理__新增班级基础
    */
       classAdd: (params:Api2CodeObject['classAdd']) => POST(url.classAdd, params), 
          

    /**
       @method classList
       @param:{properties}
       @description PC端-校园管理-班级管理__查询所有，不进行分页
    */
       classList: (params:Api2CodeObject['classList']) => GET(url.classList, params), 
          

    /**
       @method classDelete
       @param:{properties}
       @description PC端-校园管理-班级管理__通过id删除班级基础
    */
       classDelete: (params:Api2CodeObject['classDelete']) => GET(url.classDelete, params), 
          

    /**
       @method coursePage
       @param:{properties}
       @description PC端-校园管理-课程管理__分页查询
    */
       coursePage: (params:Api2CodeObject['coursePage']) => GET(url.coursePage, params), 
          

    /**
       @method courseList
       @param:{properties}
       @description PC端-校园管理-课程管理__查询所有，不进行分页
    */
       courseList: (params:Api2CodeObject['courseList']) => GET(url.courseList, params), 
          

    /**
       @method courseDelete
       @param:{properties}
       @description PC端-校园管理-课程管理__通过id删除课程管理
    */
       courseDelete: (params:Api2CodeObject['courseDelete']) => GET(url.courseDelete, params), 
          

    /**
       @method gradeListGradeBySchoolId
       @param:{properties}
       @description PC端-校园管理-年级管理__根据学校的教育阶段查询对应的年级
    */
       gradeListGradeBySchoolId: (params:Api2CodeObject['gradeListGradeBySchoolId']) => GET(url.gradeListGradeBySchoolId, params), 
          

    /**
       @method schoolUpdate
       @param:{properties,required}
       @description PC端-校园管理-学校管理__修改学校管理
    */
       schoolUpdate: (params:Api2CodeObject['schoolUpdate']) => POST(url.schoolUpdate, params), 
          

    /**
       @method schoolPage
       @param:{properties}
       @description PC端-校园管理-学校管理__分页查询
    */
       schoolPage: (params:Api2CodeObject['schoolPage']) => GET(url.schoolPage, params), 
          

    /**
       @method schoolAdd
       @param:{properties,required}
       @description PC端-校园管理-学校管理__新增学校管理
    */
       schoolAdd: (params:Api2CodeObject['schoolAdd']) => POST(url.schoolAdd, params), 
          

    /**
       @method schoolList
       @param:{properties}
       @description PC端-校园管理-学校管理__查询所有，不进行分页
    */
       schoolList: (params:Api2CodeObject['schoolList']) => GET(url.schoolList, params), 
          

    /**
       @method schoolDelete
       @param:{properties}
       @description PC端-校园管理-学校管理__通过id删除学校管理
    */
       schoolDelete: (params:Api2CodeObject['schoolDelete']) => GET(url.schoolDelete, params), 
          

    /**
       @method loginpageUpdate
       @param:{properties,required}
       @description PC端-校园管理-定制化管理__个性化设置修改
    */
       loginpageUpdate: (params:Api2CodeObject['loginpageUpdate']) => POST(url.loginpageUpdate, params), 
          

    /**
       @method loginpageRollBackDefault
       @param:{}
       @description PC端-校园管理-定制化管理__恢复默认值
    */
       loginpageRollBackDefault: (params:Api2CodeObject['loginpageRollBackDefault']) => POST(url.loginpageRollBackDefault, params), 
          

    /**
       @method loginpageGetLoginConf
       @param:{}
       @description PC端-校园管理-定制化管理__获取登录配置
    */
       loginpageGetLoginConf: (params:Api2CodeObject['loginpageGetLoginConf']) => POST(url.loginpageGetLoginConf, params), 
          

    /**
       @method studentImportExcel
       @param:{properties}
       @description PC端-校园管理-学生管理__excel导入
    */
       studentImportExcel: (params:Api2CodeObject['studentImportExcel']) => POST(url.studentImportExcel, params), 
          

    /**
       @method studentUpdate
       @param:{properties,required}
       @description PC端-校园管理-学生管理__修改学生基础
    */
       studentUpdate: (params:Api2CodeObject['studentUpdate']) => POST(url.studentUpdate, params), 
          

    /**
       @method studentPage
       @param:{properties}
       @description PC端-校园管理-学生管理__分页查询
    */
       studentPage: (params:Api2CodeObject['studentPage']) => GET(url.studentPage, params), 
          

    /**
       @method studentAdd
       @param:{properties,required}
       @description PC端-校园管理-学生管理__新增学生基础
    */
       studentAdd: (params:Api2CodeObject['studentAdd']) => POST(url.studentAdd, params), 
          

    /**
       @method studentList
       @param:{properties}
       @description PC端-校园管理-学生管理__查询所有，不进行分页
    */
       studentList: (params:Api2CodeObject['studentList']) => GET(url.studentList, params), 
          

    /**
       @method studentDelete
       @param:{properties}
       @description PC端-校园管理-学生管理__通过id删除学生基础
    */
       studentDelete: (params:Api2CodeObject['studentDelete']) => GET(url.studentDelete, params), 
          

    /**
       @method studentGuardianUpdate
       @param:{properties,required}
       @description PC端-校园管理-监护人管理__修改学生监护人表
    */
       studentGuardianUpdate: (params:Api2CodeObject['studentGuardianUpdate']) => POST(url.studentGuardianUpdate, params), 
          

    /**
       @method studentGuardianAdd
       @param:{properties,required}
       @description PC端-校园管理-监护人管理__新增学生监护人表
    */
       studentGuardianAdd: (params:Api2CodeObject['studentGuardianAdd']) => POST(url.studentGuardianAdd, params), 
          

    /**
       @method studentGuardianList
       @param:{properties}
       @description PC端-校园管理-监护人管理__查询所有
    */
       studentGuardianList: (params:Api2CodeObject['studentGuardianList']) => GET(url.studentGuardianList, params), 
          

    /**
       @method studentGuardianDelete
       @param:{properties}
       @description PC端-校园管理-监护人管理__通过id删除学生监护人表
    */
       studentGuardianDelete: (params:Api2CodeObject['studentGuardianDelete']) => GET(url.studentGuardianDelete, params), 
          

    /**
       @method teacherImportExcel
       @param:{properties}
       @description PC端-校园管理-教师管理__excel导入
    */
       teacherImportExcel: (params:Api2CodeObject['teacherImportExcel']) => POST(url.teacherImportExcel, params), 
          

    /**
       @method teacherUpdate
       @param:{properties,required}
       @description PC端-校园管理-教师管理__修改教师基础
    */
       teacherUpdate: (params:Api2CodeObject['teacherUpdate']) => POST(url.teacherUpdate, params), 
          

    /**
       @method teacherPage
       @param:{properties}
       @description PC端-校园管理-教师管理__分页查询
    */
       teacherPage: (params:Api2CodeObject['teacherPage']) => GET(url.teacherPage, params), 
          

    /**
       @method teacherAdd
       @param:{properties,required}
       @description PC端-校园管理-教师管理__新增教师基础
    */
       teacherAdd: (params:Api2CodeObject['teacherAdd']) => POST(url.teacherAdd, params), 
          

    /**
       @method teacherList
       @param:{properties}
       @description PC端-校园管理-教师管理__查询所有，不进行分页
    */
       teacherList: (params:Api2CodeObject['teacherList']) => GET(url.teacherList, params), 
          

    /**
       @method teacherListByName
       @param:{properties}
       @description PC端-校园管理-教师管理__根据教师名称模糊查询
    */
       teacherListByName: (params:Api2CodeObject['teacherListByName']) => GET(url.teacherListByName, params), 
          

    /**
       @method teacherDelete
       @param:{properties}
       @description PC端-校园管理-教师管理__通过id删除教师基础
    */
       teacherDelete: (params:Api2CodeObject['teacherDelete']) => GET(url.teacherDelete, params), 
          

    /**
       @method teacherResetPassword
       @param:{properties}
       @description PC端-校园管理-教师管理__重置密码
    */
       teacherResetPassword: (params:Api2CodeObject['teacherResetPassword']) => GET(url.teacherResetPassword, params), 
          

    /**
       @method classCourseUpdate
       @param:{properties,required}
       @description PC端-校园管理-班级课程管理__修改班级课程关联表
    */
       classCourseUpdate: (params:Api2CodeObject['classCourseUpdate']) => POST(url.classCourseUpdate, params), 
          

    /**
       @method monitorGetStudentsPos
       @param:{properties}
       @description pc端-位置管理-实时监控__根据学生id查询实时位置数据
    */
       monitorGetStudentsPos: (params:Api2CodeObject['monitorGetStudentsPos']) => GET(url.monitorGetStudentsPos, params), 
          

    /**
       @method pathUpdate
       @param:{properties,required}
       @description pc端-位置管理-安全围栏__修改围栏基础表
    */
       pathUpdate: (params:Api2CodeObject['pathUpdate']) => POST(url.pathUpdate, params), 
          

    /**
       @method pathPage
       @param:{properties}
       @description pc端-位置管理-安全围栏__分页查询围栏数据
    */
       pathPage: (params:Api2CodeObject['pathPage']) => GET(url.pathPage, params), 
          

    /**
       @method pathAdd
       @param:{properties,required}
       @description pc端-位置管理-安全围栏__新增围栏基础表
    */
       pathAdd: (params:Api2CodeObject['pathAdd']) => POST(url.pathAdd, params), 
          

    /**
       @method pathList
       @param:{properties}
       @description pc端-位置管理-安全围栏__查询所有，不进行分页
    */
       pathList: (params:Api2CodeObject['pathList']) => GET(url.pathList, params), 
          

    /**
       @method pathDelete
       @param:{properties}
       @description pc端-位置管理-安全围栏__通过id删除围栏基础，当删除时，会清空绑定关系
    */
       pathDelete: (params:Api2CodeObject['pathDelete']) => GET(url.pathDelete, params), 
          

    /**
       @method cmdSendMsg
       @param:{properties,required}
       @description pc端-报表服务-指令下发__下发指令
    */
       cmdSendMsg: (params:Api2CodeObject['cmdSendMsg']) => POST(url.cmdSendMsg, params), 
          

    /**
       @method cardPage
       @param:{properties}
       @description 学生证管理__分页查询
    */
       cardPage: (params:Api2CodeObject['cardPage']) => GET(url.cardPage, params), 
          

    /**
       @method cardUpdate
       @param:{properties,required}
       @description 学生证管理__学生证修改
    */
       cardUpdate: (params:Api2CodeObject['cardUpdate']) => POST(url.cardUpdate, params), 
          

    /**
       @method cardImportExcel
       @param:{properties}
       @description 学生证管理__学生证库存导入
    */
       cardImportExcel: (params:Api2CodeObject['cardImportExcel']) => POST(url.cardImportExcel, params), 
          

    /**
       @method cardAdd
       @param:{properties,required}
       @description 学生证管理__学生证新增
    */
       cardAdd: (params:Api2CodeObject['cardAdd']) => POST(url.cardAdd, params), 
          

    /**
       @method cardDelete
       @param:{properties}
       @description 学生证管理__通过id删除组织管理表
    */
       cardDelete: (params:Api2CodeObject['cardDelete']) => GET(url.cardDelete, params), 
          

    /**
       @method cardGetById
       @param:{properties}
       @description 学生证管理__通过id查询组织管理表
    */
       cardGetById: (params:Api2CodeObject['cardGetById']) => GET(url.cardGetById, params), 
          

    /**
       @method loginLogin
       @param:{properties}
       @description 登录管理__登录
    */
       loginLogin: (params:Api2CodeObject['loginLogin']) => POST(url.loginLogin, params), 
          

    /**
       @method loginLogout
       @param:{}
       @description 登录管理__退出
    */
       loginLogout: (params:Api2CodeObject['loginLogout']) => GET(url.loginLogout, params), 
          

    /**
       @method orgAdd
       @param:{properties,required}
       @description 权限管理-组织管理__组织新增
    */
       orgAdd: (params:Api2CodeObject['orgAdd']) => POST(url.orgAdd, params), 
          

    /**
       @method orgTree
       @param:{}
       @description 权限管理-组织管理__组织树形查询
    */
       orgTree: (params:Api2CodeObject['orgTree']) => GET(url.orgTree, params), 
          

    /**
       @method orgUpdate
       @param:{properties,required}
       @description 权限管理-组织管理__组织修改
    */
       orgUpdate: (params:Api2CodeObject['orgUpdate']) => POST(url.orgUpdate, params), 
          

    /**
       @method orgDelete
       @param:{properties}
       @description 权限管理-组织管理__通过id删除组织管理表
    */
       orgDelete: (params:Api2CodeObject['orgDelete']) => GET(url.orgDelete, params), 
          

    /**
       @method orgGetById
       @param:{properties}
       @description 权限管理-组织管理__通过id查询组织管理表
    */
       orgGetById: (params:Api2CodeObject['orgGetById']) => GET(url.orgGetById, params), 
          

    /**
       @method orgPage
       @param:{properties}
       @description 权限管理-组织管理__组织分页查询
    */
       orgPage: (params:Api2CodeObject['orgPage']) => GET(url.orgPage, params), 
          

    /**
       @method userUpdate
       @param:{properties,required}
       @description 权限管理-用户管理__用户修改
    */
       userUpdate: (params:Api2CodeObject['userUpdate']) => POST(url.userUpdate, params), 
          

    /**
       @method userPage
       @param:{properties}
       @description 权限管理-用户管理__用户分页查询
    */
       userPage: (params:Api2CodeObject['userPage']) => GET(url.userPage, params), 
          

    /**
       @method userDelete
       @param:{properties}
       @description 权限管理-用户管理__用户删除
    */
       userDelete: (params:Api2CodeObject['userDelete']) => GET(url.userDelete, params), 
          

    /**
       @method userAdd
       @param:{properties,required}
       @description 权限管理-用户管理__用户新增
    */
       userAdd: (params:Api2CodeObject['userAdd']) => POST(url.userAdd, params), 
          

    /**
       @method userTree
       @param:{}
       @description 权限管理-用户管理__用户树形查询
    */
       userTree: (params:Api2CodeObject['userTree']) => GET(url.userTree, params), 
          

    /**
       @method userGetById
       @param:{properties}
       @description 权限管理-用户管理__通过id查询用户管理表
    */
       userGetById: (params:Api2CodeObject['userGetById']) => GET(url.userGetById, params), 
          

    /**
       @method roleUpdate
       @param:{properties,required}
       @description 权限管理-角色管理__修改角色管理表
    */
       roleUpdate: (params:Api2CodeObject['roleUpdate']) => POST(url.roleUpdate, params), 
          

    /**
       @method rolePage
       @param:{properties}
       @description 权限管理-角色管理__分页查询
    */
       rolePage: (params:Api2CodeObject['rolePage']) => GET(url.rolePage, params), 
          

    /**
       @method roleAdd
       @param:{properties,required}
       @description 权限管理-角色管理__新增角色管理表
    */
       roleAdd: (params:Api2CodeObject['roleAdd']) => POST(url.roleAdd, params), 
          

    /**
       @method roleDelete
       @param:{properties}
       @description 权限管理-角色管理__通过id删除角色管理表
    */
       roleDelete: (params:Api2CodeObject['roleDelete']) => GET(url.roleDelete, params), 
          

    /**
       @method roleGetById
       @param:{properties}
       @description 权限管理-角色管理__通过id查询角色管理表
    */
       roleGetById: (params:Api2CodeObject['roleGetById']) => GET(url.roleGetById, params), 
          

    /**
       @method confListAdminRegion
       @param:{}
       @description PC端-初始化配置加载接口__查询省市区
    */
       confListAdminRegion: (params:Api2CodeObject['confListAdminRegion']) => GET(url.confListAdminRegion, params), 
          
};
        