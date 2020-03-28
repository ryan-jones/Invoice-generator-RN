import { createContext } from "react";

const StoreContext = createContext({ state: null, dispatch: null });

export default StoreContext;
