import React from 'react';
import styled from 'styled-components';
import '../index.css';

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  padding: 120px 70px;
  background-image: url('./hero.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeroLogo = styled.img`
  @media only screen and (max-width: 1100px) {
    width: 200px;
  }
`;

const HeroTag = styled.p`
  font-size: 1.6em;
  font-family: 'Lato';
  font-weight: 700;
  margin-top: 30px;
  width: 350px;

  @media only screen and (max-width: 1100px) {
    font-size: 1.3em;
    width: 280px;
  }
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 10px 15px;
  font-family: 'Lato';
  font-size: 0.9em;
  font-weight: 700;
  border: none;
  background: ${props => (props.primary ? '#2980b9' : 'none')};
  border: 2px solid #2980b9;
  border-radius: 5px;
  color: white;
  margin-top: 35px;
  margin-right: 20px;

  @media only screen and (max-width: 1100px) {
    font-size: 0.8em;
  }
`;

const HeroDiscordClient = styled.img`
  position: absolute;
  top: 25%;
  left: 40%;

  @media only screen and (max-width: 1100px) {
    left: 50%;
    width: 700px;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Index: React.FC = () => {
  return (
    <div>
      <Hero>
        <HeroLogo src="logo.png" />
        <HeroTag>Track your clan's progress from your own Discord server.</HeroTag>
        <Button>Browse commands</Button>
        <Button primary>Add to Discord</Button>
        <HeroDiscordClient src="discord_client.png" />
      </Hero>
    </div>
  );
};

export default Index;
