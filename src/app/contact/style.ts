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
        borderColor: '#E9E9EC',
        color: '#18181B',
      },
      '&:hover fieldset': {
        borderColor: '#3F51B5',
        color: '#18181B',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E9E9EC',
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
      backgroundColor: '#565661',
    },
  },
  box: {
    backgroundColor: '#93939F',
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
