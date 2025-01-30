import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import sorts from '~/utils/sorts'
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
  // const orderedColumns = sorts(board?.columns, board?.columnOrderIds, '_id')
  const [orderedColumns, setOrderedColumns] = useState([])
  // Di chuyển 10px thì mới nhận event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 }
  })
  const mySensor = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setOrderedColumns(sorts(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (e) => {
    const { active, over } = e

    if (!over) return

    if (active.id !== over.id) {
      const columnIds = orderedColumns.map((c) => c._id)

      const oldIndex = columnIds.indexOf(active.id)
      const newIndex = columnIds.indexOf(over.id)

      setOrderedColumns(arrayMove(orderedColumns, oldIndex, newIndex))
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={mySensor}>
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
    </DndContext>
  )
}

export default BoardContent
