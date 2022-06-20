import { useSelector } from "react-redux";

function Display() {
  const result = useSelector(({result}) => result);

  return <div>{result}</div>;
}

export default Display;
