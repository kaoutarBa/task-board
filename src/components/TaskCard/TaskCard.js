import React,{useState} from "react";
import {CardActions,CardOrder,Card,Button,Task} from './TaskCard.styles';
import trash from 'assets/trash.svg';
import edit from 'assets/edit.svg';
import EditModal from "components/EditModal";

const TaskCard=({
    cardOrder,
    borderColor,
    task,
    columnName,
    tasks,
    setTasks})=>{

    const[displayEditModal,setDisplayEditModal]=useState(false);
    
    return(
        <Card borderColor={borderColor} draggable>
            <CardOrder>#{cardOrder}</CardOrder>     
            <Task>{task}</Task>     
            <CardActions borderColor={borderColor}>
                <Button type={'button'} >
                    <img src={edit} onClick={()=>setDisplayEditModal(true)} alt={"edit"}/> 
                </Button>
                <Button>
                    <img src={trash} alt={"trash"}/>
                </Button>
            </CardActions>
            <EditModal 
                task={task}
                taskIndex={cardOrder}
                defSection={columnName}
                tasks={tasks}
                setTasks={setTasks}
                displayEditModal={displayEditModal} 
                setDisplayEditModal={setDisplayEditModal}/>
        </Card>       
    );
};

export default TaskCard;