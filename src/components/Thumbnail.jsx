import { selectedImage, setSelectedImage } from "../App.jsx";

/** @param {Object{src: string}} props */
export function Thumbnail(props) {
	return (
		<>
			<button type="button" onClick={() => setSelectedImage(props.src)} class="relative">
				<img
					src={props.src}
					alt={props.alt || "Product"}
					class={`${selectedImage() === props.src && "border-orange border-3"} rounded-lg`}
				/>
			</button>
		</>
	);
}
