import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";
import Card from "../components/JobCard";
import NewSiteButton from "../components/AddNewButton";
import NewSiteForm from "../components/NewSiteForm";
import CloseButton from "../components/CloseButton";

const backgroundUrl = "/assets/splash.png";

export default function Home({ navigation }) {
  const [jobs, setJobs] = useState([
    // {
    //   builder: "Chad McGraw",
    //   location: "Park Ridge - 324",
    //   startDate: "06/22/2020",
    //   walls: "walls 1",
    //   enamel: "enamel 1",
    //   interiorStain: "intStain 1",
    //   exteriorStain: "extStain1",
    //   garage: "garage 1",
    //   ceilings: "ceilings 1",
    //   body: "body 1",
    //   accent: "accent 1",
    //   trim: "trim 1",
    //   id: 1,
    // },
    // {
    //   builder: "builder 2",
    //   location: "location 2",
    //   startDate: "start 2",
    //   walls: "walls 2",
    //   enamel: "enamel 2",
    //   interiorStain: "intStain 2",
    //   exteriorStain: "extStain 2",
    //   garage: "garage 2",
    //   ceilings: "ceilings 2",
    //   body: "body 2",
    //   accent: "accent 2",
    //   trim: "trim 2",
    //   id: 2,
    // },
    // {
    //   builder: "builder 3",
    //   location: "location 3",
    //   startDate: "start 3",
    //   walls: "walls 3",
    //   enamel: "enamel 3",
    //   interiorStain: "intStain 3",
    //   exteriorStain: "extStain 3",
    //   garage: "garage 3",
    //   ceilings: "ceilings 3",
    //   body: "body 3",
    //   accent: "accent 3",
    //   trim: "trim 3",
    //   id: 3,
    // },
    // {
    //   builder: "builder 4",
    //   location: "location 4",
    //   startDate: "start 4",
    //   walls: "walls 4",
    //   enamel: "enamel 4",
    //   interiorStain: "intStain 4",
    //   exteriorStain: "extStain 4",
    //   garage: "garage 4",
    //   ceilings: "ceilings 4",
    //   body: "body 4",
    //   accent: "accent 4",
    //   trim: "trim 4",
    //   id: 4,
    // },
    // {
    //   builder: "builder 5",
    //   location: "location 5",
    //   startDate: "start 5",
    //   walls: "walls 5",
    //   enamel: "enamel 5",
    //   interiorStain: "intStain 5",
    //   exteriorStain: "extStain 5",
    //   garage: "garage 5",
    //   ceilings: "ceilings 5",
    //   body: "body 5",
    //   accent: "accent 5",
    //   trim: "trim 5",
    //   id: 5,
    // },
    // {
    //   builder: "builder 6",
    //   location: "location 6",
    //   startDate: "start 6",
    //   walls: "walls 6",
    //   enamel: "enamel 6",
    //   interiorStain: "intStain6",
    //   exteriorStain: "extStain 6",
    //   garage: "garage 6",
    //   ceilings: "ceilings 6",
    //   body: "body 6",
    //   accent: "accent 6",
    //   trim: "trim 6",
    //   id: 6,
    // },
  ]);

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/sites")
      .then(response => response.json())
      .then(json => setJobs(json))
      .catch(err => alert(err))
      .finally(() => setLoading(false));
  }, []);

  const updateModal = () => {
    setModal(!modal);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingWrapper}>
          <Text style={styles.loading}>Loading jobs...</Text>
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.id.toString()}
          style={styles.listStyle}
          data={jobs}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("JobDetails", item);
              }}
            >
              <Card data={item} />
            </TouchableOpacity>
          )}
        />
      )}
      <View style={styles.bottomSection}>
        <NewSiteButton onPress={updateModal} />
      </View>
      <Modal
        animationType='fade'
        transparent={false}
        visible={modal}
        onRequestClose={updateModal}
      >
        <TouchableHighlight onPress={updateModal}>
          <CloseButton />
        </TouchableHighlight>
        <NewSiteForm />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9eef5",
  },
  listStyle: {
    padding: 15,
  },
  cardText: {
    fontSize: 18,
  },
  loadingWrapper: {
    height: 200,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    fontSize: 24,
  },
  bottomSection: {
    justifyContent: "flex-end",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
});
