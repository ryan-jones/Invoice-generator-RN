import { useContext } from "react";
import StoreContext from "../contexts/store";

export default function useStore() {
  return useContext(StoreContext);
}
