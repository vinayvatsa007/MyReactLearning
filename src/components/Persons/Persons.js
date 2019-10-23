import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    render(){
        return this.props.persons.map((person,index) => {
            return <Person name={person.name}
                           age={person.age}
                           key={person.id}
                           gender={person.gender}
                           click={() => this.props.clicked(index)}
                           changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}
// const persons =(props)=> props.persons.map((person,index) => {
//     return <Person name={person.name}
//                    age={person.age}
//                    key={person.id}
//                    gender={person.gender}
//                    click={() => props.clicked(index)}
//                    changed={(event) => props.changed(event, person.id)}
//     />
// });
export default Persons;