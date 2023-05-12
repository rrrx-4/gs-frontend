import React from 'react'
import Select from 'react-select'
import { useGlobalContext } from '../context'

const gender = [
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },

]

const status = [
    { value: 'active', label: 'active' },
    { value: 'inactive', label: 'inactive' },

]


const Modal = () => {

    const { isEdit, editUser, setEditUser, setUpdatedUser, setIsEdit } = useGlobalContext()

    if (isEdit === null) return;


    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        console.log('ff');

        console.log(name, value);

        setEditUser({ ...editUser, [name]: value });

    }

    const handleSave = () => {

        setUpdatedUser(editUser)

        // console.log(editUser);

    }

    const handleCancel = () => {

        setIsEdit(false);
        setEditUser(null);

    }


    return (

        <div className="fixed z-1 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <form className="px-4 py-6">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={editUser?.name}
                                onChange={handleChange}
                                className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={editUser?.email}
                                onChange={handleChange}
                                className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                                Gender
                            </label>

                            <select id="gender" name="gender" value={editUser?.gender} onChange={handleChange}>
                                <option value="male">male</option>
                                <option value="female">female</option>

                            </select>

                        </div>
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
                                Status
                            </label>
                            <select id="status" name="status" value={editUser?.status} onChange={handleChange}>
                                <option value="active">active</option>
                                <option value="inactive">inactive</option>

                            </select>
                        </div>
                    </form>

                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>



        // <div>
        //     <form>
        //         <div>
        //             <label htmlFor='name' >name</label>
        //             <input type='text' name='name' value='' ></input>
        //         </div>
        //         <div>
        //             <label htmlFor='email' >email</label>
        //             <input type='text' name='email' value='' ></input>
        //         </div>
        //         <div>
        //             <label htmlFor='gender'>Gender</label>
        //             <Select options={gender}  ></Select>
        //         </div>
        //         <div>
        //             <label htmlFor='status'>Gender</label>
        //             <Select options={status}  ></Select>
        //         </div>
        //     </form>
        // </div>
    )
}

export default Modal