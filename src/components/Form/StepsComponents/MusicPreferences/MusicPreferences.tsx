import { Box } from "@mui/material";
import { BasicSelectBool } from "../../../MUI_components/BasicSelectBool";
import MultipleSelect from "../../../MUI_components/MultipleSelect";
import listsModule from "../../../listsModule";
import { useTranslation } from "react-i18next";

export const MusicPreferences = () => {
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
      <BasicSelectBool
        name="Previous_knowledge"
        label={t("previous_knowledge")}
      />
      <MultipleSelect
        name="Music_Preferences"
        label={t("music_preferences")}
        list={listsModule.musicStyles}
      />
      <BasicSelectBool
        name="Participate_projects"
        label={t("participate_projects")}
      />
    </Box>
  );
};
