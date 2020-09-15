import React from "react";
import {Container,ColumnNameSection,CardsSection} from './TasksColumn.styles';
import TaskCard from "components/TaskCard";
import add from "assets/add.svg";


const TasksColumn=({columnColor,color,borderColor,sectionName,tasks})=>{
return(
        <Container>
            <ColumnNameSection>
                {sectionName}
                <img src={add} alt={"add"}/>
            </ColumnNameSection>
            <CardsSection>   
                <TaskCard cardOrder={"1"}/> 
                <TaskCard cardOrder={"2"}/> 
                <TaskCard cardOrder={"3"}/> 
                <TaskCard cardOrder={"4"}/> 
            </CardsSection>
        </Container>
    );
};

export default TasksColumn;