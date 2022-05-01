import React, { memo, useState, useMemo, useEffect } from 'react';
import cn from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import Logo from './../../Base/Logo';
import * as views from './view';
import * as model from './model';
import type { BarProps } from './types';

function Bar(props: BarProps): React.ReactElement {
  /* States */
  const { handleListItemButtonClick, AvatarWithMenu } = props;
  const [barBodyExpend, setBarBodyExpend] = useState<boolean>(false);
  const breakpointsUpSM = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('sm')
  );
  const breakpointsUpMD = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('md')
  );

  /* Functions */
  const handleMenuIconClick = () => {
    if (breakpointsUpMD) return;
    setBarBodyExpend(!barBodyExpend);
  };

  /* Hooks */
  useEffect(() => {
    if (breakpointsUpMD) {
      setBarBodyExpend(true);
    } else {
      setBarBodyExpend(false);
    }
  }, [breakpointsUpMD]);

  /* Views */
  const BarHeaderIcon = useMemo(
    () => (barBodyExpend ? <CloseIcon /> : <MenuIcon />),
    [barBodyExpend]
  );
  const BarBodyLogoRow = useMemo(() => {
    if (breakpointsUpSM && barBodyExpend) {
      return (
        <views.BarBodyItem
          onClick={handleMenuIconClick}
          classes={{
            root: barBodyExpend ? 'BarBodyExpend' : '',
          }}
        >
          <FirstPageIcon
            sx={{ visibility: breakpointsUpMD ? 'hidden' : 'visible' }}
          />
          <Logo black short={breakpointsUpSM} />
        </views.BarBodyItem>
      );
    }
    if (breakpointsUpSM && !barBodyExpend) {
      return (
        <views.BarBodyItem onClick={handleMenuIconClick}>
          <LastPageIcon />
        </views.BarBodyItem>
      );
    }
    return <React.Fragment />;
  }, [breakpointsUpSM, breakpointsUpMD, barBodyExpend]);

  /* Main */
  return (
    <React.Fragment>
      <views.BarHeader>
        <IconButton onClick={handleMenuIconClick}>{BarHeaderIcon}</IconButton>
        <Logo />
        {AvatarWithMenu}
      </views.BarHeader>
      <views.BarBody className={cn(barBodyExpend && 'BarBodyExpend')}>
        {BarBodyLogoRow}
        {model.LIST.map((l) => (
          <views.BarBodyItem
            key={l.id}
            onClick={handleListItemButtonClick(l.actionKey)}
          >
            {l.icon}
            <span className={cn(!barBodyExpend && 'HideInCollapse')}>
              {l.label}
            </span>
          </views.BarBodyItem>
        ))}
      </views.BarBody>
    </React.Fragment>
  );
}

export default memo(Bar);
