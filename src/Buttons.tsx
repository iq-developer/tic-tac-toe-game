import Button from "./Button";

type StateObject = {
  id: number,
  value: string,
  marked: string,
};

const Buttons = ({state, setState, isRobotStep, setIsRobotStep, isFinished}: any) => {

  return (
    state.map((item: StateObject) => {
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
