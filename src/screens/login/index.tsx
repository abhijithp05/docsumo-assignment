import React, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import {
  DSPaper,
  DSButton,
  DSLogo,
  DSTypography,
  LoginTextField,
} from "../../components";

export const Login = () => {
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const router = useRouter();

  const handleLoginClick = async () => {
    const response = await fetch(
      "https://apptesting.docsumo.com/api/v1/eevee/login/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailId, password }),
      }
    );
    const loginData: any = await response.json();
    if (!!loginData?.error) {
      setErrorMessage(loginData.error);
    } else {
      router.push({
        pathname: "/welcome",
        query: { fullName: loginData.data.user.full_name },
      });
    }
  };
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      height="100vh"
      minHeight="100%"
      width="100%"
      style={{
        backgroundColor: "#F7F8FE",
      }}
    >
      <Box display="flex" height="420px" width="370px">
        <DSPaper
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          elevation={8}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{
              width: "64px",
              height: "64px",
              background: "#fff",
              borderRadius: "50%",
              top: "-32px",
              position: "relative",
            }}
          >
            <DSLogo />
          </Box>
          <DSTypography
            fontFamily="sans-serif"
            fontSize={22}
            lineHeight={1.3}
            color="#3d3d3d"
            fontWeight="bold"
            marginTop="-50px"
          >
            Login to Docsumo
          </DSTypography>
          <LoginTextField
            label="Work Email"
            value={emailId}
            variant="standard"
            style={{ width: "85%" }}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <LoginTextField
            label="Password"
            value={password}
            type="password"
            variant="standard"
            style={{ width: "85%", marginBottom: "15px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <DSTypography
              fontFamily="sans-serif"
              fontSize={12}
              color="#e35b46"
              fontWeight="400"
            >
              {errorMessage}
            </DSTypography>
          )}
          <DSButton
            variant="contained"
            onClick={handleLoginClick}
            style={{
              width: "85%",
              backgroundColor: "#405089",
              color: "#ffffff",
              borderRadius: "20px",
              height: "40px",
            }}
          >
            LOGIN
          </DSButton>
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <DSTypography
              fontSize={15}
              fontFamily="sans-serif"
              lineHeight={1.3}
              color="#707070"
            >
              Don't have an account?
            </DSTypography>
            <DSButton
              variant="outlined"
              style={{
                color: "#405089",
                width: "25%",
                border: "1px solid #405089",
                borderRadius: "16px",
                textTransform: "none",
                height: "32px",
              }}
            >
              Sign Up
            </DSButton>
          </Box>
        </DSPaper>
      </Box>
    </Box>
  );
};
