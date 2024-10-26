import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  NavigationProp,
  useNavigation,
  RouteProp,
} from "@react-navigation/native";
import GlobalStyles from "@/constants/GlobalStyles";

type RootStackParamList = {
  PreceptScreen: { preceptId: number };
};

const preceptImages: { [key: number]: any } = {
  1: require("@/assets/images/precept-1.png"),
  2: require("@/assets/images/precept-2.png"),
  3: require("@/assets/images/precept-3.png"),
  4: require("@/assets/images/precept-4.png"),
  5: require("@/assets/images/precept-5.png"),
  6: require("@/assets/images/precept-6.png"),
  7: require("@/assets/images/precept-7.png"),
  8: require("@/assets/images/precept-8.png"),
  9: require("@/assets/images/precept-9.png"),
  10: require("@/assets/images/precept-10.png"),
  11: require("@/assets/images/precept-11.png"),
  12: require("@/assets/images/precept-12.png"),
  13: require("@/assets/images/precept-13.png"),
  14: require("@/assets/images/precept-14.png"),
  15: require("@/assets/images/precept-15.png"),
  16: require("@/assets/images/precept-16.png"),
  17: require("@/assets/images/precept-17.png"),
  18: require("@/assets/images/precept-18.png"),
  19: require("@/assets/images/precept-19.png"),
  20: require("@/assets/images/precept-20.png"),
  21: require("@/assets/images/precept-21.png"),
};

const precepts = [
  { id: 1, text: "Accept everything just the way it is" },
  { id: 2, text: "Do not seek pleasure for its own sake" },
  {
    id: 3,
    text: "Do not, under any circumstances, depend on a partial feeling",
  },
  { id: 4, text: "Think lightly of yourself and deeply of the world" },
  { id: 5, text: "Be detached from desire your whole life long" },
  { id: 6, text: "Do not regret what you have done" },
  { id: 7, text: "Never be jealous" },
  { id: 8, text: "Never let yourself be saddened by a separation" },
  {
    id: 9,
    text: "Resentment and complaint are appropriate neither for oneself nor others",
  },
  {
    id: 10,
    text: "Do not let yourself be guided by the feeling of lust or love",
  },
  { id: 11, text: "In all things have no preferences" },
  { id: 12, text: "Be indifferent to where you live" },
  { id: 13, text: "Do not pursue the taste of good food" },
  { id: 14, text: "Do not hold on to possessions you no longer need" },
  { id: 15, text: "Do not act following customary beliefs" },
  {
    id: 16,
    text: "Do not collect weapons or practice with weapons beyond what is useful",
  },
  { id: 17, text: "Do not fear death" },
  {
    id: 18,
    text: "Do not seek to possess either goods or fiefs for your old age",
  },
  {
    id: 19,
    text: "Respect Buddha and the gods without counting on their help",
  },
  {
    id: 20,
    text: "You may abandon your own body but you must preserve your honour",
  },
  { id: 21, text: "Never stray from the Way" },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleCardPress = (preceptId: number) => {
    navigation.navigate('PreceptScreen', { preceptId });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: GlobalStyles.primaryBackground.backgroundColor,
        dark: GlobalStyles.secondaryBackground.backgroundColor,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/myamoto-musashi-dokkodo.png")}
          style={styles.hero}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Dokkōdō</ThemedText>
        <ThemedText type="subtitle">by Miyamoto Musashi</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          The Dokkōdō (独行道) "The Path of Aloneness" is a short work written
          by Miyamoto Musashi (宮本 武蔵) a week before he died in 1645. It
          consists of 21 precepts.
        </ThemedText>
      </ThemedView>

      {/* Iterate over the precepts and create a card for each */}
      {precepts.map((precept) => (
        <TouchableOpacity key={precept.id} onPress={() => handleCardPress(precept.id)} style={styles.cardContainer}>
          <Image
            source={preceptImages[precept.id]}
            style={styles.preceptImage}
            resizeMode="contain"
          />
          <ThemedText type="subtitle" style={GlobalStyles.cardTitle}>
            {precept.id}. {precept.text}
          </ThemedText>
        </TouchableOpacity>
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  hero: {
    width: "100%",
    height: undefined, // Adjust height to maintain aspect ratio
    aspectRatio: 518 / 296, // Maintain the original aspect ratio
  },
  cardContainer: {
    backgroundColor: '#F5F5F5', // Light background for contrast
    borderColor: '#1C1C1C',
    borderWidth: 2,
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 16,
    padding: 10,
    alignItems: 'center', // Centers the title and image
  },
  preceptImage: {
    width: "100%",
    height: undefined, // Adjust height to maintain aspect ratio
    aspectRatio: 518 / 296, // Adjust this based on the actual aspect ratio of the image
    borderRadius: 8,
  },
  preceptText: {
    marginTop: 12,
    textAlign: "center",
  },
});
