import { createSignal } from "solid-js";

export default function ProductDetails() {
	const [amount, setAmount] = createSignal(0);

	return (
		<>
			<section class="w-full px-10">
				<h3 class="text-orange uppercase mb-2 font-semibold text-sm">
					Sneaker Company
				</h3>
				<h1 class="text-4xl text-black font-bold mb-5">
					Fall Limited Edition Sneakers
				</h1>
				<p class="text-dark_grayish_blue mb-4">
					These low-profile sneakers are your perfect casual wear companion.
					Featuring a durable rubber outer sole, they''ll withstand everything
					the weather can offer.
				</p>

				<h3 class="font-bold text-xl flex items-center gap-3">
					$125.00
					<span class="text-sm bg-pale_orange text-orange px-2 rounded-sm">
						50%
					</span>
				</h3>
				<p class="line-through text-grayish_blue font-bold text-sm mt-1">
					$250.00
				</p>

				{/* Add to cart plus counter */}
				<div class="mt-8 flex items-center gap-5">
					<div class="flex items-center gap-5 bg-light_grayish_blue w-fit rounded-md">
						<button
							type="button"
							class="p-4 block"
							onClick={() => setAmount((amount() > 0 && amount() - 1) || 0)}>
							<img src="/assets/icons/icon-minus.svg" alt="Minus Product" />
						</button>
						<p>{amount()}</p>
						<button
							type="button"
							class="p-4 block"
							onClick={() => setAmount(amount() + 1)}>
							<img src="/assets/icons/icon-plus.svg" alt="Add Product" />
						</button>
					</div>

					<button
						type="button"
						class="block flex items-center gap-3 bg-orange text-white font-bold px-6 py-3 rounded-md">
						<img src="/assets/icons/icon-cart.svg" alt="Cart Icon" />
						Add to cart
					</button>
				</div>
			</section>
		</>
	);
}
