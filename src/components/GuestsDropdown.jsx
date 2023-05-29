import { useState } from "react";
import NumberInput from "./NumberInput";
import "../css/GuestsDropdown.css";
import handleBlur from "../functions/blur.js";
import { useStaysContext } from "../context/StaysContext";

const GuestsDropdown = () => {
  const { state, setCurrentGuests, totalGuests } = useStaysContext();
  const { currentGuests } = state;
  const [active, setActive] = useState(false);

  return (
    <div
      className="guests-dropdown"
      onBlur={(e) => handleBlur(e, () => setActive(false))}>
      <div className="position-relative">
        <input
          type="text"
          className="form-control rounded-3 px-3 pt-3 "
          placeholder="Add guests"
          id="guests-input"
          value={totalGuests > 0 ? totalGuests : ""}
          readOnly
          onFocus={() => setActive(true)}
        />
        <label
          htmlFor="guests-input"
          className="guests-dropdown-label form-label fw-bolder ">
          GUESTS
        </label>
      </div>

      {active && (
        <div>
          <div className="guests-dropdown-list w-100 ms-3">
            {/* Adults */}
            <div className="fw-bold">Adults</div>
            <div className="greyed">Ages 13 and and above</div>
            <NumberInput
              value={currentGuests.adults}
              name="adults"
              setValue={(val) =>
                setCurrentGuests({ ...currentGuests, adults: val })
              }
            />
            {/* Children */}
            <div className="fw-bold mt-5">Children</div>
            <div className="greyed">Ages 2-12</div>
            <NumberInput
              value={currentGuests.children}
              name="children"
              setValue={(val) =>
                setCurrentGuests({ ...currentGuests, children: val })
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GuestsDropdown;
