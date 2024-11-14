import styled from "styled-components";

export const ServiceWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  font-family: var(--main-font-family);
  margin-top: 10vh;
  row-gap: 5rem;
  /* background-color: gray; */
`;

export const ServiceTitleTexts = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  width: 90vw;
  row-gap: 2rem;
`;

export const ServiceTitle = styled.h3`
  color: var(--text-color-default);
  width: 50vw;
  text-align: center;
  font-size: 3.6rem;
`;

export const ServiceSubTitle = styled.p`
  color: var(--text-color-muted);
  width: 60vw;
  text-align: center;
`;

export const ServiceContextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  row-gap: 3em;
`;

export const SubRouters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 70vw;
  padding: 1rem;
  background-color: gray;
`;
