import { Box } from "@mui/material";
import { BasicSelectBool } from "../../BasicSelectBool";
import MultipleSelect from "../../MultipleSelect";
import listsModule from "../../../listsModule";

export const MusicPreferences = () => {
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
        "@media (max-width: 600px)" : {
          width: "300px"
        }
      }}
    >
      <BasicSelectBool
        name="Previous_knowledge"
        label="Previous musical knowledge?"
      />
      <MultipleSelect
        name="Music_Preferences"
        label="What music genres do you like the most?"
        list={listsModule.musicStyles}
      />
      <BasicSelectBool
        name="Participate_projects"
        label="Would you like to participate in the school's projects?"
      />
    </Box>
  );
};
