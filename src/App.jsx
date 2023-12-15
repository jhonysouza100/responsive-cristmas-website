import './App.css'
import { AppProvider } from './context/context.jsx';
import Router from './routes/Router';

function App() {

  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;