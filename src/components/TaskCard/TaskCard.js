import React from "react";
import {CardActions,CardOrder,Card,Button,Task} from './TaskCard.styles';
import trash from 'assets/trash.svg';
import edit from 'assets/edit.svg';

const TaskCard=({cardOrder})=>{
return(
        <Card>
            <CardOrder>#{cardOrder}</CardOrder>     
            <Task> task</Task>     
            <CardActions>
                <Button>
                    <img src={edit} alt={"edit"}/> 
                </Button>
                <Button>
                    <img src={trash} alt={"trash"}/>
                </Button>
            </CardActions>
        </Card>       
    );
};

export default TaskCard;