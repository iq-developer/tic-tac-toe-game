import './index.css';

const Button = ({ state, setState, id, value, isRobotStep, setIsRobotStep }) => {

  const handleButtonClick = () => {

    setState(state.map(item => {
      if ((item.id === id) && !value) {
        return (
          { ...item, value: 'X' }
        )
      }
      return (
        { ...item }
      )
    }));

    setIsRobotStep(true);
  }

  return (
    <button className="bar" onClick={handleButtonClick} >{value}</button>
  )

}

export default Button;
