import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { postCreateAdvert } from "../services/CompanyService";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "../toasts/Toast";
const Advert = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [updateDate, setUpdateDate] = useState(null);

  const formikAdvert = useFormik({
    initialValues: {
      category: "",
      title: "",
      advertCategory: "",
      location: "",
      startDate: null,
      endDate: null,
      updateDate: null,
      image: null,
      description: "",
    },
  });

  const CreateAdvert = () => {
    postCreateAdvert(localStorage.getItem("tokenKey"), formikAdvert.values)
      .then(() => toastSuccess("İlan başarıyla oluşturuldu"))
      .catch((error) => {
        console.log(error);
        toastError(error);
      });
  };
  const renderFormFields = (fields, formik) => {
    const fieldDisplayNames = {
      category: "İlan Türü",
      title: "İlan Başlığı",
      advertCategory: "Aranan pozisyon ve özellikler",
      location: "İlan Konumu (Şehir)",
      startDate: "Başlangıç Tarihi",
      endDate: "Bitiş Tarihi",
      updateDate: "Güncellenme Tarihi",
      image: "İlan Resmi",
      description: "İlan Detayı",
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
        {field === "category" ? (
          <select
            className="border-2 border-gray-500 p-2 rounded-md w-full"
            name={field}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          >
            <option value="">Seçiniz</option>
            <option value="internship">Staj İlanı</option>
            <option value="jobPostings">İş İlanı</option>
            <option value="contest">Yarışma</option>
          </select>
        ) : field === "title" ? (
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
            type="text"
            name={field}
            placeholder={`${fieldDisplayNames[field]} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          />
        ) : field === "advertCategory" ? (
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
            type="text"
            name={field}
            placeholder={`${fieldDisplayNames[field]} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          />
        ) : field === "location" ? (
          <input
            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
            type="text"
            name={field}
            placeholder={`${fieldDisplayNames[field]} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
          />
        ) : field === "description" ? (
          <textarea
            className="border-2 border-gray-500 p-2 rounded-md w-full h-20 resize-y overflow-y-auto"
            name={field}
            placeholder={`${fieldDisplayNames[field]} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
            wrap="hard"
          />
        ) : field === "startDate" ||
          field === "endDate" ||
          field === "updateDate" ? (
          <DatePicker
            selected={
              field === "startDate"
                ? startDate
                : field === "endDate"
                ? endDate
                : updateDate
            }
            onChange={(date) => {
              if (field === "startDate") {
                setStartDate(date);
                formik.setFieldValue(field, date);
              } else if (field === "endDate") {
                setEndDate(date);
                formik.setFieldValue(field, date);
              } else {
                setUpdateDate(date);
                formik.setFieldValue(field, date);
              }
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={`${
              field === "startDate"
                ? "Başlangıç tarihi"
                : field === "endDate"
                ? "Bitiş tarihi"
                : "Güncellenme tarihi"
            } seçin`}
            className="border-2 border-gray-500 p-2 rounded-md w-full"
          />
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
        ) : (
          <input
            className={`border-2 border-gray-500 p-2 rounded-md ${
              field === "description"
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
      <div className="flex pt-80">
        <form className="bg-white flex rounded-lg w-[20cm] mx-auto font-latoRegular">
          <div className="flex-1 text-gray-700 p-20">
            <br />
            <h1 className="text-3xl pb-2 font-latoBold">Yeni İlan 📣</h1>
            <br />
            <div className="mt-6">
              {renderFormFields(
                [
                  "category",
                  "title",
                  "advertCategory",
                  "location",
                  "startDate",
                  "endDate",
                  "updateDate",
                  "image",
                  "description",
                ],
                formikAdvert
              )}
              <button
                type="button"
                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                onClick={CreateAdvert}
              >
                İlan Oluştur!
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Advert;
