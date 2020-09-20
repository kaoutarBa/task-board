import React,{useState} from "react";
import {DropdownContainer,DropdownContent,Choice} from "./Dropdown.styles";
import polygone from "assets/polygone.svg";

const Dropdown=({defSection})=>{
    const [section,setSection]=useState(defSection);
    const [display,setDisplay]=useState('none');

    const sections=['backlog','to do','doing','done'];

    const handleClick=(el)=>{
        setSection(el);
    };
    const handleDisplay=(e)=>{
        setDisplay(display==='block'?'none':'block');
    };
    return(
        <DropdownContainer onClick={handleDisplay}>
            {section}
            <img src={polygone} alt={"polygone"} />
            <DropdownContent display={display} >
                {sections.map((el,index)=><Choice key={index} onClick={()=>handleClick(el)}>{el}</Choice>)}
            </DropdownContent>
        </DropdownContainer>
    )
};

export default Dropdown;