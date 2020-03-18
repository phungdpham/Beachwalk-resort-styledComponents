import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="Welcome To"
        title="Beachwalk Resort"
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
      >
        <PrimaryBtn t='1rem'>view details</PrimaryBtn>
        {/* <PrimaryBtn as='a' href='https://www.google.com'>view details</PrimaryBtn> */}

      </Banner>
    </Hero>
  );
};

export default Header;
