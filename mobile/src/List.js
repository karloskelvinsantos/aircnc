import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  AsyncStorage,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from "react-native";

import logo from "../src/assets/logo.png";

import SpotList from "./components/SpotList";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storagedTechs => {
      const techsArray = storagedTechs.split(",").map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10
  }
});
