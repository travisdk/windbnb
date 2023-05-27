import "./css/App.css";
import Header from "./components/Header";
import { useStaysContext } from "./context/StaysContext";
function App() {
  const { state } = useStaysContext();
  const { filteredStays } = state;

  return (
    <div className="container">
      <Header />
      {/* <StaysList /> */}
      <div>
        {filteredStays.map((stay) => (
          <p key={stay.id}>
            {stay.title} {stay.maxGuests} {stay.beds}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
