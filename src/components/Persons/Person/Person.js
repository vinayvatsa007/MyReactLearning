/**
 * Created by Vinay.Sharma on 10/20/2019.
 */
import React,{Component} from 'react';
import './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';

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
        if (this.props.position ===0)
        {
            this.inputElement.focus();
        }


    }
    render(){
        console.log('[Person.js] inside render');
        return(
            <Aux>
                <p onClick={this.props.click}>i am a {this.props.name} and age:{this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text"
                       ref = {
                           (inp)=>{
                               this.inputElement = inp
                           }
                       }
                       onChange={this.props.changed}
                       value={this.props.name}
                />
            </Aux>
        );

        // return(
        //     [
        //         <p key="1" onClick={this.props.click}>i am a {this.props.name} and age:{this.props.age}</p>,
        //         <p key="2">{this.props.children}</p>,
        //         <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        //     ]
        // );
    }
}
// enforcing and defining proptypes - some rules can be enforced
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string ,
    age: PropTypes.number ,
    changed: PropTypes.func
};
export default withClass(Person,"Person");


