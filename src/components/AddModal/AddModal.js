import React,{useState} from "react";
import {ModalContainer,
    AddContainer,
    Title,
    AddInput,
    SaveBtn,
    CancelBtn,
    ModalActions,
    ModalTitle} from "./AddModal.styles";
import addForModal from "assets/addForModal.svg";
import Dropdown from "components/Dropdown";


const AddModal=({
    tasks,
    setTasks,
    displayModal,
    setDisplayModal,
    defSection})=>{

    const[inputValue,setInputValue]=useState("");
    const[section,setSection]=useState(defSection);

    const handleSave=()=>{
        const lastIndex=tasks.filter(task=>task.column===section)
                            .sort((a,b)=>a.taskIndex-b.taskIndex);                
        setTasks([...tasks,
                {task:inputValue,
                taskIndex:lastIndex.length+1,
                column:section}
            ]);
        setDisplayModal(false);
        setInputValue("");
    };
    const handleCancel=()=>{
        setDisplayModal(false);
        setInputValue("");
    };
    const handleChange=(e)=>{
        setInputValue(e.target.value);
    };

return(
    <ModalContainer display={displayModal}>
        <AddContainer>
            <ModalTitle >
                <img src={addForModal} alt={"addForModal"}/>
                <Title>Add</Title>
            </ModalTitle>
            <Dropdown section={defSection} setSection={setSection} color={"#15950A"} />
            <AddInput 
                tabindex={0}
                placeholder={"Add a task"}
                onChange={handleChange}
                value={inputValue} />
            <ModalActions >
                <CancelBtn type={'button'} onClick={handleCancel} >Cancel</CancelBtn>
                <SaveBtn type={'button'} onClick={handleSave} >Save</SaveBtn>
            </ModalActions>
        </AddContainer>
    </ModalContainer>
    );
};

export default AddModal;