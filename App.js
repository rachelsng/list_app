import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, FlatList } from "react-native";
import { names } from "./data/names.js";
import { styles } from "./data/styles.js";

const namesAsObjects = names.map((item)=> {
  return{
    name:item,
  }
})

export default function App() {
  const renderName = ({item}) => {
    return <Text>{item.name}</Text>
  };
  
  return(
    <FlatList
      data = {namesAsObjects}
      renderItem = {renderName}
      keyExtractor={(item)=> item.name}
    />
  );
  // return (
  //   <ScrollView contentContainerStyle={styles.container}>
  //     {names.map((name, index) => (
  //       <Text key={index}>{name}</Text>
  //     ))}
  //   </ScrollView>
  // );
}