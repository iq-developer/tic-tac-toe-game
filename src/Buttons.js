import Button from "./Button";

const Buttons = ({state, setState, isRobotStep, setIsRobotStep, isFinished}) => {

  return (
    state.map(item => {
      return <Button
        key={item.id}
        value={item.value}
        id={item.id}
        marked={item.marked}
        state={state}
        setState={setState}
        isRobotStep={isRobotStep}
        setIsRobotStep={setIsRobotStep}
        isFinished={isFinished}
      />
    })
  )
}

export default Buttons;
