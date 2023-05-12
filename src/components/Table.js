import React from 'react'


import { BsFillPencilFill } from 'react-icons/bs'
import Tablecontent from './Tablecontent';
import { useGlobalContext } from '../context';
import CsvDownload from './Csv';



const Table = () => {

    const { allUser } = useGlobalContext()

    console.log(allUser.length);

    if (allUser.length === 0) {
        return <h1>Loading</h1>
    }


    return (
        <div className='w-full flex flex-col items-center justify-center' >
            <div className="w-full overflow-x-auto">
                <table className="w-full border-1 border-gray-900">
                    <thead  >
                        <tr className="bg-orange-500 text-center">
                            <th className=" py-4 px-6">Name</th>
                            <th className="py-4 px-6">Email</th>
                            <th className="py-4 px-6">Gender</th>
                            <th className="py-4 px-6">Status</th>
                            <th className="py-4 px-6">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUser.map((user, idx) => {



                                return <Tablecontent user={user} key={idx} ></Tablecontent>

                            })
                        }


                    </tbody>
                </table>

            </div>
            <CsvDownload></CsvDownload>
        </div>





    )
}

export default Table;