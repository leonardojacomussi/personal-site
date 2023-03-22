import styled from "@emotion/styled";
import { HTMLAttributes } from "react";

export const Grid = styled.div<HTMLAttributes<HTMLElement>>`
  grid-area: qualifications-area;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: .28fr 3fr .28fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". qualifications-container .";
  box-sizing: border-box;
  /* background-image: ${({ theme }) => `url(${theme.backgrounds.experienceBg})`};
  background-size: cover;
	background-position: bottom; */
`;

export const QualificationsContainer = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: qualifications-container;
  width: 100%;
  height: 100%;
  row-gap: 5rem;
  column-gap: 3rem;
  padding-bottom: 4rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 1.5rem));
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "title-area ."
    "subtitle-area education-title-area"
    "experience-area education-content-area"
    "downloadcv-area .";
  
  @media(max-width: 900px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "title-area"
      "subtitle-area"
      "experience-area"
      "education-title-area"
      "education-content-area"
      "downloadcv-area";
  };
`;

export const Title = styled.h1<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: title-area;
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.purple};
`;

export const Subtitle = styled.h2<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: subtitle-area;
  width: 100%;
  height: auto;

  @media(max-width: 750px) {
    font-size: 5.8rem;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: -0.5%;
  };

  @media(max-width: 530px) {
    font-size: 4.6rem;
    font-weight: 700;
    line-height: 100%;
  };
`;

export const Experience = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: experience-area;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: 8.6rem calc(100% - 8.6rem);
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "logo-harmonia-area title-harmonia-area"
    "top-dot-area current-assignment-area"
    "vertical-line-area ."
    "bottom-dot-area intern-area";
  justify-items: center;

  .top-dot {
    grid-area: top-dot-area;
    width: auto;
    height: auto;
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dot {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.yellow};
    };
    
    .top-vertical-line {
      width: 0.3rem;
      height: 10rem;
      margin: auto;
      min-height: calc(100% - 3.5rem);
      background-color: ${({ theme }) => theme.colors.yellow};
    };
  };

  .vertical-line {
    grid-area: vertical-line-area;
    width: 0.3rem;
    height: 100%;
    min-height: 5rem;
    background-color: ${({ theme }) => theme.colors.yellow};
  };

  .bottom-dot {
    grid-area: bottom-dot-area;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.yellow};
  };

  @media(max-width: 900px) {
    grid-template-rows: repeat(4, auto);
    grid-template-areas:
      "logo-harmonia-area title-harmonia-area"
      "top-dot-area current-assignment-area"
      "vertical-line-area ."
      "bottom-dot-area intern-area";
  };
`;

export const HarmoniaLogo = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: logo-harmonia-area;
  width: 8.6rem;
  height: 8.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  filter: ${({ theme }) => theme.effects.filter};

  img {
    width: 5rem !important;
    height: auto !important;
    border-radius: ${({ theme }) => theme.borders.borderRadius};
  };
`;

export const HarmoniaTitle = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: title-harmonia-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  justify-items: center;
  row-gap: 1rem;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: 0.4%;
      color: ${({ theme }) => theme.colors.brown};
    };
  };
`;

export const CurrentAssignment = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: current-assignment-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  row-gap: 0.5rem;
`;

export const Intern = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: intern-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const DownloadCV = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: downloadcv-area;
  height: 100%;
  display: flex;
  width: auto;
  align-items: flex-end;
  justify-self: start;
  margin-top: -6rem;
  
  button {
    position: relative;
    height: 6rem;
    width: 20.461rem;
    padding: 0 2rem;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.yellow};
  };

  @media(max-width: 900px) {
    margin-top: 0rem;
  };
`;

export const EducationTitle = styled.h4<HTMLAttributes<HTMLHeadingElement>>`
  grid-area: education-title-area;
  width: 100%;
  height: auto;
`;

export const Education = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: education-content-area;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

export const Rocketseat = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 8.6rem calc(100% - 8.6rem);
  grid-template-rows: auto;
  grid-template-areas:
    "logo-rocketseat-area content-rocketseat-area";
  justify-items: center;
`;

export const RocketseatLogo = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: logo-rocketseat-area;
  width: 8.6rem;
  height: 8.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  filter: ${({ theme }) => theme.effects.filter};

  img {
    width: 5rem !important;
    height: auto !important;
    border-radius: ${({ theme }) => theme.borders.borderRadius};
  };
`;

export const RocketseatContent = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: content-rocketseat-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1.5rem;

  span {
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.4%;
    color: ${({ theme }) => theme.colors.brown};
  };
`;

export const UFSM = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 8.6rem calc(100% - 8.6rem);
  grid-template-rows: auto;
  grid-template-areas:
    "logo-ufsm-area content-ufsm-area";
  justify-items: center;
`;

export const UFSMLogo = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: logo-ufsm-area;
  width: 8.6rem;
  height: 8.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  filter: ${({ theme }) => theme.effects.filter};

  img {
    width: 5rem !important;
    height: auto !important;
    border-radius: ${({ theme }) => theme.borders.borderRadius};
  };
`;

export const UFSMContent = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: content-ufsm-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 1.5rem;

  span {
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.4%;
    color: ${({ theme }) => theme.colors.brown};
  };
`;

export const Udemy = styled.div<HTMLAttributes<HTMLDivElement>>`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 8.6rem calc(100% - 8.6rem);
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "logo-udemy-area title-udemy-area"
    "top-dot-udemy-area firebase-area"
    "vertical-line-udemy-area ."
    "bottom-dot-area modern-web-area";
  justify-items: center;

  .top-dot {
    grid-area: top-dot-udemy-area;
    width: auto;
    height: auto;
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dot {
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.colors.yellow};
    };
    
    .top-vertical-line {
      width: 0.3rem;
      height: 10rem;
      margin: auto;
      min-height: calc(100% - 3.5rem);
      background-color: ${({ theme }) => theme.colors.yellow};
    };
  };

  .vertical-line {
    grid-area: vertical-line-udemy-area;
    width: 0.3rem;
    height: 100%;
    min-height: 5rem;
    background-color: ${({ theme }) => theme.colors.yellow};
  };

  .bottom-dot {
    grid-area: bottom-dot-area;
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colors.yellow};
  };
`;

export const UdemyLogo = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: logo-udemy-area;
  width: 8.6rem;
  height: 8.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borders.borderRadius};
  filter: ${({ theme }) => theme.effects.filter};

  img {
    width: 5rem !important;
    height: auto !important;
    border-radius: ${({ theme }) => theme.borders.borderRadius};
  };
`;

export const UdemyTitle = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: title-udemy-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  justify-items: center;
  row-gap: 1rem;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: 0.4%;
      color: ${({ theme }) => theme.colors.brown};
    };
  };
`;

export const Firebase = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: firebase-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  row-gap: 0.5rem;
`;

export const ModernWeb = styled.div<HTMLAttributes<HTMLDivElement>>`
  grid-area: modern-web-area;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;