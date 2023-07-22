import React from "react";
import styled from "styled-components";


function Slot13ammo() {
  return (
    <Slot13ammo1>
      <OverlapGroup1>
        <Ammo1
          src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/ammo-1.svg"
          alt="ammo 1"
        />
      </OverlapGroup1>
    </Slot13ammo1>
  );
}

const Slot13ammo1 = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup1 = styled.div`
  height: 500px;
  margin-bottom: -349px;
  display: flex;
  padding: 44px 25px;
  align-items: flex-start;
  min-width: 500px;
  background-color: var(--hunter-green);
`;

const Ammo1 = styled.img`
  width: 100px;
  height: 64px;
`;

export default Slot13ammo;
