import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const RouteLink = styled(NavLink)`
  font-family: "Inter";
  /* color: ${(props) => (props.variant === "navbarLink" ? "#910d0d" : "none")}; */
  text-decoration: none;
  padding: 10px;
  font-weight: bold;

  &.active {
    color: #3498db;
  };
`;

