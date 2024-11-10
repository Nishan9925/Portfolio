import { useState } from "react";
import {
  HomeWrapper,
  HomeTitle,
  HomeTexts,
  HomeTextsLeft,
  //   HomeTextsRight,
  HomeProfession,
  HomeCards,
} from "../assets/styles/home/home.styles";
import Card from "../components/Card";

function Home() {
  const [ cards ] = useState([
    {
      title: "Home",
      text: "Welcome to the homepage!",
    },
    {
      title: "About",
      text: "Learn more about us here.",
    },
    {
      title: "Contact",
      text: "Get in touch with us!",
    },
  ]);

  return (
    <HomeWrapper>
      <HomeTexts>
        <HomeTextsLeft>
          <HomeTitle>Nshan Zakaryan</HomeTitle>
          <HomeProfession>
            Software Engineer specialized in Front-End Development
          </HomeProfession>
        </HomeTextsLeft>
        {/* <HomeTextsRight>123456</HomeTextsRight> */}
      </HomeTexts>
      <HomeCards>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
        />
      ))}
      </HomeCards>
    </HomeWrapper>
  );
}

export default Home;
