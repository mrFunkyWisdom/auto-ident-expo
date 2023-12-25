import { StyleSheet, Text, View } from 'react-native';

import * as IdNowAutoIdent from 'id-now-auto-ident';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{IdNowAutoIdent.hello()}</Text>
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
});
