import React from "react";
import {Container} from "./Home.styles";
import Header from "components/Header";
import Footer from "components/Footer";
import TaskBoard from "components/TaskBoard";
import AddStatement from "components/AddStatement";


const Home=()=>{
return(
    <Container>
        <Header/>
        <AddStatement/>
        <TaskBoard/>
        <Footer/>
    </Container>
);
};

export default Home;