import Color from "color";

export const COLORS = {
	primary: "#fff",
	secondary: "#3DB0ED",
	warning: "#ED3D3D",
	textPrimary: "black",
	white: "#fff"
};

export const GRADIENTS = {
	secondary: [
		COLORS.secondary,
		Color(COLORS.secondary)
			.darken(0.25)
			.hex()
	],
	grey: [
		"lightgrey",
		Color("lightgrey")
			.darken(0.25)
			.hex()
	]
};
