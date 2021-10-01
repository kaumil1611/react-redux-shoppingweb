import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  /* background-color: #5f2285; */
  background: linear-gradient(
    90deg,
    rgba(97, 92, 180, 1) 9%,
    rgba(72, 72, 120, 1) 45%,
    rgba(53, 49, 122, 1) 66%,
    rgba(93, 87, 149, 1) 88%,
    rgba(72, 101, 136, 1) 100%
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders over $80 </Container>;
};

export default Announcement;
