import React from "react";
import {ModalContainer,
    AddContainer,
    Title,
    AddInput,
    SaveBtn,
    CancelBtn} from "./AddModal.styles";
import addForModal from "assets/addForModal.svg";

const AddModal=()=>{
return(
<ModalContainer>
    <AddContainer>
        <div style={{display:"flex"}}>
            <img src={addForModal} alt={"addForModal"}/>
            <Title> Add</Title>
        </div>
    <AddInput/>
    <SaveBtn>Save</SaveBtn>
    <CancelBtn>Cancel</CancelBtn>
    </AddContainer>
</ModalContainer>);
};

export default AddModal;