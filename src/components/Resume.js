import { useFormik } from "formik";
import "./Resume.css";
import { useEffect, useState } from "react";
import { getResumeById, putUpdateResumeById } from "../services/ResumeService";
import { getUserDetails, putUpdateUserDetails } from "../services/UserService";

const Resume = () => {
  const formikResume = useFormik({
    initialValues: {
      description: "",
      category: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      gpa: 0,
      grade: "",
      department: "",
      image: null,
    },
    // other formik configurations
  });
  const formikIdentity = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });
  const [resume, setResume] = useState([]);
  const [identity, setIdentity] = useState([]);
  //Burası ilk çalıştığı zaman userın resume değerlerinin gelmesi için.
  const fetchApplications = () => {
    getResumeById(localStorage.getItem("tokenKey"))
      .then((response) => {
        setResume(response.data); // Assuming the response.data has the resume object properties
        formikResume.setValues(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  const fetchUserDetails = () => {
    getUserDetails(localStorage.getItem("tokenKey")).then((response) => {
      setIdentity(response.data);
      formikIdentity.setValues(response.data);
    });
  };
  //Burası update işlemi için.
  const UpdateResumeById = () => {
    putUpdateResumeById(localStorage.getItem("tokenKey"), formikResume.values)
      .then((response) => {
        setResume(response.data);
      })

      .catch((error) => console.log({ error }));
  };
  const UpdateUserDetails = () => {
    putUpdateUserDetails(
      localStorage.getItem("tokenKey"),
      formikIdentity.values
    )
      .then((response) => setIdentity(response.data))
      .catch((error) => console.log({ error }));

    console.log(formikIdentity.values);
  };
  useEffect(() => {
    fetchApplications();
    fetchUserDetails();
  }, []);

  const renderFormFields = (fields, formik) => {
    return fields.map((field) => (
      <div key={field} className="pb-4">
        <label
          htmlFor={field}
          className={`block font-latoBold text-sm pb-2 ${
            formik.touched[field] && formik.errors[field] ? "text-red-400" : ""
          }`}
        >
          {formik.touched[field] && formik.errors[field]
            ? formik.errors[field]
            : field.charAt(0).toUpperCase() + field.slice(1)}
        </label>
        {field === "Ad Soyad" ? (
          <div className="flex">
            <div className="w-1/2 pr-2">
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="firstname"
                placeholder="Ad"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="lastname"
                placeholder="Soyad"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        ) : field === "E-posta adresi" ? (
          <input
            className={`border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 ${
              formik.touched[field] && formik.errors[field]
                ? "border-red-400"
                : ""
            }`}
            type="email" // Set the input type as "email"
            name="email"
            placeholder="E-posta adresi"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
        ) : field === "Kategori" || field === "Hakkımda" ? (
          <textarea
            className="border-2 border-gray-500 p-2 rounded-md w-full h-20 resize-y overflow-y-auto"
            name={field}
            placeholder={`${
              field.charAt(0).toUpperCase() + field.slice(1)
            } girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
            wrap="hard"
            {...(field === "Kategori"
              ? formik.getFieldProps("category")
              : formik.getFieldProps("description"))}
          />
        ) : field === "Vesikalık" ? (
          <div>
            <input
              type="file"
              name={field}
              onChange={(event) => {
                formik.setFieldValue(field, event.currentTarget.files[0]);
              }}
              className="border-2 border-gray-500 p-2 rounded-md w-full"
            />
            {formik.values[field] && (
              <p className="text-sm text-gray-500 mt-2">
                Seçilen dosya: {formik.values[field].name}
              </p>
            )}
          </div>
        ) : (
          //Sağ taraftaki hakkımda, ve kategori dışındakiler burada
          <input
            className={`border-2 border-gray-500 p-2 rounded-md ${
              field === "Hakkımda"
                ? "w-full h-20 resize-y overflow-y-auto"
                : "w-full"
            } focus:border-teal-500 focus:ring-teal-500`}
            type={field === "T.C. Kimlik Numarası" ? "number" : "text"}
            name={field}
            placeholder={`${
              field.charAt(0).toUpperCase() + field.slice(1)
            } girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
            disabled={field === "Ad Soyad" || field === "E-posta adresi"}
            {...(field === "Telefon" ? formik.getFieldProps("phone") : {})}
            {...(field === "Ülke" ? formik.getFieldProps("country") : {})}
            {...(field === "Şehir" ? formik.getFieldProps("city") : {})}
            {...(field === "Adres" ? formik.getFieldProps("address") : {})}
            {...(field === "Not ortalaması" ? formik.getFieldProps("gpa") : {})}
            {...(field === "Sınıf" ? formik.getFieldProps("grade") : {})}
            {...(field === "Bölüm" ? formik.getFieldProps("department") : {})}
          />
        )}
      </div>
    ));
  };
  return (
    <main className="h-screen items-center flex justify-center pt-80">
      <div className="flex pt-80">
        {/* Kimlik Bilgileri Form */}
        <form className="bg-white flex rounded-lg w-9/10 font-latoRegular">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoBold">Kimlik Bilgileri 🪪</h1>
            <p className="text-lg text-gray-500">
              Kimlik bilgilerinizi görüntüleyin
            </p>
            <div className="mt-6">
              {renderFormFields(["Ad Soyad", "E-posta adresi"], formikIdentity)}
              <button
                type="button"
                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                onClick={UpdateUserDetails}
              >
                Kayıt Ol
              </button>
            </div>
          </div>
        </form>

        {/* Öz Geçmişim Form */}
        <form className="bg-white flex rounded-lg w-9/10 font-latoRegular">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoBold">Öz Geçmişim 🚀</h1>
            <p className="text-lg text-gray-500">
              Profilinizi düzenleyin ve ekleme yapın
            </p>
            <div className="mt-6">
              {renderFormFields(
                [
                  "Hakkımda",
                  "Kategori",
                  "Vesikalık",
                  "Telefon",
                  "Ülke",
                  "Şehir",
                  "Adres",
                  "Not ortalaması",
                  "Sınıf",
                  "Bölüm",
                ],
                formikResume
              )}
              <button
                type="button"
                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                onClick={UpdateResumeById}
              >
                Kayıt Ol
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Resume;
