import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import sorts from '~/utils/sorts'
import {
  defaultDropAnimationSideEffects,
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_TYPE = {
  COLUMN: 'ACTIVE_DRAG_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_TYPE_CARD'
}

function BoardContent({ board }) {
  // const orderedColumns = sorts(board?.columns, board?.columnOrderIds, '_id')
  const [orderedColumns, setOrderedColumns] = useState([])
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  // console.log(activeDragItemId)
  // console.log(activeDragItemType)
  // console.log(activeDragItemData)

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

      if (oldIndex === -1 || newIndex === -1) {
        console.warn('Invalid drag indices', { active, over })
        return
      }

      setOrderedColumns(arrayMove(orderedColumns, oldIndex, newIndex))
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }
  const handleDragStart = (e) => {
    // console.log(e)

    setActiveDragItemId(e?.active?.id)
    setActiveDragItemType(
      e?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_TYPE.CARD
        : ACTIVE_DRAG_TYPE.COLUMN
    )
    setActiveDragItemData(e?.active?.data?.current)
  }

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      sensors={mySensor}
    >
      <Box
        sx={{
          bgcolor: 'primary.main',
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumns} />

        {/* Hiệu ứng mờ giữ chỗ khi thả  */}
        <DragOverlay
          dropAnimation={{
            sideEffects: defaultDropAnimationSideEffects({
              styles: {
                active: {
                  opacity: '0.5'
                }
              }
            })
          }}
        >
          {activeDragItemType &&
            (activeDragItemType === ACTIVE_DRAG_TYPE.COLUMN ? (
              <Column column={activeDragItemData} />
            ) : (
              <Card card={activeDragItemData} />
            ))}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
