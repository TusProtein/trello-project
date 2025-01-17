import { FormControl, useColorScheme } from '@mui/material'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
function ModeSelect() {
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
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel sx={{ color: 'primary.main' }} id="select-mode-label">
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

export default ModeSelect
