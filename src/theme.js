import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
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
        // text: {
        //   primary: '#26c6da', // Màu chính cho text
        //   secondary: '#ffa726' // Màu mong muốn cho text.secondary
        // }
      }
    }
  }
  // ...other properties
})

export default theme
