import React from "react";
import styled from "styled-components";

const yellow = "yellow";

const Button = styled.button`
  width: 200px;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 10px;
  /* font-size: ${({ fs }) => fs}; */
  margin: 40px;
  transition: all 2s;

  &:hover {
    background: ${yellow};
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background: ${({ theme }) => theme.bg}; */
`;

const Para = styled.p`
  font-size: 1rem;
  color: white;



  span {
    color: yellow;
    i {
      
      font-size: 3rem;
    }
    &:after {
      content: "pseudo element";
    }
  }
`;


const About = () => {
  return (
    <Wrapper>
      <Button fs="1rem">style components</Button>
      <Para>
        this is a paragraph{" "}
        <span>
          I am <i>span</i>{" "}
        </span>{" "}
      </Para>
    </Wrapper>
  );
};

export default About;
