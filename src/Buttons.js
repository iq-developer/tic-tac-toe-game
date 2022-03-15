import Button from "./Button";

const Buttons = ({state, setState, isRobotStep, setIsRobotStep}) => {

  return (
    state.map(item => {
      return <Button key={item.id} value={item.value} id={item.id} state={state} setState={setState} isRobotStep={isRobotStep} setIsRobotStep={setIsRobotStep} />
    })
  )
}

export default Buttons;
