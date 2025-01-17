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
          justifyContent: 'space-between',
          overflowX: 'auto'
        })}
      >
        <Box sx={{ ...StyledBoxApp, color: 'primary.main' }}>
          <AppsIcon />
          <SvgIcon component={TrelloIcon} size="small" />
          <Typography
            sx={{ fontSize: '1rem', fontWeight: 'bold', ml: '-1rem' }}
          >
            Trello
          </Typography>

          <Box
            sx={{
              ...StyledBoxApp,
              gap: 1,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <Workspaces />
            <Recent />
            <Starred />
            <Templates />
            <Button variant="outlined">Create</Button>
          </Box>
        </Box>
        <Box sx={{ ...StyledBoxApp }}>
          <TextField
            size="small"
            id="standard-search"
            label="Search field"
            type="search"
            variant="outlined"
            sx={{ minWidth: 120 }}
          />
          <ModeSelect />
          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
              <NotificationsNoneIcon sx={{ color: 'primary.main' }} />
            </Badge>
          </Tooltip>
          <Tooltip title="Help">
            <HelpOutlineIcon
              sx={{ color: 'primary.main', cursor: 'pointer' }}
            />
          </Tooltip>
          <Profile />
        </Box>
      </Box>
    </>
  )
}

export default AppBar
