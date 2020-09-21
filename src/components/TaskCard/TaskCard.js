import React,{useState} from "react";
import {CardActions,CardOrder,Card,Button,Task} from './TaskCard.styles';
import trash from 'assets/trash.svg';
import edit from 'assets/edit.svg';
import EditModal from "components/EditModal";
import DeleteModal from "components/DeleteModal";

const TaskCard=({
    taskId,
    cardOrder,
    borderColor,
    task,
    columnName,
    tasks,
    setTasks})=>{

    const[displayEditModal,setDisplayEditModal]=useState(false);
    const[displayDeleteModal,setDisplayDeleteModal]=useState(false);

    
    return(
        <Card borderColor={borderColor} draggable>
            <CardOrder>#{cardOrder}</CardOrder>     
            <Task>{task}</Task>     
            <CardActions borderColor={borderColor}>
                <Button type={'button'} onClick={()=>setDisplayEditModal(true)}>
                    <img src={edit} alt={"edit"}/> 
                </Button>
                <Button type={'button'} onClick={()=>setDisplayDeleteModal(true)}>
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
            <DeleteModal 
                tasks={tasks}
                setTasks={setTasks}
                taskId={taskId}
                displayDeleteModal={displayDeleteModal} 
                setDisplayDeleteModal={setDisplayDeleteModal}/>
        </Card>       
    );
};

export default TaskCard;