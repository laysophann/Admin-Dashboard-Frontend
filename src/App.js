import Card from "./components/Card";
import Sidebar from "./components/Sidebar";
// import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <div className="flex flex-wrap">
        <Sidebar />
        <Card />
      </div>
    </div>
  );
}

export default App;
