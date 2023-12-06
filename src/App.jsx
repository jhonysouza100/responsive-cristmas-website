import Wrapper from "./components/Wrapper";
import { AppProvider } from './context/context.jsx';
import scrollReveal from "./libs/scroll-reveal.js";

function App() {

  // SCROLL animation
  scrollReveal()

  // OPACITY animation

  // PARALLAX animation

  return (
    <AppProvider>
      <Wrapper />
    </AppProvider>
  );
}

export default App;