import {
  useContext,
  createContext,
  useReducer,
  useMemo,
  useCallback,
} from "react";

import staysData from "../data/stays.json";

// modding input json data

let locationsInitial = [];
const staysInitial = staysData.stays;
// adding ID property to stays
for (let i = 0; i < staysInitial.length; i++) {
  staysInitial[i] = { id: i + 1, ...staysInitial[i] };
  if (
    locationsInitial.find(
      (location) =>
        location.city === staysInitial[i].city &&
        location.country === staysInitial[i].country
    ) === undefined
  ) {
    // building array with unique locations
    locationsInitial.push({
      city: staysInitial[i].city,
      country: staysInitial[i].country,
    });
  }
}

const initialState = {
  stays: staysInitial,
  filteredStays: staysInitial,
  locations: locationsInitial,
  currentLocation: { city: "", country: "" },
  currentGuests: { adults: 0, children: 0 },
};

const Context = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "setCurrentLocation":
      return { ...state, currentLocation: action.payload };
    case "setCurrentGuests":
      return { ...state, currentGuests: action.payload };
    case "filterStays": {
      const { city, country } = state.currentLocation;
      const { adults, children } = state.currentGuests;
      const filtered = state.stays.filter((stay) => {
        let ok = true;
        if (city && country) {
          if (city !== stay.city || country !== stay.country) {
            ok = false;
          }
        }
        if (adults + children > stay.maxGuests) {
          ok = false;
        }
        if (adults > stay.beds) {
          ok = false;
        } // assuming that all adults nees 1 bed
        return ok;
      });
      return {
        ...state,
        filteredStays: filtered,
      };
    }
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const filterStays = useCallback(
    (filter) => dispatch({ type: "filterStays", payload: filter }),
    []
  );
  const setCurrentLocation = useCallback(
    (location) => dispatch({ type: "setCurrentLocation", payload: location }),
    []
  );
  const setCurrentGuests = useCallback(
    (guests) => dispatch({ type: "setCurrentGuests", payload: guests }),
    []
  );

  const value = useMemo(() => {
    return {
      state,
      dispatch,
      filterStays,
      setCurrentLocation,
      setCurrentGuests,
    };
  }, [state, dispatch, filterStays, setCurrentLocation, setCurrentGuests]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useStaysContext = () => {
  return useContext(Context);
};

export default Provider;
