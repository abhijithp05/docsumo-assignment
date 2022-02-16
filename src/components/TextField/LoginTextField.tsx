import { styled } from "@mui/material/styles";
import { DSTextField } from "./TextField";

export const LoginTextField = styled(DSTextField)({
  "& label.Mui-focused": {
    color: "#3d3d3d",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#8adbdb",
    color: "#3d3d3d",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#8adbdb",
    color: "#3d3d3d",
  },
});
