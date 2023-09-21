import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";

const Photos = () => {

    const photos = useLoaderData();

    const photosAlbum = {
        display: 'grid',
        gap: '10px',
        'grid-template-columns': 'repeat(2, 1fr)',
        'align-items':'center',
    }

    return (
        <div>
            <h2>Photos : {photos.length}</h2>
            <div style={photosAlbum}>
                {
                    photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;