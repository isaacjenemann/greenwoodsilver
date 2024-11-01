import "../CSS/Body.css";
import About from "./HomeComponents/About"
import Collection from "./HomeComponents/Collection";
import Featured from "./HomeComponents/Featured";
import Categories from "./HomeComponents/Categories";


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
