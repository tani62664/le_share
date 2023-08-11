import { Paper, Box } from "@mui/material";

export default function page() {
  return (
    <>
      <Box style={{ margin: "100px 200px" }}>
        <Paper elevation={4}>
          <Box p={"50px"}>
            <Box>アップロード</Box>
            <Box>
              <Box>日付</Box>
              <Box>ファイル名</Box>
              <Box>ダウンロードパスワード</Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
