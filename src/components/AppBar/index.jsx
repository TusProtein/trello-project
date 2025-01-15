import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import StyledBoxApp from '~/styles/styledBoxApp'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import Profile from './Menus/Profile'

function AppBar() {
  return (
    <>
      <Box
        px={2}
        sx={(theme) => ({
          ...StyledBoxApp,
          height: theme.trello.appBarHeight,
          justifyContent: 'space-between'
        })}
      >
        <Box sx={{ ...StyledBoxApp, color: 'primary.main', gap: 2 }}>
          <AppsIcon />
          <SvgIcon component={TrelloIcon} />
          <Typography
            sx={{ fontSize: '1rem', fontWeight: 'bold', ml: '-1rem' }}
          >
            Trello
          </Typography>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
        <Box sx={{ ...StyledBoxApp, gap: 2 }}>
          <TextField
            size="small"
            id="standard-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
          <ModeSelect />
          <Tooltip title="Notification">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
