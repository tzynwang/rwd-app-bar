import React, { memo, useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import type { Theme } from '@mui/material';
import AvatarWithMenu from './../Common/AvatarWithMenu';
import Bar from './../Common/Bar';
import { BAR_LIST_ITEM_BUTTON_ACTION } from './../Common/Bar/model';
import { AVATAR_LIST_ITEM_BUTTON_ACTION } from './../Common/AvatarWithMenu/model';
import * as views from './view';

function App(): React.ReactElement {
  /* States */
  const [clickTarget, setClickTarget] = useState<string>('');
  const breakpointsUpSM = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up('sm')
  );

  /* Functions */
  const handleListItemButtonClick = (key: unknown) => () => {
    const actionKey = key as BAR_LIST_ITEM_BUTTON_ACTION;
    setClickTarget(actionKey as string);
    // switch (actionKey) {
    //   case BAR_LIST_ITEM_BUTTON_ACTION.NEWS:
    //     break;
    //   case BAR_LIST_ITEM_BUTTON_ACTION.ARCHIVES:
    //     break;
    //   case BAR_LIST_ITEM_BUTTON_ACTION.TAGS:
    //     break;
    //   case BAR_LIST_ITEM_BUTTON_ACTION.CONTACT:
    //     break;
    //   default:
    //     break;
    // }
  };
  const handleAvatarMenuItemClick = (key: unknown) => () => {
    const actionKey = key as AVATAR_LIST_ITEM_BUTTON_ACTION;
    setClickTarget(actionKey as string);
    // switch (actionKey) {
    //   case AVATAR_LIST_ITEM_BUTTON_ACTION.SETTING:
    //     break;
    //   case AVATAR_LIST_ITEM_BUTTON_ACTION.LOG_OUT:
    //     break;
    //   default:
    //     break;
    // }
  };

  /* Views */
  const AvatarInAppBody = useMemo(
    () =>
      breakpointsUpSM ? (
        <AvatarWithMenu handleAvatarMenuItemClick={handleAvatarMenuItemClick} />
      ) : (
        <React.Fragment />
      ),
    [breakpointsUpSM, handleAvatarMenuItemClick]
  );

  /* Main */
  return (
    <views.AppContainer className="App">
      <Bar
        handleListItemButtonClick={handleListItemButtonClick}
        AvatarWithMenu={
          <AvatarWithMenu
            handleAvatarMenuItemClick={handleAvatarMenuItemClick}
          />
        }
      />
      <views.AppBody>
        {AvatarInAppBody}
        <div>AppBody</div>
        <div>User last click: {clickTarget}</div>
      </views.AppBody>
    </views.AppContainer>
  );
}

export default memo(App);
