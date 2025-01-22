import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'
import GroupIcon from '@mui/icons-material/Group'
import { Card as MuiCard } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

function Card({ hideMedia }) {
  return (
    <MuiCard
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}
    >
      {!hideMedia && (
        <CardMedia
          sx={{ height: 140 }}
          image="https://image.tienphong.vn/w890/Uploaded/2025/neg_olyrlys/2019_06_02/26_LVZH.jpg"
          title="green iguana"
        />
      )}

      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Liverpool FC</Typography>
      </CardContent>

      {!hideMedia && (
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          <Button size="small" startIcon={<GroupIcon />}>
            20
          </Button>
          <Button size="small" startIcon={<CommentIcon />}>
            15
          </Button>
          <Button size="small" startIcon={<AttachmentIcon />}>
            10
          </Button>
        </CardActions>
      )}
    </MuiCard>
  )
}

export default Card
