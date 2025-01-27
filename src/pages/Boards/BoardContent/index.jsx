import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import sorts from '~/utils/sorts'

function BoardContent({ board }) {
  const orderedColumns = sorts(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}
    >
      <ListColumns columns={orderedColumns} />
    </Box>
  )
}

export default BoardContent
