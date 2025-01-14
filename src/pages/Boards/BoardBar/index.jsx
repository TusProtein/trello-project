import Box from '@mui/material/Box'
import StyledBoxApp from '~/styles/styledBoxApp'

function BoardBar() {
  return (
    <Box
      sx={(theme) => ({
        ...StyledBoxApp,
        height: theme.trello.boardBarHeight,
        backgroundColor: 'primary.dark'
      })}
    >
      Board Bar
    </Box>
  )
}

export default BoardBar
