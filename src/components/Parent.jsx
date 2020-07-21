import React, { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Children from "./Children.js"
import update from "immutability-helper"

const Parent = (props) => {
    // 被拖拽的几项子组件的数组
    const { list } = props
    const [data, setData] = useState(list)

    // 使用了immutability-helper插件提供的方法，可原样copy，也可自定义拖拽事件
    const moveRow = (dragIndex, hoverIndex) => {
        const dragRow = data[dragIndex]
        const temp = update(data, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragRow]
            ]
        })
        setData([...temp])
    }
    return (
        // 被拖拽的子元素需要被包裹在<DndProvider backend={HTML5Backend}>中
        <DndProvider backend={HTML5Backend}>
            {data.map((item, index) => (
                <Children item={item} index={index} moveRow={moveRow}></Children>
            ))}
        </DndProvider>
    )
}

export default Parent