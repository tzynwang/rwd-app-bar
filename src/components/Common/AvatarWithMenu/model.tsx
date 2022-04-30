import { v4 as uuidv4 } from 'uuid';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export enum AVATAR_LIST_ITEM_BUTTON_ACTION {
  SETTING = 'SETTING',
  LOG_OUT = 'LOG_OUT',
}

export const LIST = [
  {
    id: uuidv4(),
    icon: <SettingsIcon />,
    label: 'Setting',
    actionKey: AVATAR_LIST_ITEM_BUTTON_ACTION.SETTING,
  },
  {
    id: uuidv4(),
    icon: <LogoutIcon />,
    label: 'Log Out',
    actionKey: AVATAR_LIST_ITEM_BUTTON_ACTION.LOG_OUT,
  },
];
