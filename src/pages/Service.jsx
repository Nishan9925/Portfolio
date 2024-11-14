import { useState } from "react";
import { 
  ServiceContent,
  ServiceContextWrapper,
  ServiceSubTitle, 
  ServiceTitle, 
  ServiceTitleTexts, 
  ServiceWrapper, 
  SubRouters} from "../assets/styles/service/service.styles";
import { Link, NavLink, Outlet } from "react-router-dom";
import { SubRouteLink } from "../UI/Link/Links.styles";


function Service() {
  const serviceIds = ["webdesign", "development", "seo"];
  const serviceCards = useState([
    { to: "webdesign", name: "Web Design", desc: "Web design"}
  ]);

  return (
    <ServiceWrapper>
      <ServiceTitleTexts>
        <ServiceTitle>
          Web Design and Framer
        </ServiceTitle>
        <ServiceSubTitle>
          Premium web design, development, and SEO services to help your business stand out.
        </ServiceSubTitle>
      </ServiceTitleTexts>
      <ServiceContextWrapper>
        <SubRouters>
          {/* {serviceIds.map(serviceId => (
            <NavLink key={serviceId} to={`/service/${serviceId}`}>
              {serviceId}
            </NavLink>
          ))} */}
          <SubRouteLink to="webdesign">Web Design</SubRouteLink>
          <SubRouteLink to="development">Development</SubRouteLink>
          <SubRouteLink to="seo">SEO and Context</SubRouteLink>
        </SubRouters>
        <ServiceContent>
          <Outlet />
        </ServiceContent>
      </ServiceContextWrapper>


    </ServiceWrapper>
  );
}

export default Service;
