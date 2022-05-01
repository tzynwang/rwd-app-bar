import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

export const BaseContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    position: 'fixed',
    top: '16px',
    right: '16px',
  },
}));
export const AvatarMenuContainer = styled('div')(({ theme }) => ({
  height: 'calc(100vh - 54px)',
  width: '100vw',
  position: 'fixed',
  top: '54px',
  left: 0,
  paddingTop: '8px',
  backgroundColor: theme.palette.common.white,
  transform: 'translateX(100vw)',
  transition: `transform ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeIn}`,
  '&.AvatarMenuExpend': {
    transform: 'translateX(0)',
  },
  [theme.breakpoints.up('sm')]: {
    height: 'auto',
    width: '240px',
    top: 'calc(16px + 32px + 8px)',
    left: 'unset',
    right: '16px',
    paddingTop: 0,
    opacity: 0,
    transform: 'unset',
    transition: `all ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeIn}`,
    pointerEvents: 'none',
    '&.AvatarMenuExpend': {
      padding: '8px 0',
      borderRadius: theme.shape.borderRadius,
      transform: 'unset',
      opacity: 1,
      boxShadow: theme.shadows[6],
      pointerEvents: 'auto',
    },
  },
}));
export const AvatarMenuItem = styled(ButtonBase)(() => ({
  minHeight: '48px',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '16px',
  padding: '0 calc(24px + 8px)',
}));
