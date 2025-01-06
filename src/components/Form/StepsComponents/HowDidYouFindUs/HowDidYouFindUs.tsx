import { Box } from "@mui/material";
import MultipleSelect from "../../MultipleSelect";
import listsModule from "../../../listsModule";

export const HowDidYouFindUs = () => {
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
      <MultipleSelect
        name="How_did_you_find_us"
        label="How did you find us?"
        list={listsModule.howDidYouFindUs_EN}
      />
    </Box>
  );
};
