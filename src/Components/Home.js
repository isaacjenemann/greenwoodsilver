import "../CSS/Body.css";
import About from "./Home/About";
import Collection from "./Home/Collection";
import Featured from "./Home/Featured";
import Categories from "./Home/Categories";

function Home() {
  return (
    <div className="home">
      <Collection />
      <Featured />
      <Categories />
      <About />
    </div>
  );
}

export default Home;
