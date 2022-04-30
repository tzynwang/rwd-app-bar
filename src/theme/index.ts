import { createTheme } from '@mui/material/styles';
import ButtonBase from './components/ButtonBase';
import ListItem from './components/ListItem';
import ListItemButton from './components/ListItemButton';
import typography from './typography';

const theme = createTheme({
  components: {
    ...ButtonBase,
    ...ListItem,
    ...ListItemButton
  },
  typography: {
    ...typography,
  },
});

export default theme;
