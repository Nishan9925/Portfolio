import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const RouteLink = styled(NavLink)`
  font-family: "Inter";
  color: ${(props) =>
    props.variant === "navbarLink" ? "var(--text-color-default)" : "none"};
  text-decoration: none;
  padding: 2rem;
  font-weight: bold;

  &.active {
    background-color: var(--bgc-primary);
    color: var(--text-color-inverse);
    border-radius: 1rem;
  }
`;

export const SubRouteLink = styled(RouteLink)`
  font-family: var(--main-font-family);
  padding: 0.5rem;
  color: var(--text-color-default);
  text-align: center;
  padding: 0.5rem;
`;