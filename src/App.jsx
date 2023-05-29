import "./css/App.css";
import Header from "./components/Header";
import StaysList from "./components/StaysList";
function App() {
  return (
    <div className="container">
      <Header />
      <StaysList />
    </div>
  );
}

export default App;
