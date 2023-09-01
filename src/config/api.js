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
    "/jwtusers/{jwt}/applications",
  postCreateApplication:
    process.env.REACT_APP_APPLICATION_BACKEND_URL +
    "/usersjwt/{jwt}/adverts/{advertId}/applications",
};
export const CompanyService = {
  getCompanyById:
    process.env.REACT_APP_COMPANY_BACKEND_URL + "/get/userjwt/{jwt}",
  updateCompanyById:
    process.env.REACT_APP_COMPANY_BACKEND_URL + "/update/userjwt/{jwt}",
  postCreateAdvert:
    process.env.REACT_APP_COMPANY_BACKEND_URL + "/ilanacjwt/{jwt}",
};
export const AdvertService = {
  getAllAdverts: process.env.REACT_APP_ADVERT_BACKEND_URL + "/getAllAdverts",
  getAdvertById:
    process.env.REACT_APP_ADVERT_BACKEND_URL + "/getAdvertByID/{id}",
  getAiAdverts:
    process.env.REACT_APP_ADVERT_BACKEND_URL + "/ai/advertoneri/{jwt}",
};
export const ProjectService = {};
export const UserService = {
  getUserDetails: process.env.REACT_APP_USER_BACKEND_URL + "/getbyjwt/{jwt}",
  putUpdateUserDetails:
    process.env.REACT_APP_USER_BACKEND_URL + "/kullaniciGuncellejwt/{jwt}",
};
export const ResumeService = {
  getResumeById:
    process.env.REACT_APP_RESUME_BACKEND_URL + "/get/userjwt/{jwt}",
  updateResumeById:
    process.env.REACT_APP_RESUME_BACKEND_URL + "/update/userjwt/{jwt}",
};
