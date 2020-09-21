import React,{useState} from "react";
import TasksColumn from "../TasksColumn";
import {BoardContainer} from "./TaskBoard.styles";



var tasks1=[{task:"batata",taskIndex:1,column:"done"}]

const TaskBoard=()=>{
    const [tasks,setTasks]=useState([]);
    const taskColumns=[
        {name:"backlog",borderColor:"#950A7F",background:"#FAE7F8",nameBackground:"#F2C8EE"},
        {name:"to do ",borderColor:"#1A82AF",background:"#E7F5FA",nameBackground:"#C0E7F8"},
        {name:"doing",borderColor:"#BD810C",background:"#FCF5DD",nameBackground:"#FBD894"},
        {name:"done",borderColor:"#15950A",background:"#E9FFE8",nameBackground:"#C5FBC0"}];


return(
<BoardContainer>
    {taskColumns.map((column,index)=>
        <TasksColumn  
            columnName={column.name} 
            borderColor={column.borderColor}
            background={column.background} 
            nameBackground={column.nameBackground}
            key={index}
            tasks={tasks||[]}
            setTasks={setTasks}
            />)}

</BoardContainer>);
};

export default TaskBoard;