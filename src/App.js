import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// function App() {
//   return (//     <div className="App"> <h1>Hi</h1> </div>//   );
// }

class App extends Component{
  state = {
    persons: [
        {id:'p1', name:'Person1' , age:28, gender:'male'},
        {id:'p2', name:'Person2' , age:29 , gender:'male'},
        {id:'p3', name:'Person3' , age:29, gender:'female'},
    ],
      otherState:'some other value',
      showPersons: false
  }

  switchNameHandler = (newName)=>{
    console.log('button clicked');
    //   this.state.persons[0].name = 'Vinay'; // this is not how states manipulated
    //   const newState = {...this.state,persons:[0].name = 'Vinay'}

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
   render(){
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
            {this.state.persons.map((person,index) =>{
                return <ErrorBoundary key = {person.id}> <Person
                    name = {person.name}
                    age = {person.age}
                    gender = {person.gender}
                    click = {()=> this.deletePersonHandler(index)}

                    changed = {(event)=>this.nameChangedHandler(event,person.id)}
                /></ErrorBoundary>
                //person.id available here since were are in map method which hold individual person
            })}

        </div>
        );
        style.backgroundColor = 'red';
    }

    //const conditionalClassesToBeApplied = ['red','bold'].join(' ');
    const conditionalClassesToBeApplied = [];
    if(this.state.persons.length<=2)
    {
        conditionalClassesToBeApplied.push('red'); // =['red']
        console.log(conditionalClassesToBeApplied);
    }
    if(this.state.persons.length<=1)
    {
        conditionalClassesToBeApplied.push('bold'); // =['red','bold']
        console.log(conditionalClassesToBeApplied);
    }
       return (
               <div className="App">
                 <h1>Header</h1>
                 <p className={conditionalClassesToBeApplied.join(' ')}>Paragraph</p>
                   <button style={style}
                           onClick={this.togglePersonsHandler}>Toggle Person Handler</button>
                   {persons}
               </div>

       );
   }
}
export default App;
