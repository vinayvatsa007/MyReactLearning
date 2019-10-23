import React from 'react';
import Person from './Person/Person';
// const Persons(props){
//     return ();
// } // same can be achieved using arrow function
// const Persons(props)=>( ); // this will omit the return statement

// click = {()=> props.deletePersonHandler(index)}
// key = {person.id}
// changed = {(event)=>props.nameChangedHandler(event,person.id)}
const persons =(props)=> props.persons.map((person,index) => {
    return <Person name={person.name}
                   age={person.age}
                   key={person.id}
                   gender={person.gender}
                   click={() => props.clicked(index)}
                   changed={(event) => props.changed(event, person.id)}
    />
});
export default persons;