
import './App.css';
import AuthContext from './context/auth-context'

import Approuter from './routes'
function App() {
  return (
    <AuthContext>
      <Approuter />
    </AuthContext>
  )
}

export default App;
