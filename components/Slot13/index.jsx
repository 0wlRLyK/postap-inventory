import React from "react";
import styled from "styled-components";


function Slot13() {
  return (
    <Slot131>
      <OverlapGroup>
        <Wpn21
          src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/wpn2-1.svg"
          alt="wpn2 1"
        />
        <UiIconVeprAr1
          src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/ui-icon-vepr-ar-1@2x.png"
          alt="ui_icon_vepr_ar 1"
        />
      </OverlapGroup>
    </Slot131>
  );
}

const Slot131 = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  margin-bottom: -349px;
  background-color: var(--hunter-green);
`;

const Wpn21 = styled.img`
  position: absolute;
  width: 274px;
  height: 89px;
  top: 33px;
  left: 13px;
`;

const UiIconVeprAr1 = styled.img`
  position: absolute;
  width: 256px;
  height: 118px;
  top: 33px;
  left: 18px;
  object-fit: cover;
`;

export default Slot13;
