
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import AddUser from './pages/addUser';
import EditUser from './pages/EditUser';
import View from './pages/View';



function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/addUser" element={<AddUser />}></Route>
       <Route path="/editUser/:id" element={<EditUser />}></Route>
       <Route path="/viewUser/:id" element={<View />}></Route>
     </Routes>
    </div>
  );
}

export default App;
