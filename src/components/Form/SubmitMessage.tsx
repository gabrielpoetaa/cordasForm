import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export const SubmitMessage = () => {
  const { t } = useTranslation();
  return (
    <div className="muted:max-w-[500px] md:mx-auto mx-4 muted:md:min-h-[80vh] min-h-[50vh] flex items-center justify-center">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <h1 className="text-center text-3xl md:text-4xl text-goldCordas_400 font-semibold ">
            {t("submit_message")}
          </h1>
        </motion.div>
        <div className="text-center">{/* <CircularProgress /> */}</div>
      </div>
    </div>
  );
};
