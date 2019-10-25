import React, {PureComponent} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent{
    constructor(props){
        super(props);
        console.log('[App.js] inside constructor', props);
        this.state = {
            persons: [
                {id:'p1', name:'Person1' , age:28, gender:'male'},
                {id:'p2', name:'Person2' , age:29 , gender:'male'},
                {id:'p3', name:'Person3' , age:29, gender:'female'},
            ],
            otherState:'some other value',
            showPersons: false
        };
    }
    componentWillMount(){
        console.log('[App.js] inside componentWillMount');
    }
    componentDidMount(){
        console.log('[App.js] inside componentDidMount');
    }

  switchNameHandler = (newName)=>{
    console.log('button clicked');
    this.setState({
        persons: [
          {name:newName , age:28, gender:'maile'},
          {name:'Person22' , age:29 , gender:'maile'},
          {name:'Person33' , age:29, gender:'femaile'},
          ]
      });
  }
  nameChangedHandler = (event,id)=>{
      const personIndex = this.state.persons.findIndex(p => {
          return p.id ===id;
      })

      //modern approach
      const person = {
          ...this.state.persons[personIndex]
      };
      //alternate approach
      //const person = object.assign({},this.state.persons[personIndex]);

      person.name = event.target.value;

      const updatedPersons = [...this.state.persons];
      updatedPersons[personIndex] = person;

      this.setState({persons:updatedPersons});
  }
    togglePersonsHandler = ()=> {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
      console.log('delete clicked');
      // const persons = this.state.persons;
      //const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
    }


    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[App.js] inside shouldComponetUpdate - ', nextProps, nextState);
    //     //return nextProps.persons !== this.props.persons; // will cancel processing
    //     //return true;
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }
    componentWillUpdate(nextProps, nextState){
        console.log('[App.js] inside componentWillUpdate - ', nextProps.persons, nextState, this.props.persons);
        return nextProps.persons !== this.props.persons;
    }
    componentDidUpdate(){
        console.log('[App.js] inside componentDidUpdate - ', this.props.persons);

    }

   render(){
       console.log('[App.js] inside render');
   // pass in quotes because its in js not css
    const style = {
      backgroundColor:'green',
        color:'white',
        font:'inherit',
        border: '1px solid blue',
        padding:'8px',
        cursor:'pointer'
    };
    let persons = null;
    if (this.state.showPersons)
    {
        persons = (
            <div>
                <Persons
                persons = {this.state.persons}
                clicked = {this.deletePersonHandler}
                changed = {this.nameChangedHandler}
                />
            </div>
        );
        style.backgroundColor = 'red';
    }


       return (
               <div className="App">
                   <button onClick={()=> {this.setState({showPersons:true})}}
                   >Show Persons</button>
                   <Cockpit
                       appTitle = {this.props.title}
                        persons={this.state.persons}
                        clicked ={this.togglePersonsHandler}
                        style={style} />
                 {persons}
               </div>

       );
   }
}
export default App;
