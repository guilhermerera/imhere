import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
	Alert
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
	const participants = [
		"Guilherme Ferreira",
		"Debora Saito",
		"Bastet Tetê",
		"Zarina Nina",
		"Lula",
		"Silvana Ferreira",
		"Antonio Carlos",
		"Felipe Ferreira",
		"Zézé Dicamargo",
		"E Luciano"
	];

	function handlePaticipandAdd(name: string) {
		if (participants.includes(name)) {
			return Alert.alert("Ops", "Participante já cadastrado.");
		}
		Alert.alert("Sucesso", "Participante cadastrado com sucesso.");
	}

	function handlePaticipantRemove(name: string) {
		Alert.alert(
			"Remover participante",
			`Tem certeza que deseja remover o participante ${name} do evento?`,
			[
				{
					text: "Confirmar",
					onPress: () =>
						Alert.alert(
							"Participante removido",
							`O participante ${name} foi removido do evento.`
						)
				},
				{
					text: "Cancelar",
					style: "cancel"
				}
			]
		);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.eventName}>Nome do Evento</Text>
			<Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder='Nome do participante'
					placeholderTextColor='#6b6b6b'
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => handlePaticipandAdd("Nome")}>
					<Text style={styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={participants}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Participant
						key={item}
						name={item}
						onRemove={() => handlePaticipantRemove(item)}
					/>
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={styles.emptyListText}>
						Ninguém chegou no evento ainda. Sejo primeiro a marcar presença.
					</Text>
				)}
			/>
		</View>
	);
}
