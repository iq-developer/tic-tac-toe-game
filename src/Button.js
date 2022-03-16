import './index.css';

const Button = ({ state, setState, id, value, marked, setIsRobotStep, isFinished }) => {

  const handleButtonClick = () => {

    if (state.find(item => (item.id === id) && value)) {
      alert('This place is already occupied. Try another one.');
      return;
    }

    setState(state.map(item => {
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
