export const contactform = {
  tittle: {
    color: '#3F51B5',
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#686878',
        color: '#18181B',
      },
      '&:hover fieldset': {
        borderColor: '#686878',
        color: '#18181B',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#686878',
        color: '#18181B',
      },
    },
    '& label.Mui-focused': {
      color: '#18181B',
    },
  },
  button: {
    backgroundColor: '#696977',
    '&:hover': {
      backgroundColor: '#4D4D56',
    },
  },
  box: {
    backgroundColor: '#ffffffe0',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      padding: '16px',
    },
    '@media (min-width: 600px)': {
      padding: '24px',
    },
    '@media (min-width: 960px)': {
      padding: '32px',
    },
    '@media (min-width: 1280px)': {
      padding: '40px',
    },
    '@media (min-width: 1920px)': {
      padding: '48px',
    },
  },
};
