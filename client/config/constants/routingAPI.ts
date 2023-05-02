export const API_ORIGIN = process.env.NEXT_PUBLIC_API_ORIGIN;

// Following constants are directly copied from server routing constants config
// General
export const API_ROUTE = "api";
export const API_VERSION = "v1";
export const BY_ID = "id";
export const BY_CODE = "code";
export const WITH_RELATIONS = "all";
export const EDIT = "edit";
export const DELETION = "delete";

// Users
export const USERS_ROUTE = "users";
export const USERS_SINGULAR = "user";
export const REGISTER = "register";
export const LOGIN = "login";
export const LOGOUT = "logout";
export const MY_INFO = "me";
export const USER_VERIFICATION = "verification";
export const FORGOT_PASSWORD = "forgot-password";
export const USER_PASSWORD = "password";

// Rooms
export const ROOMS_ROUTE = "rooms";
export const ROOMS_SINGULAR = "room";
export const ROOMS_HANDLE_TEACHER = "teacher";

// Teachers
export const TEACHERS_ROUTE = "teachers";
export const TEACHERS_SINGULAR = "teacher";

// Students
export const STUDENTS_ROUTE = "students";
export const STUDENTS_SINGULAR = "student";
export const STUDENTS_HANDLE_ROOM = "room";
export const STUDENTS_HANDLE_SIBLINGS = "siblings";
