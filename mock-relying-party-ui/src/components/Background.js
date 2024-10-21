import { useTranslation } from "react-i18next";
import NavHeader from "./NavHeader";

export default function Background({
  component,
  i18nKeyPrefix = "background",
  langOptions,
}) {
  const { t } = useTranslation("translation", {
    keyPrefix: i18nKeyPrefix,
  });

  const images = [
    "images/illustration1.JPG",
    "images/illustration2.JPG",
    "images/illustration3.JPG",
    "images/illustration4.JPG",
    "images/illustration5.JPEG",
    "images/illustration6.JPG"
  ];

  return (
    <>
      <section className="flex flex-col h-screen">
        <NavHeader langOptions={langOptions} />
        <div className="flex flex-grow md:flex-row flex-col h-fit">
          <div className="flex flex-col shadow-lg rounded-tr-[64px] bg-[#FAFAFC] md:w-1/2">
            {/* <div className="h-3/5 mt-5 flex justify-center h-96">
              <img
                alt="util"
                className="rtl:scale-x-[-1]"
                src="images/illustartion.png"
              />
            </div> */}
              <div className="h-3/5 mt-5 flex flex-wrap justify-center h-75 gap-0 ml-2">
    {images.map((src, index) => (
      <img
        key={index}
        alt={`illustration-${index + 1}`}
        className="rtl:scale-x-[-1] w-1/3"
        src={src}
      />
    ))}
  </div>
            {/* <div className="flex w-full justify-center mt-8">
              <div className="flex grid grid-cols-3 gap-8"> */}
                {/* <div className="flex flex-col justify-center bg-neutral-300 rounded w-32 h-24">
                  <span className="font-bold flex justify-center">
                    {t("confirmed")}
                  </span>
                  <span className="font-bold flex justify-center">
                    39,67,888
                  </span>
                </div> */}
                {/* <div className="flex flex-col justify-center bg-[#2F8EA3] rounded w-32 h-24">
                  <span className="font-bold flex justify-center">
                    {t("active")}
                  </span>
                  <span className="font-bold flex justify-center">5,000</span>
                </div> */}
                {/* <div className="flex flex-col justify-center bg-neutral-300 rounded w-32 h-24">
                  <span className="font-bold flex justify-center">
                    {t("recovered")}
                  </span>
                  <span className="font-bold flex justify-center">
                    39,67,888
                  </span>
                </div> */}
              {/* </div>
            </div> */}
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:px-24 md:px-16 flex flex-col md:items-start md:text-left">
            {component}
          </div>
        
        </div>
        <div className="footer bg-gray-800 text-white flex justify-center items-center h-10 mb-0 flex w-full justify-center">
  <p>
    UNRaf | Universidad Nacional de Rafaela | Bv. Roca 989, Rafaela, Santa Fe | Argentina | 54 3492 501155
  </p>
</div>
       
      </section>
     
      
    </>
  );
}
