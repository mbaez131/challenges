import React, { Component } from "react";
// import  "./App.css";
import Aux from "./hoc/Aux";
import BasicInfo from "./BasicInfo/BasicInfo"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [{
                name: "Marcos Baez",
                age : 22,
                dob : "11/03/1998",
            },
            {
                name: "Jonathan MonkeyMan",
                age : 220,
                dob : "11/03/2004",
            },
            {
                name: "Jimmy Neutron",
                age : 13121,
                dob : "11/03/2000",
            }
            ]
        };
    }

    render() {
        return (
           <>
               {this.state.persons.map((employee)=>{
                   return (<BasicInfo name={employee.name} age={employee.age} dob={employee.dob}/>)
               })}
           </> 
        );
    }
}

export default App;

