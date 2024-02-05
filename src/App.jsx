import { createSignal } from "solid-js";
import Header from "./components/Header.jsx";

export default function App() {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<Header />
			<main class="container font-kumbhsans">
				<h1 class="text-red">Vite + Solid</h1>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count()}
				</button>
			</main>
		</>
	);
}
