import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  padding: 2rem;
  background-color: #f7f7f7; // Light background color for the hero section
  text-align: center; // Centers the text for mobile view

  // Responsive design for larger screens
  @media (min-width: 768px) {
    padding: 4rem;
    text-align: left; // Aligns text to the left for larger screens
  }
`;

// Styled heading for the hero section
const Heading = styled.h1`
  color: #333; // Dark color for the text
  font-size: 1.8rem; // Size for mobile devices
  margin-bottom: 1rem;

  // Responsive font size for larger screens
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Styled subheading for the hero section
const Subheading = styled.h2`
  color: #666; // Lighter color for the subheading
  font-size: 1.2rem; // Size for mobile devices
  font-weight: normal;

  // Responsive font size for larger screens
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Heading>Your Health, Our Priority</Heading>
      <Subheading>Providing personalized care for every individual</Subheading>
    </HeroSection>
  );
};

export default Hero;
