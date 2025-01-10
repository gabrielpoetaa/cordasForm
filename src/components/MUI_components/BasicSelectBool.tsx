// import * as React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

// import { SelectChangeEvent } from '@mui/material/Select';

type BasicSelectBoolProps = {
  name: string;
  label: string;
};

export const BasicSelectBool = ({ name, label }: BasicSelectBoolProps) => {
  const { control } = useFormContext();

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const value_true = currentLanguage === "pt" ? "Sim" : "Yes";
  const value_false = currentLanguage === "pt" ? "Não" : "No";

  // console.log("Valor selecionado: ", watchedValue);
  // console.log("Tipo do valor selecionado: ", typeof watchedValue);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box display="flex" flexDirection="column">
          <FormControl fullWidth error={Boolean(fieldState.error)}>
            <InputLabel
              sx={{
                color: "#ba8638",
                "&.Mui-focused": {
                  color: "#ba8638",
                },
              }}
            >
              {label}
            </InputLabel>
            <Select
              sx={{
                color: "#5d3826",
                fontWeight: "200",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "#d6b56e",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#c99b46",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ba8638",
                },
                ".MuiSvgIcon-root ": {
                  fill: "#d6b56e !important",
                },
              }}
              label={label}
              error={Boolean(fieldState.error)}
              {...field}
              onChange={(e) => field.onChange(e.target.value === "true")}
              value={field.value === true ? "true" : "false"}
            >
              <MenuItem value="true">{value_true}</MenuItem>
              <MenuItem value="false">{value_false}</MenuItem>
            </Select>
            {fieldState.error && (
              <FormHelperText>{fieldState.error.message}</FormHelperText>
            )}
          </FormControl>
        </Box>
      )}
    />
  );
};
