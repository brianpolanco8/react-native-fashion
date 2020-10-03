import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image, ViewStyle, TextStyle, ImageStyle } from "react-native";
import Animated, {
  divide,
  Extrapolate,
  interpolate,
  multiply,
} from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import { Theme, useTheme, makeStyles } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";

import Dot from "./Dot";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";

const { width } = Dimensions.get("window");



const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii?.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii?.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii?.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii?.xl,
    overflow: "hidden",
  },
}));

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description:
      "Confused about yout outfit ? Don't Worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../../../assets/images/Layer-3.png"),
      width: 2513,
      height: 3980,
    },
  },
  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe ? Explore hundreads of outfit ideas",
    color: "#BEECC4",
    picture: {
      src: require("../../../assets/images/Layer-3.png"),
      width: 2513,
      height: 3980,
    },
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("../../../assets/images/Layer-3.png"),
      width: 2513,
      height: 3980,
    },
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("../../../assets/images/Layer-3.png"),
      width: 2513,
      height: 3980,
    },
  },
];

const Onboarding = ({
  navigation,
}: StackNavigationProps<Routes, "Onboarding">) => {
  const styles = useStyles();
  const theme = useTheme();
  const scroll = useRef<Animated.ScrollView>(null);
  // TODO: scrollHandler useScrollHandler?
  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {slides.map(({ picture }, index) => {
          const opacity = interpolate(x, {
            inputRange: [
              (index - 0.5) * width,
              index * width,
              (index + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          });
          return (
            <Animated.View style={[styles.underlay, { opacity }]} key={index}>
              <Image
                source={picture.src}
                style={{
                  width: width - theme.borderRadii?.xl,
                  height:
                    ((width - theme.borderRadii?.xl) * picture.height) /
                    picture.width,
                }}
              />
            </Animated.View>
          );
        })}
        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler.onScroll}
          scrollEventThrottle={scrollHandler.scrollEventThrottle}
        >
          {slides.map((slide, index) => (
            <Slide
              title={slide.title}
              key={index}
              right={!!(index % 2)}
              subtitle={slide.subtitle}
              picture={slide.picture}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        {/* OVERLAY */}
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={[styles.footerContent]}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} index={index} currentIndex={divide(x, width)} />
            ))}
          </View>

          <Animated.View
            style={{
              width: width * slides.length,
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
              flexDirection: "row",
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;
              return (
                <Subslide
                  key={index}
                  last={index === slides.length - 1}
                  subtitle={subtitle}
                  description={description}
                  onPress={() => {
                    if (last) {
                      //NAVIGATE TO WELCOME
                      navigation.navigate("Welcome");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
export default Onboarding;
