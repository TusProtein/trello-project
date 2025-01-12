import { useState } from 'react'

import './App.css'

import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'

import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { Box, useColorScheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

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
  return (
    <>
      <SelectMode />
      <h1>Tusprotein</h1>
      <Typography variant="h1" color="text.primary">
        Responsive h1
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px'
        }}
      >
        <Button>Secondary</Button>
        <Button variant="contained">Success</Button>
        <Button variant="outlined">Error</Button>
        <AccessAlarmIcon />
        <ThreeDRotation />
      </div>

      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[600] }} />
    </>
  )
}

export default App
