import React from 'react';

export const Comments = ({ listOfComments, datum }) => {

    return (
        <div id='comments'>
            {listOfComments.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.author === 'Marko' ?
                            <p>Author: {comment.author}</p> :
                            <p>No Author Known</p>}
                        <p style={{ color: comment.author === 'Simona' ? "blue" : '' }}>
                            Content: {comment.content}</p>
                        <p>{datum}</p>
                    </div>
                )
            })}
        </div>
    )
}