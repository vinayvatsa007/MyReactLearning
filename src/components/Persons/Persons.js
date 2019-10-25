import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props){
        super(props);
        console.log('[Persons.js] inside constructor', props);
    }
    componentWillMount(){
        console.log('[Persons.js] inside componentWillMount');
    }
    componentDidMount(){
        console.log('[Persons.js] inside componentDidMount');
    }
    componentWillReceiveProps(nextProps){
        console.log('[Persons.js] inside componentWillReceiveProps - ', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] inside shouldComponetUpdate - ', nextProps, nextState, this.props.persons);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked
    //     // return nextProps.persons !== this.props.persons;
    // }

    componentWillUpdate(nextProps, nextState){
        console.log('[Persons.js] inside componentWillUpdate - ', nextProps.persons, nextState, this.props.persons);
        return nextProps.persons !== this.props.persons;
    }
    componentDidUpdate(){
        console.log('[Persons.js] inside componentDidUpdate - ', this.props.persons);

    }

    render(){
        return this.props.persons.map((person,index) => {
            console.log('[Persons.js] inside render');
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