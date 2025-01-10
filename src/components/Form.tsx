import { FormProvider, useForm } from "react-hook-form";
import { Steps } from "./MUI_components/Stepper";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../schemas/formSchema";
import Box from "@mui/material/Box";
import { PersonalData } from "./Form/StepsComponents/PersonalData/PersonalData";
import { MusicPreferences } from "./Form/StepsComponents/MusicPreferences/MusicPreferences";
import { ChosenCourse } from "./Form/StepsComponents/ChosenCourse/ChosenCourse";
import { HowDidYouFindUs } from "./Form/StepsComponents/HowDidYouFindUs/HowDidYouFindUs";
import { SubmitMessage } from "./Form/SubmitMessage";
import { Button } from "./Buttons/Button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Form() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const personal_info =
    currentLanguage === "pt" ? "Informações Pessoais" : "Personal Info";

  const music_preferences =
    currentLanguage === "pt" ? "Preferências musicais" : "Music preferences";

  const chosen_class =
    currentLanguage === "pt" ? "Curso escolhido" : "Chosen class";

  const how_did_you_find_us =
    currentLanguage === "pt"
      ? "Como você nos conheceu?"
      : "How did you find us?";

  const sourceSteps = [
    {
      label: personal_info,
      Component: <PersonalData />,
      fields: ["student_name", "Date_of_birth", "CPF", "Email", "mobileNumber"],
      hasError: false,
    },
    {
      label: music_preferences,
      fields: [
        "Previous_knowledge",
        "Music_Preferences",
        "Participate_projects",
      ],
      Component: <MusicPreferences />,
      hasError: false,
    },
    {
      label: chosen_class,
      fields: ["Course_name", "Course_name"],
      Component: <ChosenCourse />,
      hasError: false,
    },
    {
      label: how_did_you_find_us,
      fields: ["How_did_you_find_us"],
      Component: <HowDidYouFindUs />,
      hasError: false,
    },
  ];

  // Função que gera os steps com erros
  const getSteps = (errors: string[]) => {
    return sourceSteps.map((step) => {
      return {
        ...step,
        hasError: errors.some((error) => step.fields.includes(error)),
      };
    });
  };

  const methods = useForm({
    resolver: zodResolver(formSchema), // Usando o schema importado
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      student_name: "",
      Date_of_birth: "",
      CPF: "",
      Email: "",
      street: "",
      city: "",
      streetNumber: "",
      mobileNumber: "",
      telNumber: "",
      Previous_knowledge: false,
      Participate_projects: false,
      Music_Preferences: [],
      courses: [{ Course_name: "", Teacher_name: "" }],
      How_did_you_find_us: [],
    },
  });

  // Verifica se o envio foi bem-sucedido e exibe a mensagem de sucesso
  if (methods.formState.isSubmitSuccessful) {
    return (
      <Box>
        <SubmitMessage />
        <div className="w-fit mx-auto">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.9, type: "spring", stiffness: 100 }}
          >
            <Button hasBg={false} onClick={() => methods.reset()}>
              {t("reset_button")}
            </Button>
          </motion.div>
        </div>
      </Box>
    );
  }

  const steps = getSteps(Object.keys(methods.formState.errors));

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data) => {
          console.log(data);
          sessionStorage.removeItem("savedCourses");
        })}
      >
        <Steps items={steps} />
      </form>
    </FormProvider>
  );
}
