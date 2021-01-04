import React from 'react';

const MovieForm = ({ match }) => {
    return (<div><h1>MovieForm</h1><p>{match.param.id}</p></div>);
}

export default MovieForm;