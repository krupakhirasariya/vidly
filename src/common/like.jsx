import React from 'react';

const Like = (props) => {
    let dynamicClass = 'fa fa-heart';
    if(!props.liked) dynamicClass += '-o';
    return (   
    <i className={dynamicClass} style={{cursor:"pointer"}} onClick={props.onClick}></i> 
    );
}
 
export default Like;
