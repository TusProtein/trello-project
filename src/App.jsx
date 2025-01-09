import './App.css'

import Button from '@mui/material/Button'
import {
  AccessAlarm,
  ThreeDRotation,
  Home as HomeIcon
} from '@mui/icons-material'
import { pink } from '@mui/material/colors'

function App() {
  return (
    <>
      <h1>Tusprotein</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px'
        }}
      >
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <AccessAlarm />
        <ThreeDRotation />
      </div>

      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
