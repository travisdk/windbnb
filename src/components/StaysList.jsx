import { useStaysContext } from "../context/StaysContext";
import "../css/StayList.css";

const StaysList = () => {
  const { state } = useStaysContext();
  const { filteredStays } = state;

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h1 className="main-heading">Stays in Finland</h1>
        <span className="count-stays text-muted">12 stays</span>
      </div>
      {filteredStays.length === 0 ? (
        <div>No stays found!</div>
      ) : (
        <div className="row  g-3 my-3">
          {filteredStays.map((stay) => (
            <div key={stay.id} className="col-12 col-md-6  col-lg-4 border-0">
              <div className="card h-100">
                <div className="card-body p-0">
                  <img
                    className="card-img-top rounded-3 stay-photo"
                    src={stay.photo}
                  />
                  <div className="d-flex align-items-baseline px-2 py-2">
                    {stay.superHost && (
                      <span className="px-2 py-1 m-1  bg-white border border-1 border-black superhost">
                        SUPER HOST
                      </span>
                    )}
                    <span style={{ fontSize: "14px" }}>{stay.type}</span>
                    {stay.beds && (
                      <span style={{ fontSize: "14px" }}>
                        .{stay.beds} beds
                      </span>
                    )}
                  </div>
                  <div className="card-title text-truncate px-2 stay-title">
                    {stay.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default StaysList;
