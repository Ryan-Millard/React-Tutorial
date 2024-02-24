import { FC } from 'react';

function List():FC<{}> {
	const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple'];	// could be taken as a prop

	const listItems = fruits.map((fruit):JSX.Element => <li>{fruit}</li>);

	return ( <ol>{listItems}</ol> );
}

export default List;
