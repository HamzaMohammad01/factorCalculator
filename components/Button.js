import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// text
// onPress
// textColor
// style
// color

export default function Button({
	color = "white",
	text,
	onPress,
	textColor = "black",
	style,
	Icon,
}) {
	return (
		// <View
		// 	style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
		// >
		<TouchableOpacity
			style={[styles.container, { backgroundColor: color }, style]}
			onPress={onPress}
		>
			<View>
				{text && (
					<Text style={{ color: textColor, fontSize: 40 }}>
						{text}
					</Text>
				)}
				{Icon && (
					<MaterialCommunityIcons
						name={Icon}
						size={40}
						color="white"
					/>
				)}
			</View>
		</TouchableOpacity>
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		// height: 130,
		// width: 10,
		borderRadius: 20,
	},
});
