import Button from "./Button";
import { StateObjectType } from './helpers/types';


const Buttons = ({state, setState, isRobotStep, setIsRobotStep, isFinished}: any) => {

  return (
    state.map((item: StateObjectType) => {
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
