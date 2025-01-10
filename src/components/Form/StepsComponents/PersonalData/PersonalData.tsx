import { Box } from "@mui/material";
// import { NameInput } from "./Form/FirstPage/NameInput"
import { FormInput } from "../../../MUI_components/FormInput";
import BasicDatePicker from "../../../MUI_components/BasicDatePicker";
import { useTranslation } from "react-i18next";

export const PersonalData = () => {
  const { t } = useTranslation();
  return (
    <Box
      marginY={10}
      marginX="auto"
      display="flex"
      flexDirection="column"
      gap={2}
      marginTop={10}
      width={500}
      sx={{
        "@media (max-width: 600px)": {
          width: "300px",
        },
      }}
    >
      {/* <NameInput /> */}
      <FormInput name="student_name" label={t("name")} />
      <BasicDatePicker name="Date_of_birth" label={t("date_of_birth")} />
      {/* <FormInput name="CPF" label="CPF do responsável" /> */}
      <FormInput name="Email" label="Email" />
      {/* <FormInput name="telNumber" label="Telefone" /> */}
      <FormInput name="mobileNumber" label={t("mobile")} />
    </Box>
  );
};
