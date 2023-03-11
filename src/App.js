
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authpage from './Pages/Authentification';
import Dashboard from './Pages/Dashboard';
import RootPage from './Pages/Rootpage';

function App() {
  return (
     <div>
          <Routes>
               <Route path='/admin/*' element={<Dashboard/>}/>
               <Route path='/user/*' element={<RootPage/>}/>
               <Route path='/auth/*' element={<Authpage/>}/>
          </Routes>
     </div>
  )
}

export default App;
