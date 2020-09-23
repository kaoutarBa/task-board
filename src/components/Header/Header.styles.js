import styled from "styled-components";


const TaskBoardHeader=styled.header`
width:100%;
height:60px;
grid-column:1/1;
grid-row:1/2;
display:flex;
flex-direction:row;
border-bottom:1px solid #CDC4C4;
`;
const TaskBoardTitle=styled.div`
width: 20%;

font-family: sans-serif;
font-style: normal;
font-weight: bold;
font-size: 28px;
line-height: 33px;

color: #848587;

display:flex;
align-items:center;
justify-content:space-around;
`;

const Bordered=styled.div`
height:60px;
width:80%;
display:flex;
align-items:center;
justify-content:flex-end;
`;

const Button=styled.button`
width:40px;
height:40px;
margin-left:5px;
outline:none;
border:none;
background:inherit;
cursor:pointer;
`;

export {TaskBoardHeader,Bordered,TaskBoardTitle,Button};