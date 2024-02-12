// Props:
// 		Read only
// 		Shared between components
// 		Parent component sends data to child component
// 			<Parent>
// 				<Child></Child>
// 			</Parent>
// 		Syntax: <Component key=value />

import { FC } from 'react';

import './props.css';

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
		<div className="painter">
			<p>Name: { props.name }</p>
			<p>Age: { props.age }</p>
			<p>French: { props.isFrench ? "Yes" : "No" }</p> {/* Complex TypeScript code can be places within {} */}
		</div>
	);
}

// in case no prop is given for a certain field,
// a default value is given
PropsExample.defaultProps = {
  name: "Unknown",
  age: -1,
  isFrench: false,
};

export default PropsExample;



// 'propTypes' from JavaScript can be used instead of the aforementioned

// Using propTypes in TypeScript is less recommended as it performs runtime
// type-checking instead of at compile time, which may defeat the purpose
// of using TypeScript for your application entirely.
// TypeScipt's type-checking prevents the application from running,
// JavaScripts type-checking throws a runtime error and prints it to the console.
