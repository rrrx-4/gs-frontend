import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Modal from './components/Modal';
import { useGlobalContext } from './context';

function App() {

  const { isEdit, editUser } = useGlobalContext();

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-slate-200">
      <Table></Table>
      {isEdit && <Modal></Modal>}
    </div>
  );
}

export default App;
