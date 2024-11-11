import {
  CardWrapper,
  CardBoxInfoWrapper,
  CardBoxInfo,
  CardBoxDuration,
  // CardStepWrapper,
} from "../UI/CardStyle/Card.styles";

function Card({ title, content, step, duration }) {
  return (
    <CardWrapper>
      <CardBoxInfoWrapper>
        <CardBoxInfo>
          {step}
        </CardBoxInfo>
        <CardBoxDuration>
          {duration}
        </CardBoxDuration>
      </CardBoxInfoWrapper>
      
      <h2>{title}</h2>
      <p>{content}</p>
    </CardWrapper>
  );
}

export default Card;
