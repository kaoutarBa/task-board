import styled from "styled-components";

const Container=styled.section`
width: 217px;
background: #FAE7F8;
border: 1px solid #95077E;
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 2px;
`;
const ColumnNameSection=styled.div`
width: 100%;
height: 50px;
background: #F2C8EE;
border-bottom: 1px solid #950A7F;
border-radius: 2px;
display:flex;
justify-content:space-around;
align-items:center;
font-weight: bold;
font-size: 16px;
`;

const CardsSection=styled.div`
width:100%;
min-height: 50px;
display:flex;
flex-direction:column;
align-items:center;
margin-top:5px;
margin-bottom:4px;

`;




export {Container,ColumnNameSection,CardsSection};

