import React from 'react';
import styled from 'styled-components';
import logo from '../assets/svg/logo.svg';

const Main = styled.main`
  widht: 100vw;
  height: 100vh;
  background-color: #20e3b2;
`;

const Wrapper = styled.div`
  widht: 100vw;
  height: 100vh;
  padding: 40px 15px;
`;

const Contents = styled.div`
  widht: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Sf-Pro-Display';
  color: white;
`;

const Logo = styled.img`
  margin-bottom: 25px;
  width: 75%;
`;

const Title = styled.h1`
  align-self: start;
  margin-bottom: 15px;
`;

const SecondSubtitle = styled.h3`
  align-self: start;
  margin-bottom: 25px;
`;

const Excergue = styled.p`
  align-self: start;
  margin-bottom: 75px;
  font-size: 17px;
`;

const Start = () => {
  return (
    <Main>
      <Wrapper>
        <Contents>
          <Logo src={logo} alt="" />
          <Title>Vivez vos JO 2024 d’une autre<br></br>manière</Title>
          <SecondSubtitle>Agissez afin de rendre<br></br>Paris meilleur</SecondSubtitle>
          <Excergue>Commencez dès maintenant !</Excergue>
          <button>MON COMPONENT</button>
        </Contents>
      </Wrapper>
    </Main>
  );
};

// Home.propTypes = {
//   content: String
// };

export default Start;
