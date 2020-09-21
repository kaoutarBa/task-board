import React,{useState} from "react";
import {ModalContainer,
    EditContainer,
    Title,
    EditInput,
    SaveBtn,
    CancelBtn,
    ModalActions,
    ModalTitle} from "./EditModal.styles";
import edit from "assets/edit.svg";
import Dropdown from "components/Dropdown";


const EditModal=({
    task,
    defSection,
    taskIndex,
    tasks,
    setTasks,
    displayEditModal,
    setDisplayEditModal,
    })=>{

    const[inputValue,setInputValue]=useState(task);
    const[section,setSection]=useState(defSection);


    const handleSave=()=>{
        const lastIndex=tasks.filter(task=>task.column===section)
        .sort((a,b)=>a.taskIndex-b.taskIndex);  
        const newTasks=tasks.map(el=>{
            if(el.task===task && el.taskIndex===taskIndex){
                el.task=inputValue;
                el.column=section;
                el.taskIndex=lastIndex.length+1;
            }
            
            return el;
        });
        setTasks([...newTasks]);
        setDisplayEditModal(false);
        setInputValue("");
    };
    const handleCancel=()=>{
        setDisplayEditModal(false);
        setInputValue("");
    };
    const handleChange=(e)=>{
        setInputValue(e.target.value);
    };

return(
    <ModalContainer display={displayEditModal}>
        <EditContainer>
            <ModalTitle >
                <img src={edit} alt={"EditForModal"}/>
                <Title>Edit</Title>
            </ModalTitle>
            <Dropdown section={section} setSection={setSection} color={"#113FB4"}/>
            <EditInput 
                tabindex={0}
                placeholder={"Edit a task"}
                onChange={handleChange}
                value={inputValue} />
            <ModalActions >
                <CancelBtn type={'button'} onClick={handleCancel} >Cancel</CancelBtn>
                <SaveBtn type={'button'} onClick={handleSave} >Save</SaveBtn>
            </ModalActions>
        </EditContainer>
    </ModalContainer>
    );
};

export default EditModal;