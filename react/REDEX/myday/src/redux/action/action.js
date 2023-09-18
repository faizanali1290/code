import { increment, decrement} from "../constant";

export function incrementObje(params) {
  return {
    type: increment,
  };
}

export function decrementObj(params) {
  return {
    type: decrement,
  };
}
