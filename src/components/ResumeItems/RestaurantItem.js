import React from "react";
import styled from "styled-components";

export const RestaurantItem = ({ title, subTitle, startDate, endDate, listItems }) => {
  return ( 
    <RestaurantItemStyled>
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
      <div className="list-items">
        {listItems.map((item, index) => (
          <p key={index} className="item">
            - {item}
          </p>
        ))}
      </div>
    </RestaurantItemStyled>
   );
}
 
const RestaurantItemStyled = styled.div`
  & h4 {
    margin: 0.5rem auto;
  }
  & .list-items {
    padding: 0.5rem;
    & .item {
      line-height: 1.2rem;
      margin-bottom: .435rem;
    }
  }
`;