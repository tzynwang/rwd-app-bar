import { styled } from '@mui/material/styles';

export const AppContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
export const AppBody = styled('div')(({ theme }) => ({
  marginTop: '54px',
  padding: '16px',
  [theme.breakpoints.up('sm')]: {
    flex: '1 1 auto',
    marginTop: 0,
  },
}));
