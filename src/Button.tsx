import './index.css';

type StateObject = {
  id: number,
  value: string,
  marked: string,
};

const Button = ({ state, setState, id, value, marked, setIsRobotStep, isFinished }: any) => {

  const handleButtonClick = (): void => {

    if (state.find((item: StateObject) => (item.id === id) && value)) {
      alert('This place is already occupied. Try another one.');
      return;
    }

    setState(state.map((item: StateObject) => {
      if (item.id === id) {
        return (
          { ...item, value: '✖' }
        )
      }
      return (
        { ...item }
      )
    }));

    setIsRobotStep(true);
  }

  return (
    <button className={isFinished ? "disabled " + marked : "bar " + value} disabled={isFinished} onClick={handleButtonClick} >{value}</button>
  )

}

export default Button;
