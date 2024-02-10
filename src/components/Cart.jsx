import { Show } from "solid-js";
import { selectedImage } from "../App.jsx";
import { amount } from "./ProductDetails.jsx";

export default function Cart() {
	return (
		<>
			<section class="group-hover:peer-hover:(bg-red absolute block) hidden right-0 bottom-0 top-80% bg-white -left-36 mt-5">
				<div class=" min-w-68 min-h-42 rounded-md shadow-2xl bg-white">
					<h3 class="border-b-2 p-4 font-bold text-sm">Cart</h3>

					<Show
						when={amount() > 0}
						fallback={
							<p class="grid place-content-center py-10 text-grayish_blue font-semibold text-sm">
								Your cart is empty.
							</p>
						}
					>
						<figure class="flex items-center p-3 gap-2">
							<img src={selectedImage()} alt="" class="w-10 rounded-md" />
							<figcaption class="text-sm text-dark_grayish_blue">
								<p>Fall Limited Edition Sneakers</p>
								<p>
									$125.00 &times; {amount()}{" "}
									<span class="font-semibold ml-1">${Number(125.0 * amount()).toFixed(2)}</span>
								</p>
							</figcaption>
						</figure>
						<div class="px-3">
							<button
								type="button"
								class="text-sm rounded-md bg-orange w-full block text-center text-white font-semibold py-2"
							>
								Checkout
							</button>
						</div>
					</Show>
				</div>
			</section>
		</>
	);
}
