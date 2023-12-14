import './App.css'
import { AppProvider } from './context/context.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Error404 from './pages/Error404';
import Signin from './pages/Signin.jsx';


function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/signin' element={ <Signin /> } />
          <Route path='/login' element={ <Login /> } />
          {/* si la ruta no es ninguna de las anteriores, entra a 404 por defecto */}
          <Route path='*' element={ <Error404 /> } />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;