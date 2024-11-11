import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background-color: var(--bgc-secondary);
  outline: 0.0625rem solid var(--bgc-muted);
  width: 50vw;
  border-radius: 0.125rem;
  font-family: var(--main-font-family);
`;

export const CardBoxInfoWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CardBoxInfo = styled.p`
  background-color: rgba(218, 197, 167, 0.05);
  text-align: center;
  padding: 0.5rem;
  width: 5rem;
  outline: 0.0625rem solid var(--bgc-muted);
  margin: 0.5rem;
  border-radius: 0.125rem;
  color: var(--text-color-default);
  font-weight: 900;
  font-size: var(--medium);
`;

export const CardBoxDuration = styled(CardBoxInfo)`
  font-weight: 400;
  width: 3rem;
  font-size: var(--small);
  padding: 0.2rem;
  margin: 1rem;
`;

export const CardBoxTextsWrapper = styled.h3`

`;