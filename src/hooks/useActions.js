import { useContext } from "react"; 
import AppStateContext from "../contexts/AppStateContext";

export default function useActions() {
    const {addToOrder, remove, removeAll, finish} = useContext(AppStateContext);
    return {addToOrder, remove, removeAll, finish}
}