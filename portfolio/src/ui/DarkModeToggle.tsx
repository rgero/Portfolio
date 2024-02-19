import { IconButton, Tooltip } from "@mui/material";

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useDarkMode } from "../context/DarkModeContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const darkModeTip: string = isDarkMode ? "Toggle to Light Mode" : "Toggle to Dark Mode";

  return (
    <Tooltip title={darkModeTip}>
      <IconButton
        color="inherit"
        aria-label="toggle dark mode"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <Brightness5Icon/> : <Brightness4Icon/> }
      </IconButton>
    </Tooltip>
  );
}

export default DarkModeToggle