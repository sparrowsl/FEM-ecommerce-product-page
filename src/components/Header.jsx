import { For } from "solid-js";
import shoppingCart from "/assets/icons/icon-cart.svg";
import logo from "/assets/icons/logo.svg";
import avatar from "/assets/images/image-avatar.png";

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

				<section class="ml-auto flex gap-10 items-center">
					<div>
						<img src={shoppingCart} alt="Shopping Cart" />
					</div>
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
