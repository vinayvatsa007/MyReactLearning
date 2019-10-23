import React from 'react';

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

    return (
    <div>
        <h1>{props.appTitle}</h1>
        <p className={conditionalClassesToBeApplied.join(' ')}>Paragraph</p>
        {/*<button style={style}*/}
        <button  style={props.style} onClick= {props.clicked}>Toggle Person Handler</button>
    </div>
);
};

export default cockpit;