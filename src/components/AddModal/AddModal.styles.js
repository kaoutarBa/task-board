import styled from "styled-components";

const  ModalContainer=styled.div`
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  background-color: rgba(0,0,0,0.1); 
  overflow-y:hidden;
  display:flex;
`;

const AddContainer= styled.div`
width: 474px;
height: 237px;
background: rgba(255, 255, 255, 0.99);
border: 1px solid #15950A;
border-radius: 10px;
margin:auto;
`;
const Title=styled.div`

font-family:sans-serif;
font-style: bold;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #15950A;

`;

const AddInput=styled.input`
width: 395px;
height: 92px;
outline:none;
border:none;
border-left:1px solid #15950A;
padding:10px;

`;

const SaveBtn=styled.button`
width: 76px;
height: 30px;
background: #15950A;
border: 1px solid #15950A;
box-sizing: border-box;
border-radius: 5px;

font-weight: 500;
font-size: 15px;
line-height: 18px;
color: #FEFEFE;
border:none;
outline:none;
cursor: pointer;

`;

const CancelBtn=styled.button`
width: 47px;
height: 18px;

font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: #15950A;
background-color: white; 

border:none;
outline:none;
cursor: pointer;
`;



export {ModalContainer,AddContainer,Title,AddInput,SaveBtn,CancelBtn};