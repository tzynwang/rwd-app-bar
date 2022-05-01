import { styled } from '@mui/material/styles';
import type { BaseProps } from './types';

export const Base = styled('div', {
  shouldForwardProp: (prop) => prop !== 'black',
})<BaseProps>(({ black, theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  color: black ? theme.palette.common.black : theme.palette.common.white,
}));
export const LogoContainer = styled('img')(() => ({
  height: '32px',
  display: 'block',
  objectFit: 'cover',
}));
