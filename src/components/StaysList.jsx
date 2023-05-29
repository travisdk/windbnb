import { useStaysContext } from "../context/StaysContext";

const StaysList = () => {
  const { state } = useStaysContext();
  const { filteredStays } = state;

  return (
    <div>
      <h1 className="main-heading">Stays in Finland</h1>
      {filteredStays.length === 0 ? (
        <div>No stays found!</div>
      ) : (
        <div>
          {filteredStays.map((stay) => (
            <p key={stay.id}>
              {stay.title} {stay.maxGuests} {stay.beds}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
export default StaysList;
