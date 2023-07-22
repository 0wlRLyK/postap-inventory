
import { css } from "styled-components";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Frame1 from "./components/Frame1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|frame-1)">
          <Frame1 {...frame1Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const art22Data = {
    className: "art3",
};

const art23Data = {
    className: "art4",
};

const art24Data = {
    className: "art5",
};

const device32Data = {
    className: "device1",
};

const frame42Data = {
    className: "frame-5",
};

const frame43Data = {
    className: "frame-5",
};

const frame44Data = {
    className: "frame-5",
};

const frame1Data = {
    stalker: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/stalker@2x.png",
    x541: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/54-1@2x.png",
    text1: "Імʼя Прізвисько",
    text2: "Назва угрупування",
    text3: "Ранг",
    text4: "Репутація",
    x2023072218011: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/--------------2023-07-22---18-01-1@2x.png",
    number: "1000",
    health: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/health@2x.png",
    x56: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/5-6@2x.png",
    x11: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/1-1@2x.png",
    x55: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/5-5@2x.png",
    x4_Ytvdumr1: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/4-ytvdumr-1@2x.png",
    x1_26Gkxvv1: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/1-26gkxvv-1@2x.png",
    x57: "https://anima-uploads.s3.amazonaws.com/projects/64bc27cc976c9847e47eff31/releases/64bc32538ed3d27d1a66726d/img/5-7@2x.png",
    art21Props: art22Data,
    art22Props: art23Data,
    art23Props: art24Data,
    device3Props: device32Data,
    frame41Props: frame42Data,
    frame42Props: frame43Data,
    frame43Props: frame44Data,
};

