import Footer from "./Footer";
import Header from "./Header";
import Modals from "./Modals";

function Wrapper({children}) {
  return (
    <>
      <Header />
      <>{children}</>
      <Modals />
      <Footer />
    </>
  );
}

export default Wrapper;