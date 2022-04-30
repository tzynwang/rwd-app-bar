const l = {
  MuiListItemButton: {
    styleOverrides: {
      root: {
        '&.BarBodyListItemButton, &.AvatarListItemButton': {
          paddingLeft: 'calc(24px + 8px)',
          paddingRight: 'calc(24px + 8px)'
        },
        '&.ListItemCollapse': {
          minHeight: '48px',
          paddingLeft: 'calc((60px - 24px) / 2)'
        },
        // '&.BarBodyTitleRow': {
        //   flexDirection: 'row-reverse'
        // }
      }
    },
  },
};

export default l;
