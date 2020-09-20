import React from "react";
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

const AddModal=({setDisplayModal})=>{
    const handleSave=()=>{
        setDisplayModal(false);
    };
    const handleCancel=()=>{
        setDisplayModal(false);
    };
return(
    
    <ModalContainer>
    <AddContainer>
        <ModalTitle >
            <img src={addForModal} alt={"addForModal"}/>
            <Title> Add</Title>
        </ModalTitle>
        <Dropdown defSection={'back log'}/>
    <AddInput/>
        <ModalActions >
            <CancelBtn type='button' onClick={handleCancel} >Cancel</CancelBtn>
            <SaveBtn type='button' onClick={handleSave} >Save</SaveBtn>
            
        </ModalActions>
    
    </AddContainer>
</ModalContainer>);
};

export default AddModal;