import React, { useContext } from 'react';
import { GalleryContext } from '../utils/GalleryContext';

export const Popup = ({
    // izbranaSlika,zatvoriSlika
}) => {

    const { selectedImage, setSelectedImage,deletePicture } = useContext(GalleryContext);
    return (
        <div id='popup'>
            <button onClick={() => { setSelectedImage(null) }} className='close-popup'>
                &times;
            </button>
             <button onClick={() => { deletePicture(selectedImage.id) }} className='delete-popup'>
                Del
            </button>
            <div className='popup-container'>
                <img src={selectedImage.download_url} alt={"Image"} />
            </div>
        </div>
    )
}