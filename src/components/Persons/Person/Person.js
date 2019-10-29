/**
 * Created by Vinay.Sharma on 10/20/2019.
 */
import React,{Component} from 'react';
import './Person.css';

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
        return(
            <div className="Person">
                <p onClick={this.props.click}>i am a {this.props.name} and age:{this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
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


