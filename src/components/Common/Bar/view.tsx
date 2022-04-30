import { styled } from '@mui/material/styles';

export const BarHeader = styled('div')(({ theme }) => ({
  height: '54px',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 24px',
  backgroundColor: theme.palette.grey[500],
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
export const BarBody = styled('div')(({ theme }) => ({
  height: 'calc(100vh - 54px)',
  width: '100vw',
  position: 'fixed',
  top: '54px',
  left: 0,
  paddingTop: '8px',
  backgroundColor: theme.palette.grey[50],
  transform: 'translateX(-100vw)',
  transition: `transform ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeIn}`,
  '&.BarBodyExpend': {
    transform: 'translateX(0)',
  },
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
    width: '60px',
    position: 'static',
    top: 0,
    backgroundColor: theme.palette.grey[200],
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    transform: 'translateX(0)',
    transition: `width ${theme.transitions.duration.enteringScreen}ms ${theme.transitions.easing.easeIn}`,
    '&.BarBodyExpend': {
      width: 'clamp(240px, 25vw, 320px)',
    },
  },
}));
