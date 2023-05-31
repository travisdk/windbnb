import { useStaysContext } from "../context/StaysContext";
import StayCard from "./StayCard";

const StaysList = () => {
  const { state } = useStaysContext();
  const { filteredStays } = state;

  return (
    <div>
      <div className="d-flex justify-content-between mt-5">
        <h1 className="main-heading">Stays in Finland</h1>
        <span className="count-stays text-muted">
          {filteredStays.length} {filteredStays.length > 1 ? " stays" : " stay"}
        </span>
      </div>
      {filteredStays.length === 0 ? (
        <div>No stays found!</div>
      ) : (
        <div className="row  g-3 ">
          {filteredStays.map((stay) => (
            <div key={stay.id} className="col-12 col-md-6  col-lg-4 mt-5">
              <StayCard stay={stay} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default StaysList;
