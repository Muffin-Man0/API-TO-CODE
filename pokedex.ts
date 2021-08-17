export interface Pokedex {
    swagger:  string;
    info:     Info;
    basePath: string;
    tags:     Tag[];
    schemes:  string[];
    paths:    Paths;
}

export interface Info {
    title:   string;
    version: string;
}

export interface Paths {
    "/api/v1/class/importExcel.json":    APIV1ImportExcelJSON;
    "/api/v1/class/update":              APIV1Class;
    "/api/v1/class/page":                APIV1ClassPage;
    "/api/v1/class/refreshStudentNum":   APIStudentGuardianDeleteClass;
    "/api/v1/class/add":                 APIV1Class;
    "/api/v1/class/list":                APIV1ClassList;
    "/api/v1/class/delete":              APIStudentGuardianDeleteClass;
    "/api/v1/course/page":               APIV1CoursePage;
    "/api/v1/course/list":               APIV1CourseList;
    "/api/v1/course/delete":             APIStudentGuardianDeleteClass;
    "/api/v1/grade/listGradeBySchoolId": APIV1GradeListGradeBySchoolID;
    "/api/v1/school/update":             APIV1School;
    "/api/v1/school/page":               APIV1SchoolPage;
    "/api/v1/school/add":                APIV1School;
    "/api/v1/school/list":               APIV1SchoolList;
    "/api/v1/school/delete":             APIStudentGuardianDeleteClass;
    "/api/v1/loginpage/update":          APIV1LoginpageUpdate;
    "/api/v1/loginpage/rollBackDefault": APIStudentGuardianAddClass;
    "/api/v1/loginpage/getLoginConf":    APIV1LoginpageGetLoginConf;
    "/api/v1/student/importExcel.json":  APIV1ImportExcelJSON;
    "/api/v1/student/update":            APIV1StudentUpdate;
    "/api/v1/student/page":              APIV1StudentPage;
    "/api/v1/student/add":               APIV1StudentAdd;
    "/api/v1/student/list":              APIV1StudentList;
    "/api/v1/student/delete":            APIStudentGuardianDeleteClass;
    "/api/studentGuardian/update":       APIStudentGuardianAddClass;
    "/api/studentGuardian/add":          APIStudentGuardianAddClass;
    "/api/studentGuardian/list":         APIStudentGuardianList;
    "/api/studentGuardian/delete":       APIStudentGuardianDeleteClass;
    "/api/v1/teacher/importExcel.json":  APIV1ImportExcelJSON;
    "/api/v1/teacher/update":            APIV1Teacher;
    "/api/v1/teacher/page":              APIV1TeacherPage;
    "/api/v1/teacher/add":               APIV1Teacher;
    "/api/v1/teacher/list":              APIV1TeacherList;
    "/api/v1/teacher/listByName":        APIV1TeacherList;
    "/api/v1/teacher/delete":            APIStudentGuardianDeleteClass;
    "/api/v1/teacher/resetPassword":     APIStudentGuardianDeleteClass;
    "/api/v1/classCourse/update":        APIV1ClassCourseUpdate;
    "/api/v1/monitor/getStudentsPos":    APIV1MonitorGetStudentsPos;
    "/api/v1/path/update":               APIV1Path;
    "/api/v1/path/page":                 APIV1PathPage;
    "/api/v1/path/add":                  APIV1Path;
    "/api/v1/path/list":                 APIV1PathList;
    "/api/v1/path/delete":               APIStudentGuardianDeleteClass;
    "/v1/api/cmd/sendMsg":               V1APICmdSendMsg;
    "/v1/api/card/page":                 V1APICardPage;
    "/v1/api/card/update":               V1APICard;
    "/v1/api/card/importExcel.json":     V1APICardImportExcelJSON;
    "/v1/api/card/add":                  V1APICard;
    "/v1/api/card/delete":               V1API;
    "/v1/api/card/getById":              V1APICardGetByID;
    "/v1/api/login/login":               V1APILoginLogin;
    "/v1/api/login/logout":              V1API;
    "/v1/api/org/add":                   V1APIOrg;
    "/v1/api/org/tree":                  V1APIOrgTree;
    "/v1/api/org/update":                V1APIOrg;
    "/v1/api/org/delete":                V1API;
    "/v1/api/org/getById":               V1APIOrgGetByID;
    "/v1/api/org/page":                  V1APIOrgPage;
    "/v1/api/user/update":               V1APIUserUpdate;
    "/v1/api/user/page":                 V1APIUserPage;
    "/v1/api/user/delete":               V1API;
    "/v1/api/user/add":                  V1APIUserAdd;
    "/v1/api/user/tree":                 V1APIUserTree;
    "/v1/api/user/getById":              V1APIUserGetByID;
    "/v1/api/role/update":               V1APIRole;
    "/v1/api/role/page":                 V1APIRolePage;
    "/v1/api/role/add":                  V1APIRole;
    "/v1/api/role/delete":               V1API;
    "/v1/api/role/getById":              V1APIRoleGetByID;
    "/api/v1/conf/listAdminRegion":      APIV1ConfListAdminRegion;
}

export interface APIStudentGuardianAddClass {
    post: APIStudentGuardianAddPost;
}

export interface APIStudentGuardianAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: PurpleParameter[];
    responses:  PurpleResponses;
}

export enum Consume {
    ApplicationJSON = "application/json",
}

export interface PurpleParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      PurpleSchema;
}

export enum In {
    Body = "body",
    FormData = "formData",
    Query = "query",
}

export interface PurpleSchema {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  PurpleProperties;
}

export interface PurpleProperties {
    guardianName:  GuardianID;
    guardianPhone: GuardianID;
    relation:      GuardianID;
    studentId:     GuardianID;
    remark:        GuardianID;
    log:           Log;
    guardianId?:   GuardianID;
}

export interface GuardianID {
    type:        GuardianIDType;
    description: string;
    mock:        MockClass;
}

export interface MockClass {
    mock: MockEnum;
}

export enum MockEnum {
    Boolean = "@boolean",
    Float = "@float",
    Integer = "@integer",
    String = "@string",
    Timestamp = "@timestamp",
}

export enum GuardianIDType {
    Boolean = "Boolean",
    Date = "Date",
    Double = "double",
    Float = "Float",
    Int = "int",
    Integer = "Integer",
    LocalDateTime = "LocalDateTime",
    Long = "Long",
    String = "String",
    TypeDouble = "Double",
    TypeLong = "long",
}

export interface Log {
    type:        LogType;
    description: LogDescription;
    properties:  PropertiesClass;
    required:    any[];
}

export enum LogDescription {
    Log = "Log",
}

export interface PropertiesClass {
}

export enum LogType {
    Object = "object",
}

export interface PurpleResponses {
    "200": Purple200;
}

export interface Purple200 {
    description: The200_Description;
    schema:      FluffySchema;
}

export enum The200_Description {
    SuccessfulOperation = "successful operation",
}

export interface FluffySchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  FluffyProperties;
}

export enum SchemaDescription {
    COMBsjStudentcardCoreUtilTestRetObj = "com.bsj.studentcard.core.util.TestRetObj",
}

export interface FluffyProperties {
    flag: GuardianID;
    msg:  GuardianID;
}

export enum Required {
    Flag = "flag",
    Msg = "msg",
    Obj = "obj",
}

export enum Title {
    TestRetObj = "TestRetObj",
}

export interface APIStudentGuardianDeleteClass {
    get: APIStudentGuardianDeleteGet;
}

export interface APIStudentGuardianDeleteGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  PurpleResponses;
}

export interface GetParameter {
    name:        string;
    in:          In;
    required?:   boolean;
    description: string;
    type?:       ParameterType;
    schema?:     TentacledSchema;
}

export interface TentacledSchema {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  TentacledProperties;
}

export interface TentacledProperties {
    commandType: GuardianID;
    commandMsg:  GuardianID;
    cardId:      GuardianID;
}

export enum ParameterType {
    String = "string",
}

export interface APIStudentGuardianList {
    get: APIStudentGuardianListGet;
}

export interface APIStudentGuardianListGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  FluffyResponses;
}

export interface FluffyResponses {
    "200": Fluffy200;
}

export interface Fluffy200 {
    description: The200_Description;
    schema:      StickySchema;
}

export interface StickySchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  StickyProperties;
}

export interface StickyProperties {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  PurpleObj;
}

export interface PurpleObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       PurpleItems;
}

export interface PurpleItems {
    type:       LogType;
    properties: IndigoProperties;
    required:   string[];
}

export interface IndigoProperties {
    guardianId:    GuardianID;
    guardianName:  GuardianID;
    guardianPhone: GuardianID;
    relation:      GuardianID;
    studentId:     GuardianID;
    remark:        GuardianID;
    createTime:    GuardianID;
    updateTime:    GuardianID;
    log:           Log;
}

export enum DataType {
    Array = "array",
}

export interface APIV1Class {
    post: APIV1ClassAddPost;
}

export interface APIV1ClassAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: FluffyParameter[];
    responses:  PurpleResponses;
}

export interface FluffyParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      IndigoSchema;
}

export interface IndigoSchema {
    type:        LogType;
    required:    any[];
    title:       string;
    description: string;
    properties:  IndecentProperties;
}

export interface IndecentProperties {
    className: GuardianID;
    gradeId:   GuardianID;
    schoolId:  GuardianID;
    teacherId: GuardianID;
    remark:    GuardianID;
    log:       Log;
    classId?:  GuardianID;
}

export interface APIV1ImportExcelJSON {
    post: APIStudentGuardianDeleteGet;
}

export interface APIV1ClassList {
    get: APIV1ClassListGet;
}

export interface APIV1ClassListGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  TentacledResponses;
}

export interface TentacledResponses {
    "200": Tentacled200;
}

export interface Tentacled200 {
    description: The200_Description;
    schema:      IndecentSchema;
}

export interface IndecentSchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  HilariousProperties;
}

export interface HilariousProperties {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  FluffyObj;
}

export interface FluffyObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       FluffyItems;
}

export interface FluffyItems {
    type:         LogType;
    properties:   AmbitiousProperties;
    required:     string[];
    description?: string;
}

export interface AmbitiousProperties {
    classId:    GuardianID;
    className:  GuardianID;
    gradeId:    GuardianID;
    schoolId:   GuardianID;
    studentNum: GuardianID;
    remark:     GuardianID;
    createTime: GuardianID;
    updateTime: GuardianID;
    log:        Log;
}

export interface APIV1ClassPage {
    get: APIV1ClassPageGet;
}

export interface APIV1ClassPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  StickyResponses;
}

export interface StickyResponses {
    "200": Sticky200;
}

export interface Sticky200 {
    description: The200_Description;
    schema:      HilariousSchema;
}

export interface HilariousSchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  CunningProperties;
}

export interface CunningProperties {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  TentacledObj;
}

export interface TentacledObj {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  MagentaProperties;
}

export interface MagentaProperties {
    data:     PurpleData;
    pageSize: GuardianID;
    pageNo:   GuardianID;
    total:    GuardianID;
    pages:    GuardianID;
}

export interface PurpleData {
    type:        DataType;
    description: string;
    items:       FluffyItems;
}

export interface APIV1ClassCourseUpdate {
    post: APIV1ClassCourseUpdatePost;
}

export interface APIV1ClassCourseUpdatePost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: TentacledParameter[];
    responses:  PurpleResponses;
}

export interface TentacledParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      AmbitiousSchema;
}

export interface AmbitiousSchema {
    type:        LogType;
    required:    any[];
    title:       string;
    description: string;
    properties:  FriskyProperties;
}

export interface FriskyProperties {
    classId:      GuardianID;
    courseImgUrl: GuardianID;
    remark:       GuardianID;
    log:          Log;
}

export interface APIV1ConfListAdminRegion {
    get: APIV1ConfListAdminRegionGet;
}

export interface APIV1ConfListAdminRegionGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: any[];
    responses:  IndigoResponses;
}

export interface IndigoResponses {
    "200": Indigo200;
}

export interface Indigo200 {
    description: The200_Description;
    schema:      CunningSchema;
}

export interface CunningSchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  MischievousProperties;
}

export interface MischievousProperties {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  StickyObj;
}

export interface StickyObj {
    type:        LogType;
    required:    any[];
    title:       string;
    description: string;
    properties:  BraggadociousProperties;
}

export interface BraggadociousProperties {
    list: PurpleList;
}

export interface Properties2 {
    id:           GuardianID;
    code:         GuardianID;
    name:         GuardianID;
    provinceCode: GuardianID;
    list:         PurpleList;
}

export interface StickyItems {
    type:        LogType;
    description: string;
    properties:  Properties2;
    required:    any[];
}

export interface FluffyList {
    type:        DataType;
    description: string;
    items:       StickyItems;
}

export interface Properties1 {
    id:        GuardianID;
    code:      GuardianID;
    name:      GuardianID;
    list?:     FluffyList;
    cityCode?: GuardianID;
}

export interface TentacledItems {
    type:        LogType;
    description: string;
    properties:  Properties1;
    required:    any[];
}

export interface PurpleList {
    type:        DataType;
    description: string;
    items:       TentacledItems;
}

export interface APIV1CourseList {
    get: APIV1CourseListGet;
}

export interface APIV1CourseListGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  IndecentResponses;
}

export interface IndecentResponses {
    "200": Indecent200;
}

export interface Indecent200 {
    description: The200_Description;
    schema:      MagentaSchema;
}

export interface MagentaSchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties3;
}

export interface Properties3 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  IndigoObj;
}

export interface IndigoObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       IndigoItems;
}

export interface IndigoItems {
    type:         LogType;
    properties:   Properties4;
    required:     string[];
    description?: string;
}

export interface Properties4 {
    courseId:   GuardianID;
    courseName: GuardianID;
    type:       GuardianID;
    remark:     GuardianID;
    schoolId:   GuardianID;
    createTime: GuardianID;
    updateTime: GuardianID;
    log:        Log;
}

export interface APIV1CoursePage {
    get: APIV1CoursePageGet;
}

export interface APIV1CoursePageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  HilariousResponses;
}

export interface HilariousResponses {
    "200": Hilarious200;
}

export interface Hilarious200 {
    description: The200_Description;
    schema:      FriskySchema;
}

export interface FriskySchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties5;
}

export interface Properties5 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  IndecentObj;
}

export interface IndecentObj {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties6;
}

export interface Properties6 {
    data:     FluffyData;
    pageSize: GuardianID;
    pageNo:   GuardianID;
    total:    GuardianID;
    pages:    GuardianID;
}

export interface FluffyData {
    type:        DataType;
    description: string;
    items:       IndigoItems;
}

export interface APIV1GradeListGradeBySchoolID {
    get: APIV1GradeListGradeBySchoolIDGet;
}

export interface APIV1GradeListGradeBySchoolIDGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  AmbitiousResponses;
}

export interface AmbitiousResponses {
    "200": Ambitious200;
}

export interface Ambitious200 {
    description: The200_Description;
    schema:      MischievousSchema;
}

export interface MischievousSchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties7;
}

export interface Properties7 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  HilariousObj;
}

export interface HilariousObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       IndecentItems;
}

export interface IndecentItems {
    type:       LogType;
    properties: Properties8;
    required:   string[];
}

export interface Properties8 {
    gradeId:    GuardianID;
    gradeName:  GuardianID;
    remark:     GuardianID;
    createTime: GuardianID;
    updateTime: GuardianID;
    log:        Log;
}

export interface APIV1LoginpageGetLoginConf {
    post: APIV1LoginpageGetLoginConfPost;
}

export interface APIV1LoginpageGetLoginConfPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: any[];
    responses:  CunningResponses;
}

export interface CunningResponses {
    "200": Cunning200;
}

export interface Cunning200 {
    description: The200_Description;
    schema:      BraggadociousSchema;
}

export interface BraggadociousSchema {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties9;
}

export interface Properties9 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  ObjClass;
}

export interface ObjClass {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties10;
}

export interface Properties10 {
    id:            ID;
    tenantId:      GuardianID;
    platformName:  GuardianID;
    iconUrl:       GuardianID;
    backgroundUrl: GuardianID;
    log:           Log;
}

export interface ID {
    type: GuardianIDType;
    mock: MockClass;
}

export interface APIV1LoginpageUpdate {
    post: APIV1LoginpageUpdatePost;
}

export interface APIV1LoginpageUpdatePost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: StickyParameter[];
    responses:  PurpleResponses;
}

export interface StickyParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      ObjClass;
}

export interface APIV1MonitorGetStudentsPos {
    get: APIV1MonitorGetStudentsPosGet;
}

export interface APIV1MonitorGetStudentsPosGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  MagentaResponses;
}

export interface MagentaResponses {
    "200": Magenta200;
}

export interface Magenta200 {
    description: The200_Description;
    schema:      Schema1;
}

export interface Schema1 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties11;
}

export interface Properties11 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  AmbitiousObj;
}

export interface AmbitiousObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       HilariousItems;
}

export interface HilariousItems {
    type:       LogType;
    properties: { [key: string]: GuardianID };
    required:   any[];
}

export interface APIV1Path {
    post: APIV1PathAddPost;
}

export interface APIV1PathAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: IndigoParameter[];
    responses:  PurpleResponses;
}

export interface IndigoParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema2;
}

export interface Schema2 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties12;
}

export interface Properties12 {
    pathName:   GuardianID;
    remark:     GuardianID;
    type:       GuardianID;
    useType:    GuardianID;
    alarmType:  GuardianID;
    sort:       GuardianID;
    createType: GuardianID;
    pointList:  PurplePointList;
    log:        Log;
    pathId?:    GuardianID;
}

export interface PurplePointList {
    type:        DataType;
    description: string;
    items:       AmbitiousItems;
}

export interface AmbitiousItems {
    type:        LogType;
    description: string;
    properties:  Properties13;
    required:    string[];
}

export interface Properties13 {
    lon: GuardianID;
    lat: GuardianID;
    log: Log;
}

export interface APIV1PathList {
    get: APIV1PathListGet;
}

export interface APIV1PathListGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  FriskyResponses;
}

export interface FriskyResponses {
    "200": Frisky200;
}

export interface Frisky200 {
    description: The200_Description;
    schema:      Schema3;
}

export interface Schema3 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties14;
}

export interface Properties14 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  CunningObj;
}

export interface CunningObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       CunningItems;
}

export interface CunningItems {
    type:         LogType;
    properties:   Properties15;
    required:     string[];
    description?: string;
}

export interface Properties15 {
    pathId:     GuardianID;
    pathName:   GuardianID;
    remark:     GuardianID;
    type:       GuardianID;
    useType:    GuardianID;
    alarmType:  GuardianID;
    sort:       GuardianID;
    createType: GuardianID;
    pointList:  FluffyPointList;
}

export interface FluffyPointList {
    type:        DataType;
    description: string;
    items:       MagentaItems;
}

export interface MagentaItems {
    type:        LogType;
    description: string;
    properties:  Properties16;
    required:    string[];
}

export interface Properties16 {
    pathId:  GuardianID;
    pointId: GuardianID;
    lon:     GuardianID;
    lat:     GuardianID;
    log:     Log;
}

export interface APIV1PathPage {
    get: APIV1PathPageGet;
}

export interface APIV1PathPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  MischievousResponses;
}

export interface MischievousResponses {
    "200": Mischievous200;
}

export interface Mischievous200 {
    description: The200_Description;
    schema:      Schema4;
}

export interface Schema4 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties17;
}

export interface Properties17 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  MagentaObj;
}

export interface MagentaObj {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties18;
}

export interface Properties18 {
    data:     TentacledData;
    pageSize: GuardianID;
    pageNo:   GuardianID;
    total:    GuardianID;
    pages:    GuardianID;
}

export interface TentacledData {
    type:        DataType;
    description: string;
    items:       CunningItems;
}

export interface APIV1School {
    post: APIV1SchoolAddPost;
}

export interface APIV1SchoolAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: IndecentParameter[];
    responses:  PurpleResponses;
}

export interface IndecentParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema5;
}

export interface Schema5 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  { [key: string]: GuardianID };
}

export interface APIV1SchoolList {
    get: APIV1SchoolListGet;
}

export interface APIV1SchoolListGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  BraggadociousResponses;
}

export interface BraggadociousResponses {
    "200": Braggadocious200;
}

export interface Braggadocious200 {
    description: The200_Description;
    schema:      Schema6;
}

export interface Schema6 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties19;
}

export interface Properties19 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  FriskyObj;
}

export interface FriskyObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       FriskyItems;
}

export interface FriskyItems {
    type:         LogType;
    properties:   Properties20;
    required:     string[];
    description?: string;
}

export interface Properties20 {
    schoolId:       GuardianID;
    schoolName:     GuardianID;
    orgId:          GuardianID;
    headName:       GuardianID;
    headPhone:      GuardianID;
    schoolType:     GuardianID;
    provinces:      GuardianID;
    tenantId:       GuardianID;
    city:           GuardianID;
    county:         GuardianID;
    educationStage: GuardianID;
    remark:         GuardianID;
    schoolAddress:  GuardianID;
    createTime:     GuardianID;
    updateTime:     GuardianID;
    log:            Log;
}

export interface APIV1SchoolPage {
    get: APIV1SchoolPageGet;
}

export interface APIV1SchoolPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses1;
}

export interface Responses1 {
    "200": The200_1;
}

export interface The200_1 {
    description: The200_Description;
    schema:      Schema7;
}

export interface Schema7 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties21;
}

export interface Properties21 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  MischievousObj;
}

export interface MischievousObj {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties22;
}

export interface Properties22 {
    data:     StickyData;
    pageSize: GuardianID;
    pageNo:   GuardianID;
    total:    GuardianID;
    pages:    GuardianID;
}

export interface StickyData {
    type:        DataType;
    description: string;
    items:       FriskyItems;
}

export interface APIV1StudentAdd {
    post: APIV1StudentAddPost;
}

export interface APIV1StudentAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: HilariousParameter[];
    responses:  PurpleResponses;
}

export interface HilariousParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema8;
}

export interface Schema8 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties23;
}

export interface Properties23 {
    studentName: GuardianID;
    sex:         GuardianID;
    schoolId:    GuardianID;
    gradeId:     GuardianID;
    classId:     GuardianID;
    deviceType:  GuardianID;
    imei:        GuardianID;
    rfid:        GuardianID;
}

export interface APIV1StudentList {
    get: APIV1StudentListGet;
}

export interface APIV1StudentListGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses2;
}

export interface Responses2 {
    "200": The200_2;
}

export interface The200_2 {
    description: The200_Description;
    schema:      Schema9;
}

export interface Schema9 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties24;
}

export interface Properties24 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  BraggadociousObj;
}

export interface BraggadociousObj {
    type:        DataType;
    title:       string;
    description: string;
    items:       MischievousItems;
}

export interface MischievousItems {
    type:         LogType;
    properties:   Properties25;
    required:     string[];
    description?: string;
}

export interface Properties25 {
    studentId:   GuardianID;
    studentName: GuardianID;
    sex:         GuardianID;
    schoolId:    GuardianID;
    gradeId:     GuardianID;
    classId:     GuardianID;
    deviceType:  GuardianID;
    imei:        GuardianID;
    rfid:        GuardianID;
    studentNo:   GuardianID;
    phone:       GuardianID;
    remark:      GuardianID;
    createTime?: GuardianID;
    updateTime?: GuardianID;
    log?:        Log;
}

export interface APIV1StudentPage {
    get: APIV1StudentPageGet;
}

export interface APIV1StudentPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses3;
}

export interface Responses3 {
    "200": The200_3;
}

export interface The200_3 {
    description: The200_Description;
    schema:      Schema10;
}

export interface Schema10 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties26;
}

export interface Properties26 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  Obj1;
}

export interface Obj1 {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties27;
}

export interface Properties27 {
    data:     IndigoData;
    pageSize: GuardianID;
    pageNo:   GuardianID;
    total:    GuardianID;
    pages:    GuardianID;
}

export interface IndigoData {
    type:        DataType;
    description: string;
    items:       MischievousItems;
}

export interface APIV1StudentUpdate {
    post: APIV1StudentUpdatePost;
}

export interface APIV1StudentUpdatePost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: AmbitiousParameter[];
    responses:  PurpleResponses;
}

export interface AmbitiousParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema11;
}

export interface Schema11 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties25;
}

export interface APIV1Teacher {
    post: APIV1TeacherAddPost;
}

export interface APIV1TeacherAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: CunningParameter[];
    responses:  PurpleResponses;
}

export interface CunningParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema12;
}

export interface Schema12 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties28;
}

export interface Properties28 {
    teacherName:    GuardianID;
    sex:            GuardianID;
    phone:          GuardianID;
    schoolId:       GuardianID;
    type:           GuardianID;
    remark:         GuardianID;
    classIds:       ChargeClassIDS;
    chargeClassIds: ChargeClassIDS;
    courseIds:      ChargeClassIDS;
    log:            Log;
    teacherId?:     GuardianID;
}

export interface ChargeClassIDS {
    type:        DataType;
    description: string;
    items:       ResourceIDListItems;
}

export interface ResourceIDListItems {
    type:        PurpleType;
    description: string;
}

export enum PurpleType {
    Long = "Long",
    TreeNode = "TreeNode",
}

export interface APIV1TeacherList {
    get: APIV1TeacherListGet;
}

export interface APIV1TeacherListGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses4;
}

export interface Responses4 {
    "200": The200_4;
}

export interface The200_4 {
    description: The200_Description;
    schema:      Schema13;
}

export interface Schema13 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties29;
}

export interface Properties29 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  Obj2;
}

export interface Obj2 {
    type:        DataType;
    title:       string;
    description: string;
    items:       BraggadociousItems;
}

export interface BraggadociousItems {
    type:       LogType;
    properties: Properties30;
    required:   string[];
}

export interface Properties30 {
    teacherId:   GuardianID;
    teacherName: GuardianID;
    sex:         GuardianID;
    phone:       GuardianID;
    schoolId:    GuardianID;
    type:        GuardianID;
    remark:      GuardianID;
    log:         Log;
}

export interface APIV1TeacherPage {
    get: APIV1TeacherPageGet;
}

export interface APIV1TeacherPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses5;
}

export interface Responses5 {
    "200": The200_5;
}

export interface The200_5 {
    description: The200_Description;
    schema:      Schema14;
}

export interface Schema14 {
    type:        LogType;
    title:       Title;
    required:    Required[];
    description: SchemaDescription;
    properties:  Properties31;
}

export interface Properties31 {
    flag: GuardianID;
    msg:  GuardianID;
    obj:  Obj3;
}

export interface Obj3 {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties32;
}

export interface Properties32 {
    data:     IndecentData;
    pageSize: GuardianID;
    pageNo:   GuardianID;
    total:    GuardianID;
    pages:    GuardianID;
}

export interface IndecentData {
    type:        DataType;
    description: string;
    items:       Items1;
}

export interface Items1 {
    type:        LogType;
    description: string;
    properties:  Properties33;
    required:    any[];
}

export interface Properties33 {
    teacherId:      GuardianID;
    teacherName:    GuardianID;
    sex:            GuardianID;
    phone:          GuardianID;
    schoolId:       GuardianID;
    type:           GuardianID;
    remark:         GuardianID;
    classIds:       ClassIDS;
    chargeClassIds: ClassIDS;
    courseIds:      CourseIDS;
}

export interface ClassIDS {
    type:        DataType;
    description: string;
    items:       Items2;
}

export interface Items2 {
    type:        LogType;
    description: string;
    properties:  Properties34;
    required:    any[];
}

export interface Properties34 {
    classId:   GuardianID;
    className: GuardianID;
    log:       Log;
}

export interface CourseIDS {
    type:        DataType;
    description: string;
    items:       Items3;
}

export interface Items3 {
    type:        LogType;
    description: string;
    properties:  Properties35;
    required:    any[];
}

export interface Properties35 {
    courseId:   GuardianID;
    courseName: GuardianID;
    log:        Log;
}

export interface V1APICard {
    post: V1APICardAddPost;
}

export interface V1APICardAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: MagentaParameter[];
    responses:  Responses6;
}

export interface MagentaParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema15;
}

export interface Schema15 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties36;
}

export interface Properties36 {
    cardId:     GuardianID;
    imei:       GuardianID;
    rfid:       GuardianID;
    deviceType: GuardianID;
    orgId:      GuardianID;
}

export interface Responses6 {
    "200": The200_6;
}

export interface The200_6 {
    description: The200_Description;
    schema:      PropertiesClass;
}

export interface V1API {
    get: V1APICardDeleteGet;
}

export interface V1APICardDeleteGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses6;
}

export interface V1APICardGetByID {
    get: V1APICardGetByIDGet;
}

export interface V1APICardGetByIDGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses7;
}

export interface Responses7 {
    "200": The200_7;
}

export interface The200_7 {
    description: The200_Description;
    schema:      ItemsClass;
}

export interface ItemsClass {
    type:        LogType;
    required:    any[];
    title?:      string;
    description: string;
    properties:  { [key: string]: GuardianID };
}

export interface V1APICardImportExcelJSON {
    post: V1APICardDeleteGet;
}

export interface V1APICardPage {
    get: V1APICardPageGet;
}

export interface V1APICardPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses8;
}

export interface Responses8 {
    "200": The200_8;
}

export interface The200_8 {
    description: The200_Description;
    schema:      Schema16;
}

export interface Schema16 {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties37;
}

export interface Properties37 {
    pageNumber: ID;
    pageSize:   ID;
    total:      ID;
    data:       HilariousData;
}

export interface HilariousData {
    type:        DataType;
    description: string;
    items:       ItemsClass;
}

export interface V1APICmdSendMsg {
    post: V1APICmdSendMsgPost;
}

export interface V1APICmdSendMsgPost {
    tags:        string[];
    summary:     string;
    description: string;
    consumes:    Consume[];
    parameters:  GetParameter[];
    responses:   PurpleResponses;
}

export interface V1APILoginLogin {
    post: V1APILoginLoginPost;
}

export interface V1APILoginLoginPost {
    tags:       string[];
    summary:    string;
    consumes:   string[];
    parameters: GetParameter[];
    responses:  Responses9;
}

export interface Responses9 {
    "200": The200_9;
}

export interface The200_9 {
    description: The200_Description;
    schema:      Schema17;
}

export interface Schema17 {
    type:        LogType;
    required:    any[];
    title:       string;
    description: string;
    properties:  Properties38;
}

export interface Properties38 {
    sessionId: GuardianID;
    expiresIn: GuardianID;
}

export interface V1APIOrg {
    post: V1APIOrgAddPost;
}

export interface V1APIOrgAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: IndecentParameter[];
    responses:  Responses6;
}

export interface V1APIOrgGetByID {
    get: V1APIOrgGetByIDGet;
}

export interface V1APIOrgGetByIDGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses10;
}

export interface Responses10 {
    "200": The200_10;
}

export interface The200_10 {
    description: The200_Description;
    schema:      Schema5;
}

export interface V1APIOrgPage {
    get: V1APIOrgPageGet;
}

export interface V1APIOrgPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses11;
}

export interface Responses11 {
    "200": The200_11;
}

export interface The200_11 {
    description: The200_Description;
    schema:      Schema18;
}

export interface Schema18 {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties39;
}

export interface Properties39 {
    pageNumber: ID;
    pageSize:   ID;
    total:      ID;
    data:       AmbitiousData;
}

export interface AmbitiousData {
    type:        DataType;
    description: string;
    items:       Items4;
}

export interface Items4 {
    type:        LogType;
    description: string;
    properties:  { [key: string]: GuardianID };
    required:    any[];
}

export interface V1APIOrgTree {
    get: V1APIOrgTreeGet;
}

export interface V1APIOrgTreeGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: any[];
    responses:  Responses12;
}

export interface Responses12 {
    "200": The200_12;
}

export interface The200_12 {
    description: The200_Description;
    schema:      Schema19;
}

export interface Schema19 {
    type:        DataType;
    title:       string;
    description: string;
    items:       Items5;
}

export interface Items5 {
    type:       LogType;
    properties: Properties40;
    required:   any[];
}

export interface Properties40 {
    id:       ID;
    parentId: ID;
    name:     ID;
    num:      ID;
    total:    ID;
    children: ChargeClassIDS;
}

export interface V1APIRole {
    post: V1APIRoleAddPost;
}

export interface V1APIRoleAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: FriskyParameter[];
    responses:  Responses6;
}

export interface FriskyParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema20;
}

export interface Schema20 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties41;
}

export interface Properties41 {
    roleId:         GuardianID;
    roleName:       GuardianID;
    roleDesc:       GuardianID;
    resourceIdList: ChargeClassIDS;
}

export interface V1APIRoleGetByID {
    get: V1APIRoleGetByIDGet;
}

export interface V1APIRoleGetByIDGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses13;
}

export interface Responses13 {
    "200": The200_13;
}

export interface The200_13 {
    description: The200_Description;
    schema:      Schema20;
}

export interface V1APIRolePage {
    get: V1APIRolePageGet;
}

export interface V1APIRolePageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses14;
}

export interface Responses14 {
    "200": The200_14;
}

export interface The200_14 {
    description: The200_Description;
    schema:      Schema21;
}

export interface Schema21 {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties42;
}

export interface Properties42 {
    pageNumber: ID;
    pageSize:   ID;
    total:      ID;
    data:       CunningData;
}

export interface CunningData {
    type:        DataType;
    description: string;
    items:       Items6;
}

export interface Items6 {
    type:        LogType;
    description: string;
    properties:  Properties43;
    required:    string[];
}

export interface Properties43 {
    roleId:     GuardianID;
    roleName:   GuardianID;
    roleDesc:   GuardianID;
    orgName:    GuardianID;
    createTime: GuardianID;
}

export interface V1APIUserAdd {
    post: V1APIUserAddPost;
}

export interface V1APIUserAddPost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: MischievousParameter[];
    responses:  Responses6;
}

export interface MischievousParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema22;
}

export interface Schema22 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties44;
}

export interface Properties44 {
    username:  GuardianID;
    loginName: GuardianID;
    password:  GuardianID;
    roleId:    GuardianID;
    orgId:     GuardianID;
    userId?:   GuardianID;
    userType?: GuardianID;
}

export interface V1APIUserGetByID {
    get: V1APIUserGetByIDGet;
}

export interface V1APIUserGetByIDGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses15;
}

export interface Responses15 {
    "200": The200_15;
}

export interface The200_15 {
    description: The200_Description;
    schema:      Schema22;
}

export interface V1APIUserPage {
    get: V1APIUserPageGet;
}

export interface V1APIUserPageGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: GetParameter[];
    responses:  Responses16;
}

export interface Responses16 {
    "200": The200_16;
}

export interface The200_16 {
    description: The200_Description;
    schema:      Schema23;
}

export interface Schema23 {
    type:        LogType;
    title:       string;
    required:    any[];
    description: string;
    properties:  Properties45;
}

export interface Properties45 {
    pageNumber: ID;
    pageSize:   ID;
    total:      ID;
    data:       MagentaData;
}

export interface MagentaData {
    type:        DataType;
    description: string;
    items:       Items7;
}

export interface Items7 {
    type:        LogType;
    description: string;
    properties:  Properties44;
    required:    string[];
}

export interface V1APIUserTree {
    get: V1APIUserTreeGet;
}

export interface V1APIUserTreeGet {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: any[];
    responses:  Responses17;
}

export interface Responses17 {
    "200": The200_17;
}

export interface The200_17 {
    description: The200_Description;
    schema:      Schema24;
}

export interface Schema24 {
    type:        DataType;
    title:       string;
    description: string;
    items:       Items8;
}

export interface Items8 {
    type:       LogType;
    properties: Properties46;
    required:   string[];
}

export interface Properties46 {
    userId:     GuardianID;
    username:   GuardianID;
    loginName:  GuardianID;
    password:   GuardianID;
    salt:       GuardianID;
    userType:   GuardianID;
    tenantId:   GuardianID;
    roleId:     GuardianID;
    orgId:      GuardianID;
    status:     GuardianID;
    phone:      GuardianID;
    remark:     GuardianID;
    createTime: GuardianID;
    updateTime: GuardianID;
    log:        Log;
}

export interface V1APIUserUpdate {
    post: V1APIUserUpdatePost;
}

export interface V1APIUserUpdatePost {
    tags:       string[];
    summary:    string;
    consumes:   Consume[];
    parameters: BraggadociousParameter[];
    responses:  Responses6;
}

export interface BraggadociousParameter {
    name:        string;
    in:          In;
    description: string;
    schema:      Schema25;
}

export interface Schema25 {
    type:        LogType;
    required:    string[];
    title:       string;
    description: string;
    properties:  Properties47;
}

export interface Properties47 {
    username:  GuardianID;
    loginName: GuardianID;
    roleId:    GuardianID;
    userId:    GuardianID;
}

export interface Tag {
    name:        string;
    description: TagDescription;
}

export enum TagDescription {
    工具上传临时文件夹 = "工具上传临时文件夹",
}
