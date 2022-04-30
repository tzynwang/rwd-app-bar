import React, { memo, useState, useMemo, useEffect } from 'react';
import cn from 'classnames';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
  const ListItemCollapseClassName = useMemo(
    () => (breakpointsUpSM && !barBodyExpend ? 'ListItemCollapse' : ''),
    [breakpointsUpSM, barBodyExpend]
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
  const BarBodyTitle = useMemo(() => {
    if (breakpointsUpSM && barBodyExpend) {
      return (
        <ListItem>
          <ListItemButton
            onClick={handleMenuIconClick}
            classes={{
              root: `BarBodyListItemButton BarBodyTitleRow ${ListItemCollapseClassName}`,
            }}
          >
            <ListItemIcon>
              <FirstPageIcon />
            </ListItemIcon>
            <ListItemText primary="menu expend" />
          </ListItemButton>
        </ListItem>
      );
    }
    if (breakpointsUpSM && !barBodyExpend) {
      return (
        <ListItem>
          <ListItemButton
            onClick={handleMenuIconClick}
            classes={{
              root: `BarBodyListItemButton ${ListItemCollapseClassName}`,
            }}
          >
            <ListItemIcon>
              <LastPageIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      );
    }
    return <React.Fragment />;
  }, [breakpointsUpSM, barBodyExpend]);

  /* Main */
  return (
    <React.Fragment>
      <views.BarHeader>
        <IconButton onClick={handleMenuIconClick}>{BarHeaderIcon}</IconButton>
        <Logo />
        {AvatarWithMenu}
      </views.BarHeader>
      <views.BarBody className={cn(barBodyExpend && 'BarBodyExpend')}>
        <List>
          {BarBodyTitle}
          {model.LIST.map((l) => (
            <ListItem key={l.id}>
              <ListItemButton
                onClick={handleListItemButtonClick(l.actionKey)}
                classes={{
                  root: `BarBodyListItemButton ${ListItemCollapseClassName}`,
                }}
              >
                <ListItemIcon>{l.icon}</ListItemIcon>
                <ListItemText primary={l.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </views.BarBody>
    </React.Fragment>
  );
}

export default memo(Bar);
