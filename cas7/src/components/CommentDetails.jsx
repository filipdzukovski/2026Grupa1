import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'

export const CommentDetails = () => {

    const [details, setDetails] = useState({});
    let {commentId} = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments/' +commentId )
            .then(res=>setDetails(res.data))
            .catch(err=>alert(err))
    }, [])
    return (
        <div id='comment-details'>
           <h2>{details.name}</h2>
           <h3>{details.email}</h3>
           <p>{details.body}</p>
        </div>
    )
}