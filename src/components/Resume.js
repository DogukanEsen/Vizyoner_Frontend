import { useFormik } from "formik";
import { motion as m } from "framer-motion";

const InputField = ({ label, name, type, formik, isDisabled }) => (
  <div className="pb-4">
    <label
      htmlFor={name}
      className={`block font-latoBold text-sm pb-2 ${
        formik.touched[name] && formik.errors[name] ? "text-red-400" : ""
      } `}
    >
      {formik.touched[name] && formik.errors[name]
        ? formik.errors[name]
        : label}
    </label>
    <input
      className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
      type={type}
      name={name}
      placeholder={`Enter your ${label}`}
      onChange={formik.handleChange}
      value={formik.values[name]}
      onBlur={formik.handleBlur}
      readOnly={true}
    />
  </div>
);

export default function Resume() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      tc: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      gpa: "",
      grade: "",
      department: "",
    },
  });

  const inputFields = [
    { label: "Name", name: "name", type: "text", isDisabled: true },
    { label: "Email", name: "email", type: "email" },
    { label: "T.C. Kimlik Numarası", name: "tc", type: "tc" },
    { label: "Phone", name: "phone", type: "phone" },
    { label: "Country", name: "country", type: "country" },
    { label: "City", name: "city", type: "city" },
    { label: "Address", name: "address", type: "text" },
    { label: "GPA", name: "gpa", type: "gpa" },
    { label: "Grade", name: "grade", type: "grade" },
    { label: "Department", name: "department", type: "department" },
  ];

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >
      <head>
        {/* Head content */}
      </head>

      <main className="h-screen items-center flex justify-center mt-72">
        <form className="bg-white flex rounded-lg w-1/2 font-latoRegular">
          <div className="flex-1 text-gray-700  p-20">
            <h1 className="text-3xl pb-2 font-latoBold">
              Resume Page 🚀
            </h1>
            <p className="text-lg  text-gray-500">
              Vizyoner Genç.
            </p>
            <div className="mt-6 ">
              {inputFields.map((field) => (
                <InputField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  formik={formik}
                />
              ))}

              <button
                type="submit"
                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Submit!
              </button>
            </div>
          </div>
        </form>
      </main>
    </m.div>
  );
}
