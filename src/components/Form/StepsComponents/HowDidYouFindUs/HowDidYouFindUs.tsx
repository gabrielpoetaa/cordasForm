import { Box } from "@mui/material";
import MultipleSelect from "../../../MUI_components/MultipleSelect";
import listsModule from "../../../listsModule";
import { useTranslation } from "react-i18next";

export const HowDidYouFindUs = () => {
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
      <MultipleSelect
        name="How_did_you_find_us"
        label={t("how_did_you_find_us")}
        list={listsModule.howDidYouFindUs_EN}
      />
    </Box>
  );
};
