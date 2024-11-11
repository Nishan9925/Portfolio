import {
  CardWrapper,
  CardBoxInfoWrapper,
  CardBoxInfo,
  CardBoxDuration,
  CardBoxTextsWrapper,
  CardBoxTextsTitle,
  CardBoxTextsContent,
  CardBoxSummaryWrapper,
  CardBoxSummary,

} from "../UI/CardStyle/Card.styles";

function Card({ title, content, step, duration, summary1, summary2, summary3 }) {
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
      <CardBoxTextsWrapper>
        <CardBoxTextsTitle>
          {title}
        </CardBoxTextsTitle>
        <CardBoxTextsContent>
          {content}
        </CardBoxTextsContent>
      </CardBoxTextsWrapper>
      <CardBoxSummaryWrapper>
        <CardBoxSummary>{summary1}</CardBoxSummary>
        <CardBoxSummary>{summary2}</CardBoxSummary>
        <CardBoxSummary>{summary3}</CardBoxSummary>
      </CardBoxSummaryWrapper>
    </CardWrapper>
  );
}

export default Card;
