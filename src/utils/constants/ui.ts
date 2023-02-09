import { createTheme } from '@mui/material/styles'
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    info2: true
    body3: true
    input: true
    links: true
    smallLinks: true
    labels: true
    smallLabels: true
    button: true
    h7: true
    h8: true
    h9: true
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    verified: Palette['primary']
    textPrimary: Palette['primary']
    textSecondary: Palette['primary']
    textSecondary2: Palette['primary']
    textSecondary3: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    verified?: PaletteOptions['primary']
    textPrimary?: PaletteOptions['primary']
    textSecondary?: PaletteOptions['primary']
    textSecondary2?: PaletteOptions['primary']
    textSecondary3?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    verified: true
  }
  interface ButtonPropsSizeOverrides {
    XL: true
    LG: true
    MD: true
    SM: true
    XS: true
  }
}

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#3360FF'
    },
    secondary: {
      main: '#E45633'
    },
    grey: {
      100: '#FBFBFD',
      300: '#E1E8ED'
    },
    verified: {
      main: 'rgba(116, 190, 41, 0.14)'
    },
    textPrimary: {
      main: '#252A32'
    },
    textSecondary: {
      main: '#485469'
    },
    textSecondary2: {
      main: '#8A94A6'
    },
    textSecondary3: {
      main: '#A7ADB5'
    }
  },
  breakpoints: {
    values: {
      // extra-small
      xs: 426,
      // small
      sm: 769,
      // medium
      md: 1110,
      // large
      lg: 1201,
      // extra-large
      xl: 1441
    }
  }
})

const { breakpoints } = defaultTheme

export const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h7' },
          style: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '24px',
            fontFamily: 'Work Sans',

            [breakpoints.down('md')]: {
              fontSize: 14,
              fontWeight: 700,
              lineHeight: '16px',
              fontFamily: 'Work Sans'
            },

            [breakpoints.down('sm')]: {
              fontSize: 16,
              fontWeight: 600,
              lineHeight: '20px',
              fontFamily: 'Work Sans'
            }
          }
        },
        {
          props: { variant: 'h8' },
          style: {
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '16px',
            fontFamily: 'Quicksand',

            [breakpoints.down('sm')]: {
              lineHeight: '22px'
            }
          }
        },
        {
          props: { variant: 'h9' },
          style: {
            fontSize: 12,
            fontWeight: 600,
            lineHeight: '14px',
            fontFamily: 'Work Sans',

            [breakpoints.down('sm')]: {
              lineHeight: '22px'
            }
          }
        },
        {
          props: { variant: 'body3' },
          style: {
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '20px',
            fontFamily: 'Work Sans'
          }
        },
        {
          props: { variant: 'input' },
          style: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '16px',
            fontFamily: 'Work Sans'
          }
        },
        {
          props: { variant: 'links' },
          style: {
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
            fontFamily: 'Work Sans',
            textDecoration: 'underline'
          }
        },
        {
          props: { variant: 'smallLinks' },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '16px',
            fontFamily: 'Work Sans',
            textDecoration: 'underline'
          }
        },
        {
          props: { variant: 'labels' },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '16px',
            fontFamily: 'Work Sans'
          }
        },
        {
          props: { variant: 'smallLabels' },
          style: {
            fontSize: 10,
            fontWeight: 400,
            lineHeight: '14px',
            fontFamily: 'Work Sans'
          }
        },
        {
          props: { variant: 'button' },
          style: {
            fontSize: 16,
            fontWeight: 600,
            lineHeight: '24px',
            fontFamily: 'Quicksand',
            textTransform: 'inherit'
          }
        },
        {
          props: { variant: 'info2' },
          style: {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '24px',
            fontFamily: 'Quicksand',
            color: '#8A94A6'
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { color: 'verified' },
          style: {
            fontFamily: 'Quicksand',
            background: 'rgba(116, 190, 41, 0.14)',
            color: '#74BE29'
          }
        },
        {
          props: { size: 'XL' },
          style: {
            width: 311
          }
        },
        {
          props: { size: 'LG' },
          style: {
            width: 254
          }
        },
        {
          props: { size: 'MD' },
          style: {
            width: 160
          }
        },
        {
          props: { size: 'SM' },
          style: {
            width: 114
          }
        },
        {
          props: { size: 'XS' },
          style: {
            width: 72
          }
        }
      ]
    },
    MuiCard: {
      variants: [
        {
          props: {
            variant: 'outlined'
          },
          style: {
            position: 'relative',
            height: 'fit-content',
            width: 255,
            border: 'none',

            [breakpoints.down('md')]: {
              width: 228
            },
            [breakpoints.down('sm')]: {
              width: 343
            }
          }
        }
      ]
    },
    MuiCardContent: {
      variants: [
        {
          props: {},
          style: {
            padding: '16px 8px'
          }
        }
      ]
    }
  },
  typography: {
    fontFamily: 'Work Sans, Quicksand',
    h1: {
      fontSize: 40,
      lineHeight: '48px',
      fontWeight: 700,
      fontFamily: 'Quicksand',

      [breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '40px'
      }
    },
    h2: {
      fontSize: 32,
      lineHeight: '40px',
      fontWeight: 700,
      fontFamily: 'Quicksand',

      [breakpoints.down('md')]: {
        fontSize: 24,
        lineHeight: '32px'
      }
    },
    h3: {
      fontSize: 24,
      lineHeight: '32px',
      fontWeight: 700,
      fontFamily: 'Quicksand',

      [breakpoints.down('md')]: {
        fontWeight: 600
      }
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '32px',
      fontFamily: 'Quicksand',

      [breakpoints.down('md')]: {
        fontSize: 16,
        lineHeight: '24px',
        fontWeight: 700
      },

      [breakpoints.down('md')]: {
        fontSize: 24,
        lineHeight: '32px',
        fontWeight: 700
      }
    },
    h5: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: '24px',
      fontFamily: 'Quicksand',

      [breakpoints.down('md')]: {
        fontWeight: 600
      },

      [breakpoints.down('md')]: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: '28px'
      }
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '24px',
      fontFamily: 'Quicksand',

      [breakpoints.down('md')]: {
        fontFamily: 'Work Sans',
        lineHeight: '20px'
      },

      [breakpoints.down('sm')]: {
        fontSize: 16,
        fontWeight: 700,
        fontFamily: 'Quicksand',
        lineHeight: '24px'
      }
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '24px',
      fontFamily: 'Work Sans'
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '20px',
      fontFamily: 'Work Sans'
    },
    subtitle1: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: '40px',

      [breakpoints.down('xs')]: {
        fontSize: 24,
        lineHeight: '32px'
      }
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '32px',

      [breakpoints.down('xs')]: {
        fontSize: 18,
        lineHeight: '24px'
      }
    }
  }
})
