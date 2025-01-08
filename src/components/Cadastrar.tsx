import { FormProvider, useForm } from "react-hook-form";
import { Steps } from "../components/Form/Stepper";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Box from "@mui/material/Box";
import { PersonalData } from "../components/Form/StepsComponents/PersonalData/PersonalData";
import { MusicPreferences } from "../components/Form/StepsComponents/MusicPreferences/MusicPreferences";
// import { Address } from "../components/Form/StepsComponents/Address/Address";
import { ChosenCourse } from "../components/Form/StepsComponents/ChosenCourse/ChosenCourse";
import { HowDidYouFindUs } from "../components/Form/StepsComponents/HowDidYouFindUs/HowDidYouFindUs";
// import dayjs from "dayjs";
import { SubmitMessage } from "../components/Form/SubmitMessage";
// import { useState } from "react";
// import { CircularProgress } from "@mui/material";
import { Button } from "./Buttons/Button";
import { motion } from "framer-motion";

// const date = dayjs();
// console.log(date instanceof dayjs); // true

// const courseSchema = z.object({
//   Course_name: z.string().min(1, "Por favor, selecione um curso"), // Validação para o curso
//   Teacher_name: z.string().min(1, "Por favor, selecione um teacher"), // Validação para o teacher
// });

const schema = z
  .object({
    // student_name: z
    //   .string({ message: "Por favor, preencha o campo." })
    //   .min(1, "O nome deve conter ao menos 1 caractere.")
    //   .max(50, "O máximo de caracteres é 50, por favor corrigir"),
    // Date_of_birth: z.string(),
    // CPF: z
    //   .string({ message: "Este campo deve conter digitos." })
    //   .min(11, "O CPF deve conter 11 digitos"),
    // Email: z
    //   .string({ message: "Por favor, preencha o campo." })
    //   .min(1, { message: "Por favor, preencha o campo." })
    //   .email("Esse não é um endereço de e-mail válido"),
    // street: z.string().min(1),
    // streetNumber: z.string().min(1),
    // city: z.string().min(1),
    // mobileNumber: z
    //   .string({ message: "Por favor, preencha o campo." })
    //   .min(10, "O celular deve conter ao menos 10 dígitos"),
    // Previous_knowledge: z.boolean(),
    // Participate_projects: z.boolean(),
    // Music_Preferences: z
    //   .array(z.string())
    //   .min(1, "Por favor, selecione pelo menos uma preferência musical"),
    // courses: z
    //   .array(courseSchema)
    //   .min(1, "Por favor, escolha pelo menos um curso."),
    // How_did_you_find_us: z
    //   .array(z.string())
    //   .min(1, "Por favor, selecione pelo menos uma opção"),
  })
  .required();

// type FormValues = z.infer<typeof schema>;

const sourceSteps = [
  {
    label: "Personal Info",
    Component: <PersonalData />,
    fields: ["student_name", "Date_of_birth", "CPF", "Email", "mobileNumber"],
    hasError: false,
  },
  // {
  //   label: "Dados de Endereço",
  //   fields: ["street", "streetNumber", "city"],
  //   Component: <Address />,
  //   hasError: false,
  // },
  {
    label: "Music Preferences",
    fields: ["Previous_knowledge", "Music_Preferences", "Participate_projects"],
    Component: <MusicPreferences />,
    hasError: false,
  },
  {
    label: "Chosen class",
    fields: ["Course_name", "Course_name"],
    Component: <ChosenCourse />,
    hasError: false,
  },
  {
    label: "How did you find us?",
    fields: ["How_did_you_find_us"],
    Component: <HowDidYouFindUs />,
    hasError: false,
  },
];

const getSteps = (errors: string[]) => {
  return sourceSteps.map((step) => {
    return {
      ...step,
      hasError: errors.some((error) => step.fields.includes(error)),
    };
  });
};

export function Cadastrar() {
  const methods = useForm({
    resolver: zodResolver(schema),
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

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [showCircularProgress, setShowCircularProgress] = useState(false);

  // Quando o envio do formulário for bem-sucedido
  // const onSubmit = async (data: any) => {
  //   setIsSubmitting(true); // Ativa o estado de submissão

  //   try {
  //     const response = await fetch("http://localhost:5000/students", {
  //       method: "POST",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Erro na requisicao");
  //     }

  //     setIsSubmitting(false);
  //     setShowCircularProgress(true);
  //   } catch (error) {
  //     console.error("Erro ao enviar dados: ", error);
  //     setIsSubmitting(false);
  //   }

  //   if (isSubmitting) {
  //     return (
  //       <Box
  //         display="flex"
  //         justifyContent="center"
  //         alignItems="center"
  //         minHeight="100vh"
  //       >
  //         <CircularProgress /> {/* CircularProgress durante a submissão */}
  //       </Box>
  //     );
  //   }
  // };

  // console.log("Valores do formulário:", methods.getValues());

  // Renderiza a mensagem de sucesso após 2 segundos
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
              Retornar ao início
            </Button>
          </motion.div>
        </div>
      </Box>
    );
  }

  // console.log("Erros de validação:", methods.formState.errors);

  const steps = getSteps(Object.keys(methods.formState.errors));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Steps items={steps} />
      </form>
    </FormProvider>
  );
}
