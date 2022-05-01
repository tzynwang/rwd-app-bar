const b = {
  MuiButtonBase: {
    styleOverrides: {
      root: {
        fontSize: '16px',
        '&.ButtonBaseAvatar': {
          borderRadius: '50%',
        },
        '&.BarBodyExpend': {
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        },
      },
    },
  },
};

export default b;
