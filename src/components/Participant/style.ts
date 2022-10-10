import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#1f1e25",
		flexDirection: "row",
		borderRadius: 5,
		alignItems: "center",
		marginBottom: 10
	},
	name: {
		flex: 1,
		fontSize: 16,
		color: "#ffffff",
		marginLeft: 16
	},
	button: {
		backgroundColor: "#bb0a1e",
		height: 56,
		width: 56,
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "center"
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 22
	}
});
