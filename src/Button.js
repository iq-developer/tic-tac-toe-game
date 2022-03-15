import './index.css';
import isWin from './helpers/isWin';

const Button = ({ state, setState, id, value, isRobotStep, setIsRobotStep }) => {

  const handleButtonClick = () => {

    const newState = state.map(item => {
      if ((item.id === id) && !value) {
        return (
          { ...item, value: 'X' }
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
    <button className="bar" onClick={handleButtonClick} >{value}</button>
  )

}

export default Button;
