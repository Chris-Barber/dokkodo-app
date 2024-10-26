// GlobalStyles.js

import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
  // Primary styles for main backgrounds, high-contrast elements
  primaryBackground: {
    backgroundColor: '#F5F5F5', // Light gray, imitating rice paper or parchment
  },
  primaryText: {
    color: '#1C1C1C', // Deep charcoal for high-contrast text
    fontSize: 18,
    fontWeight: '500', // Semi-bold for emphasis
    fontFamily: 'serif', // Traditional look
  },
  primaryBorder: {
    borderColor: '#1C1C1C',
    borderWidth: 2, // Bold, strong border for distinct separation
  },

  // Secondary styles for accenting elements, such as buttons or labels
  secondaryBackground: {
    backgroundColor: '#BDBDBD', // Mid-tone gray for subtle accents
  },
  secondaryText: {
    color: '#3E3E3E', // Softer, mid-tone charcoal
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'serif',
  },
  secondaryBorder: {
    borderColor: '#3E3E3E',
    borderWidth: 1,
  },

  // Additional typography styles
  titleText: {
    fontSize: 24,
    fontWeight: '700', // Bold for titles
    color: '#1C1C1C',
    fontFamily: 'serif',
    textAlign: 'center', // Center-aligned for title
    marginVertical: 10,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: '600', // Semi-bold for subtitles
    color: '#3E3E3E',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '300', // Light for body text to add to a contemplative tone
    color: '#1C1C1C',
    fontFamily: 'serif',
    lineHeight: 24,
  },
  captionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#5F5F5F', // Lighter tone for captions and less critical information
    fontFamily: 'serif',
  },

  // Layout styles for spacing and alignment
  centeredContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginHorizontal: {
    marginHorizontal: 16,
  },
  paddingVertical: {
    paddingVertical: 12,
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    resizeMode: 'contain', // Ensures images fit well within their containers
    borderWidth: 2,
    borderColor: '#1C1C1C',
  },

  // Card container style
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
  cardImage: {
    width: '100%',
    height: 200, // Adjust height to match the aspect ratio of the image
    resizeMode: 'cover', // Ensures the image covers the container
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1C',
    fontFamily: 'serif',
    textAlign: 'center',
    marginVertical: 8,
  },

  // Button styles matching the theme
  primaryButton: {
    backgroundColor: '#1C1C1C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 8,
  },
  primaryButtonText: {
    color: '#F5F5F5',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'serif',
  },
  secondaryButton: {
    backgroundColor: '#BDBDBD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignItems: 'center',
    marginVertical: 8,
  },
  secondaryButtonText: {
    color: '#3E3E3E',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'serif',
  },
});

export default GlobalStyles;
