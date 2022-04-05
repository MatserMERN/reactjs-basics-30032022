import React from "react";
import Greet from "./1.components/1.function/Greet";
import { Named as Desatnick } from "./1.components/1.function/Named";
import { NamedOne } from "./1.components/1.function/NamedOne";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingClass from "./3.props/GreetingClass";
import GreetingOne from "./3.props/GreetingOne";
import GreetingTwo from "./3.props/GreetingTwo";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import MessageOne from "./4.state/MessageOne";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";

function App() {
  function getName(){
    return "Scott Desatnick"
  }
  return (
    <React.Fragment>
        <Parent />
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <br />
        <ClassClick /> */}
        {/* <MessageOne name="Scott" city="Boston"/> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <GreetingClass name="Scott" email="scott@ef.com" city="Boston">
          <p>This is child component</p>
        </GreetingClass> */}
        {/* <GreetingTwo productId={1} productName="Alexa"/> */}
        {/* <GreetingOne firstName="Scott" lastName="Desatnick" country="Boston"/> */}
        {/* <Greeting id={1} 
                  name="Scott" 
                  email="scott@ef.com" 
                  isAdmin ={true} 
                  skills={{skill1: 'Great Boss', skill2: 'Agile Specialist'}}
                  getName= {getName}
                  countries = {["USA", "Australia", "India"]} 
        /> */}
        {/* <Greeting id={2} name="Adam"  email="adam@ef.com" isAdmin ={false}/>
        <Greeting id={3} name="Tuan"  email="tuan@ef.com" isAdmin ={true}/> */}
        {/* <Hello /> */}
        {/* <Greet />
        <Desatnick />
        <NamedOne />
        <Welcome />
        <WelcomeOne /> */}
    </React.Fragment>
  );
}

export default App;
