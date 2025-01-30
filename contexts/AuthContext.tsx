import React from 'react';

interface UserData{
    name: string;
    email: string;
}

export const AuthContext = () => {

        const switch1 = true;
        const user:UserData = {
            name: "John Doe",
            email: "example.com",
        }
    
        if(switch1) return user;
        return null;
}