import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import {names} from './data/names.js'
import {styles} from './data/styles.js'

export default function App() {
  return (
	<View style={styles.container}>
      {names.map((name, index) => (
        <Text key={index}>{name}</Text>
      ))}
  	<StatusBar style="auto" />
	</View>
  );
}

;
