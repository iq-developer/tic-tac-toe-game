import './index.css';

const Button = ({ state, setState, id, value, setIsRobotStep, isFinished }) => {

  const handleButtonClick = () => {

    const isOccupied = (state, id) => {
      return state.find(item => (item.id === id) && value);
    }

    if (isOccupied(state, id)) {
      alert('This place is already occupied. Try another one.');
      return;
    }

    const newState = state.map(item => {
      if (item.id === id) {
        return (
          { ...item, value: '✖' }
        )
      }
      return (
        { ...item }
      )
    })

    setState(newState);

    setIsRobotStep(true);
  }

  return (
    <button className={isFinished ? "disabled" : "bar " + value} onClick={handleButtonClick} >{value}</button>
  )

}

export default Button;
