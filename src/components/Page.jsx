import { Container } from "@mui/material";
import { Box } from "@mui/system";

const Page = ({ children }) => {
  return (
    <Box bgcolor="purple" boxSizing="border-box" minHeight="100vh">
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};

export default Page;
