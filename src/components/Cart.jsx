import { Show } from "solid-js";
import { selectedImage } from "../App.jsx";
import { amount } from "./ProductDetails.jsx";

export default function Cart() {
	return (
		<>
			<section class="group-hover:peer-hover:absolute group-hover:peer-hover:block hidden inset-0 top-[60%] bg-white -left-40 mt-5">
				<div class="min-w-20 rounded-md shadow-xl bg-white">
					<h3 class="border-b p-2 font-bold text-sm">Cart</h3>

					<Show
						when={amount() > 0}
						fallback={
							<p class="grid place-content-center py-5 text-grayish_blue font-semibold text-sm">
								Your cart is empty.
							</p>
						}>
						<figure class="flex items-center p-3 gap-2">
							<img src={selectedImage()} alt="" class="w-10 rounded-md" />
							<figcaption class="text-sm text-dark_grayish_blue">
								<p>Fall Limited Edition Sneakers</p>
								<p>
									$125.00 &times; {amount()}{" "}
									<span class="font-semibold ml-1">
										${Intl.NumberFormat().format(125.0 * amount())}
									</span>
								</p>
							</figcaption>
						</figure>
						<div class="px-3">
							<button
								type="button"
								class="text-sm rounded-md bg-orange w-full block text-center text-white font-semibold py-2">
								Checkout
							</button>
						</div>
					</Show>
				</div>
			</section>
		</>
	);
}
