import './index.css';

const Button = ({ state, setState, id, value, setIsRobotStep, isFinished }) => {

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
    <button className={isFinished ? "disabled" : "bar " + value} onClick={handleButtonClick} >{value}</button>
  )

}

export default Button;
