/**
 * Created by Vinay.Sharma on 10/20/2019.
 */
import React,{Component} from 'react';
import './Person.css';
import WithClass from '../../../hoc/WithClass';

class Person extends Component{
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor', props);
    }
    componentWillMount(){
        console.log('[Person.js] inside componentWillMount');
    }
    componentDidMount(){
        console.log('[Person.js] inside componentDidMount');
    }
    render(){
        console.log('[Person.js] inside render');
        // wrap with custom common componet <WithClass> instead of div which will wrap it with div for us
        return(
            <WithClass classes="Person">
                <p onClick={this.props.click}>i am a {this.props.name} and age:{this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </WithClass>
        );

        // return(
        //     [
        //         <p key="1" onClick={this.props.click}>i am a {this.props.name} and age:{this.props.age}</p>,
        //         <p key="2">{this.props.children}</p>,
        //         <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        //     ]
        // );
    }
};
export default Person;


