import React from "react";
import styled from "styled-components";

export const RestaurantExperience = ({ title, subTitle, year, listItems }) => {
  return ( 
    <RestaurantExperienceStyled>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </RestaurantExperienceStyled>
   );
}
 
const RestaurantExperienceStyled = styled.div``;