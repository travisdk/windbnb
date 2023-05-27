import "../css/NumberInput.css";

const NumberInput = ({ value, setValue }) => {
  const inc = () => setValue(value + 1);
  const dec = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="d-flex align-items-center">
      <button
        type="button"
        className="btn number-button border border-1 me-2 border-black p-0"
        onClick={dec}>
        <span>-</span>
      </button>
      <span className="border-0 p-0 m-0 ">{value}</span>

      <button
        type="button"
        className="btn number-button border border-1 ms-2 border-black p-0"
        onClick={inc}>
        <span>+</span>
      </button>
    </div>
  );
};
export default NumberInput;
