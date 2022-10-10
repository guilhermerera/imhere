import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type Props = {
	name: string;
	onRemove: () => void;
};

export default function Participant(props: Props) {
	const { name, onRemove } = props;
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.name}>{name}</Text>
				<TouchableOpacity style={styles.button} onPress={onRemove}>
					<Text style={styles.buttonText}>-</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
