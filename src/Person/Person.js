/**
 * Created by Vinay.Sharma on 10/20/2019.
 */
import React,{Component} from 'react';
import './Person.css';
import Radium from 'radium';
// function person() {
//     return(
//         <div>person comp</div>
//     );
// }
// export default person;


// export function person() {
//     return(
//         <div>person comp</div>
//     );
// }

const person = (props)=>{
    return(
        //<div>i am a {props.name} and age:{Math.floor(Math.random()*30)}</div>
    <div className="Person">
        <p onClick={props.click}>i am a {props.name} and age:{props.age}</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </div>
    );
}
export default Radium(person);
// export default person;

