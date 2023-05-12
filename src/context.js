import React, { useState, useEffect, createContext, useContext } from "react";

import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000"
})

const AppContext = createContext();


const AppProvider = ({ children }) => {


    useEffect(() => {

        getAllUser()

    }, [])


    const [allUser, setAllUser] = useState([])

    const [isEdit, setIsEdit] = useState(false);

    const [editUser, setEditUser] = useState(null);


    const getAllUser = async () => {

        const resp = await api.get('/users');

        const data = await resp.data

        setAllUser(data)

    }

    const updateUser = async (user) => {

        const { _id } = user

        const resp = await api.patch(`/edit/${_id}`, user);
    }

    const handleEditUser = (id) => {

        console.log(id);


        const user = allUser.find(user => user._id === id);
        setIsEdit(true);
        console.log(user);

        setEditUser(user);


    }

    const setUpdatedUser = (up_user) => {





        const updated_list = allUser.map((user) => {

            if (user._id === up_user._id) {
                user = up_user;

                // console.log(user);
            }
            return user;




        })

        updateUser(up_user);
        // getAllUser();
        setAllUser(updated_list);
        console.log(allUser);
        setIsEdit(false);
        setEditUser(null);

    }






    return <AppContext.Provider value={{ allUser, setAllUser, setIsEdit, isEdit, editUser, setEditUser, handleEditUser, setUpdatedUser }}>{children}</AppContext.Provider>

}

const useGlobalContext = () => {

    return useContext(AppContext)
}

export { useGlobalContext }

export default AppProvider