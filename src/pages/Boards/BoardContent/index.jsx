import StyledBoxApp from '~/styles/styledBoxApp'
import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box
      sx={(theme) => ({
        ...StyledBoxApp,
        height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        backgroundColor: 'primary.main'
      })}
    >
      Board Content
    </Box>
  )
}

export default BoardContent
