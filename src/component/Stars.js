import React from 'react';
import Star from './component/Star';


function Stars({ count }){
    let key = {};
    for(let i = 0; i < count; i++) {
        key.push(i);
    }

    return (
        <ul className="card-body-stars u-clearfix">{count < 1 || count > 5 ? <p>Не оценен</p> : {key.map( counts => <Star counts={counts} />)}}</ul>
    )
    
}

Stars.defaultProps = {
    count : 0
}

export default Stars;