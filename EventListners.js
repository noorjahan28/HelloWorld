import './EventListners.css';
import { Component } from 'react';
export default class EventListners extends Component{
    render(){
        return(
            <form className="EventListners">
                    <div className="EventListnersContent">
                        <div className="page"> 
                            <b for="name">  Name</b>
                            <input type="text" id="name" required/>
                        </div>
                        <br/>
                        <div className="page">
                            <b for="Gender"> Gender</b>
                            <input type="text" id="Gender" required/>
                        </div>
                        <br/>
                        <div className="page">
                            <b for="Department"> Department</b>
                            <input type="text" id="Department" required/>
                        </div>
                        <br/>
                        <div className="page">
                            <b for="t&c">Terms & Conditions </b>
                            <input type="checkbox" id="t&c" />
                        </div>
                        <br/>
                        <div className="page">
                            <input id='submitButton' type="Button" value="Submit"></input>

                        </div>
        </div>
        </form>
        );
    }
}