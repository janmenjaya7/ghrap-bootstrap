import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import List from "./List";

function App() {
  return (
    <div className="bg-dark " style={{ height: "100%" }}>
      <div className="text-center">
        <h1 className="text-center text-light">speacex</h1>
      </div>
      <h3>Launches</h3>

      <List />
    </div>
  );
}

export default App;
