import { For, createSignal } from "solid-js";
import Header from "./components/Header.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { Thumbnail } from "./components/Thumbnail.jsx";

export const [selectedImage, setSelectedImage] = createSignal(
	"/assets/images/image-product-1.jpg"
);

export default function App() {
	return (
		<>
			<Header />

			<main class="container font-kumbhsans min-h-90vh flex flex-col justify-center">
				<article class="flex items-center px-20 gap-20">
					<figure class="w-full max-w-25rem">
						<img src={selectedImage()} alt="" class="max-w-25em rounded-xl" />
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

					<ProductDetails />
				</article>
			</main>
		</>
	);
}
