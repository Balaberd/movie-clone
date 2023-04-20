import { FC, useState } from "react";

interface Props {
  text: string;
}

const TestComponent: FC<Props> = ({ text }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle((prev) => !prev);

  return (
    <div>
      {!!toggle && <h4>TOGGLE ELEMENT</h4>}
      <h2>{text}</h2>
      <button onClick={onToggle}>click</button>
      <input type="text" placeholder="input place" />
    </div>
  );
};

export default TestComponent;
