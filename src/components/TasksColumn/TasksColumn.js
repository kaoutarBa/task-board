import React from "react";
import {Container,ColumnNameSection,CardsSection} from './TasksColumn.styles';
import TaskCard from "components/TaskCard";
import add from "assets/add.svg";


const TasksColumn=({columnName,background,borderColor,nameBackground})=>{
return(
        <Container background={background} borderColor={borderColor}>
            <ColumnNameSection nameBackground={nameBackground} borderColor={borderColor} >
                {columnName}
                <img src={add} alt={"add"} style={{cursor:"pointer"}}/>
            </ColumnNameSection>
            <CardsSection>   
                <TaskCard cardOrder={"1"} borderColor={borderColor}/> 
                <TaskCard cardOrder={"2"} borderColor={borderColor}/> 
                <TaskCard cardOrder={"2"} borderColor={borderColor}/> 
            </CardsSection>
        </Container>
    );
};

export default TasksColumn;