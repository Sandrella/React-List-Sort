import React from "react"
import { DragSource, DropTarget } from "react-dnd"

let dragingIndex = -1
const Comp = ({ connectDragSource, connectDropTarget, children }) => {
    const style = {
        cursor: "move"
    }
    return connectDragSource(
        connectDropTarget(<div style={style}>{children}</div>)
    )
}

const cardSource = {
    beginDrag(props) {
        dragingIndex = props.index
        return {
            index: props.index
        }
    }
}

const cardTarget = {
    drop(props, monitor) {
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index
        if (dragIndex === hoverIndex) {
            return
        }
        props.moveRow(dragIndex, hoverIndex)
        monitor.getItem().index = hoverIndex
    }
}

const DragableComp = DropTarget("row", cardTarget,
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    })
)(
    DragSource("row", cardSource, (connect) => ({
        connectDragSource: connect.dragSource()
    }))(Comp)
)

export default DragableComp