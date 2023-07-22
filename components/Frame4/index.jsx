import React from "react";
import styled from "styled-components";
import { OswaldSemiBoldBourbon14px } from "../../styledMixins";


function Frame4(props) {
  const { className } = props;

  return (
    <Frame41 className={`frame-4 ${className || ""}`}>
      <OverlapGroup className="overlap-group-3">
        <Backpack2
          className="backpack-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/backpack-2.svg"
          alt="backpack 2"
        />
        <Rectangle117 className="rectangle-117"></Rectangle117>
        <Number className="number-1">10</Number>
      </OverlapGroup>
    </Frame41>
  );
}

const Frame41 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: flex-end;
  background-color: var(--eerie-black);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--dune);
`;

const OverlapGroup = styled.div`
  width: 48px;
  height: 58px;
  position: relative;
  margin-left: 12px;
  margin-bottom: -1px;
`;

const Backpack2 = styled.img`
  position: absolute;
  width: 37px;
  height: 50px;
  top: 0;
  left: 0;
`;

const Rectangle117 = styled.div`
  position: absolute;
  width: 17px;
  height: 16px;
  top: 41px;
  left: 31px;
  background-color: var(--woodsmoke);
  border-radius: 3px;
  border: 1px solid;
  border-color: var(--dune);
`;

const Number = styled.div`
  ${OswaldSemiBoldBourbon14px}
  position: absolute;
  top: 37px;
  left: 33px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame4;
