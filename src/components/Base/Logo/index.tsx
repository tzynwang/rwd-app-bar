import React, { memo } from 'react';
import { styled } from '@mui/material/styles';
import logoSrc from './../../../assets/logo.svg';

const Base = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '8px',
  gridTemplateColumns: 'repeat(2, auto)',
  alignItems: 'center',
  color: theme.palette.common.white,
}));
const LogoContainer = styled('img')(() => ({
  height: '32px',
  display: 'block',
  objectFit: 'cover',
}));

function Logo(): React.ReactElement {
  return (
    <Base>
      <LogoContainer src={logoSrc} />
      Fooxie Corp Ltd
    </Base>
  );
}

export default memo(Logo);
