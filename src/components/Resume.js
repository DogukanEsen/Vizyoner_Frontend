import { useFormik } from "formik";
import { motion as m } from "framer-motion";

export default function Resume() {
  const formik = useFormik({
    initialValues: {
      category: "",
      aboutme: "",
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
      photo: null, // Add a new field for the photo file
    },
  });

  const kategoriOptions = ["Option 1", "Option 2", "Option 3"];

  const handlePhotoChange = (event) => {
    // Get the selected file from the input event
    const file = event.currentTarget.files[0];
    // Update the formik state with the selected file
    formik.setFieldValue("photo", file);
  };

  const renderFormFields = (fields) => {
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
        <p></p>
        {field === "Kategori" ? (
          <select
            className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500"
            name={field}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          >
            <option value="">Select an option</option>
            {kategoriOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : field === "Hakkımda" ? (
          <textarea
            className="border-2 border-gray-500 p-2 rounded-md w-full h-20 resize-y overflow-y-auto"
            name={field}
            placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
            wrap="hard" // Set the wrap attribute to "hard"
          />
        ) : (
          <input
            className={`border-2 border-gray-500 p-2 rounded-md ${
              field === "Hakkımda" ? "w-full h-20 resize-y overflow-y-auto" : "w-full"
            } focus:border-teal-500 focus:ring-teal-500`}
            type={field}
            name={field}
            placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} girin`}
            onChange={formik.handleChange}
            value={formik.values[field]}
            onBlur={formik.handleBlur}
            disabled={
              field === "Ad Soyad" ||
              field === "E-posta adresi" ||
              field === "T.C. Kimlik Numarası"
            }
          />
        )}
      </div>
    ));
  };

  return (
    <div>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute w-full"
      >
        <main className="h-screen items-center flex justify-center">
          {/* Kimlik Bilgileri Form */}
          <div className="flex">
            <form className="bg-white flex rounded-lg w-9/10 font-latoRegular">
              <div className="flex-1 text-gray-700 p-20">
                <h1 className="text-3xl pb-2 font-latoBold">Kimlik Bilgileri 🪪</h1>
                <p className="text-lg text-gray-500">Vizyoner Genç.</p>
                <div className="mt-6">
                  {renderFormFields(["Ad Soyad", "E-posta adresi", "T.C. Kimlik Numarası"])}

                  <button
                    type="submit"
                    className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                  >
                    Submit!
                  </button>
                </div>
              </div>
            </form>

            {/* Öz Geçmişim Form */}
            <form className="bg-white flex rounded-lg w-9/10 font-latoRegular">
              <div className="flex-1 text-gray-700 p-20">
                <h1 className="text-3xl pb-2 font-latoBold">Öz Geçmişim 🚀</h1>
                <p className="text-lg text-gray-500">Vizyoner Genç.</p>
                <div className="mt-6">
                  {renderFormFields([
                    "Hakkımda",
                    "Kategori",
                    "Telefon",
                    "Ülke",
                    "Şehir",
                    "Adres",
                    "Not ortalaması",
                    "Sınıf",
                    "Bölüm",
                  ])}

                  <button
                    type="submit"
                    className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                  >
                    Submit!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </m.div>
    </div>
  );
}
