import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import StyledBoxApp from '../../styles/styledBoxApp'

function AppBar() {
  // function SelectMode() {
  //   const { mode, setMode } = useColorScheme()

  //   const handleChange = (event) => {
  //     setMode(event.target.value)
  //   }

  //   const StyledBox = ({ children }) => (
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         alignItems: 'center',
  //         gap: 1
  //       }}
  //     >
  //       {children}
  //     </Box>
  //   )

  //   return (
  //     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
  //       <InputLabel sx={{ color: 'text.primary' }} id="select-mode-label">
  //         Mode
  //       </InputLabel>
  //       <Select
  //         labelId="select-mode-label"
  //         id="select-mode"
  //         value={mode}
  //         label="Mode"
  //         onChange={handleChange}
  //       >
  //         <MenuItem value="light">
  //           <StyledBox>
  //             <LightModeIcon />
  //             Light
  //           </StyledBox>
  //         </MenuItem>
  //         <MenuItem value="dark">
  //           <StyledBox>
  //             <DarkModeIcon />
  //             Dark
  //           </StyledBox>
  //         </MenuItem>
  //         <MenuItem value="system">
  //           <StyledBox>
  //             <SettingsBrightnessIcon />
  //             System
  //           </StyledBox>
  //         </MenuItem>
  //       </Select>
  //     </FormControl>
  //   )
  // }
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
