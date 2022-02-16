import React from "react";
import { useRouter } from "next/router";
import { DSTypography } from "../../components";
import Box from "@mui/material/Box";

export const Welcome = () => {
  const router = useRouter();
  debugger;
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      style={{ backgroundColor: "#fff" }}
    >
      <DSTypography align="center" width="100%" color="red" fontSize={22}>
        {`Hello ${router.query.fullName}`}
      </DSTypography>
    </Box>
  );
};
