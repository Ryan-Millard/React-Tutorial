// useful for updating values without causing re-renders

import { useState, useEffect, useRef, FC } from 'react';

const UseRefExample = ():FC<{}> => {
	const [name, setName] = useState<string>('');
	const prevName = useRef<string>('');

	useEffect(():void => {
		prevName.current = name;
	}, [name]);

	return (
		<>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<div>My name is {name}, and it used to be {prevName.current}.</div>
		</>
	);
}

export default UseRefExample;
