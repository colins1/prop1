import React from 'react';
import Star from './component/Star';


function Stars({ count }){
    let components = [];
    for(let i = 0; i < count; i++) {
        components.push(<Star counts={i} />)
    }

    return (
        <ul className="card-body-stars u-clearfix">{count < 1 || count > 5 ? <p>Не оценен</p> : {components}}</ul>
    )
    
}

Stars.defaultProps = {
    count : 0
}

export default Stars;