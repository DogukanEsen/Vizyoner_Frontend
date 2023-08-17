import { useFormik } from "formik";
import "./Resume.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  UpdateResumeById,
  createResume,
  getResumeById,
} from "../services/ResumeService";

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
  const [resume, setResume] = useState([]);
  //Burası ilk çalıştığı zaman userın resume değerlerinin gelmesi için.
  const fetchApplications = () => {
    getResumeById(localStorage.getItem("currentUser"))
      .then((response) => {
        setResume(response.data); // Assuming the response.data has the resume object properties
        formikResume.setValues({
          description: response.data.description,
          category: response.data.category,
          phone: response.data.phone,
          country: response.data.country,
          city: response.data.city,
          address: response.data.address,
          gpa: response.data.gpa,
          grade: response.data.grade,
          department: response.data.department,
          image: null,
        });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  useEffect(() => {
    fetchApplications();
  }, []);
  //Burası sayfa yenilendiğinde vb. urldeki parametreleri alıyor ve json'a çeviriyor.
  useEffect(() => {
    const parseQueryParametersToJson = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);

      const formData = {};
      urlParams.forEach((value, key) => {
        formData[key] = value;
      });

      const formDataJSON = JSON.stringify(formData);
      //Eğer sayfa yeni yüklenmişse (url kısmında sadece /profil varsa) update edilmemesi için.
      if (Object.keys(formDataJSON).length !== 2) fetchChanges(formDataJSON);
    };

    parseQueryParametersToJson();
  }, []);
  //Burası update işlemi için.
  const fetchChanges = (formdata) => {
    UpdateResumeById(localStorage.getItem("currentUser"), formdata)
      .then((response) => {
        setResume(response.data); // Assuming the response.data has the resume object properties
        // formikResume.setValues({
        //   description: response.data.description,
        //   category: response.data.category,
        //   phone: response.data.phone,
        //   country: response.data.country,
        //   city: response.data.city,
        //   address: response.data.address,
        //   gpa: response.data.gpa,
        //   grade: response.data.grade,
        //   department: response.data.department,
        //   image: null,
        // });
      })

      .catch((error) => console.log({ error }));
  };
  const formikIdentity = useFormik({
    initialValues: {
      name: "",  
      surname: "", 
      email: "",
    },
  });
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
                name="name"
                placeholder="Ad"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="surname"
                placeholder="Soyad"
                onChange={formik.handleChange}
                value={formik.values.surname}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
        ) : 
        field === "E-posta adresi" ? (
          <input
            className={`border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 ${
              formik.touched[field] && formik.errors[field] ? "border-red-400" : ""
            }`}
            type="email" // Set the input type as "email"
            name="email"
            placeholder="E-posta adresi"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
        ) :

        field === "Kategori" || field === "Hakkımda" ? (
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
            disabled={
              field === "Ad Soyad" ||
              field === "E-posta adresi" 
              
            }
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
              {renderFormFields(
                ["Ad Soyad", "E-posta adresi"],
                formikIdentity
              )}
              <button
                type="submit"
                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
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
                type="submit"
                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
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
