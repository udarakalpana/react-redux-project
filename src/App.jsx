import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./utlities/counterSlice.jsx";

const App = () => {
    const stateNumber = useSelector((state) => state.counter.number)
    const dispatch = useDispatch()

  return (
      <div>
        <h1>{stateNumber}</h1>
          <button onClick={() => {dispatch(increment())}}>Increment</button>
          <button onClick={() => {dispatch(decrement(12))}}>Decrement</button>
      </div>
  )
}

export default App
