// Props:
// 		Read only
// 		Shared between components
// 		Parent component sends data to child component
// 			<Parent>
// 				<Child></Child>
// 			</Parent>
// 		Syntax: <Component key=value />

import { FC } from 'react';

interface NeoclassicalPainter {
	// Adding types to your props is always recommended
	name: string;
	age: number;
	isFrench: boolean;
}

function PropsExample(props:NeoclassicalPainter):FC {
// Props can also be dereferenced:
// 		function PropsExample({ name, age }:NeoclassicalPainter):FC {
	return (
		<>
			<p>Name: { props.name }</p>
			<p>Age: { props.age }</p>
			<p>French: { props.isFrench ? "Yes" : "No" }</p>
		</>
	);
}

export default PropsExample;
