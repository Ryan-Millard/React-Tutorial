import UseStateExample from './Hooks/useState.tsx';
import UseEffectExample from './Hooks/useEffect.tsx';
import UseMemoExample from './Hooks/useMemo.tsx';

import Card from './Components/card.tsx';
import PropsExample from './Components/props.tsx';
import ConditionalRenderingExample from './Components/conditionalRendering.tsx';
import List from './Components/listRendering.tsx';

import Button from './StylingOptions/StylingOptions.tsx';

function App() {
	return (
		<>
			<div>
				{/* <UseStateExample /> */}
				{/* <UseEffectExample /> */}
				{/* <UseMemoExample /> */}
				{/* <Card /> */}
				{/* <Button /> */}
				{/*
					<PropsExample name="Jacques-Louis David" age={77} isFrench={true} />
					<PropsExample name="John William Godward" age={61} isFrench={false} />
					<PropsExample />
				*/}
				{/*
				<ConditionalRenderingExample isLoggedIn={true} username="great_gandering_swan1298" />
				<ConditionalRenderingExample isLoggedIn={false} username="great_gandering_swan1298" />
				<ConditionalRenderingExample />
				*/}
				<List />
			</div>
		</>
	);
}

export default App;
