import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  getCompanyById,
  putUpdateCompanyById,
} from "../services/CompanyService";

const Comp = () => {
  const formikComp = useFormik({
    initialValues: {
      type: "",
      name: "",
      image: null,
      content: "",
      category: "",
    },
  });
  const [company, setCompany] = useState([]);
  const fetchCompanies = () => {
    getCompanyById(localStorage.getItem("currentUser"))
      .then((response) => {
        setCompany(response.data);
        formikComp.setValues(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateCompanies = () => {
    console.log(formikComp.values);
    putUpdateCompanyById(localStorage.getItem("currentUser"), formikComp.values)
      .then((response) => {
        setCompany(response.data);
      })
      .catch((error) => console.log({ error }));
  };
  useEffect(() => {
    fetchCompanies();
  }, []);
  const renderFormFields = (fields, formik) => {
    const fieldDisplayNames = {
      type: "Firma Türü",
      name: "Firma Adı",
      image: "Firma Resmi",
      content: "Sektör",
      category: "Firma Kategorisi",
    };

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
            : fieldDisplayNames[field]}
        </label>
        {field === "type" ? (
          <select
            className="border-2 border-gray-500 p-2 rounded-md w-full"
            name={field}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          >
            <option value="">Seçiniz</option>
            <option value="true">Özel Şirket</option>
            <option value="false">Devlet Dairesi</option>
          </select>
        ) : field === "image" ? (
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
        ) : field === "name" ? (
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
            type="text"
            name={field}
            placeholder={`${fieldDisplayNames[field]} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          />
        ) : field === "content" ? (
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
            type="text"
            name={field}
            placeholder={`${fieldDisplayNames[field]} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          />
        ) : field === "category" ? (
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
            type="text"
            name={field}
            placeholder={`${fieldDisplayNames[field]} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          />
        ) : (
          <input
            className={`border-2 border-gray-500 p-2 rounded-md ${
              field === "İlan Detayı"
                ? "w-full h-20 resize-y overflow-y-auto"
                : "w-full"
            } focus:border-teal-500 focus:ring-teal-500`}
            type="text"
            name={field}
            placeholder={`${
              field.charAt(0).toUpperCase() + field.slice(1)
            } girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          />
        )}
      </div>
    ));
  };

  return (
    <main className="h-screen items-center flex justify-center pt-20">
      <div className="flex pt-16">
        <form className="bg-white flex rounded-lg w-[20cm] mx-auto font-latoRegular">
          <div className="flex-1 text-gray-700 p-20">
            <hr />
            <hr />
            <hr />
            <hr />
            <br />
            <h1 className="text-3xl pb-2 font-latoBold">Firma Bilgileri 💼</h1>
            <br />
            <hr />
            <hr />
            <hr />
            <hr />
            <div className="mt-6">
              {renderFormFields(
                ["name", "content", "category", "type", "image"],
                formikComp
              )}
              <button
                type="button"
                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                onClick={updateCompanies}
              >
                Firma kayıt!
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Comp;
