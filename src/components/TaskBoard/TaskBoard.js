import React from "react";
import TasksColumn from "../TasksColumn";
import {BoardContainer} from "./TaskBoard.styles";


const TaskBoard=()=>{
    const taskColumns=[
        {name:"backlog",borderColor:"#950A7F",background:"#FAE7F8",nameBackground:"#F2C8EE"},
        {name:"to do ",borderColor:"#1A82AF",background:"#E7F5FA",nameBackground:"#C0E7F8"},
        {name:"doing",borderColor:"#BD810C",background:"#FCF5DD",nameBackground:"#FBD894"},
        {name:"done",borderColor:"#15950A",background:"#E9FFE8",nameBackground:"#C5FBC0"}]
return(
<BoardContainer>
    {taskColumns.map(column=>
        <TasksColumn  columnName={column.name} 
            borderColor={column.borderColor}
            background={column.background} 
            nameBackground={column.nameBackground} />)}

</BoardContainer>);
};

export default TaskBoard;