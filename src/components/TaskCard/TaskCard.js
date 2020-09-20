import React,{useState} from "react";
import {CardActions,CardOrder,Card,Button,Task} from './TaskCard.styles';
import trash from 'assets/trash.svg';
import edit from 'assets/edit.svg';
import AddModal from '../AddModal';

const TaskCard=({cardOrder,borderColor})=>{
    const[displayModal,setDisplayModal]=useState(true);
return(
        <Card borderColor={borderColor} draggable>
            <CardOrder>#{cardOrder}</CardOrder>     
            <Task> task</Task>     
            <CardActions borderColor={borderColor}>
                <Button>
                    <img src={edit} alt={"edit"}/> 
                </Button>
                <Button>
                    <img src={trash} alt={"trash"}/>
                </Button>
            </CardActions>
        <AddModal setDisplayModal={setDisplayModal}/>
        </Card>       
    );
};

export default TaskCard;