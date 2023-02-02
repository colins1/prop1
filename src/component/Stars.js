import React from 'react';
import Star from './Star';


function Stars({ count }){
    let components = [];
    for(let i = 0; i < count; i++) {
        components.push(i)
    }

    return (
        <ul className="card-body-stars u-clearfix">{!Number.isInteger(count) || count < 1 || count > 5 ? <p>Не оценен</p> : components.map( (e,i) => <li key={i}><Star /></li>)}</ul>
    )
    
}

Stars.defaultProps = {
    count : 0
}

export default Stars;