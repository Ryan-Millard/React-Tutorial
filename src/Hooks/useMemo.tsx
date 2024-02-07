import { useState, useEffect, useMemo, FC } from 'react';

const UseMemoExample = ():FC<{}> => {
	type themeStyle = {
		backgroundColor:string;
		color:string;
	}

	const [num, setNum] = useState<number>(0);
	const [dark, setDark] = useState<boolean>(false);

	const doubleNum = useMemo<number>(():number => {
		return slowFunction(num);
	}, [num]);
	const screenTheme = useMemo<themeStyle>(():themeStyle => {
		return (
			dark ?
			{ backgroundColor: 'black', color: 'white'}
			:
			{ backgroundColor: 'white', color: 'black' }
		);
	}, [dark]);

	useEffect(():void => {
		console.log('Screen theme changed');
	}, [screenTheme]);

	return (
		<>
			<input type="number" value={ num }
				onChange={ (e):void => setNum(parseInt(e.target.value)) }
			/>
			<button onClick={ ():void => setDark((prevDark):void => !prevDark) }> Change theme</button>
			<div style={ screenTheme }>{ doubleNum }</div>
		</>
	);
}

function slowFunction(num):number {
	for(let i = 0; i < 1000000000; i++) {}
	return num*2;
}

export default UseMemoExample;
