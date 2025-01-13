import FormControl from '@mui/material/FormControl'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { useColorScheme } from '@mui/material'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

function SelectMode() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    setMode(event.target.value)
  }

  const StyledBox = ({ children }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}
    >
      {children}
    </Box>
  )

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel sx={{ color: 'text.primary' }} id="select-mode-label">
        Mode
      </InputLabel>
      <Select
        labelId="select-mode-label"
        id="select-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <StyledBox>
            <LightModeIcon />
            Light
          </StyledBox>
        </MenuItem>
        <MenuItem value="dark">
          <StyledBox>
            <DarkModeIcon />
            Dark
          </StyledBox>
        </MenuItem>
        <MenuItem value="system">
          <StyledBox>
            <SettingsBrightnessIcon />
            System
          </StyledBox>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  const StyledBoxApp = {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Box
        sx={(theme) => ({
          ...StyledBoxApp,
          height: theme.trello.appBarHeight,
          backgroundColor: 'primary.light'
        })}
      >
        <SelectMode />
      </Box>
      <Box
        sx={(theme) => ({
          ...StyledBoxApp,
          height: theme.trello.boardBarHeight,
          backgroundColor: 'primary.dark'
        })}
      >
        Board
      </Box>
      <Box
        sx={(theme) => ({
          ...StyledBoxApp,
          height: `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          backgroundColor: 'primary.main'
        })}
      >
        Board Content
      </Box>
    </Container>
  )
}

export default App
