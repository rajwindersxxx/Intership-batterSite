import { useAppDispatch, useAppSelector } from "../hooks";
import { InitialState, updateFields } from "../stores/calculaterSlice";

function useInput(name: string) {
  const selector = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    dispatch(
      updateFields({
        field: name as keyof InitialState,
        value: parseFloat(e.target.value) || 0,
      })
    );
  }
  const value = selector[name as keyof InitialState];
  return { value, handleChange };
}

export default useInput;
