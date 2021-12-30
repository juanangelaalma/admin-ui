import React from "react";
import styled from "styled-components";

const BrandOutline = styled.div`
  background-color: #0803ae;
  width: 4.313em;
  height: 4.313em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 20px 30px rgba(8, 3, 174, 0.13);
`;
const BrandInline = styled.div`
  background-color: #0ef1ff;
  width: 1.938em;
  height: 1.938em;
  border-radius: 50%;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.3em;
  flex: 2;
  width: 100%;
  box-sizing: border-box;
`;

const Brand = () => {
  return (
    <Wrap>
      <BrandOutline>
        <BrandInline />
      </BrandOutline>
    </Wrap>
  );
};

export default Brand;
