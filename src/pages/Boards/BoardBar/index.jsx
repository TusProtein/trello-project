import MenuBoardBar from '~/styles/MenuBoardBar'
import avatar from '~/assets/img/IMG_2416.jpeg'

import Box from '@mui/material/Box'
import StyledBoxApp from '~/styles/styledBoxApp'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDrive from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

function BoardBar() {
  return (
    <Box
      px={2}
      sx={(theme) => ({
        ...StyledBoxApp,
        bgcolor: 'primary.600',
        height: theme.trello.boardBarHeight,
        justifyContent: 'space-between',
        overflowX: 'auto',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      })}
    >
      <Box sx={{ ...StyledBoxApp }}>
        <Chip
          sx={MenuBoardBar}
          label="Tusprotein"
          icon={<DashboardIcon />}
          clickable
        />
        <Chip
          sx={MenuBoardBar}
          label="Public/Private Workspace"
          icon={<VpnLockIcon />}
          clickable
        />
        <Chip
          sx={MenuBoardBar}
          label="Add to Google Drive"
          icon={<AddToDrive />}
          clickable
        />
        <Chip
          sx={MenuBoardBar}
          label="Automation"
          icon={<BoltIcon />}
          clickable
        />
        <Chip
          sx={MenuBoardBar}
          label="Filters"
          icon={<FilterListIcon />}
          clickable
        />
      </Box>
      <Box sx={{ ...StyledBoxApp }}>
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white'
            }
          }}
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>

        <AvatarGroup
          sx={{
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              cursor: 'pointer',
              bgcolor: '#a4b0be'
            },
            '&.MuiAvatarGroup-root': {
              gap: '10px'
            }
          }}
          max={4}
        >
          <Tooltip title="Tusprotein">
            <Avatar alt="Remy Sharp" src={avatar} />
          </Tooltip>
          <Tooltip title="Liverpool">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title="Liverpool">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title="Liverpool">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title="Liverpool">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
          <Tooltip title="Liverpool">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
