import { For } from "solid-js";
import shoppingCart from "/assets/icons/icon-cart.svg";
import logo from "/assets/icons/logo.svg";
import avatar from "/assets/images/image-avatar.png";

const links = ["Collections", "Men", "Women", "About", "Contact"];

export default function Header() {
	return (
		<>
			<nav class="container flex items-center min-h-10vh border-b font-kumbhsans">
				<a href="/" class="block">
					<img src={logo} alt="Sneakers" />
				</a>

				<ul class="flex gap-7 items-center ml-10">
					<For each={links}>
						{(link) => (
							<li class="text-dark_grayish_blue">
								<a href="/">{link}</a>
							</li>
						)}
					</For>
				</ul>

				<div class="ml-auto flex gap-10 items-center">
					<img src={shoppingCart} alt="Shopping Cart" />
					<img src={avatar} alt="Profile Avatar" class="w-12" />
				</div>
			</nav>
		</>
	);
}
