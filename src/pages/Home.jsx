import { useState } from "react";
import {
  HomeWrapper,
  HomeTitle,
  HomeTexts,
  HomeTextsLeft,
  HomeTextsRight,
  HomeProfession,
  HomeCards,
  HomeCardTitle,
  HomeCardContent,
  HomeCardSubTitle,
  HomeTextsRightBtn,
} from "../assets/styles/home/home.styles";
import Card from "../components/CardUI";


function Home() {


  const [cards] = useState([
    {
      id: 1,
      title: "Discovery Call",
      content: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
      step: "Step 1",
      duration: "2 hour",
    },
    {
      id: 2,
      title: "About",
      content: "Learn more about us here.",
      step: "Step 2",
      duration: "1 week",
    },
    {
      id: 3,
      title: "Contact",
      content: "Get in touch with us!",
      step: "Step 3",
      duration: "1 week",
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
        <HomeTextsRight>
          <HomeTextsRightBtn >Download </HomeTextsRightBtn>
        </HomeTextsRight>
      </HomeTexts>
      <HomeCards>
        <HomeCardTitle>
          <HomeCardSubTitle>
            THE PROCESS
          </HomeCardSubTitle>
          Your Website in 5 steps
          <HomeCardSubTitle>
            Our process ensures that we create a 
            website tailored to your business needs.
          </HomeCardSubTitle>
        </HomeCardTitle>
        <HomeCardContent>
          {cards.map((card, id) => (
            <Card 
              key={id} 
              title={card.title} 
              content={card.content} 
              step={card.step}
              duration={card.duration}
              summary={card.summary}
            />
          ))}
        </HomeCardContent>
      </HomeCards>
    </HomeWrapper>
  );
}

export default Home;
