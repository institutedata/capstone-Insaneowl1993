import React from 'react';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Import light mode icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Import dark mode icon

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <IconButton color="inherit" onClick={toggleDarkMode} aria-label="toggle theme">
      {/* Display light mode icon if dark mode is enabled, and dark mode icon otherwise */}
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
