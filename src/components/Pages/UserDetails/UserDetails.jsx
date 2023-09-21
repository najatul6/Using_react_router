import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, phone} =user;
    const navigate = useNavigate();
    const handleToBack = () =>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Details About User : {name}</h2>
            <p>Phone : {phone}</p>
            <p>Email : {email} </p>
            <button onClick={handleToBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;