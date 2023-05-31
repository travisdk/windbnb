import "../css/Stay.css";

const StayCard = ({ stay }) => {
  return (
    <>
      <div className="card border-0 h-100 stay">
        <div className="card-body p-0 ">
          <img className="card-img-top rounded-3 stay-photo" src={stay.photo} />
          <div
            className="d-flex align-items-center px-2 py-2 justify-content-between "
            style={{ height: "50px" }}>
            <div className="">
              {stay.superHost && (
                <span className="px-2 py-1 me-1  bg-white border border-1 border-black superhost">
                  SUPER HOST
                </span>
              )}
              <span>{stay.type}</span>
              {stay.beds && (
                <span>
                  {". " + stay.beds} {stay.beds > 1 ? "beds" : "bed"}
                </span>
              )}
            </div>
            <div className="d-flex align-items-center">
              <span className="material-icons text-primary">star</span>
              <span>{stay.rating}</span>{" "}
            </div>
          </div>
          <div className="card-title text-truncate px-2 stay-title ">
            {stay.title}
          </div>
        </div>
      </div>
    </>
  );
};
export default StayCard;
