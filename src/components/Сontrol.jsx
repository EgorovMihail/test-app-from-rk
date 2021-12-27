import React, { useEffect } from "react";
import styled from "styled-components";
import stateCheckbox from "../store/stateCheckbox";
import { observer } from "mobx-react-lite";

const Lable = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  height: 12px;
  width: 12px;
  margin-right: 5px;
  cursor: pointer;
`;
const TextControl = styled.span`
  font-size: 14px;
  color: #000;
  cursor: pointer;
`;

export default observer(function Сontrol({ ...props }) {
  useEffect(() => {
    if (!stateCheckbox.enabledChecked && stateCheckbox.autoRefrashChecked) {
      stateCheckbox.setAutoRefrashChecked();
    }
    if (stateCheckbox.enabledChecked && stateCheckbox.autoRefrashChecked) {
      props.getCatEveryFiveSecond();
    } else {
      return;
    }
  }, [stateCheckbox.enabledChecked, stateCheckbox.autoRefrashChecked]);

  return (
    <>
      <Lable htmlFor="enabled">
        <Checkbox
          id="enabled"
          checked={stateCheckbox.enabledChecked}
          onChange={() => {
            stateCheckbox.setEnabledChecked();
          }}
        />
        <TextControl>Enabled</TextControl>
      </Lable>
      <Lable htmlFor="autoRefrash">
        <Checkbox
          id="autoRefrash"
          checked={stateCheckbox.autoRefrashChecked}
          onChange={() => {
            stateCheckbox.setAutoRefrashChecked();
          }}
        />
        <TextControl>Auto-refrash every 5 secod</TextControl>
      </Lable>
    </>
  );
});
