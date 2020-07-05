import styled from "styled-components";

import { TabList, Tab } from "react-tabs";

export const ContainerTabList = styled(TabList)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
  width: fit-content;
  display: flex;
  border-radius: 100px;
  margin: 23px 42%;
`;

export const ContainerTab = styled(Tab)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px;
  width: 85px;
  height: 33px;
  display: flex;
  background: rgb(244, 247, 252);
  border-radius: 100px;

  color: rgb(34, 34, 34);
  font-weight: normal;
  font-size:13px;

  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active {
    color: #fff;
    background-color: #00A6CE;
  }
`;

