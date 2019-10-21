import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
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

      // const newState = {
      //     persons: [
      //         {name:'Person111' , age:28, gender:'maile'},
      //         {name:'Person222' , age:29 , gender:'maile'},
      //         {name:'Person333' , age:29, gender:'femaile'},
      //     ]
      // };
      // this.setState(newState);
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
      backgroundColor:'white',
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
                return <Person
                    name = {person.name}
                    age = {person.age}
                    gender = {person.gender}
                    click = {()=> this.deletePersonHandler(index)}
                    key = {person.id}
                    changed = {(event)=>this.nameChangedHandler(event,person.id)}
                />
                //person.id available here since were are in map method which hold individual person
            })}

        </div>
        );
    }
       return (
           <div className="App">
             <h1>Header</h1>
             <p>Paragraph</p>
             <button style={style}
                 onClick={this.switchNameHandler.bind(this,'Vinay1')}>Switch Name</button>
             {/*another way of passing parameter to function call by passing a annonymous function instead of func reference*/}
             <button style={style}
                     onClick={()=>this.switchNameHandler('Vinay3')}>Switch Name2</button>
               <button style={style}
                       onClick={this.togglePersonsHandler}>Toggle Person Handler</button>
               {persons}
           </div>

       );
   }
}
export default App;
