import styled from "styled-components";

export const HomeWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  width: 90vw;
  padding-top: 3rem;
`;
export const HomeTexts = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 5vh;
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

export const HomeProfession = styled.h2`
  color: var(--text-color-default);
  font-size: 3.6rem;
  width: 50vw;
  font-family: var(--main-font-family);
`;

// export const HomeTextsRight = styled.div`
//   color: var(--text-color-default);
// `;

export const HomeCards = styled.div`

`;

