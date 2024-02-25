import { FC } from 'react';

class Fruit {
	name: string;
	calories: number;
	id: number;

	constructor(name, calories, id) {
		this.name = name;
		this.calories = calories;
		this.id = id;
	}
}

const List: FC = () => {
	const fruits: Fruit[] = [
		{ name: 'apple', calories: 95, id: 1 },
		{ name: 'orange', calories: 45, id: 2 },
		{ name: 'banana', calories: 105, id: 3 },
		{ name: 'coconut', calories: 159, id: 4 },
		{ name: 'pineapple', calories: 37, id: 5 }
	];

	fruits.sort((a, b) => a.name.localeCompare(b.name));
	const alphabeticalList = mapToHtmlList(fruits);

	fruits.sort((a, b) => b.name.localeCompare(a.name));
	const revAlphabeticalList = mapToHtmlList(fruits);

	fruits.sort((a, b) => a.calories - b.calories);
	const ascendingList = mapToHtmlList(fruits);

	fruits.sort((a, b) => b.calories - a.calories);
	const descendingList = mapToHtmlList(fruits);

	return (
		<>
			<span>
			<h1>Alphabetically Sorted</h1>
				<ol>{alphabeticalList}</ol>
			</span>
			<span>
				<h1>Reverse Alphabetically Sorted</h1>
				<ol>{revAlphabeticalList}</ol>
			</span>
			<h1>Ascending According to Calories</h1>
			<ol>{ascendingList}</ol>
			<h1>Descending According to Calories</h1>
			<ol>{descendingList}</ol>
		</>
	);
}

function mapToHtmlList(fruits: Fruit[]):JSX.Element {
	return (
		fruits.map(({ id, name, calories }):JSX.Element => (
			 <li key={id}>{name}: &nbsp;{calories} calories</li>
		))
	);
}

export default List;
