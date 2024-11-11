import { useState } from "react";
import {
  HomeWrapper,
  HomeTitle,
  HomeTexts,
  HomeTextsLeft,
  HomeTextsRight,
  HomeProfession,
  HomeCards,
  HomeCardTitleWrapper,
  HomeCardContent,
  HomeCardSubTitle,
  HomeTextsRightBtn,
  HomeCardTitle,
} from "../assets/styles/home/home.styles";
import Cardui from "../components/CardUI";



function Home() {


  const [cards] = useState([
    {
      id: 1,
      title: "Discovery Call",
      content: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
      step: "Step 1",
      duration: "2 hour",
      summary1:"We get to know each other better",
      summary2: "Determine how I can best assist you",
      summary3: "Understand the goals you have for your website",
    },
    {
      id: 2,
      title: "Concept and Strategy",
      content: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.",
      step: "Step 2",
      duration: "1 week",
      summary1: "UX Design",
      summary2: "Wireframes",
      summary3: "Interactive Prototype",
    },
    {
      id: 3,
      title: "Web Design",
      content: "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.",
      step: "Step 3",
      duration: "1 week",
      summary1: "High-end web design tailored to your brand",
      summary2: "Interactive prototype of the design",
      summary3: "Responsive design",
    },
    {
      id: 4,
      title: "Development",
      content: "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.",
      step: "Step 4",
      duration: "2 weeks",
      summary1: "Custom framer website",
      summary2: "Modular web design systems",
      summary3: "International web design systems",
    },
    {
      id: 5,
      title: "Launch and Optimization",
      content: "With your custom-built website, we launch it to the world. We will monitor the performance of your website and make necessary adjustments to improve its performance. We also optimize your website for search engines and social media platforms to ensure that your website is not only visible to your target audience but also gets the most traffic.",
      step: "Step 5",
      duration: "2 hour",
      summary1: "Launch your website",
      summary2: "Optimize your website for search engines",
      summary3: "Optimize your website for social media platforms",
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
        <HomeCardTitleWrapper>
          <HomeCardSubTitle>
            THE PROCESS
          </HomeCardSubTitle>
          <HomeCardTitle>
            Your Website in 5 steps
          </HomeCardTitle>
          <HomeCardSubTitle>
            Our process ensures that we create a 
            website tailored to your business needs.
          </HomeCardSubTitle>
        </HomeCardTitleWrapper>
        <HomeCardContent>
          {cards.map((card, id) => (
            <Cardui
              key={id} 
              title={card.title} 
              content={card.content} 
              step={card.step}
              duration={card.duration}
              summary1={card.summary1}
              summary2={card.summary2}
              summary3 = {card.summary3}
            />
          ))}
        </HomeCardContent>
      </HomeCards>
    </HomeWrapper>
  );
}

export default Home;
