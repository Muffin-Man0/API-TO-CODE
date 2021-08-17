export interface Api2CodeObject {
    cardAdd?:                  CardAdd;
    cardDelete?:               CardDelete;
    cardGetById?:              CardGetByID;
    cardImportExcel?:          CardImportExcel;
    cardPage?:                 CardPage;
    cardUpdate?:               CardUpdate;
    classAdd?:                 ClassAdd;
    classCourseUpdate?:        ClassCourseUpdate;
    classDelete?:              ClassDelete;
    classImportExcel?:         ClassImportExcel;
    classList?:                ClassList;
    classPage?:                ClassPage;
    classRefreshStudentNum?:   any;
    classUpdate?:              ClassUpdate;
    cmdSendMsg?:               CmdSendMsg;
    confListAdminRegion?:      any;
    courseDelete?:             CourseDelete;
    courseList?:               CourseList;
    coursePage?:               CoursePage;
    gradeListGradeBySchoolId?: GradeListGradeBySchoolID;
    loginLogin?:               { [key: string]: any };
    loginLogout?:              any;
    loginpageGetLoginConf?:    any;
    loginpageRollBackDefault?: any;
    loginpageUpdate?:          LoginpageUpdate;
    monitorGetStudentsPos?:    MonitorGetStudentsPos;
    orgAdd?:                   OrgAdd;
    orgDelete?:                OrgDelete;
    orgGetById?:               OrgGetByID;
    orgPage?:                  OrgPage;
    orgTree?:                  any;
    orgUpdate?:                OrgUpdate;
    pathAdd?:                  PathAdd;
    pathDelete?:               PathDelete;
    pathList?:                 PathList;
    pathPage?:                 PathPage;
    pathUpdate?:               PathUpdate;
    roleAdd?:                  RoleAdd;
    roleDelete?:               RoleDelete;
    roleGetById?:              RoleGetByID;
    rolePage?:                 RolePage;
    roleUpdate?:               RoleUpdate;
    schoolAdd?:                SchoolAdd;
    schoolDelete?:             SchoolDelete;
    schoolList?:               SchoolList;
    schoolPage?:               SchoolPage;
    schoolUpdate?:             SchoolUpdate;
    studentAdd?:               StudentAdd;
    studentDelete?:            StudentDelete;
    studentGuardianAdd?:       StudentGuardianAdd;
    studentGuardianDelete?:    StudentGuardianDelete;
    studentGuardianList?:      StudentGuardianList;
    studentGuardianUpdate?:    StudentGuardianUpdate;
    studentImportExcel?:       StudentImportExcel;
    studentList?:              StudentList;
    studentPage?:              StudentPage;
    studentUpdate?:            StudentUpdate;
    teacherAdd?:               TeacherAdd;
    teacherDelete?:            TeacherDelete;
    teacherImportExcel?:       TeacherImportExcel;
    teacherList?:              TeacherList;
    teacherListByName?:        TeacherListByName;
    teacherPage?:              TeacherPage;
    teacherResetPassword?:     TeacherResetPassword;
    teacherUpdate?:            TeacherUpdate;
    userAdd?:                  UserAdd;
    userDelete?:               UserDelete;
    userGetById?:              UserGetByID;
    userPage?:                 UserPage;
    userTree?:                 any;
    userUpdate?:               UserUpdate;
}

export interface CardAdd {
    /**
     * 学校证ID
     */
    cardId?: number;
    /**
     * 设备型号
     */
    deviceType: string;
    /**
     * 设备IMEI
     */
    imei: string;
    /**
     * 组织ID
     */
    orgId?: number;
    /**
     * 设备RFID
     */
    rfid: string;
}

export interface CardDelete {
    cardId: string;
}

export interface CardGetByID {
    cardId: string;
}

export interface CardImportExcel {
    importFile: string;
    orgId:      string;
}

export interface CardPage {
    keyword:    string;
    orgId:      string;
    pageNumber: string;
    pageSize:   string;
}

export interface CardUpdate {
    /**
     * 学校证ID
     */
    cardId?: number;
    /**
     * 设备型号
     */
    deviceType: string;
    /**
     * 设备IMEI
     */
    imei: string;
    /**
     * 组织ID
     */
    orgId?: number;
    /**
     * 设备RFID
     */
    rfid: string;
}

export interface ClassAdd {
    /**
     * 班级名称
     */
    className?: string;
    /**
     * 年级ID
     */
    gradeId?: number;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学校ID
     */
    schoolId?: number;
    /**
     * 班主任id
     */
    teacherId?: number;
}

export interface ClassCourseUpdate {
    /**
     * 班级ID
     */
    classId?: number;
    /**
     * 图片地址
     */
    courseImgUrl?: string;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 备注
     */
    remark?: string;
}

export interface ClassDelete {
    classId: string;
}

export interface ClassImportExcel {
    gradeId:    string;
    importFile: string;
}

export interface ClassList {
    classId:    string;
    className:  string;
    gradeId:    string;
    log:        string;
    remark:     string;
    schoolId:   string;
    studentNum: string;
}

export interface ClassPage {
    classId:    string;
    className:  string;
    gradeId:    string;
    log:        string;
    pageNo:     string;
    pageSize:   string;
    remark:     string;
    schoolId:   string;
    studentNum: string;
}

export interface ClassUpdate {
    /**
     * 班级id
     */
    classId?: string;
    /**
     * 班级名称
     */
    className?: string;
    /**
     * 年级ID
     */
    gradeId?: number;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学校ID
     */
    schoolId?: number;
    /**
     * 班主任id
     */
    teacherId?: number;
}

export interface CmdSendMsg {
    /**
     * 学生证id
     */
    cardId: number;
    /**
     * 下发参数
     */
    commandMsg?: string;
    /**
     *
     * 下发指令下发类型id(1亲情号码设置，2SOS号码设置，3开机提醒，4关机提醒，5低电量提醒，6通话白名单，7设置位置数据上报频率，8设置平台域名端口，9恢复出厂设置，10设置心跳频率，11通话情景模式，12安全方式功能（监听），13上课免打扰模式，14短信情景模式，15定位模式，16待机模式，17设置闹钟，18设置通话时长，19WIFI地址下发，20自定义指令)
     */
    commandType: string;
}

export interface CourseDelete {
    courseId: string;
}

export interface CourseList {
    courseId:   string;
    courseName: string;
    log:        string;
    remark:     string;
    schoolId:   string;
    type:       string;
}

export interface CoursePage {
    courseId:   string;
    courseName: string;
    log:        string;
    pageNo:     string;
    pageSize:   string;
    remark:     string;
    schoolId:   string;
    type:       string;
}

export interface GradeListGradeBySchoolID {
    schoolId: string;
}

export interface LoginpageUpdate {
    /**
     * 背景图片
     */
    backgroundUrl?: string;
    /**
     * 标题icon
     */
    iconUrl?: string;
    id:       number;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 平台名称
     */
    platformName?: string;
    /**
     * 租户id
     */
    tenantId?: number;
}

export interface MonitorGetStudentsPos {
    studentIds: string;
}

export interface OrgAdd {
    /**
     * 城市
     */
    city?: string;
    /**
     * 区县
     */
    district?: string;
    /**
     * 组织ID
     */
    orgId?: number;
    /**
     * 组织名称
     */
    orgName: string;
    /**
     * 父机构ID
     */
    orgPid: number;
    /**
     * 上级组织名称
     */
    parentName?: string;
    /**
     * 省份
     */
    province: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 排序
     */
    sortNum?: number;
}

export interface OrgDelete {
    orgId: string;
}

export interface OrgGetByID {
    orgId: string;
}

export interface OrgPage {
    keyword:    string;
    orgId:      string;
    pageNumber: string;
    pageSize:   string;
}

export interface OrgUpdate {
    /**
     * 城市
     */
    city?: string;
    /**
     * 区县
     */
    district?: string;
    /**
     * 组织ID
     */
    orgId?: number;
    /**
     * 组织名称
     */
    orgName: string;
    /**
     * 父机构ID
     */
    orgPid: number;
    /**
     * 上级组织名称
     */
    parentName?: string;
    /**
     * 省份
     */
    province: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 排序
     */
    sortNum?: number;
}

export interface PathAdd {
    /**
     * 围栏提醒类型（1进区域提醒、2出区域提醒）
     */
    alarmType: number;
    /**
     * 创建人类型（1家长、2代理商，3老师）
     */
    crundefinedType: number;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 围栏名称
     */
    pathName: string;
    /**
     * 点位列表 ,PathPonumberVO
     */
    ponumberList?: PathAddPonumberList[];
    /**
     * 围栏备注
     */
    remark?: string;
    /**
     * 围栏排序
     */
    sort?: number;
    /**
     * 围栏绘图类型（1圆形、2多边形）
     */
    type: number;
    /**
     * 围栏功能类型（1报警、2考勤）
     */
    useType: number;
}

/**
 * 点位列表 ,PathPonumberVO
 */
export interface PathAddPonumberList {
    /**
     * 围栏纬度（WGS84坐标系）
     */
    lat: number;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 围栏经度（WGS84坐标系）
     */
    lon: number;
}

export interface PathDelete {
    pathId: string;
}

export interface PathList {
    alarmType:       string;
    crundefinedType: string;
    pathName:        string;
    remark:          string;
    sort:            string;
    type:            string;
    useType:         string;
}

export interface PathPage {
    alarmType:       string;
    crundefinedType: string;
    pageNo:          string;
    pageSize:        string;
    pathName:        string;
    remark:          string;
    sort:            string;
    type:            string;
    useType:         string;
}

export interface PathUpdate {
    /**
     * 围栏提醒类型（1进区域提醒、2出区域提醒）
     */
    alarmType: number;
    /**
     * 创建人类型（1家长、2代理商，3老师）
     */
    crundefinedType: number;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 围栏ID
     */
    pathId: number;
    /**
     * 围栏名称
     */
    pathName: string;
    /**
     * 点位列表 ,PathPonumberVO
     */
    ponumberList?: PathUpdatePonumberList[];
    /**
     * 围栏备注
     */
    remark?: string;
    /**
     * 围栏排序
     */
    sort?: number;
    /**
     * 围栏绘图类型（1圆形、2多边形）
     */
    type: number;
    /**
     * 围栏功能类型（1报警、2考勤）
     */
    useType: number;
}

/**
 * 点位列表 ,PathPonumberVO
 */
export interface PathUpdatePonumberList {
    /**
     * 围栏纬度（WGS84坐标系）
     */
    lat: number;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 围栏经度（WGS84坐标系）
     */
    lon: number;
}

export interface RoleAdd {
    /**
     * 资源id集合 ,number
     */
    resourceIdList: number[];
    /**
     * 角色描述
     */
    roleDesc?: string;
    /**
     * 角色ID
     */
    roleId?: number;
    /**
     * 角色名称
     */
    roleName: string;
}

export interface RoleDelete {
    roleId: string;
}

export interface RoleGetByID {
    roleId: string;
}

export interface RolePage {
    keyword:    string;
    orgId:      string;
    pageNumber: string;
    pageSize:   string;
}

export interface RoleUpdate {
    /**
     * 资源id集合 ,number
     */
    resourceIdList: number[];
    /**
     * 角色描述
     */
    roleDesc?: string;
    /**
     * 角色ID
     */
    roleId?: number;
    /**
     * 角色名称
     */
    roleName: string;
}

export interface SchoolAdd {
    /**
     * 城市
     */
    city: string;
    /**
     * 区县
     */
    county: string;
    /**
     * 学校类型教育阶段（1小学、2初中、3高中、4六年一贯制、5九年一贯制、6十二年一贯制、7其他）
     */
    educationStage: number;
    /**
     * 负责人名称
     */
    headName: string;
    /**
     * 负责人电话
     */
    headPhone: string;
    /**
     * 组织id
     */
    orgId: number;
    /**
     * 省份
     */
    provinces: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学校地址
     */
    schoolAddress: string;
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 办学性质1民办2公办
     */
    schoolType: number;
}

export interface SchoolDelete {
    schoolId: string;
}

export interface SchoolList {
    city:           string;
    county:         string;
    educationStage: string;
    headName:       string;
    headPhone:      string;
    log:            string;
    orgId:          string;
    provinces:      string;
    remark:         string;
    schoolId:       string;
    schoolName:     string;
    schoolType:     string;
}

export interface SchoolPage {
    city:           string;
    county:         string;
    educationStage: string;
    headName:       string;
    headPhone:      string;
    log:            string;
    orgId:          string;
    pageNo:         string;
    pageSize:       string;
    provinces:      string;
    remark:         string;
    schoolId:       string;
    schoolName:     string;
    schoolType:     string;
}

export interface SchoolUpdate {
    /**
     * 城市
     */
    city: string;
    /**
     * 区县
     */
    county: string;
    /**
     * 教育阶段（1小学、2初中、3高中、4六年一贯制、5九年一贯制、6十二年一贯制、7其他）
     */
    educationStage: number;
    /**
     * 负责人名称
     */
    headName: string;
    /**
     * 负责人电话
     */
    headPhone: string;
    /**
     * 组织id
     */
    orgId: number;
    /**
     * 省份
     */
    provinces: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学校地址
     */
    schoolAddress: string;
    /**
     * 学校ID
     */
    schoolId: number;
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 办学性质1民办2公办
     */
    schoolType: number;
}

export interface StudentAdd {
    /**
     * 班级ID
     */
    classId: number;
    /**
     * 绑定设备类型（1电子学生证、2普通IC卡）
     */
    deviceType: number;
    /**
     * 学校年级ID
     */
    gradeId: number;
    /**
     * 设备IMEI卡号（电子学生证才有）
     */
    imei: string;
    /**
     * RFID
     */
    rfid: string;
    /**
     * 学校ID
     */
    schoolId: number;
    /**
     * 学生性别0女，1男
     */
    sex: number;
    /**
     * 学生姓名
     */
    studentName: string;
}

export interface StudentDelete {
    studentId: string;
}

export interface StudentGuardianAdd {
    /**
     * 监护人姓名
     */
    guardianName: string;
    /**
     * 监护人联系电话
     */
    guardianPhone: string;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 监护人关系（父亲、母亲、自定义填写）
     */
    relation: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学生ID
     */
    studentId: number;
}

export interface StudentGuardianDelete {
    guardianId: string;
    studentId:  string;
}

export interface StudentGuardianList {
    studentId: string;
}

export interface StudentGuardianUpdate {
    /**
     * 学生监护人ID
     */
    guardianId: number;
    /**
     * 监护人姓名
     */
    guardianName: string;
    /**
     * 监护人联系电话
     */
    guardianPhone: string;
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 监护人关系（父亲、母亲、自定义填写）
     */
    relation: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学生ID
     */
    studentId: number;
}

export interface StudentImportExcel {
    classId:    string;
    importFile: string;
}

export interface StudentList {
    classId:     string;
    deviceType:  string;
    gradeId:     string;
    imei:        string;
    log:         string;
    phone:       string;
    remark:      string;
    rfid:        string;
    schoolId:    string;
    sex:         string;
    studentName: string;
    studentNo:   string;
}

export interface StudentPage {
    classId:     string;
    deviceType:  string;
    gradeId:     string;
    imei:        string;
    log:         string;
    pageNo:      string;
    pageSize:    string;
    phone:       string;
    remark:      string;
    rfid:        string;
    schoolId:    string;
    sex:         string;
    studentName: string;
    studentNo:   string;
}

export interface StudentUpdate {
    /**
     * 班级ID
     */
    classId: number;
    /**
     * 绑定设备类型（1电子学生证、2普通IC卡）
     */
    deviceType: number;
    /**
     * 学校年级ID
     */
    gradeId: number;
    /**
     * 设备IMEI卡号（电子学生证才有）
     */
    imei: string;
    /**
     * 学生手机号
     */
    phone?: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * RFID
     */
    rfid: string;
    /**
     * 学校ID
     */
    schoolId: number;
    /**
     * 学生性别0女，1男
     */
    sex: number;
    /**
     * 学生ID
     */
    studentId: number;
    /**
     * 学生姓名
     */
    studentName: string;
    /**
     * 学号
     */
    studentNo?: string;
}

export interface TeacherAdd {
    /**
     * 班主任代理班级ID ,number
     */
    chargeClassIds?: number[];
    /**
     * 授课班级ID ,number
     */
    classIds: number[];
    /**
     * 教授科目ID ,number
     */
    courseIds: number[];
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 联系电话
     */
    phone: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学校ID
     */
    schoolId: number;
    /**
     * 教师性别
     */
    sex: number;
    /**
     * 教师名称
     */
    teacherName: string;
    /**
     * 教师类型（1,普通教师，2班主任）
     */
    type: number;
}

export interface TeacherDelete {
    teacherId: string;
}

export interface TeacherImportExcel {
    importFile: string;
    schoolId:   string;
}

export interface TeacherList {
    chargeClassId: string;
    log:           string;
    phone:         string;
    remark:        string;
    schoolId:      string;
    sex:           string;
    teacherId:     string;
    teacherName:   string;
    type:          string;
}

export interface TeacherListByName {
    schoolId:    string;
    teacherName: string;
}

export interface TeacherPage {
    chargeClassId: string;
    log:           string;
    pageNo:        string;
    pageSize:      string;
    phone:         string;
    remark:        string;
    schoolId:      string;
    sex:           string;
    teacherId:     string;
    teacherName:   string;
    type:          string;
}

export interface TeacherResetPassword {
    teacherId: string;
}

export interface TeacherUpdate {
    /**
     * 班主任代理班级ID ,number
     */
    chargeClassIds?: number[];
    /**
     * 授课班级ID ,number
     */
    classIds: number[];
    /**
     * 教授科目ID ,number
     */
    courseIds: number[];
    /**
     * Log
     */
    log?: { [key: string]: any };
    /**
     * 联系电话
     */
    phone: string;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 学校ID
     */
    schoolId: number;
    /**
     * 教师性别
     */
    sex: number;
    /**
     * 教师ID
     */
    teacherId: number;
    /**
     * 教师名称
     */
    teacherName: string;
    /**
     * 教师类型（1,普通教师，2班主任）
     */
    type: number;
}

export interface UserAdd {
    /**
     * 账号名称
     */
    loginName: string;
    /**
     * 组织ID
     */
    orgId: number;
    /**
     * 密码
     */
    password: string;
    /**
     * 角色ID
     */
    roleId: number;
    /**
     * 用户名
     */
    username: string;
}

export interface UserDelete {
    userId: string;
}

export interface UserGetByID {
    userId: string;
}

export interface UserPage {
    keyword:    string;
    loginName:  string;
    orgId:      string;
    pageNumber: string;
    pageSize:   string;
    username:   string;
}

export interface UserUpdate {
    /**
     * 账号名称
     */
    loginName: string;
    /**
     * 角色ID
     */
    roleId: number;
    /**
     * 用户ID
     */
    userId: number;
    /**
     * 用户名
     */
    username: string;
}
