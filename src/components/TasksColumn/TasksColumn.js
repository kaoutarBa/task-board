import React ,{useState}from "react";
import {Container,ColumnNameSection,CardsSection} from './TasksColumn.styles';
import TaskCard from "components/TaskCard";
import add from "assets/add.svg";
import AddModal from 'components/AddModal';

const TasksColumn=({
    columnName,
    background,
    borderColor,
    nameBackground,
    tasks,
    setTasks})=>{

    const[displayAddModal,setDisplayAddModal]=useState(false);

return(
        <Container background={background} borderColor={borderColor}>
            <ColumnNameSection nameBackground={nameBackground} borderColor={borderColor} >
                {columnName}
                <img src={add} alt={"add"} onClick={()=>setDisplayAddModal(true)} style={{cursor:"pointer"}}/>
            </ColumnNameSection>
            <CardsSection>
                {tasks.filter(task=>task.column===columnName).map((t,index)=><TaskCard 
                key={index}
                cardOrder={t.taskIndex} 
                borderColor={borderColor} 
                task={t.task}/>)}
            </CardsSection>
            <AddModal 
            defSection={columnName}
            tasks={tasks}
            setTasks={setTasks}
            setDisplayModal={setDisplayAddModal} 
            displayModal={displayAddModal}/>
        </Container>
    );
};

export default TasksColumn;