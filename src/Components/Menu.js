import Header from "./Home/Header";
import Footer from "./Home/Footer";

function Menu({ toggleCart, cartTotal }) {
  return (
    <>
      <Header toggleCart={toggleCart} cartTotal={cartTotal} />
      <Footer />
    </>
  );
}

export default Menu;
