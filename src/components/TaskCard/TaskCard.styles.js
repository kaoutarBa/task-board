import styled from "styled-components";



const Card=styled.div`
width: 95%;
height: 76px;
background: #FEFEFE;
border: 1px solid #950A7F;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 2px;
margin-bottom:5px;

display:grid;
grid-template-columns:100% ;
grid-template-rows:17px auto 17px;

`;

const CardOrder=styled.div`
height:16px;
grid-row:1/3;
grid-column:1/1;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 9px;
color: #8B7D7D;
padding:5px;
`;

const CardActions=styled.div`
display:flex;
justify-content:flex-end;
border-top:1px solid #950A7F;
height:17px;
grid-row:3/3;
padding-right:5px;
`;
const Task=styled.div`
grid-row:2/3;
grid-column:1/1;
padding-left:20px;
width:100%;
font-size: 14px;
`;
const Button=styled.button`
outline:none;
border:none;
background: #FEFEFE;
height:16px;
cursor:pointer;
&:hover{
    opacity:0.7;
  
}
`;


export {Card,CardActions,CardOrder,Button,Task};


