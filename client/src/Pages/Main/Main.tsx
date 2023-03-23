import LottieData from "Asset/lottie.json";
import Lottie from "react-lottie-player";
import styled from "styled-components";

const Main = () => {
  return (
    <div>
      <Div>달력에 원하는 Todo를 만들어봐요 !</Div>
      <Lottie
        loop
        animationData={LottieData}
        play
        style={{ width: `100%`, height: `100%` }}
      />
    </div>
  );
};

export default Main;

const Div = styled.div`
  font-weight: 600;
  font-size: 3rem;
`;
