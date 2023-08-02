import { useFormik } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Comp = () => {
    const [startDate, setStartDate] = useState(null);

    const formikComp = useFormik({
        initialValues: {
            category: "",
            name: "",
            location: "",
            startDate: null,
            image: null,
            content: "",
        },
    });

    const renderFormFields = (fields, formik) => {
        const fieldDisplayNames = {
            category: "Firma Türü",
            name: "Firma Adı",
            location: "Firma Konumu (Şehir)",
            startDate: "Kuruluş Tarihi",
            image: "Firma Resmi",
            content: "Sektör",
        };

        return fields.map((field) => (
            <div key={field} className="pb-4">

                <label
                    htmlFor={field}
                    className={`block font-latoBold text-sm pb-2 ${formik.touched[field] && formik.errors[field] ? "text-red-400" : ""}`}
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
                        <option value="privateCompany">Özel Şirket</option>
                        <option value="stateDepartment">Devlet Dairesi</option>
                    </select>
                ) : field === "startDate" ? (
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date);
                            formik.handleChange(field)(date);
                        }}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Kuruluş tarihi seçin"
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
                ) : (
                    <input
                        className={`border-2 border-gray-500 p-2 rounded-md ${field === "İlan Detayı" ? "w-full h-20 resize-y overflow-y-auto" : "w-full"
                            } focus:border-teal-500 focus:ring-teal-500`}
                        type="text"
                        name={field}
                        placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} girin`}
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
                            {renderFormFields(["name", "category", "content", "startDate", "image", "location"], formikComp)}
                            <button
                                type="submit"
                                className="bg-[#0073b5] font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
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
