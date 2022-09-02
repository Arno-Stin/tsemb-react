import { Navbar } from "./Components/Navbar";
import { Rightbar } from "./Components/Rightbar";
import { Leftbar } from "./Components/Leftbar";
import { Feed } from "./Components/Feed";
import { Box, Stack} from "@mui/material";



function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-evenly">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  );
}

export default App;
