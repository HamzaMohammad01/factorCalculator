import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Constants from "expo-constants";
import Grid from "../components/Grid";

export default function FactorCalculatorScreen() {
	let [textField, setTextField] = useState("0");
	let [result, setResult] = useState("0");
	let [textColor, setTextColor] = useState("black");

	return (
		<View style={styles.container}>
			<Grid
				array={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]}
				textField={textField}
				setTextField={setTextField}
				setResult={setResult}
				setTextColor={setTextColor}
			/>

			<ScrollView style={styles.resultContainer}>
				<Text style={[styles.resultText, { color: textColor }]}>
					{result}
				</Text>
				{/* {result.map((item, index) => (
          <Text key={item + index} style={styles.resultText}>
            {item}
          </Text>
        ))} */}
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#e9e9e9",
		flex: 1,
		padding: 20,
		paddingTop: Constants.statusBarHeight,
	},
	resultContainer: {
		position: "absolute",
		bottom: "45%",
		height: "55%",
		width: "100%",
		marginTop: 20,

		alignSelf: "flex-end",
	},
	resultText: {
		color: "black",
		fontSize: 50,
		textAlign: "right",
		paddingHorizontal: 40,
	},
});
