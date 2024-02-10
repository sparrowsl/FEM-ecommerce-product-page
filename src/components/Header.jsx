import { For } from "solid-js";
import shoppingCart from "/assets/icons/icon-cart.svg";
import logo from "/assets/icons/logo.svg";
import avatar from "/assets/images/image-avatar.png";
import Cart from "./Cart.jsx";
import { amount } from "./ProductDetails.jsx";

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function Header() {
	return (
		<>
			<nav class="container flex items-center border-b font-kumbhsans">
				<a href="/" class="block">
					<img src={logo} alt="Sneakers" />
				</a>

				<ul class="flex gap-7 items-center ml-10">
					<For each={links}>
						{(link) => (
							<li class="text-dark_grayish_blue border-b-3 border-white hover:(border-b-3 border-orange) py-7">
								<a href="/" class="hover:text-black">
									{link}
								</a>
							</li>
						)}
					</For>
				</ul>

				<section class="ml-auto flex gap-10 items-center relative group">
					<div class="peer relative cursor-pointer">
						<img src={shoppingCart} alt="Shopping Cart" />
						<span class="absolute -top-2 left-2 block text-0.6rem bg-orange text-white px-2 rounded-full">
							{amount()}
						</span>
					</div>
					<Cart />
					<img
						src={avatar}
						alt="Profile Avatar"
						class="w-12 hover:(border-2 border-orange rounded-full cursor-pointer)"
					/>
				</section>
			</nav>
		</>
	);
}
