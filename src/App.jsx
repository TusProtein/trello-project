import './App.css'

import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <>
      <h1>Tusprotein</h1>
      <Typography variant="h1" color="text.secondary">
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
