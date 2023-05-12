import React, { useState } from 'react';

const AdminRoute = ({children}) => {
    const data = localStorage.getItem("user_info")
    const json = JSON.parse(data)
    const [role,setRole] = useState('');
    console.log(json.username)
   

    return (
        <div>
           
        </div>
    );
};

export default AdminRoute;