import React from "react"
import DragableComp from "./DragableComp.js"

const Children = ({ item, index, moveRow }) => {
    return (
        //   index和moveRow方法提供给通用组件DragableComp使用
        <DragableComp index={index} moveRow={moveRow}>
            {/* 自定义被拖拽的每一项子组件 */}
            <div
                style={{
                    background: "red",
                    height: 100,
                    marginBottom: 10
                }}
            >
                <h1>{item}</h1>
            </div>
        </DragableComp>
    )
}

export default Children