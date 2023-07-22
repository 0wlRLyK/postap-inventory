import React from "react";
import styled from "styled-components";


function Device3(props) {
  const { className } = props;

  return (
    <Device31 className={`device3 ${className || ""}`}>
      <OverlapGroup4 className="overlap-group4">
        <Device11
          className="device1-1-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/device1-1-2.svg"
          alt="device1 1"
        />
        <Pda1
          className="pda-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/pda-1@2x.png"
          alt="pda 1"
        />
      </OverlapGroup4>
    </Device31>
  );
}

const Device31 = styled.div`
  position: absolute;
  width: 160px;
  height: 100px;
  top: 200px;
  left: 340px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;

  &.device3.device1 {
    top: 0;
  }
`;

const OverlapGroup4 = styled.div`
  width: 180px;
  height: 320px;
  position: relative;
  margin-bottom: -219px;
  background-color: var(--hunter-green);
`;

const Device11 = styled.img`
  position: absolute;
  width: 79px;
  height: 50px;
  top: 26px;
  left: 41px;
`;

const Pda1 = styled.img`
  position: absolute;
  width: 44px;
  height: 45px;
  top: 29px;
  left: 51px;
  object-fit: cover;
`;

export default Device3;
