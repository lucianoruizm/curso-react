import { useReducer } from "react";
import countReducer, { ACTIONS } from "../../reducers/countReducer";

function Counter() {
    const [count, dispatch] = useReducer(countReducer, 0);

    return (
        <div>
            <span>{ count }</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
            <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
        </div>
    )
}

export default Counter