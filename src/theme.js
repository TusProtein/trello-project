import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '58px'

// Create a theme instance.
const theme = extendTheme({
  typography: {
    fontFamily: '"TikTokFont", system-ui, Avenir, Helvetica, Arial, sans-serif'
  },
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
    boardContentHeight: `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
        // text: {
        //   primary: '#26a69a', // Màu chính cho text
        //   secondary: '#ff7043' // Màu mong muốn cho text.secondary
        // }
      }
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': { width: 8, height: 8 },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#b2bec3',
            borderRadius: 8
          },
          '*::-webkit-scrollbar-track': {
            m: '0 10px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#636e72'
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          }
        })
      }
    }
  }
})

export default theme
