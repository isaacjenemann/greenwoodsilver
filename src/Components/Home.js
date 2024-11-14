import "../CSS/Body.css";
import About from "./Components/About"
import Collection from "./Components/Collection";
import Featured from "./Components/Featured";
import Categories from "./Components/Categories";


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
