import Button, { ButtonProps } from "@mui/material/Button";

interface IButtonProps extends ButtonProps {}

export const DSButton = ({ ...props }: IButtonProps) => {
  return <Button {...props} />;
};
