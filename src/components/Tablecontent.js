import React from 'react'
import { BsFillPencilFill } from 'react-icons/bs'

import { useGlobalContext } from '../context'

const Tablecontent = ({ user }) => {

    const { handleEditUser } = useGlobalContext()

    // if (user === null) return;

    // console.log(user?.name);

    // const { name, email, gender, status } = user;


    const handleEdit = (id) => {

        // console.log(id);
        handleEditUser(id);

    }


    return (
        // <h1>hhh</h1>
        <tr className="border-b border-gray-200 hover:bg-gray-100 text-center">
            <td className="py-4 px-6">{user?.name}</td>
            <td className="py-4 px-6">{user?.email}</td>
            <td className="py-4 px-6">
                <span className={`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ${user?.gender === 'male' ? "bg-blue-200 text-blue-700" : "bg-pink-200 text-pink-700"}  `}>
                    {user?.gender}
                </span>
            </td>
            <td className="py-4 px-6">
                <span
                    className={`inline-block  rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 ${user?.status === 'active' ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                    {user?.status}
                </span>
            </td>
            <td className="py-4 px-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleEdit(user?._id)} >
                    <BsFillPencilFill />
                </button>
            </td>
        </tr>
    )
}

export default Tablecontent