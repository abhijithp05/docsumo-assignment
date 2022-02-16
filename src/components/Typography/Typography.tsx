import Typography, { TypographyProps } from "@mui/material/Typography";

interface ITypographyProps extends TypographyProps {}

export const DSTypography = ({ ...props }: ITypographyProps) => {
  return <Typography {...props} />;
};
