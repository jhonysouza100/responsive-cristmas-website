import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Error404 from '../pages/Error404';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/signup' element={ <Signup /> } />
        <Route path='/login' element={ <Login /> } />
        {/* si la ruta no es ninguna de las anteriores, entra a 404 por defecto */}
        <Route path='*' element={ <Error404 /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;