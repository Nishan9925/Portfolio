import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  padding: 1.3rem;
  background-color: var(--bgc-secondary);
  outline: 0.0625rem solid var(--bgc-muted);
  border-radius: 1rem;
  color: white;
  margin-top: 2rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 5rem;
  color: var(--text-color-default);
  font-family: var(--main-font-family);
  /* width: 15% */
`;
