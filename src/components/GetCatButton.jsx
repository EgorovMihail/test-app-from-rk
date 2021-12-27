import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 300px;
  height: 40px;
  padding: 5px 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export default function GetCatButton({ ...props }) {
  return <Button onClick={props.getCat}>Get cat</Button>;
}
