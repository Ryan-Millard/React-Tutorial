// use whenever a state changes and you want a function to run

import { useState, useEffect, FC } from 'react';

const UseEffectExample:FC<{}> = () => {
	const [resourceType, setResourceType] = useState<string>('posts');

	useEffect(():(() => void) => {
		console.log('resource changed');

		return ():void => {
		console.log('return from resource change');
		}
	}, [resourceType]);

	return (
		<>
			<div>
				<button onClick={ ():void => setResourceType('posts') }>Posts</button>
				<button onClick={ ():void => setResourceType('users') }>Users</button>
				<button onClick={ ():void => setResourceType('comments') }>Comments</button>
			</div>
			<h1>{ resourceType }</h1>
		</>
	);
}

export default UseEffectExample;
