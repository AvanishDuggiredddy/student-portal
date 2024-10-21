import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function StudentDetails({ i18nKeyPrefix = "studentdetails" }) {
  const { t,i18n } = useTranslation("translation", {
    keyPrefix: i18nKeyPrefix,
  });

  const students = [
    { course: "mathematics", marksSecured: 85, maximumMarks: 100, grade: "A" },
    { course: "science", marksSecured: 90, maximumMarks: 100, grade: "A+" },
    { course: "english", marksSecured: 78, maximumMarks: 100, grade: "B" },
    { course: "history", marksSecured: 82, maximumMarks: 100, grade: "A" },
    { course: "geography", marksSecured: 88, maximumMarks: 100, grade: "A" },
  ];

  return (
    <div className="p-1 bg-gray-50 font-sans">
      <h2 className="text-lg font-medium font-bold center">{t("student_details")}</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">{t("course")}</th>
            <th className="border px-4 py-2">{t("marks_secured")}</th>
            <th className="border px-4 py-2">{t("maximum_marks")}</th>
            <th className="border px-4 py-2">{t("grade")}</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{t(student["course"])}</td>
              <td className="border px-4 py-2">{student.marksSecured}</td>
              <td className="border px-4 py-2">{student.maximumMarks}</td>
              <td className="border px-4 py-2">{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/userprofile">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {t("cancel")}
                  </button>
                </Link>
    </div>
     );
    
}
