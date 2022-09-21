import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from "@react-native-material/core";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.txtUsername} label="Username" variant="standard" />
      <TextInput style={styles.txtPassword} label="Password" variant="standard"/>
      <Button variant="outlined" title="Login"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtUsername:{
    width:350
  },
  txtPassword:{
    width:350
  }
});
