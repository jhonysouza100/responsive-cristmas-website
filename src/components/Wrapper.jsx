import { useContext } from "react";
import AppContext from '../context/context.jsx';

function Wrapper() {
  const {hello} = useContext(AppContext);
  return (
    <div>
      {hello}
    </div>
  );
}

export default Wrapper;