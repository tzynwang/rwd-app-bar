import React, { memo } from 'react';
import { styled } from '@mui/material/styles';

const AvatarContainer = styled('div')(({ theme }) => ({
  height: '32px',
  width: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
}));

function Avatar(): React.ReactElement {
  return <AvatarContainer className="AvatarContainer">C</AvatarContainer>;
}

export default memo(Avatar);
