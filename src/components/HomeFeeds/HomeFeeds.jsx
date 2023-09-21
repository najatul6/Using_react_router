
const HomeFeeds = ({ homes }) => {
    const { id, title, body } = homes;

    const userStyle = {
        border: '3px solid yellow',
        'border-radius': '8px',
        padding: '10px',
        margin: '5px',
        'text-align': 'center'
    }

    return (
        <div style={userStyle}>
            <h3>{id}</h3>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default HomeFeeds;