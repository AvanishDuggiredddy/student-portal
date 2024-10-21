import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

export default function ProfileUI({
  relyingPartyService,
  i18nKeyPrefix = "studentProfile",
}) {
  const get_currentCourses = relyingPartyService.get_currentCourses;
  const get_nextExams = relyingPartyService.get_nextExams;
  const get_extracurricularActivities = relyingPartyService.get_extracurricularActivities;
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: i18nKeyPrefix,
  });

  const [courseInfo, setCourseInfo] = useState([]);
  const [examInfo, setExamInfo] = useState([]);
  const [activityInfo, setActivityInfo] = useState([]);

  useEffect(() => {
    fetchCurrentCourses();
    fetchNextExams();
    fetchExtracurricularActivities();
  }, []);

  const fetchCurrentCourses = () => {
    setCourseInfo(null);
    var courses = get_currentCourses();
    setCourseInfo(courses);
  };

  const fetchNextExams = () => {
    setExamInfo(null);
    var exams = get_nextExams();
    setExamInfo(exams);
  };

  const fetchExtracurricularActivities = () => {
    setActivityInfo(null);
    var activities = get_extracurricularActivities();
    setActivityInfo(activities);
  };

  let el = (
    <>
      <div className="p-1">
        <div className="flex">
          <div className="flex flex-wrap w-full sm:w-30 md:w-30 p-1">
            {/* Current Courses Section */}
            <div className="w-full sm:w-1/2 md:w-30 p-1">
              <p className="text-lg font-medium mb-4 font-bold flex items-center justify-center">{t("current_courses")}</p>
              <div className="bg-white border border-gray-200 rounded shadow sm:p-4">
                <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200">
                    {courseInfo?.courses?.map((course, index) => (
                      <li className="py-3 sm:py-1" key={index}>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-900 truncate whitespace-pre-wrap">
                            {t(course["name"])}
                              {/* {t(data["tabletName"])} */}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                            {t(course["instructor"])}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Exams Section */}
            <div className="w-full sm:w-1/2 md:w-30 p-1">
              <p className="text-lg font-medium mb-4 flex font-bold items-center justify-center">{t("next_exams")}</p>
              <div className="bg-white border border-gray-200 rounded shadow sm:p-4">
                <div className="flow-root">
                  <ul role="list" className="divide-y divide-gray-200">
                    {examInfo?.exams?.map((exam, index) => (
                      <li className="py-3 sm:py-1" key={index}>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0 my-1">
                            <p className="font-medium text-lg text-gray-900 truncate whitespace-pre-wrap">
                              {t(exam["subject"])}
                            </p>
                            <p className="text-xs text-gray-500 truncate inline-flex whitespace-pre-wrap">
                            {t(exam["date"])} at {t(exam["time"])}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="flex flex-wrap w-full p-1">
          <div className="w-full p-1">
            <p className="text-lg font-medium mb-4 flex font-bold items-center justify-center">{t("extracurricular_activities")}</p>
            <div className="bg-white border border-gray-200 rounded shadow sm:p-4">
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                  {activityInfo?.activities?.map((activity, index) => (
                    <li className="py-3 sm:py-1" key={index}>
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-900 truncate whitespace-pre-wrap">
                          {/* {(activity["name"])} */}
                          {t(activity["name"])}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                          {/* {(activity["role"])} */}
                          {t(activity["role"])}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return el;
}
