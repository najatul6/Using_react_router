// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";


const User = ({ user }) => {
    const { name, email, id, username, phone, website } = user;
    const navigate = useNavigate();
    const handleForDetails =() =>{
        navigate(`/user/${id}`);
    }

    const handleForBack=()=>{
        navigate(-1);
    }

    const userStyle = {
        border: '3px solid yellow',
        'border-radius': '8px',
        padding: '10px',
        margin: '5px',
        'text-align': 'center'
    }

    return (
        <div style={userStyle}>
            <p>ID : {id}</p>
            <h2>{name}</h2>
            <p>UserName : {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website : {website}</p>
            <button onClick={handleForDetails}>Show Details</button> <br />
            <button onClick={handleForBack}>Go Back</button>
            
        </div>
    );
};

export default User;