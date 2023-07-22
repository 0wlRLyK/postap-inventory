import React from "react";
import Device3 from "../Device3";
import Art2 from "../Art2";
import Slot13 from "../Slot13";
import Slot13ammo from "../Slot13ammo";
import Frame4 from "../Frame4";
import styled from "styled-components";
import { JuraNormalWhite16px } from "../../styledMixins";
import "./Frame1.css";

function Frame1(props) {
  const {
    stalker,
    x541,
    text1,
    text2,
    text3,
    text4,
    x2023072218011,
    number,
    health,
    x56,
    x11,
    x55,
    x4_Ytvdumr1,
    x1_26Gkxvv1,
    x57,
    art21Props,
    art22Props,
    art23Props,
    device3Props,
    frame41Props,
    frame42Props,
    frame43Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-1 screen">
        <OverlapGroup16>
          <Rectangle1></Rectangle1>
          <Rectangle4></Rectangle4>
          <Group2>
            <Group1>
              <OverlapGroup2>
                <OverlapGroup1>
                  <Stalker src={stalker} alt="stalker" />
                  <X541 src={x541} alt="54 1" />
                  <Frame11>
                    <Text1>{text1}</Text1>
                    <Text2>{text2}</Text2>
                    <Text2>{text3}</Text2>
                    <Text2>{text4}</Text2>
                  </Frame11>
                  <Rectangle6></Rectangle6>
                  <X2023072218011 src={x2023072218011} alt="2023-07-22  18.01 1" />
                </OverlapGroup1>
                <Number>{number}</Number>
                <Kupons2
                  src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/kupons-2.svg"
                  alt="kupons 2"
                />
              </OverlapGroup2>
              <OverlapGroup>
                <Health src={health} alt="Health" />
                <BarSmall1
                  src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/bar-small-1.svg"
                  alt="bar_small 1"
                />
                <BarSmall1
                  src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/bar-small-2.svg"
                  alt="bar_small 2"
                />
                <BarSmall1
                  src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/bar-small-3.svg"
                  alt="bar_small 3"
                />
              </OverlapGroup>
            </Group1>
            <Equipment>
              <OverlapGroup13>
                <OverlapGroup12>
                  <Frame2>
                    <OverlapGroup3>
                      <Outfit1
                        src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/outfit-1.svg"
                        alt="outfit 1"
                      />
                      <X56 src={x56} alt="5 6" />
                    </OverlapGroup3>
                  </Frame2>
                  <Device3 />
                  <Art1>
                    <OverlapGroup6>
                      <X11 src={x11} alt="1 1" />
                    </OverlapGroup6>
                  </Art1>
                  <Art2 />
                  <Art2 className={art21Props.className} />
                  <Art2 className={art22Props.className} />
                  <Art2 className={art23Props.className} />
                  <Backpack>
                    <OverlapGroup11>
                      <Backpack1
                        src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/backpack-1.svg"
                        alt="backpack 1"
                      />
                      <X55 src={x55} alt="5 5" />
                    </OverlapGroup11>
                  </Backpack>
                </OverlapGroup12>
                <Helmet>
                  <OverlapGroup14>
                    <Helmet1
                      src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/helmet-1.svg"
                      alt="helmet 1"
                    />
                    <X4YtvdUmR1 src={x4_Ytvdumr1} alt="4_YtvdUmR 1" />
                  </OverlapGroup14>
                </Helmet>
                <Device3 className={device3Props.className} />
                <Device2>
                  <OverlapGroup31>
                    <Device11
                      src="https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/device1-1-1.svg"
                      alt="device1 1"
                    />
                    <X126GkxvV1 src={x1_26Gkxvv1} alt="1_26GkxvV 1" />
                  </OverlapGroup31>
                </Device2>
              </OverlapGroup13>
              <Image>
                <OverlapGroup5>
                  <X57 src={x57} alt="5 7" />
                </OverlapGroup5>
              </Image>
            </Equipment>
          </Group2>
        </OverlapGroup16>
        <SlotContainer>
          <Slot13 />
          <Slot13ammo />
          <Slot13 />
          <Slot13ammo />
          <Slot13 />
          <Slot13ammo />
        </SlotContainer>
        <OverlapGroup141>
          <Group4>
            <Frame4 />
            <Frame4 className={frame41Props.className} />
            <Frame4 className={frame42Props.className} />
            <Frame4 className={frame43Props.className} />
          </Group4>
          <Frame3>
            <Rectangle118></Rectangle118>
          </Frame3>
        </OverlapGroup141>
      </div>
    </div>
  );
}

const OverlapGroup16 = styled.div`
  width: 1420px;
  height: 440px;
  position: relative;
  margin-top: -40px;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 1420px;
  height: 400px;
  top: 40px;
  left: 0;
  background-color: #2a2a2a;
`;

const Rectangle4 = styled.div`
  position: absolute;
  width: 400px;
  height: 30px;
  top: 188px;
  left: 0;
  background-color: #8c8270;
`;

const Group2 = styled.div`
  position: absolute;
  height: 440px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  min-width: 1419px;
  gap: 133px;
`;

const Group1 = styled.div`
  height: 440px;
  display: flex;
  align-items: flex-end;
  min-width: 533px;
`;

const OverlapGroup2 = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 0;
  left: 0;
`;

const Stalker = styled.img`
  position: absolute;
  width: 257px;
  height: 217px;
  top: 0;
  left: 143px;
`;

const X541 = styled.img`
  position: absolute;
  width: 165px;
  height: 108px;
  top: 25px;
  left: 25px;
  object-fit: cover;
`;

const Frame11 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
  position: absolute;
  top: 28px;
  left: 203px;
`;

const Text1 = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-oswald);
  font-weight: 500;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: normal;
`;

const Text2 = styled.div`
  ${JuraNormalWhite16px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 400px;
  height: 222px;
  top: 178px;
  left: 0;
  background-color: var(--eerie-black-2);
`;

const X2023072218011 = styled.img`
  position: absolute;
  width: 379px;
  height: 221px;
  top: 179px;
  left: 21px;
`;

const Number = styled.div`
  position: absolute;
  top: 155px;
  left: 54px;
  font-family: var(--font-family-jura);
  font-weight: 600;
  color: var(--white);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Kupons2 = styled.img`
  position: absolute;
  width: 18px;
  height: 25px;
  top: 150px;
  left: 25px;
`;

const OverlapGroup = styled.div`
  height: 399px;
  margin-bottom: 1px;
  display: flex;
  padding: 11.5px 12px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 131px;
  gap: 13px;
  background-color: var(--eerie-black-2);
`;

const Health = styled.img`
  width: 22px;
  height: 372px;
  align-self: flex-start;
`;

const BarSmall1 = styled.img`
  width: 15px;
  height: 339px;
  margin-bottom: 3.5px;
`;

const Equipment = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 753px;
`;

const OverlapGroup13 = styled.div`
  width: 500px;
  height: 399px;
  position: relative;
`;

const OverlapGroup12 = styled.div`
  position: absolute;
  width: 500px;
  height: 399px;
  top: 0;
  left: 0;
`;

const Frame2 = styled.div`
  position: absolute;
  width: 180px;
  height: 300px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup3 = styled.div`
  width: 180px;
  height: 330px;
  position: relative;
  margin-bottom: -29px;
  background-color: #151814;
`;

const Outfit1 = styled.img`
  position: absolute;
  width: 93px;
  height: 116px;
  top: 102px;
  left: 43px;
`;

const X56 = styled.img`
  position: absolute;
  width: 101px;
  height: 150px;
  top: 61px;
  left: 41px;
  object-fit: cover;
`;

const Art1 = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 299px;
  left: 0;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup6 = styled.div`
  height: 320px;
  margin-bottom: -219px;
  display: flex;
  padding: 26px 25px;
  align-items: flex-start;
  min-width: 180px;
  background-color: var(--hunter-green);
`;

const X11 = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Backpack = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  top: 140px;
  left: 180px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup11 = styled.div`
  width: 180px;
  height: 320px;
  position: relative;
  margin-bottom: -159px;
  background-color: var(--hunter-green);
`;

const Backpack1 = styled.img`
  position: absolute;
  width: 80px;
  height: 101px;
  top: 28px;
  left: 36px;
`;

const X55 = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 33px;
  left: 26px;
  object-fit: cover;
`;

const Helmet = styled.div`
  position: absolute;
  width: 160px;
  height: 140px;
  top: 0;
  left: 180px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup14 = styled.div`
  width: 180px;
  height: 320px;
  position: relative;
  margin-bottom: -179px;
  background-color: var(--hunter-green);
`;

const Helmet1 = styled.img`
  position: absolute;
  width: 87px;
  height: 100px;
  top: 21px;
  left: 37px;
`;

const X4YtvdUmR1 = styled.img`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 21px;
  left: 30px;
  object-fit: cover;
`;

const Device2 = styled.div`
  position: absolute;
  width: 160px;
  height: 100px;
  top: 100px;
  left: 340px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup31 = styled.div`
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

const X126GkxvV1 = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 26px;
  left: 55px;
  object-fit: cover;
`;

const Image = styled.div`
  width: 253px;
  height: 399px;
  display: flex;
  align-items: flex-start;
  border: 1px solid;
  border-color: var(--chicago);
  box-shadow: inset 0px 0px 15px #00000080;
`;

const OverlapGroup5 = styled.div`
  height: 400px;
  margin-top: -1px;
  display: flex;
  padding: 0 24px;
  align-items: flex-end;
  min-width: 253px;
  background-color: var(--hunter-green);
`;

const X57 = styled.img`
  width: 191px;
  height: 399px;
  object-fit: cover;
`;

const SlotContainer = styled.div`
  height: 150px;
  position: relative;
  display: flex;
  padding: 0 35px;
  align-items: flex-start;
  min-width: 1420px;
  background-color: #151515;
`;

const OverlapGroup141 = styled.div`
  width: 1420px;
  height: 350px;
  position: relative;
  background-color: #202020;
`;

const Group4 = styled.div`
  position: absolute;
  height: 60px;
  top: 8px;
  left: 35px;
  display: flex;
  align-items: flex-start;
  min-width: 240px;
`;

const Frame3 = styled.div`
  position: absolute;
  width: 1420px;
  height: 350px;
  top: 0;
  left: 0;
  display: flex;
  padding: 19px 35px;
  align-items: flex-end;
`;

const Rectangle118 = styled.div`
  width: 1338px;
  height: 253px;
  background-color: var(--woodsmoke);
`;

export default Frame1;
