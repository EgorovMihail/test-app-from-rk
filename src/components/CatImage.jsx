import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export default function CatImage({ ...props }) {
  return <Image src={props.url}></Image>;
}
