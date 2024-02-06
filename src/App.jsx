import { For, createSignal } from "solid-js";
import avatar from "/assets/images/image-avatar.png";
import Header from "./components/Header.jsx";

export default function App() {
	const [count, setCount] = createSignal(0);

	return (
		<>
			<Header />

			<main class="container font-kumbhsans min-h-90vh flex flex-col justify-center">
				{/* <Thumbnail /> */}
				<article class="flex items-center px-20 gap-20">
					<figure class="w-full max-w-25rem">
						<img
							src="/assets/images/image-product-1.jpg"
							alt=""
							class="max-w-25em rounded-xl"
						/>
						<figcaption class="grid grid-cols-4 gap-5 mt-7">
							<For each={new Array(4)}>
								{(_, i) => (
									<Thumbnail
										src={`/assets/images/image-product-${i() + 1}.jpg`}
										alt={`Product ${i() + 1}`}
									/>
								)}
							</For>
						</figcaption>
					</figure>

					<section class="w-full">
						<h1 class="text-red">Vite + Solid</h1>
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button onClick={() => setCount((count) => count + 1)}>
							count is {count()}
						</button>
					</section>
				</article>
			</main>
		</>
	);
}

/** @param {Object{src: string}} props */
export function Thumbnail(props) {
	return (
		<>
			<img src={props.src} alt={props.alt || "Product"} class="rounded-lg" />
		</>
	);
}
