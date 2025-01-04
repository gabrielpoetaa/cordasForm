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
// import { SelectChangeEvent } from '@mui/material/Select';

type BasicSelectProps = {
  name: string;
  label: string;
  list: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const BasicSelect = ({ name, label, list }: BasicSelectProps) => {
  const { control, watch } = useFormContext();

  const watchedValue = watch(name);

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
            >
              {list.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
            {fieldState.error && (
              <FormHelperText>{fieldState.error.message}</FormHelperText> // Exibe a mensagem de erro
            )}
          </FormControl>
        </Box>
      )}
    />
  );
};
