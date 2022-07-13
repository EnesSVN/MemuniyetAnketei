import './App.css';
import CreateAnket from './pages/CreateAnket';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"



function App() {
  return (
    <div>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme='colored'
       />
     <CreateAnket />
    </div>
  );
}

export default App;
