import React, { memo, useState, useEffect } from 'react';
import cn from 'classnames';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from './../../Base/Avatar';
import * as model from './model';
import * as views from './view';
import type { AvatarWithMenuProps } from './types';

function AvatarWithMenu(props: AvatarWithMenuProps): React.ReactElement {
  /* States */
  const { handleAvatarMenuItemClick } = props;
  const [avatarMenuExpend, setAvatarMenuExpend] = useState<boolean>(false);

  /* Functions */
  const handleAvatarClick = () => {
    setAvatarMenuExpend(!avatarMenuExpend);
  };
  const handleAvatarMenuOnClose = (e: Event) => {
    const t = e.target as Element;
    if (t && !t.classList.contains('AvatarContainer') && avatarMenuExpend) {
      setAvatarMenuExpend(false);
    }
  };

  /* Hooks */
  useEffect(() => {
    window.addEventListener('click', handleAvatarMenuOnClose);
  }, [avatarMenuExpend]);
  useEffect(
    () => () => window.removeEventListener('click', handleAvatarMenuOnClose),
    []
  );

  /* Main */
  return (
    <views.BaseContainer>
      <ButtonBase
        onClick={handleAvatarClick}
        classes={{ root: 'ButtonBaseAvatar' }}
      >
        <Avatar />
      </ButtonBase>
      <views.AvatarMenuContainer
        className={cn(avatarMenuExpend && 'AvatarMenuExpend')}
      >
        {model.LIST.map((l) => (
          <views.AvatarMenuItem
            key={l.id}
            onClick={handleAvatarMenuItemClick(l.actionKey)}
            classes={{ root: 'AvatarListItemButton' }}
          >
            {l.icon}
            {l.label}
          </views.AvatarMenuItem>
        ))}
      </views.AvatarMenuContainer>
    </views.BaseContainer>
  );
}

export default memo(AvatarWithMenu);
