import React, { memo } from 'react';
import logoSrc from './../../../assets/logo.svg';
import * as view from './views';
import type { LogoProps } from './types';

function Logo(props: LogoProps): React.ReactElement {
  const { black, short } = props;
  const LogoString = short ? 'Fooxie' : 'Fooxie Corp Ltd';

  return (
    <view.Base black={black}>
      <view.LogoContainer src={logoSrc} />
      {LogoString}
    </view.Base>
  );
}

export default memo(Logo);
