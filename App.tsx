import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Setando o primeiro projeto em React Native utilizando Expo.
			</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	text: {
		width: "80%",
		textAlign: "center"
	}
});
