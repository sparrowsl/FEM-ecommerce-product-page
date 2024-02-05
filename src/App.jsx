import { createSignal } from "solid-js";

export default function App() {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<h1 class="text-red">Vite + Solid</h1>
			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={() => setCount((count) => count + 1)}>
				count is {count()}
			</button>
		</>
	);
}
