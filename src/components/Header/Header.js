import React from "react";
import {
    TaskBoardHeader,
    Bordered,
    TaskBoardTitle,
    Button} from './Header.styles';
import share from "assets/share.svg";
import githubHeader from "assets/githubHeader.svg";
import listCheck from "assets/listCheck.svg";

const Header=()=>{


    const handleClick=()=>{
        navigator.clipboard.writeText("https://github.com/kaoutarBa/task-board").then(
            function() {
                alert("link copied to clipboard!");
            },
            function() {
                console.log(" clipboard write failed ");
            }
            );
    };

return(
    <TaskBoardHeader>
        <TaskBoardTitle>
            <img src={listCheck} alt={"listCheck"}/>
            Task Board
        </TaskBoardTitle>
        <Bordered>
            <Button type={"button"} >
                <a href={"https://github.com/kaoutarBa/task-board"}  target={"_blank"}>
                    <img src={githubHeader} alt={"github"}/>
                </a>
            </Button>
            <Button type={"button"} onClick={handleClick}>      
                <img src={share} alt={"share"}/>
            </Button>
        </Bordered>
    </TaskBoardHeader>      
    );
};

export default Header;