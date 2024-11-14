import styled from "styled-components";

export const HomeWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;
`;

export const HomeTexts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 90vw;
  gap: 3rem;
  align-items: center;
`;

export const HomeTextsLeft = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 2rem;
`;

export const HomeTitle = styled.h2`
  text-align: left;
  font-family: var(--main-font-family);
  font-size: 3.6rem;
  color: var(--text-color-default);
  width: 30vw;
`;

export const HomeProfession = styled.p`
  color: var(--text-color-default);
  font-size: 3rem;
  width: 60vw;
  font-family: var(--main-font-family);
`;

export const HomeTextsRight = styled.div`
  color: var(--text-color-default);
  font-size: 3.6rem;
`;

export const HomeTextsRightBtn = styled.a.attrs({
  download: "Nshan_Zakaryan_CV.pdf",
})`
  color: var(--text-color-inverse);
  background-color: var(--bgc-primary);
  padding: 1rem;
  border-radius: 0.3rem;
  text-decoration: none;
  outline: 0.3rem solid var(--text-color-inverse-muted);
  font-size: var(--large);
  font-weight: 700;
  font-family: var(--main-font-family);
`;

export const HomeCards = styled.div`
  /* background-color: aqua; */
  margin-top: 5rem;
  font-family: var(--main-font-family);
  display: flex;
  flex-flow: column wrap;
  width: 90vw;
  align-items: center;
  gap: 3rem;
`;

export const HomeCardTitleWrapper = styled.div`
  color: var(--text-color-default);
  text-align: center;
  gap: 3rem;
  display: flex;
  flex-flow: column wrap;
`;

export const HomeCardTitle = styled.h3`
  font-size: 3.6rem;
`;

export const HomeCardSubTitle = styled.p`
  font-size: var(--meta);
  color: var(--text-color-muted);
`;

export const HomeCardContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  column-gap: 3rem;
  align-items: center;
  row-gap: 1rem;
`;
