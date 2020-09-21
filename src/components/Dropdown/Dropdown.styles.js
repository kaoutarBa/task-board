import styled from "styled-components";

const DropdownContainer=styled.div`
width: 102px;
height: 19px;
border-bottom:1px solid ${props=>props.bottomBorderColor};
font-family: sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
padding-left:5px;
cursor:pointer;
display:flex;
justify-content:space-between;
align-self:flex-end;
margin-right:19px;
`;

const DropdownContent=styled.div`
display: ${props=>props.display};
position: absolute;
background-color: #f9f9f9;
width: 102px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
margin-top:20px;
padding-left:5px;
z-index: 1;
`;

const Choice=styled.div`
height: 16px;
padding:5px;
font-family: sans-serif;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;
color: #000000;
&:hover{
    color:gray;
}

`;


export {DropdownContainer,DropdownContent,Choice};