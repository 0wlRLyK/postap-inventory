import React from "react";
import styled from "styled-components";


function Art2(props) {
  const { className } = props;

  return (
    <Art21 className={`art2 ${className || ""}`}>
      <OverlapGroup7 className="overlap-group7">
        <Art1
          className="art-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/art-1.svg"
          alt="art 1"
        />
      </OverlapGroup7>
    </Art21>
  );
}

const Art21 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 299px;
  left: 100px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;

  &.art2.art3 {
    left: 200px;
  }

  &.art2.art4 {
    left: 300px;
  }

  &.art2.art5 {
    top: 298px;
    left: 400px;
  }
`;

const OverlapGroup7 = styled.div`
  height: 320px;
  margin-bottom: -220px;
  display: flex;
  padding: 17px 12px;
  align-items: flex-start;
  min-width: 180px;
  background-color: var(--hunter-green);
`;

const Art1 = styled.img`
  width: 75px;
  height: 69px;
`;

const OverlapGroup8 = styled.div`
  .art2.art3 & {
    margin-bottom: -219px;
    padding: 16px 12px;
  }
`;

const OverlapGroup9 = styled.div`
  .art2.art4 & {
    margin-bottom: -219px;
    padding: 16px 12px;
  }
`;

const OverlapGroup10 = styled.div`
  .art2.art5 & {
    margin-bottom: -219px;
    padding: 16px 12px;
  }
`;

export default Art2;
