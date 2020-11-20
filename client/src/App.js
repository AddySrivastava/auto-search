import SeachBox from "./containers/SearchBox";
import { Typography } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Typography align="center" variant="h3" gutterBottom>
        Schoology Employee Seach
      </Typography>
      <SeachBox />
    </div>
  );
}