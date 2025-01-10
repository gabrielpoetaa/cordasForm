import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import { GiBrazilFlag } from "react-icons/gi";
import { LiaFlagUsaSolid } from "react-icons/lia";

const primaryPale = "#c99b46";

const convertSvg = (svg: React.ReactElement) => {
  const markup = renderToStaticMarkup(svg);
  const encoded = encodeURIComponent(markup);
  const dataUri = `url('data:image/svg+xml;utf8,${encoded}')`;
  return dataUri;
};

export const CustomSwitch = styled(Switch)({
  width: "70px",
  height: "50px",
  alignItems: "center",

  "& .MuiSwitch-track": {
    backgroundColor: "black",
    height: "15px",
    display: "flex",
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "white",
    width: 32,
    height: 32,
  },

  "& .MuiSwitch-thumb:before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: convertSvg(<GiBrazilFlag color={primaryPale} size={25} />),
  },
  "& .MuiSwitch-switchBase": {
    "& + .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: "#d6b56e",
    },
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#c99b46",
      },
      "& .MuiSwitch-thumb:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: convertSvg(
          <LiaFlagUsaSolid color={primaryPale} size={25} />
        ),
      },
    },
  },
});
