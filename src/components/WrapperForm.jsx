import React from "react";
import styled from "styled-components";

const WrapperFormComponent = styled.div`
  width: 350px;
  height: 500px;
  padding: 10px 7px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export default function WrapperForm({ children }) {
  return <WrapperFormComponent>{children}</WrapperFormComponent>;
}
