import { useLoaderData } from "react-router-dom";
import User from "../../User/User";

const Users = () => {

    const users = useLoaderData();

    const usersStyle = {
        display: 'grid',
        gap: '10px',
        'grid-template-columns': 'repeat(5, 1fr)',
        'align-items': 'center',
    }

    return (
        <div>
            <h2>Users : {users.length}</h2>
            <h2>This is Users Page</h2>
            <div style={usersStyle}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;