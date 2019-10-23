/**
 * Created by Vinay.Sharma on 10/20/2019.
 */
import React,{Component} from 'react';
import './Person.css';

class Person extends Component{
    render(){
        return(
            <div className="Person">
                <p onClick={this.props.click}>i am a {this.props.name} and age:{this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
};
export default Person;


