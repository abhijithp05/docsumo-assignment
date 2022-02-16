import TextField, { TextFieldProps } from "@mui/material/TextField";

type ITextFieldProps = TextFieldProps;

export const DSTextField = ({ ...props }: ITextFieldProps) => {
  return <TextField {...props} />;
};
