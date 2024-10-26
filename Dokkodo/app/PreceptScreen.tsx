import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import GlobalStyles from "@/constants/GlobalStyles";

type RootStackParamList = {
  PreceptScreen: { preceptId: number };
};

type PreceptScreenRouteProp = RouteProp<RootStackParamList, "PreceptScreen">;

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

const precepts: { [key: number]: string } = {
  1: "Accept everything just the way it is",
  2: "Do not seek pleasure for its own sake",
  3: "Do not, under any circumstances, depend on a partial feeling",
  4: "Think lightly of yourself and deeply of the world",
  5: "Be detached from desire your whole life long",
  6: "Do not regret what you have done",
  7: "Never be jealous",
  8: "Never let yourself be saddened by a separation",
  9: "Resentment and complaint are appropriate neither for oneself nor others",
  10: "Do not let yourself be guided by the feeling of lust or love",
  11: "In all things have no preferences",
  12: "Be indifferent to where you live",
  13: "Do not pursue the taste of good food",
  14: "Do not hold on to possessions you no longer need",
  15: "Do not act following customary beliefs",
  16: "Do not collect weapons or practice with weapons beyond what is useful",
  17: "Do not fear death",
  18: "Do not seek to possess either goods or fiefs for your old age",
  19: "Respect Buddha and the gods without counting on their help",
  20: "You may abandon your own body but you must preserve your honour",
  21: "Never stray from the Way",
};

export default function PreceptScreen() {
  const route = useRoute<PreceptScreenRouteProp>();
  const navigation = useNavigation();
  const { preceptId } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Precept ${preceptId}`,
      headerTitleStyle: {
        fontSize: GlobalStyles.titleText.fontSize,
        fontWeight: GlobalStyles.titleText.fontWeight, // Bold for titles
        fontFamily: GlobalStyles.titleText.fontFamily,
        textAlign: GlobalStyles.titleText.textAlign, // Center-aligned for title
      },
    });
  }, [navigation, preceptId]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: GlobalStyles.primaryBackground.backgroundColor,
        dark: GlobalStyles.primaryBorder.borderColor,
      }}
      headerImage={
        <Image source={preceptImages[preceptId]} style={styles.hero} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          {preceptId}. {precepts[preceptId] ?? `Precept ${preceptId}`}
        </ThemedText>
        {/* <ThemedText type="subtitle">一 Precept 1</ThemedText> */}
      </ThemedView>

      {/* Precept1 content */}
      {preceptId === 1 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            Life unfolds like the river, flowing according to the will of
            nature. A warrior does not fight against the current, nor does he
            cling to the shore. To resist the way of things is to burden the
            spirit with suffering. Accept each moment—whether joy or sorrow,
            victory or defeat—with a calm heart and a clear mind.
          </ThemedText>
          <ThemedText>
            To accept all things as they are is to embrace the truth of
            existence. Only when we let go of our desires for things to be
            different, do we find the strength to walk our path without
            hesitation. In this, there is great power, for the one who accepts
            life in its entirety is free from doubt and fear, walking the way of
            serenity and purpose.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept2 content */}
      {preceptId === 2 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior's path is not paved with fleeting comforts, nor adorned
            with the sweet taste of indulgence. To pursue pleasure is to chase
            the morning mist—vanishing before one's grasp. Such desires cloud
            the mind and weaken the spirit, drawing the heart away from its true
            purpose.
          </ThemedText>
          <ThemedText>
            The way of the warrior is forged in discipline, not in luxury.
            Pleasure comes and goes like the wind, but honour and duty endure.
            Walk the path of simplicity and restraint, for it is in hardship,
            not comfort, that the sword of the soul is sharpened. Let your mind
            be still, unattached to worldly delight, and focused on the greater
            harmony of your mission.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept3 content */}
      {preceptId === 3 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior's mind must be like the polished blade—sharp, clear, and
            unwavering. To rely on half-formed thoughts or fleeting emotions is
            to walk into battle with a dull sword. Doubt, hesitation, or
            incomplete judgment weakens your resolve and leads you astray.
          </ThemedText>
          <ThemedText>
            True strength lies in clarity. Before you act, let your mind be
            settled, your intention pure. There is no room for uncertainty in
            the heart of one who walks the Way. In all matters—whether great or
            small—commit fully or do not act at all. Only when you move with
            complete conviction can you strike with precision and honour.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept4 content */}
      {preceptId === 4 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            The way of the warrior is not marked by pride or self-importance. To
            think too highly of oneself is to be blinded by ego, making one
            vulnerable to error and defeat. A true warrior walks with humility,
            knowing that his strength is but a small part of the greater whole.
          </ThemedText>
          <ThemedText>
            Instead, turn your gaze outward, to the world around you.
            Contemplate deeply the nature of life, the vastness of the sky, the
            flow of the river, and the harmony of all things. By understanding
            the world, you align yourself with its rhythm and can act with
            wisdom, not arrogance.
          </ThemedText>
          <ThemedText>
            Cast aside the weight of self-importance, for only with a humble
            spirit can you perceive the truth of the world and walk the Way with
            clarity and honour.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept5 content */}
      {preceptId === 5 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            Desire is a chain that binds the spirit, clouding the mind and
            weakening the heart. To long for possessions, power, or pleasure is
            to surrender your freedom, for desire breeds attachment, and
            attachment leads to suffering. A warrior must walk the path with a
            heart unburdened by such cravings.
          </ThemedText>
          <ThemedText>
            True strength lies in detachment. Live each day without grasping for
            more than what is needed. Do not be ruled by the hunger for wealth,
            fame, or comfort, for these are fleeting shadows. Instead, hold your
            spirit like an empty cup—ready to receive what comes, yet untroubled
            when it departs.
          </ThemedText>
          <ThemedText>
            In this way, your heart will remain clear, and your mind will remain
            sharp, undistracted by the pull of desires. Only then can you walk
            the Way with balance and grace, like a leaf carried by the wind,
            free and unbound.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept6 content */}
      {preceptId === 6 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior walks the path of life with firm steps, unshaken by the
            weight of the past. Regret is a poison that lingers in the soul,
            clouding judgment and weakening resolve. What is done cannot be
            undone, and to dwell on it is to allow your spirit to be chained by
            shadows.
          </ThemedText>
          <ThemedText>
            Instead, accept all actions as part of the journey. Learn from them,
            but do not be held captive by them. Whether your choices brought
            victory or failure, pain or joy, they have shaped the warrior you
            are now. In each moment, you acted as you believed right—there is
            honour in that.
          </ThemedText>
          <ThemedText>
            Do not look back with sorrow, for the Way is always forward. Carry
            the lessons of the past in your heart, but walk with your eyes set
            on the horizon. The samurai's path is one of constant movement, free
            from the burden of regret. Only then can you wield your sword with
            true clarity and walk the Way with unwavering focus.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept7 content */}
      {preceptId === 7 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            Jealousy is a fire that consumes the soul, distorting the heart and
            clouding the mind. A warrior who envies another's success,
            possessions, or strength loses sight of his own path. To compare
            yourself to others is to invite weakness, for it leads you away from
            the Way and fills your spirit with discord.
          </ThemedText>
          <ThemedText>
            Walk your own path with honour and humility. What others achieve is
            their journey, not yours. Focus on your own sword, your own
            discipline, and your own growth. In the quiet of your training and
            the clarity of your actions, you will find strength.
          </ThemedText>
          <ThemedText>
            Jealousy binds you to desires that are not your own. Free yourself
            from this poison, and you will walk with peace, unmoved by the gains
            or losses of others. The Way is yours alone—forge it with your own
            hands, undistracted by what others carry.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept8 content */}
      {preceptId === 8 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            Life is a series of meetings and partings, like the ebb and flow of
            the tides. To cling to what must inevitably pass is to invite sorrow
            into the heart. A true warrior understands that separation is a
            natural part of the Way, whether it be the loss of companions,
            possessions, or even seasons of life.
          </ThemedText>
          <ThemedText>
            Do not mourn what leaves your side, for nothing in this world is
            permanent. Accept the coming and going of people and things as you
            would the changing of the wind—without resistance. In this
            acceptance, there is peace, for the warrior knows that attachment
            only weakens the spirit.
          </ThemedText>
          <ThemedText>
            Honour those who have walked with you, but do not bind your heart to
            their presence. Release them with gratitude, and continue your
            journey without the weight of grief. The Way is long, and to walk it
            freely, you must carry no burden of sadness. In embracing
            impermanence, you walk in harmony with life itself, unshaken and
            serene.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept9 content */}
      {preceptId === 9 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            Resentment is a heavy stone that weighs down the spirit, and
            complaint is the cry of a heart unaligned with the Way. To harbour
            bitterness or to voice dissatisfaction is to poison the purity of
            your mind, distracting you from the path of honour and discipline.
          </ThemedText>
          <ThemedText>
            A warrior accepts all things with calmness. Whether faced with
            hardship, betrayal, or misfortune, he does not allow resentment to
            take root. The world moves as it will, and people act according to
            their nature. To hold ill will toward others or curse your
            circumstances is to give power to weakness.
          </ThemedText>
          <ThemedText>
            Cast aside the need for complaint. Face all things with dignity and
            silence, for it is not the outer world that defines the warrior, but
            the inner state of his soul. By rejecting resentment and complaint,
            you strengthen your heart and keep your sword sharp. Walk through
            adversity with your head held high, for a true warrior finds peace
            in all things, unmoved by the storms of anger and discontent.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept10 content */}
      {preceptId === 10 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior's heart must remain clear and undisturbed, like a still
            pond that reflects the moon without distortion. To be swayed by lust
            or love is to allow the waters of the soul to become clouded,
            disrupting your focus and drawing you away from the Way.
          </ThemedText>
          <ThemedText>
            Lust is a hunger that consumes the mind, while love can, at times,
            become a chain that binds the spirit. Both, when unchecked, can lead
            a warrior to act without wisdom, causing his sword to falter. To
            walk the true path, you must remain unattached to such desires, for
            they pull you from your purpose and weaken your resolve.
          </ThemedText>
          <ThemedText>
            This does not mean the heart must be cold, for love and compassion
            have their place. But they must not rule over you. A warrior must be
            guided by honour, duty, and discipline, not by the fleeting desires
            of the flesh or the entanglements of love. Keep your heart balanced
            and steady, for only then can you walk the Way with true clarity and
            strength.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept11 content */}
      {preceptId === 11 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            The warrior's mind must be like the sky—vast, open, and free from
            attachments. To hold preferences is to limit your vision, binding
            yourself to the desires of what should be, rather than accepting
            what is. When you favour one outcome, one path, or one thing over
            another, you allow your spirit to be swayed, losing your balance.
          </ThemedText>
          <ThemedText>
            Walk the Way with a heart that is indifferent to gain or loss, to
            hardship or ease. Whether the road ahead is smooth or rugged, you
            must tread it with the same resolve. In combat, a samurai does not
            choose his challenges—he faces whatever arises with equal readiness,
            unmoved by preference or fear.
          </ThemedText>
          <ThemedText>
            To have no preferences is to embrace the flow of life without
            resistance. It is to accept both joy and sorrow, both victory and
            defeat, as part of the same journey. In this detachment, you will
            find true freedom, for nothing will disturb the stillness of your
            mind. With no preferences, you walk the Way as the wind blows,
            moving where it must, unbound by desire.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept12 content */}
      {preceptId === 12 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A true warrior's heart is not bound to a place, for the Way exists
            everywhere, whether in the mountains, on the battlefield, or in the
            quiet of a village. To become attached to a dwelling or land is to
            let the mind grow weak, tethered to comfort and familiarity. A
            samurai must be prepared to walk the earth with nothing but his
            sword and spirit, at peace in any setting.
          </ThemedText>
          <ThemedText>
            Whether your home is a grand castle or a humble hut, it is but a
            temporary resting place on the journey. A warrior does not seek
            comfort in walls or possessions. His true home is within—the
            discipline he carries, the honour in his actions, and the clarity of
            his mind. These things cannot be taken by the winds of fate or the
            turning of time.
          </ThemedText>
          <ThemedText>
            Be indifferent to where you live, for no place will shelter you from
            the challenges of life. Instead, let your strength come from within,
            and you will be at peace wherever your feet may tread. In every
            place, the Way is present, and a warrior carries his home within his
            soul.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept13 content */}
      {preceptId === 13 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior does not live to indulge the body, for the body is but a
            vessel, and pleasure is fleeting like the morning dew. To seek the
            taste of fine food is to be distracted by earthly desires, pulling
            your spirit away from the Way. The pursuit of luxury weakens the
            discipline of the mind, leaving you vulnerable to the cravings of
            the flesh.
          </ThemedText>
          <ThemedText>
            Sustain yourself, but do not feast for pleasure. Let food serve its
            purpose—nourishment for the body, fuel for the journey. Whether the
            meal is rich or plain, accept it with the same gratitude, for the
            warrior's focus is not on what pleases the tongue, but on what
            sharpens the mind and strengthens the heart.
          </ThemedText>
          <ThemedText>
            In simplicity, there is strength. In moderation, there is clarity.
            To eat with detachment from taste is to honour the Way, remaining
            free from indulgence and excess. The body is sustained by food, but
            the spirit is sustained by discipline. Let your soul be fed by
            purpose, and you will walk the Way with unwavering resolve.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept14 content */}
      {preceptId === 14 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior's path is one of simplicity, free from the burdens of
            excess. To cling to possessions is to weigh down the spirit, binding
            yourself to things that do not serve your journey. The more you
            carry, the slower you walk, and in battle, such attachments can cost
            you your life.
          </ThemedText>
          <ThemedText>
            Keep only what is necessary, for the true wealth of a samurai lies
            not in what he owns, but in his discipline, his honour, and his
            strength of character. Objects have no power; it is your mastery of
            the Way that brings purpose. To hold onto what is no longer needed
            is to allow the past to anchor you, when the Way is always forward.
          </ThemedText>
          <ThemedText>
            Release what has outlived its usefulness. In doing so, you free your
            heart and sharpen your focus. A warrior's hands must be light, his
            mind unclouded by material concerns. Travel with little, live with
            less, and you will walk the Way with a spirit that is unbound and
            ready for all challenges. In letting go, you find true freedom.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept15 content */}
      {preceptId === 15 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior does not blindly follow the path laid by others. To act
            according to custom alone is to walk without understanding, like a
            leaf carried by the wind, with no will of its own. Traditions and
            beliefs may have their place, but the true Way is found through
            one's own discernment and inner truth.
          </ThemedText>
          <ThemedText>
            Do not be shackled by the ways of the past or the expectations of
            society. A samurai must see the world with clear eyes, questioning
            what is taught and understanding for himself the nature of honour,
            duty, and wisdom. To follow customs without thought is to surrender
            your mind, and in doing so, you stray from the Way.
          </ThemedText>
          <ThemedText>
            Forge your path with intention and awareness. Respect tradition, but
            do not let it command you. Act with purpose, not merely because it
            is what others expect or what has been done before. The Way is
            ever-evolving, and a warrior's strength lies in his ability to adapt
            and remain true to his own spirit.
          </ThemedText>
          <ThemedText>
            In breaking free from the grip of custom, you walk the Way as a free
            man, with honour born of your own understanding, not that of
            another.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept16 content */}
      {preceptId === 16 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior's strength does not lie in the number of weapons he
            possesses, but in his mastery of the ones he wields. To gather many
            weapons is to be distracted by their variety, mistaking possession
            for skill. It is not the weapon that makes the warrior, but the hand
            and spirit that guide it.
          </ThemedText>
          <ThemedText>
            Do not covet tools for their own sake, for they are but extensions
            of your will. Practice with the sword, the spear, or the bow, but do
            so with purpose. Do not seek to master every weapon, for to do so is
            to scatter your focus and weaken your skill. Better to know a few
            well than many poorly.
          </ThemedText>
          <ThemedText>
            The true path is simplicity. Sharpen your technique, not your
            arsenal. Use what is necessary and discard what is not. A single
            sword, when held by a disciplined hand, can defeat a hundred
            weapons. It is not the variety that matters, but the depth of your
            mastery.
          </ThemedText>
          <ThemedText>
            Walk the Way with a heart that seeks skill, not possession. With a
            single, well-honed blade, you will be as formidable as the one who
            holds many, for it is the warrior's discipline that brings victory,
            not the abundance of tools.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept17 content */}
      {preceptId === 17 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A samurai must walk his path with courage, for fear of death is a
            chain that binds the spirit, weakening resolve and clouding
            judgment. Death is a companion to all who live, an ever-present
            shadow that none can avoid. To fear it is to spend one's life in
            shackles, unable to meet the Way with true strength and clarity.
          </ThemedText>
          <ThemedText>
            Embrace death as part of the natural order, for the warrior does not
            fight to avoid it, but to live honourably until it arrives. Accept
            that one day the breath will cease, the hand will fall still, and
            all that will remain are the actions taken along the Way. This
            knowledge frees the soul, granting fearlessness in battle and peace
            in daily life.
          </ThemedText>
          <ThemedText>
            Do not shrink from death, for it is the final test of a samurai's
            spirit. Instead, let the understanding of mortality sharpen your
            purpose and strengthen your resolve. Walk the Way without fear, for
            in embracing death, you find a life of courage, honour, and clarity.
            The samurai who does not fear death is the samurai who lives most
            fully.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept18 content */}
      {preceptId === 18 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior's spirit should not be tethered by the pursuit of wealth
            or land. To seek security in material things as the years advance is
            to cling to illusions, for the path of the samurai is one of
            discipline and impermanence. When your heart is set on amassing
            goods or titles, your mind drifts from the Way, and your strength
            wanes.
          </ThemedText>
          <ThemedText>
            True security lies not in riches but in the resilience of the spirit
            and the honour of your actions. Do not burden yourself with worry
            over future comforts, for the samurai who lives each day with
            purpose and clarity has no need of wealth to validate his worth.
            Your life is not measured by what you possess, but by the depth of
            your courage, the loyalty of your friendships, and the strength of
            your resolve.
          </ThemedText>
          <ThemedText>
            Release the desire for wealth in old age, for such thoughts weaken
            the heart and disturb the mind. Walk the Way with simplicity and
            humility, and when the final years come, you will find peace, having
            lived with honour. The warrior's legacy is in his deeds, not in his
            possessions.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept19 content */}
      {preceptId === 19 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A warrior honours the divine, bowing in reverence to the mysteries
            beyond human understanding. Yet, he does not place his fate in the
            hands of gods or rely on divine intervention for strength. To depend
            on forces beyond oneself is to weaken the spirit, for it is within
            one's own heart and mind that true power resides.
          </ThemedText>
          <ThemedText>
            Walk the Way with humility, acknowledging that there are forces
            greater than yourself. Show respect to the gods, to Buddha, to the
            spirit of the world around you, but do not surrender your own will.
            A samurai must stand firm, knowing that his actions, his choices,
            and his discipline are his own. It is through his strength, not the
            aid of the divine, that he forges his path.
          </ThemedText>
          <ThemedText>
            In times of trial, look within for courage, not outward for
            salvation. The Way is not given; it is earned through resilience and
            honour. Bow to the gods, but walk forward on your own feet, for only
            then will you know the true strength that comes from walking the Way
            with self-reliance and respect.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept20 content */}
      {preceptId === 20 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            A samurai's life is fleeting, like a cherry blossom that falls in
            its prime. The body is but a vessel, vulnerable to time and fate,
            destined to one day return to the earth. Yet, while the body may
            fall, honour is eternal, living on as the essence of one's spirit
            and the echo of one's deeds.
          </ThemedText>
          <ThemedText>
            In battle, as in life, there may come a time when a warrior must
            risk or even sacrifice his life. To preserve honour is to act with
            integrity, loyalty, and courage, regardless of the cost to oneself.
            A true samurai values honour above all, for it is the flame that
            guides him through the darkest paths, the measure of his worth.
          </ThemedText>
          <ThemedText>
            Abandon the body when necessary, but let no act taint your name or
            your soul. Live so that even when the body is no more, your honour
            will stand as a testament to the Way you walked. For the samurai,
            death is not to be feared, but dishonour is to be avoided at all
            costs. Let your actions be a mirror of your spirit, for only through
            honour does a warrior achieve immortality.
          </ThemedText>
        </ThemedView>
      )}

      {/* Precept21 content */}
      {preceptId === 21 && (
        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            The Way is the path of discipline, honour, and unwavering purpose.
            It is a journey of self-mastery, of shedding the weaknesses that
            bind the soul and forging a spirit as unyielding as steel. To stray
            from the Way is to lose oneself, to fall victim to desires, fears,
            and doubts that cloud the mind and weaken the heart.
          </ThemedText>
          <ThemedText>
            A samurai must walk this path with unbreakable resolve, no matter
            the obstacles, temptations, or hardships that arise. There will be
            days when the Way seems narrow, when doubt whispers, or when the
            burdens grow heavy. Yet, to remain true is to honour the very
            essence of the warrior's spirit, to rise above the fleeting pains
            and joys of the world and uphold the principles that define a life
            of purpose.
          </ThemedText>
          <ThemedText>
            The Way is not simply a set of rules but a commitment to live with
            integrity, to seek wisdom, and to embody strength and compassion in
            each step. Never stray from it, for it is the path that will lead
            you to the highest expression of yourself, beyond the limits of
            flesh and time.
          </ThemedText>
          <ThemedText>
            In walking the Way steadfastly, you become the Way
            itself—unchanging, ever-true, a beacon of honour in a world that
            shifts like the sands. Hold fast to this path, and let nothing pull
            you from it, for in it lies the essence of your spirit, the depth of
            your strength, and the eternity of your legacy.
          </ThemedText>
        </ThemedView>
      )}
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
    aspectRatio: 518 / 290, // Maintain the original aspect ratio,
    borderColor: GlobalStyles.secondaryBorder.borderColor,
    borderWidth: GlobalStyles.secondaryBorder.borderWidth,
  },
});
