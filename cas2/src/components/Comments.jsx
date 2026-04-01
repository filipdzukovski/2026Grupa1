import React from 'react';

export const Comments = ({hasComments,longComment}) => {

    return (
        <div id='comments'>
            {hasComments ?
                <h2>Comments</h2> :
                <p>No Comments here</p>}
            {longComment &&
                <h3>We have a long comment present here</h3>}
        </div>
    )
}

//uslov ? ako e tocno : ako e netocno -- ternary operator
// T v T = T &&