
const Photo = ({photo}) => {
    const {id, title, url} = photo;

    const photoStyle={
        border:'2px solid yellow',
        'border-radius': '30px',
        padding:'15px'
    }
    return (
        <div style={photoStyle}>
            <h4>Title : {title}</h4>
            <img src={url} alt="" />
        </div>
    );
};

export default Photo;