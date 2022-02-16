import React, { useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import {
  DSPaper,
  DSButton,
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
            <SvgIcon
              viewBox="0 0 294 294"
              style={{ color: "#4d61fc", width: "36px", height: "36px" }}
            >
              <g fill="currentColor" fillRule="evenodd">
                <path
                  fillRule="nonzero"
                  d="M62.874 225.046c-3.73 6.134-11.727 8.084-17.862 4.354-6.135-3.73-8.084-11.726-4.355-17.861l87.427-143.805c3.73-6.135 11.727-8.085 17.862-4.355 6.135 3.73 8.084 11.727 4.355 17.862L62.874 225.046zm82.798-143.85c-3.73-6.135-1.78-14.132 4.355-17.862 6.135-3.73 14.132-1.78 17.862 4.355l89.28 146.854c3.73 6.135 1.78 14.132-4.355 17.862-6.135 3.73-14.132 1.78-17.861-4.355l-89.28-146.854z"
                ></path>
                <path
                  fillRule="nonzero"
                  d="M42.5 264c6.904 0 12.5-5.596 12.5-12.5S49.404 239 42.5 239 30 244.596 30 251.5 35.596 264 42.5 264zm0 30C19.028 294 0 274.972 0 251.5S19.028 209 42.5 209 85 228.028 85 251.5 65.972 294 42.5 294zm105-239c6.904 0 12.5-5.596 12.5-12.5S154.404 30 147.5 30 135 35.596 135 42.5 140.596 55 147.5 55zm0 30C124.028 85 105 65.972 105 42.5S124.028 0 147.5 0 190 19.028 190 42.5 170.972 85 147.5 85zm104 179c6.904 0 12.5-5.596 12.5-12.5s-5.596-12.5-12.5-12.5-12.5 5.596-12.5 12.5 5.596 12.5 12.5 12.5zm0 30c-23.472 0-42.5-19.028-42.5-42.5s19.028-42.5 42.5-42.5 42.5 19.028 42.5 42.5-19.028 42.5-42.5 42.5z"
                ></path>
                <path d="M66.065 216.892c22.808-34.622 49.448-51.933 79.92-51.933 30.473 0 58.302 16.978 83.485 50.933l18.537-4.312C231.273 168.527 197.267 147 145.986 147s-85.23 21.527-101.845 64.58l21.924 5.312z"></path>
              </g>
            </SvgIcon>
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
