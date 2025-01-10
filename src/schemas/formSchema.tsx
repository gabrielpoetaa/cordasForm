import * as z from "zod";

// const courseSchema = z.object({
//   Course_name: z.string().min(1, "Por favor, selecione um curso"), // Validação para o curso
//   Teacher_name: z.string().min(1, "Por favor, selecione um teacher"), // Validação para o teacher
// });

export const formSchema = z
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
