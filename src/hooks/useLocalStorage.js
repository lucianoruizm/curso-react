import { useEffect, useReducer } from "react";

export default function useLocalStorage(key, reducer, initialState) {
    function inicializacionDiferida() {
        const localData = localStorage.getItem(key);
        return localData ? JSON.parse(localData) : initialState;
    }
    const [data, dispatch] = useReducer(reducer, initialState, inicializacionDiferida);
    
    useEffect(() => {
        const stringifiedData = JSON.stringify(data);
        localStorage.setItem(key, stringifiedData);
    }, [data]);

    return [data, dispatch];
}