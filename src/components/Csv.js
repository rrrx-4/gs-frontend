import { CSVLink } from 'react-csv';
import { useGlobalContext } from '../context';




const csvHeaders = [
    { label: 'Id', key: '_id' },
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Gender', key: 'gender' },
    { label: 'Status', key: 'status' },
    { label: 'Created_at', key: 'Created_at' },
    { label: 'Updated_at', key: 'Updated_at' },
];

const CsvDownload = () => {

    const { allUser } = useGlobalContext();

    return (
        <CSVLink data={allUser} headers={csvHeaders} filename={'users.csv'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
            Download CSV
        </CSVLink>
    );
};

export default CsvDownload;