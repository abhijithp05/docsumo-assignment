import Paper, { PaperProps } from "@mui/material/Paper";

interface IPaperProps extends PaperProps {}

export const DSPaper = ({ ...props }: IPaperProps) => {
  return <Paper {...props} />;
};
