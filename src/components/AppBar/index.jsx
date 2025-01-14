import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import StyledBoxApp from '~/styles/styledBoxApp'

function AppBar() {
  return (
    <>
      <Box
        sx={(theme) => ({
          ...StyledBoxApp,
          height: theme.trello.appBarHeight,
          backgroundColor: 'primary.light'
        })}
      >
        <ModeSelect />
      </Box>
    </>
  )
}

export default AppBar
