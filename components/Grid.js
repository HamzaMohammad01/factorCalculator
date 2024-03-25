import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";

let factor = require("../utils/Factor");

export default function Grid({
	array,
	style,
	textField,
	setTextField,
	setResult,
	setTextColor,
}) {
	let handleNumbers = (input) => {
		let myTextField = textField;
		if (myTextField == 0) myTextField = "";
		myTextField = myTextField + input;
		setTextField(myTextField);
		setResult(myTextField);
		setTextColor("black");
	};

	let handleBackspace = () => {
		let myTextField = textField;
		myTextField = myTextField.slice(0, -1);
		if (myTextField.length == 0) myTextField = "0";
		setTextField(myTextField);
		setResult(myTextField);
		setTextColor("black");
	};

	let handleClear = () => {
		let myTextField = textField;
		myTextField = "0";
		setTextField(myTextField);
		setResult(myTextField);
		setTextColor("black");
	};

	let handleCalculate = () => {
		let myTextField = textField;
		let result = factor(parseInt(myTextField));
		setTextColor("#46d5b2");
		setResult(result.join("\n"));
	};
	return (
		<View style={[styles.container, style]}>
			<View style={styles.row}>
				<Button
					text={array[0]}
					style={styles.button}
					onPress={() => handleNumbers(array[0])}
				/>
				<Button
					text={array[1]}
					style={styles.button}
					onPress={() => handleNumbers(array[1])}
				/>
				<Button
					text={array[2]}
					style={styles.button}
					onPress={() => handleNumbers(array[2])}
				/>
				<Button
					style={styles.button}
					color={"dodgerblue"}
					Icon={"backspace"}
					onPress={handleBackspace}
				/>
			</View>
			<View style={styles.row}>
				<Button
					text={array[3]}
					style={styles.button}
					onPress={() => handleNumbers(array[3])}
				/>
				<Button
					text={array[4]}
					style={styles.button}
					onPress={() => handleNumbers(array[4])}
				/>
				<Button
					text={array[5]}
					style={styles.button}
					onPress={() => handleNumbers(array[5])}
				/>
				<Button
					style={styles.button}
					color={"dodgerblue"}
					Icon={"magic-staff"}
					onPress={handleClear}
				/>
			</View>
			<View style={styles.row}>
				<Button
					text={array[6]}
					style={styles.button}
					onPress={() => handleNumbers(array[6])}
				/>
				<Button
					text={array[7]}
					style={styles.button}
					onPress={() => handleNumbers(array[7])}
				/>
				<Button
					text={array[8]}
					style={styles.button}
					onPress={() => handleNumbers(array[8])}
				/>
				<Button
					style={styles.button}
					color={"dodgerblue"}
					Icon={"magnify"}
					onPress={handleCalculate}
				/>
			</View>
			<View style={styles.row}>
				<Button
					text={array[9]}
					style={styles.button}
					textColor={"white"}
					color={"gray"}
					onPress={() => handleNumbers(array[9])}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.4,
		alignItems: "center",
		justifyContent: "center",
		top: "60%",
	},
	row: {
		flex: 4,
		flexDirection: "row",
	},
	button: {
		flex: 1,
		marginHorizontal: 5,
		marginVertical: 5,
	},
});
