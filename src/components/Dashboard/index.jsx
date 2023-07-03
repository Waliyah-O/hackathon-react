import React from "react";
import { DashboardContainer, DashboardWrapper, LeftSide, RightSide } from "./DashboardElements";

const Dashboard = () => {
  return (
    <>
      <DashboardContainer>
        <DashboardWrapper>
          <LeftSide>Left Side</LeftSide>
          <RightSide>Left Side</RightSide>
        </DashboardWrapper>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
