import React from "react";
import styled from "styled-components";

export const RestaurantItem = ({ title, subTitle, startDate, endDate, listItems }) => {
  return ( 
    <RestaurantItemStyled>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      <div className="list-items">
        {listItems.map((item, i) => (
          <p key={i} className="item">
            - {item}
          </p>
        ))}
      </div>
    </RestaurantItemStyled>
   );
}
 
const RestaurantItemStyled = styled.div`
  & .list-items {
    padding: 0.5rem;
    & :not(:first-of-type) {
      margin: 0.25rem 0;
    }
  }
`;