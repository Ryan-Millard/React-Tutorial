// Suspense: a fallback component used when loading an element
// lazy: a function that prevents the initial loading of a component to
// 			avoid slow load times due to many imports
import { Suspense, lazy } from 'react'; // normally imported
// this will be used for page navigation within web app
// don't forget to run "npm install react-router-dom"
// in older versions, Switch was used instead of Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const UseStateExample = lazy(() => import('./Hooks/useState.tsx'));
const UseEffectExample = lazy(() => import('./Hooks/useEffect.tsx'));
const UseMemoExample = lazy(() => import('./Hooks/useMemo.tsx'));

import Navbar from './Components/Navbar.tsx';
const Card = lazy(() => import('./Components/card.tsx'));
const PropsExample = lazy(() => import('./Components/props.tsx'));
const ConditionalRenderingExample = lazy(() => import('./Components/conditionalRendering.tsx'));
const List = lazy(() => import('./Components/listRendering.tsx'));

const Button = lazy(() => import('./StylingOptions/StylingOptions.tsx'));

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>

					{/* exact path used to avoid conflicts with other pages */}
					<Route exact path="/" element={
					<Suspense fallback={<div>Loading home page...</div>}>
						<h1>Home page</h1>
					</Suspense>
					}/>

					<Route exact path="/use-state" element={
						<Suspense fallback={<div>Loading useState...</div>}>
							<UseStateExample />
						</Suspense>
					}/>

					<Route exact path="/use-effect" element={
						<Suspense fallback={<div>Loading useEffect...</div>}>
							<UseEffectExample />
						</Suspense>
					}/>

					<Route exact path="/use-memo" element={
						<Suspense fallback={<div>Loading useMemo...</div>}>
							<UseMemoExample />
						</Suspense>
					}/>

					<Route exact path="/card-component" element={
						<Suspense fallback={<div>Loading card component...</div>}>
							<Card />
						</Suspense>
					}/>

					<Route exact path="/styling-options" element={
						<Suspense fallback={<div>Loading styling options...</div>}>
							<Button />
						</Suspense>
					}/>

					<Route exact path="/props" element={
						<Suspense fallback={<div>Loading props...</div>}>
							<PropsExample name="Jacques-Louis David" age={77} isFrench={true} />
							<PropsExample name="John William Godward" age={61} isFrench={false} />
							<PropsExample />
						</Suspense>
					}/>

					<Route exact path="/conditional-rendering" element={
						<Suspense fallback={<div>Loading conditional rendering...</div>}>
							<ConditionalRenderingExample isLoggedIn={true} username="great_gandering_swan1298" />
							<ConditionalRenderingExample isLoggedIn={false} username="great_gandering_swan1298" />
							<ConditionalRenderingExample />
						</Suspense>
					}/>

					<Route exact path="/list" element={
						<Suspense fallback={<div>Loading List...</div>}>
							<List />
						</Suspense>
					}/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
