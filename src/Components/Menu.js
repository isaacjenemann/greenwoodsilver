import Header from "./Components/Header";
import Footer from "./Components/Footer";

function Menu({ toggleCart, cartTotal }) {
  return (
    <>
      <Header toggleCart={toggleCart} cartTotal={cartTotal} />
      <Footer />
    </>
  );
}

export default Menu;
