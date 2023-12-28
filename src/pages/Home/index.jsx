import React from "react";
import SliderCoffee from "../../components/SliderCoffee";
import OurDelicious from "../../components/OurDelicious";
import CoffeeHerald from "../../components/CoffeeHerald";
import BackgroundImg from "../../components/BackgrounImg";
import CounterApp from "../../components/CounterApp";
import OnlineCoffeeShop from "../../components/OnlineCoffeeShop";
import SweetGallery from "../../components/SweetGalery";
import SliderLogo from "../../components/SliderLogo";
import ContactUsLine from "../../components/ContactUsLIne";

function HomePage() {
  return (
    <>
      <SliderCoffee/>
      <OurDelicious/>
      <CoffeeHerald/>
      <BackgroundImg/>
      <CounterApp/>
      <OnlineCoffeeShop/>
      <SweetGallery/>
      <SliderLogo/>
      <ContactUsLine/>
    </>
  );
}

export default HomePage;
