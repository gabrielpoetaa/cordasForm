import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
import StepButton from "@mui/material/StepButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button } from "../../components/Buttons/Button";

type Step = {
  label: string;
  Component: React.ReactNode;
  hasError: boolean;
};

type StepProps = {
  items: Step[];
};

export function Steps({ items }: StepProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const isLastStep = activeStep === items.length - 1;

  // Verifica se está em uma tela de tamanho mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 'sm' é o breakpoint para telas pequenas (mobile)

  return (
    <Box sx={{ width: "100%", marginBottom: "12px" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {items.map(({ label, hasError }, index) => {
          return (
            <Step
              sx={{
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#ba8638", // Cor do círculo (COMPLETO)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "#a06a2e", // Cor do texto do label (COMPLETO)
                  },
                "& .MuiStepLabel-root .Mui-active": {
                  color: "#ba8638", // Cor do círculo (ATIVO)
                },
                "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                  {
                    color: "#ba8638", // Cor do texto do label (ATIVO)
                  },
                "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                  fill: "#f9f6ed", // Cor do número no círculo (ATIVO)
                },
              }}
              key={label}
            >
              <StepButton onClick={() => setActiveStep(index)}>
                {/* Condicional para não mostrar o StepLabel em dispositivos móveis */}
                {!isMobile && <StepLabel error={hasError}>{label}</StepLabel>}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>

      <Box minHeight={"45vh"}>{items[activeStep].Component}</Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2,
          maxWidth: "900px",
          marginInline: "auto",
          "@media (max-width: 600px)": {
            maxWidth: "full",
          },
        }}
      >
        <Button hasBg={false} disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>

        <Box sx={{ flex: "1 1 auto" }} />
        {isLastStep ? (
          <Button hasBg={false} key="enviar" type="submit">
            Send
          </Button>
        ) : (
          <Button
            hasBg={false}
            key="proximo"
            type="button"
            onClick={handleNext}
          >
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
}
