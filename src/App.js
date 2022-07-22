import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Card from "./components/Card";
import Table from "./components/QR_History/Table";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <Router>
      <div>
        <div className="flex flex-wrap">
          <Sidebar />

          {/* Router path */}
          <Routes>
            <Route exact path="/" element={ <Card />} />
            <Route path="/history" element={<Table/> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
