import { useFormik } from "formik";
import React from "react";
import { postCreateApplication } from "../services/ApplicationService";
import { Link, useParams } from "react-router-dom";
import { toastError, toastSuccess } from "../toasts/Toast";

const Application = () => {
  const formikApplication = useFormik({
    initialValues: {
      content: "",
      file: null,
    },
  });
  const { id } = useParams();
  const CreateApplication = () => {
    postCreateApplication(
      localStorage.getItem("currentUser"),
      id,
      formikApplication.values
    )
      .then(() => toastSuccess("Başvuru başaılı."))
      .catch((err) => toastError("Başvuru başarısız: " + err));
  };
  const renderFormFields = (fields, formik) => {
    const fieldDisplayNames = {
      content: "Hakkımda",
      file: "CV Dosyası",
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

        {field === "content" ? (
          <textarea
            id={field}
            name={field}
            className="border rounded-lg w-full p-2"
            rows="4"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field]}
          />
        ) : field === "file" ? (
          <input
            type="file"
            id={field}
            name={field}
            onChange={(event) => {
              formik.setFieldValue(field, event.currentTarget.files[0]);
            }}
          />
        ) : (
          <input
            type="text"
            id={field}
            name={field}
            className="border rounded-lg w-full p-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[field]}
          />
        )}
      </div>
    ));
  };
  return (
    <main className="h-screen items-center flex justify-center pt-5">
      <div className="flex pt-16">
        <form className="bg-white flex rounded-lg w-[20cm] mx-auto font-latoRegular">
          <div className="flex-1 text-gray-700 p-20">
            <hr />
            <hr />
            <hr />
            <hr />
            <br />
            <h1 className="text-3xl pb-2 font-latoBold">
              Başvuru oluşturun 📝{" "}
            </h1>
            <br />
            <hr />
            <hr />
            <hr />
            <hr />
            <Link to={"/ilanlar"}>
              <div className="mt-6">
                {renderFormFields(["content", "file"], formikApplication)}
                <button
                  type="button"
                  className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                  onClick={CreateApplication}
                >
                  Başvur!
                </button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Application;
