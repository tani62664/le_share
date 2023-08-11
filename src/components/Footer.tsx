import { Box } from "@mui/material";
export default function Footer() {
  return (
    <>
      <Box
        style={{ backgroundColor: "red" }}
        position={"absolute"}
        bottom={"0"}
        width={"100%"}
        height={"20px"}
      >
        <Box textAlign={"center"}>footer</Box>
      </Box>
    </>
  );
}
