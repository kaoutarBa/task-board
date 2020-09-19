import React from "react";
import {CardActions,CardOrder,Card,Button,Task} from './TaskCard.styles';
import trash from 'assets/trash.svg';
import edit from 'assets/edit.svg';
import AddModal from '../AddModal';

const TaskCard=({cardOrder,borderColor})=>{
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
            <AddModal/>
        </Card>       
    );
};

export default TaskCard;