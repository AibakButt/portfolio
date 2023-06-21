import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height: 100vh;
    width:100%;
    /* border: 1px solid blue; */
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: flex-start;
    @media ${device.mobileS} {
    padding-left:60px;
    }
    @media ${device.mobileM} {
    padding-left:60px;
    }
    @media ${device.mobileL} {
    padding-left:60px;
    }
    @media ${device.tablet} {
    padding-left:90px;
    }
    @media ${device.laptop} {
    padding-left:120px;
    }
`;

const SkillsTitle = styled.div`
  font-family: 'AvenirHeavy';
  color: #000;
  @media ${device.mobileS} {
    font-size: 40px;
  }
  @media ${device.mobileM} {
    font-size: 50px;
  }
  @media ${device.mobileL} {
    font-size: 60px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 95px;
  }
`;

const SkillsList = styled.div`
  font-family: 'AvenirRoman';
  z-index: 1;
  
  @media ${device.mobileS} {
    margin-top: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    margin-top: 35px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    margin-top: 35px;
    font-size: 25px;
  }
  @media ${device.tablet} {
    margin-top: 45px;
    font-size: 35px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    font-size: 45px;
  }
`;

class Skills extends Component {
  render() {
    return (
      <Container>
        <SkillsTitle>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            &#x2022; React JS
            <br />
            &#x2022; Node JS
            <br />
            &#x2022; NEXT JS
            <br />
            &#x2022; NEST JS
            <br />
            &#x2022; Express JS
            <br />
            &#x2022; GraphQL
            <br />
            &#x2022; Nexus
            <br />
            <br />
            &#x2022; Containerizaiton with Docker
            <br />
            &#x2022; Kubernetes
            <br />
            &#x2022; CI/CD Pipelines
            <br />
            &#x2022; AWS EC2, S3, EBS, RDS, ELB
          </div>
          <div>
            &#x2022; MongoDB
            <br />
            &#x2022; PostgreSQL
            <br />
            &#x2022; MySQL
            <br />
            <br />
            &#x2022; React Testing Library
            <br />
            &#x2022; Enzyme
            <br />
            &#x2022; Jest
            <br />
            &#x2022; Chai & Mocha
            <br />
            &#x2022; Supertest
            <br />
            &#x2022; Cypress
            <br />
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
