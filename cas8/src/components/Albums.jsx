import React,{useContext} from 'react';
import { AlbumsContext } from '../utils/AlbumsContext';

export const Albums = () =>{

    const {albums,setAlbums} = useContext(AlbumsContext);

    return(
        <div id='albums'>
            {albums.map(album=>{
                return(
                    <div key={album.id}>
                        <p>{album.id}</p>
                        <h3>{album.title}</h3>
                        <hr/>
                    </div>
                )
            })}
        </div>
    )
}