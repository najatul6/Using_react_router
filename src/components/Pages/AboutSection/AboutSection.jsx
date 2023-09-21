const AboutSection = ({ about }) => {
    const { userId, id, title } = about;
    const userStyle = {
        border: '3px solid yellow',
        'border-radius': '8px',
        padding: '10px',
        margin: '5px',
        'text-align': 'center'
    }


    return (
        <div style={userStyle}>
            <h3>{id} : {userId}</h3>
            <p>{title}</p>
        </div>
    );
};

export default AboutSection;