import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Spinner() {
  return (
    <Box sx={{ display: "flex", marginLeft: "1rem", width: "50px" }}>
      <CircularProgress color="success" />
    </Box>
  );
}
