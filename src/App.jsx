import { For, createSignal } from "solid-js";
import Header from "./components/Header.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

export const [selectedImage, setSelectedImage] = createSignal(
	"/assets/images/image-product-1.jpg"
);

export default function App() {
	return (
		<>
			<Header />

			<main class="max-w-6xl mx-auto min-h-[85vh] flex flex-col justify-center">
				<article class="flex items-center px-20 gap-20">
					<figure class="w-full max-w-[25rem]">
						<img
							src={selectedImage()}
							alt="selected display"
							class="max-w-[25rem] rounded-lg"
						/>
						<figcaption class="grid grid-cols-4 gap-5 mt-7">
							<For each={Array.from({ length: 4 })}>
								{(_, i) => (
									<button
										type="button"
										onClick={() =>
											setSelectedImage(
												`/assets/images/image-product-${i() + 1}.jpg`
											)
										}
										class="cursor-pointer">
										<img
											src={`/assets/images/image-product-${i() + 1}.jpg`}
											alt={`Product ${i() + 1}`}
											class={`${
												selectedImage().includes(i() + 1) &&
												"border-orange border-3 rounded-lg"
											} rounded`}
										/>
									</button>
								)}
							</For>
						</figcaption>
					</figure>

					<ProductDetails />
				</article>
			</main>
		</>
	);
}
