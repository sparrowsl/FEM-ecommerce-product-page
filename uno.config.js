import {
	defineConfig,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";

export default defineConfig({
	presets: [
		presetUno(),
		presetWebFonts({
			fonts: {
				kumbhsans: {
					name: "Kumbh Sans",
					weights: [400, 700],
				},
			},
		}),
	],
	theme: {
		colors: {
			orange: "hsl(26, 100%, 55%)",
			pale_orange: "hsl(25, 100%, 94%)",
			dark_blue: "hsl(220, 13%, 13%)",
			dark_grayish_blue: "hsl(219, 9%, 45%)",
			grayish_blue: "hsl(220, 14%, 75%)",
			light_grayish_blue: "hsl(223, 64%, 98%)",
			white: "hsl(0, 0%, 100%)",
			black: "hsl(0, 0%, 0%)",
			lightbox_black: "hsl(0, 0%, 0%, 75%)", // (with 75% opacity for lightbox background)
		},
	},
	transformers: [transformerVariantGroup()],
	shortcuts: {
		container: "max-w-6xl mx-auto",
	},
});
