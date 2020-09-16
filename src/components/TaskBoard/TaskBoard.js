import React from "react";
import TasksColumn from "../TasksColumn";
import {BoardContainer} from "./TaskBoard.styles";


const TaskBoard=()=>{
return(
<BoardContainer>
    <TasksColumn/>
</BoardContainer>);
};

export default TaskBoard;