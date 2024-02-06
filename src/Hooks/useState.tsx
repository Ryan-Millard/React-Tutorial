// similar to a mutator/setter method but for react

import { useState, FC } from 'react';

const UseStateExample:FC<{}> = () => {
	type State = {
		count:number;
		theme:string;
	}
	const setInitialState = ():State => {
		return {count: 4, theme: 'blue'}
	}
	const [state, setState] = useState<State>(setInitialState);

	const decrementState = ():void => {
		setState( prevState => {
			return { ...prevState, count: prevState.count - 1 };
		})
	}
	const incrementState = ():void => {
		setState( prevState => {
			return { ...prevState, count: prevState.count + 1 };
		})
	}

	return (
		<>
			<button onClick={decrementState}>-</button>
			<span>{ state.count }</span>
			<span>{state.theme }</span>
			<button onClick={incrementState}>+</button>
		</>
	);
}

export default UseStateExample;
