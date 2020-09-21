import React from "react";
import {
    ModalContainer,
    DeleteContainer,
    Title,
    DeleteBtn,
    CancelBtn,
    ModalActions,
    DeleteStatement,
    ModalTitle} from "./DeleteModal.styles";
import trashForModal from "assets/trashForModal.svg";


const DeleteModal=({
    taskId,
    tasks,
    setTasks,
    displayDeleteModal,
    setDisplayDeleteModal,
    })=>{

    const handleSave=()=>{
        const newTasks=tasks.filter(el=>el.id!==taskId);
        setTasks([...newTasks]);
        setDisplayDeleteModal(false);
    };
    const handleCancel=()=>{
        setDisplayDeleteModal(false);
    };
    

return(
    <ModalContainer display={displayDeleteModal}>
        <DeleteContainer>
            <ModalTitle >
                <img src={trashForModal} alt={"trashForModal"}/>
                <Title>Delete</Title>
            </ModalTitle>
            <DeleteStatement>
                Are you sure you want to <strong>delete</strong> this task ?
            </DeleteStatement>
            <ModalActions >
                <CancelBtn type={'button'} onClick={handleCancel} >Cancel</CancelBtn>
                <DeleteBtn type={'button'} onClick={handleSave} >Delete</DeleteBtn>
            </ModalActions>
        </DeleteContainer>
    </ModalContainer>
    );
};

export default DeleteModal;