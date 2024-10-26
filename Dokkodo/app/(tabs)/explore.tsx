import { StyleSheet, Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import GlobalStyles from "@/constants/GlobalStyles";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: GlobalStyles.primaryBackground.backgroundColor,
        dark: GlobalStyles.secondaryBackground.backgroundColor,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/myamoto-musashi.png")}
          style={styles.hero}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Dokkōdō</ThemedText>
        <ThemedText type="subtitle">by Miyamoto Musashi</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Who Was Miyamoto Musashi?</ThemedText>
        <ThemedText>
          Miyamoto Musashi was a legendary 17th-century Japanese swordsman,
          strategist, and philosopher, widely celebrated as one of the most
          skilled samurai in history. Known for his unique double-sworded
          fighting style, Musashi remained undefeated in countless duels,
          earning a lasting legacy in Japan and beyond. His life was defined by
          a relentless dedication to martial arts and self-mastery, and his
          written works reflect this commitment to understanding not just
          combat, but the human experience. While The Book of Five Rings is his
          most famous work, focusing on the mindset and strategies of a warrior,
          Musashi's final writing, the Dokkōdō, offers a more personal
          reflection on life's deeper truths.
        </ThemedText>

        <ThemedText type="subtitle">What Is the Dokkōdō?</ThemedText>
        <ThemedText>
          The Dokkōdō, or “The Way of Walking Alone,” was written by Musashi
          just days before his passing in 1645. This brief document of 21
          precepts is a distilled version of Musashi's life philosophy—guiding
          principles that he believed could lead one to live with purpose,
          strength, and peace. Unlike his other works, which center around
          combat strategy, the Dokkōdō is deeply personal, a farewell legacy
          offering his reflections on self-discipline, detachment, and
          acceptance. Musashi's words reveal a life lived with intention, urging
          readers to cultivate inner strength and to find peace within
          themselves.
        </ThemedText>

        <ThemedText type="subtitle">Why Is the Dokkōdō Relevant Today?</ThemedText>
        <ThemedText>
          In today's fast-paced, consumer-driven world, Musashi's Dokkōdō
          provides a refreshing, timeless perspective on how to live with
          clarity and simplicity. The precepts emphasize a life free from
          unnecessary attachments—whether to material possessions, desires, or
          relationships that don't serve one's purpose. This philosophy of
          minimalism can be grounding, especially in a world that often
          encourages us to seek fulfillment externally rather than within.
        </ThemedText>

        <ThemedText type="subtitle">
          Embracing Inner Strength and Independence
        </ThemedText>
        <ThemedText>
          Musashi's Dokkōdō places great value on self-reliance and resilience.
          He advises walking one's own path, drawing strength from within, and
          not relying on others to define one's sense of purpose. For anyone
          facing difficult life choices or challenges, Musashi's words are a
          powerful reminder that true peace and strength come from within. This
          approach encourages an independence that is freeing, allowing
          individuals to navigate life with focus and resilience, regardless of
          external circumstances.
        </ThemedText>

        <ThemedText type="subtitle">
          Practicing Acceptance and Mindfulness
        </ThemedText>
        <ThemedText>
          Many of Musashi's precepts encourage acceptance—embracing life's
          experiences without the constant need to seek pleasure or avoid
          discomfort. This acceptance of life as it is mirrors modern
          mindfulness practices, reminding us that peace often comes from
          accepting the present moment. Musashi's words encourage us to live in
          harmony with life's natural rhythms, without constantly striving for
          something else.
        </ThemedText>

        <ThemedText type="subtitle">Living with Integrity and Purpose</ThemedText>
        <ThemedText>
          The Dokkōdō also reminds us of the importance of living honorably and
          authentically. Musashi urges us to stay true to our values, to avoid
          shortcuts for temporary gain, and to uphold a sense of honor and
          purpose. In a world that often pushes us toward instant gratification,
          these principles encourage a life rooted in authenticity and long-term
          fulfillment, promoting a deeper, more meaningful existence.
        </ThemedText>

        <ThemedText type="subtitle">
          Avoiding Comparison and Embracing One's Path
        </ThemedText>
        <ThemedText>
          In one of his most relevant precepts for modern times, Musashi advises
          against jealousy and urges us to focus on our own journey rather than
          comparing ourselves to others. This perspective promotes
          self-acceptance and contentment in an era of constant social
          comparison. Musashi's words remind us that fulfillment comes not from
          seeking what others have, but from embracing our own unique path.
        </ThemedText>

        <ThemedText type="subtitle">A Timeless Guide for Modern Life</ThemedText>
        <ThemedText>
          The Dokkōdō is much more than a historical document; it's a guide for
          living a life of simplicity, strength, and peace. Musashi's principles
          remind us that true happiness and resilience come from within. His way
          of “walking alone” may, in fact, lead to a richer, more fulfilled
          life, inspiring us to seek strength in simplicity, peace in
          acceptance, and honor in living authentically.
        </ThemedText>
      </ThemedView>
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
    backgroundColor: "#F5F5F5", // Light background for contrast
    borderColor: "#1C1C1C",
    borderWidth: 2,
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 16,
    padding: 10,
    alignItems: "center", // Centers the title and image
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
