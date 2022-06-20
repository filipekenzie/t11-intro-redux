import { useDispatch } from "react-redux";
import { addNumber, subNumber } from "../../store/modules/results/actions";

function Counter() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(addNumber(10))}>
        Add +
      </button>
      <button onClick={() => dispatch(subNumber(10))} >Add -</button>
    </>
  );
}

export default Counter;
