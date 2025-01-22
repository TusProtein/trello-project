import StyledBoxApp from '~/styles/styledBoxApp'
import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns() {
  return (
    <Box
      sx={{
        ...StyledBoxApp,
        alignItems: 'normal',
        height: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}
    >
      <Column />
      <Column />
      <Column />

      {/* Add new column */}
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}
      >
        <Button
          sx={{
            color: 'white',
            width: '100%'
          }}
          startIcon={<NoteAddIcon />}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
