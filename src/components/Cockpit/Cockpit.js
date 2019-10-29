import React from 'react';

import Aux from '../../hoc/Auxiliary';

const cockpit = (props) => {
    const conditionalClassesToBeApplied = [];
    if(props.persons.length<=2)
    {
        conditionalClassesToBeApplied.push('red'); // =['red']
        console.log(conditionalClassesToBeApplied);
    }
    if(props.persons.length<=1)
    {
        conditionalClassesToBeApplied.push('bold'); // =['red','bold']
        console.log(conditionalClassesToBeApplied);
    }

    {/*<div>*/}
        {/*<h1>{props.appTitle}</h1>*/}
        {/*<p className={conditionalClassesToBeApplied.join(' ')}>Paragraph</p>*/}
        {/*<button  style={props.style} onClick= {props.clicked}>Toggle Person Handler</button>*/}
    {/*</div>*/}
    return (
        // instead of wrapping in  div we can wrap our html elements in HOC, will not give error
    <Aux>
        <h1>{props.appTitle}</h1>
        <p className={conditionalClassesToBeApplied.join(' ')}>Paragraph</p>
    <button  style={props.style} onClick= {props.clicked}>Toggle Person Handler</button>
    </Aux>
    );
};

export default cockpit;