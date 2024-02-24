// Suspense: a fallback component used when loading an element
// lazy: a function that prevents the initial loading of a component to
// 			avoid slow load times due to many imports
import { Suspense, lazy } from 'react'; // normally imported

// lazy loading syntax
const UseStateExample = lazy(() => import('./Hooks/useState.tsx'));
const UseEffectExample = lazy(() => import('./Hooks/useEffect.tsx'));
const UseMemoExample = lazy(() => import('./Hooks/useMemo.tsx'));

const Card = lazy(() => import('./Components/card.tsx'));
const PropsExample = lazy(() => import('./Components/props.tsx'));
const ConditionalRenderingExample = lazy(() => import('./Components/conditionalRendering.tsx'));

const Button = lazy(() => import('./StylingOptions/StylingOptions.tsx'));

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
				<ConditionalRenderingExample isLoggedIn={true} username="great_gandering_swan1298" />
				<ConditionalRenderingExample isLoggedIn={false} username="great_gandering_swan1298" />
				<ConditionalRenderingExample />
			</div>
		</>
	);
}

export default App;
