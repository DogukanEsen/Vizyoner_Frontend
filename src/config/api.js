export const AuthService = {
  loginUser: process.env.REACT_APP_AUTH_BACKEND_URL + "/login/user",
  loginFirm: process.env.REACT_APP_AUTH_BACKEND_URL + "/login/firm",
  registerUser: process.env.REACT_APP_AUTH_BACKEND_URL + "/register/user",
  registerFirm: process.env.REACT_APP_AUTH_BACKEND_URL + "/register/firm",
  isUser: process.env.REACT_APP_AUTH_BACKEND_URL + "/isuser/{jwt}",
  isAdmin: process.env.REACT_APP_AUTH_BACKEND_URL + "/isadmin/{jwt}",
  isAuth: process.env.REACT_APP_AUTH_BACKEND_URL + "/isauth/{jwt}",
};
export const ApplicationService = {
  getApplications:
    process.env.REACT_APP_APPLICATION_BACKEND_URL +
    "/users/{userId}/applications",
  postCreateApplication:
    process.env.REACT_APP_APPLICATION_BACKEND_URL +
    "/users/{userId}/adverts/{advertId}/applications",
};
export const CompanyService = {
  getCompanyById:
    process.env.REACT_APP_COMPANY_BACKEND_URL + "/get/user/{userid}",
  updateCompanyById:
    process.env.REACT_APP_COMPANY_BACKEND_URL + "/update/user/{userid}",
  postCreateAdvert:
    process.env.REACT_APP_COMPANY_BACKEND_URL + "/ilanac/{userid}",
};
export const AdvertService = {
  getAllAdverts: process.env.REACT_APP_ADVERT_BACKEND_URL + "/getAllAdverts",
  getAdvertById:
    process.env.REACT_APP_ADVERT_BACKEND_URL + "/getAdvertByID/{id}",
};
export const ProjectService = {};
export const UserService = {
  Test: process.env.REACT_APP_USER_BACKEND_URL + "/a",
  firmaEkle: process.env.REACT_APP_USER_BACKEND_URL + "/firmaEkle",
  getUserDetails: process.env.REACT_APP_USER_BACKEND_URL + "/get/{id}",
  putUpdateUserDetails:
    process.env.REACT_APP_USER_BACKEND_URL + "/kullaniciGuncelle/{id}",
};
export const ResumeService = {
  getResumeById: process.env.REACT_APP_RESUME_BACKEND_URL + "/get/user/{id}",
  updateResumeById:
    process.env.REACT_APP_RESUME_BACKEND_URL + "/update/user/{id}",
  createResume: process.env.REACT_APP_RESUME_BACKEND_URL + "/create/{id}",
};
