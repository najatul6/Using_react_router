import { useLoaderData } from "react-router-dom";
import HomeFeeds from "../HomeFeeds/HomeFeeds";

const HomeFeed = () => {

    const photosAlbum = {
        display: 'grid',
        gap: '10px',
        'grid-template-columns': 'repeat(2, 1fr)',
        'align-items': 'center',
    }

    const homeFeed = useLoaderData();
    return (
        <div>
            <h2>News Feed : {homeFeed.length}</h2>
            <div style={photosAlbum}>
                {
                    homeFeed.map(homeFeed => <HomeFeeds key={homeFeed.id} homes={homeFeed}></HomeFeeds>)
                }
            </div>
        </div>
    );
};

export default HomeFeed;