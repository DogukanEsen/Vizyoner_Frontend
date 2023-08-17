export const AuthService = {
  loginUser: process.env.REACT_APP_AUTH_BACKEND_URL + "/login/user",
  loginFirm: process.env.REACT_APP_AUTH_BACKEND_URL + "/login/firm",
  registerUser: process.env.REACT_APP_AUTH_BACKEND_URL + "/register/user",
  registerFirm: process.env.REACT_APP_AUTH_BACKEND_URL + "/register/firm",
};
export const ApplicationService = {};
export const CompanyService = {};
export const AdvertService = {};
export const ProjectService = {};
export const UserService = {
  Test: process.env.REACT_APP_USER_BACKEND_URL + "/a",
};
export const ResumeService = {
  getResumeById: process.env.REACT_APP_RESUME_BACKEND_URL + "/get/user/{id}",
  updateResumeById:
    process.env.REACT_APP_RESUME_BACKEND_URL + "/update/user/{id}",
};
