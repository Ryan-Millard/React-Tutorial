import { FC } from 'react';

import './listRendering.css';

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

	const lowCalFruit = mapToHtmlList(fruits.filter(fruit => fruit.calories < 100));

	const highCalFruit = mapToHtmlList(fruits.filter(fruit => fruit.calories > 100));

	return (
		<>
			<div className="listRenderer ">
				<table>
					<thead>
						<tr>
							<th>Alphabetical Order</th>
							<th>Reverse Alphabetical Order</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{alphabeticalList}</td>
							<td>{revAlphabeticalList}</td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th>Ascending calories</th>
							<th>Descending calories</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{ascendingList}</td>
							<td>{descendingList}</td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th>Low calories</th>
							<th>High calories</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{lowCalFruit}</td>
							<td>{highCalFruit}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

function mapToHtmlList(fruits: Fruit[]):JSX.Element {
	return (
		<ol>{
				fruits.map(({ id, name, calories }):JSX.Element => (
							<li key={id}>{name}: &nbsp;{calories} calories</li>
							))
		}</ol>
	);
}

export default List;
