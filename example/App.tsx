import { StyleSheet, Text, View } from "react-native";

import * as IdNowAutoIdent from "id-now-auto-ident";
import { IdNowLanguage } from "id-now-auto-ident";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      IdNowAutoIdent.startAutoIdent("TST-BRLYCD-KN", IdNowLanguage.en).then(
        (d) => {
          console.log("DATA FROM START AUTO IDENT ", d);
        },
      );
   }, 2000)
  }, []);

  return (
    <View style={styles.container}>


      <Text>wait for 2 seconds
      </Text>
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
