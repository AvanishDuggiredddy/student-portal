import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from "react-select";

export default function NavHeader({ langOptions, i18nKeyPrefix = "background" }) {
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: i18nKeyPrefix,
  });
  const [selectedLang, setSelectedLang] = useState();
  // fallback language from the environment configuration
  const fallbackLangObj = window._env_.FALLBACK_LANG
    ? decodeURIComponent(window._env_.FALLBACK_LANG)
    : "";
  // converting it to JSON, and if the fallback language
  // is also not present, taking english as default
  const fallbackLang =
    fallbackLangObj !== ""
      ? JSON.parse(fallbackLangObj)
      : { label: "English", value: "en" };

  const changeLanguageHandler = (e) => {
    i18n.changeLanguage(e.value);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
  };

  // check language in the langOptions,
  // which came through langCnfigService
  // then setting that language as selected one
  const setLanguage = (lng) => {
    let lang = langOptions.find((op) => op.value === lng);
    setSelectedLang(lang ?? fallbackLang);
  };

  useEffect(() => {
    if (!langOptions || langOptions.length === 0) {
      return;
    }

    setLanguage(i18n.language);
    //Gets fired when changeLanguage got called.
    i18n.on("languageChanged", function (lng) {
      setLanguage(lng);
    });
  }, [langOptions]);

  const navList = [
    { label: "home", url: "/" },
    { label: "admissions", url: "/" },
    { label: "undergraduate_courses", url: "/" },
    { label: "international_affairs", url: "/" },
    // { label: "recruitment", url: "#" },
    // { label: "about_us", url: "#" },
    // { label: "contact_us", url: "#" },
  ];

  return (
    <nav className="bg-white border-gray-500">
      <div className="flex items-center grid grid-cols-3 md:order-2 justify-center mb-2 mt-1">
        <div className="justify-left col-start-1 h-16">
          <img src="images/top-logo.png" className="w-60 h-17" />
           {/* <span className="title-font text-3xl text-gray-900 font-medium">
            {t("health_portal")}
          </span> */}
        </div>
        <div className="flex justify-end col-start-3 mr-3">
          <img src="images/language_icon.png" alt={t("language")} className="mr-2" />
          <Select
            styles={customStyles}
            isSearchable={false}
            className="appearance-none"
            value={selectedLang}
            options={langOptions}
            placeholder="Language"
            onChange={changeLanguageHandler}
          />
        </div>
      </div>
      <div className="bg-[#2F8EA3] border-gray-200 px-1 sm:px-4 py-1 rounded mt-16">
        <div className="flex items-center sm:px-4">
          <div className="flex w-full justify-left gap-8 text-s font-medium">
            {navList.map((nav) => {
              return (
                <div key={nav.label}>
                  <a
                    href={process.env.PUBLIC_URL + nav.url}
                    className="text-gray-900 text-white hover:underline"
                    aria-current="page"
                  >
                    {t(nav.label)}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
