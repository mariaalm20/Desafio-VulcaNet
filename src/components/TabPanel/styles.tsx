import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListPlans = styled.ul`
  width: 100%;
  height: 62%;
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export const InfoPlans = styled.li`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgb(221, 221, 221);
  padding: 0px 40px;
  list-style-type: none;
`;
export const TitlePlan = styled.div`
  display: flex;
  flex-direction: row;
`;
export const NamePlan = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: rgb(0, 166, 206);
  margin-left: 20px;
`;
export const DescriptionPlan = styled.h1`
  font-weight: light;
  font-size: 13px;
  color: rgb(153, 153, 153);
  margin-top: 12px;
  width: 240px;
`;
export const PricePlan = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: rgb(0, 166, 206);
  margin-top: 24px;
`;
export const ButtonSelect = styled.button`
  color: rgb(74, 80, 123);
  width: 100%;
  height: 38px;
  font-weight: bold;
  font-size: 22px;
  margin-top: 8px;
  border-radius: 100px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    cursor: pointer;
    background: rgb(67, 185, 152);
  }

  &.active {
    color: rgb(255, 255, 255);
    cursor: pointer;
    background: rgb(67, 185, 152);
  }

`;

export const ListFeatures = styled.div`
  display: block;
  list-style-type: disc;
`;

export const DescriptionFeatures = styled.div`
  margin-top: 10px;
`;

export const NameFeature = styled.h1`
  font-weight: normal;
  font-size: 13px;
  color: rgb(0, 0, 0);
  margin-left: 5px;
`;

export const Attendants = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

export const ColumnAttendants = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameAttendants = styled.div`
  font-weight: normal;
  color: rgb(34, 34, 34);
  font-size: 32px;
`;

export const DescriptionAttendants = styled.h1`
  font-size: 13px;
  font-weight: light;
  color: rgb(0, 166, 206);
`;

export const Count = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 50px;
`;

export const ButtonLeft = styled.button`
  background: none;
  cursor: pointer;
`;

export const ButtonRight = styled.button`
  cursor: pointer;
  background: none;
`;

export const QuantitiesAttendants = styled.h1`
  color: rgb(0, 166, 206);
  font-size: 32px;
  margin: 7px 5px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0px;
  margin-top: 10px;
  margin-left: 0px;
  margin-right: 700px;
  background: rgb(0, 166, 206);
  border-radius: 0px 0px 15px 15px;

  padding: 0 20px;
`;

export const Total = styled.p`
  font-weight: bold;
  font-size: 32px;
  color: rgb(255, 255, 255);
`;

export const SelectPlan = styled.p`
  font-size: 18px;
  color: rgb(245, 245, 245);
`;
