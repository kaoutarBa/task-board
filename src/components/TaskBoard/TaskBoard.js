import React,{useState,useEffect} from "react";
import TasksColumn from "../TasksColumn";
import {BoardContainer} from "./TaskBoard.styles";



// var tasks1=[{id:" jhuhugu",task:"batata",taskIndex:1,column:"done"}]
const taskColumns=[
    {name:"backlog",borderColor:"#950A7F",background:"#FAE7F8",nameBackground:"#F2C8EE"},
    {name:"to do ",borderColor:"#1A82AF",background:"#E7F5FA",nameBackground:"#C0E7F8"},
    {name:"doing",borderColor:"#BD810C",background:"#FCF5DD",nameBackground:"#FBD894"},
    {name:"done",borderColor:"#15950A",background:"#E9FFE8",nameBackground:"#C5FBC0"}];

const TaskBoard=()=>{
    const [tasks,setTasks]=useState([]);
    const [draggedTaskId,setDraggedTaskId]=useState("");
    const [targetColumn,setTargetColumn]=useState("");

    useEffect(() => {
        const data = localStorage.getItem("tasks");
        if (data) {
            setTasks(JSON.parse(data));
        }
    }, [setTasks]);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      });
    

    const handleDrag=(e,id)=>{
        e.preventDefault();
        e.stopPropagation();
        setDraggedTaskId(id);
    };
    const handleDrop=(e,background)=>{
        e.preventDefault();
        e.stopPropagation();
        
        if(e.target.className.indexOf("drop-zone")!==-1){
            e.target.style.background=background;
        };
        const newsTasks=tasks.map(t=>{
            if(t.id===draggedTaskId){
                t.column=targetColumn;
            };
            return t;
        });
        setTasks([...newsTasks]);
    };
    const handleDragOver=(e,col)=>{
        e.preventDefault();
        e.stopPropagation();
        if(e.target.className.indexOf("drop-zone")!==-1){
            e.target.style.background="#1d1846";
        };
        setTargetColumn(col);
    };

    const handleDragLeave=(e,background)=>{
        e.preventDefault();
        e.stopPropagation();
        if(e.target.className.indexOf("drop-zone")!==-1){
            e.target.style.background=background;
        };
    };


return(
<BoardContainer>
    {taskColumns.map((column,index)=>
        <TasksColumn
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            handleDragOver={handleDragOver}
            handleDrag={handleDrag}
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