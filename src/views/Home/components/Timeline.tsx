import React from "react";
import "pika-react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "pika-react-step-progress-bar";


export default function Timeline (){


    return (
      <ProgressBar
        percent={10}
        stepPositions = {[0, 20, 40, 60, 80, 97]}
      >
        <Step transition="scale" >
          {({ accomplished }) => (
            <img 
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/images/pikaLogo.svg" alt=""
            />
          )}
        </Step>
        <Step transition="scale" >
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/images/pikaLogo.svg" alt=""
            />
          )}
        </Step>
        <Step transition="scale" >
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/images/pikaLogo.svg" alt=""
            />
          )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/images/pikaLogo.svg" alt=""
            />
          )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/images/pikaLogo.svg" alt=""
            />
          )}
        </Step>

        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="/images/Pika-Egg.png" alt=""
            />
          )}
        </Step>
      </ProgressBar>
    );
  }