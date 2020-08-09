import React from "react";
import styled, { keyframes } from "styled-components";
import githublogo from "./GitHub-Mark-32px.png";

const ProjectContainer = styled.div`
  margin: 1vw;
  grid-column: 1
  min-height: 40vh;
  background-color: #FFEEDD;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-raidus: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  align-items: center;
  padding: 5px 10px 10px 10px;
`;

const SubTitle = styled.h2`
  font-family: var(--normal-font);
  text-align: center;
  font-weight: lighter;
  width: 100%;
  border-bottom: 1px solid rgb(117, 117, 116);
  color: rgb(117, 117, 116);
`;

const LinkContainer = styled.div`
  text-align: center;
`;

const Link = styled.a`
  font-size: small;
`;
const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const PageContainer = styled.article`
  display: block;
`;

const MainDescriptionContainer = styled.section`
  margin-top: 10%;
  align-items: center;
  min-height: 100vh;
  padding-right: 15vw;
  padding-bottom: 5vw;
  padding-left: 15vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 20px;
  justify-items: stretch;
  margin-bottom: 5%;
`;

const ContentWrapper = styled.div`
  padding-top: 6.6vmax;
  padding-bottom: 6.6vmax;
  margin: 0 auto;
  box-sizing: content-box;
  justify-content: center;
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 80%;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Description = styled.h4`
  font-family: Poppins;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.2;
  font-size: calc(0vw + 1.2rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const ImageContainer = styled.div`
  position: relative;
  height: auto;
  padding: 17px 0px 5px 0px;
  margin: 50px 0px 5px 0px;
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  animation: ${fadein} 2s;
`;

const Image = styled.img`
  float: left;
  width: 100px;
  height: 100px;
  border: 0;
`;

const FirstContentBox = styled.div`
  background-color: #d6d6d6;
  min-height: 100%;
  min-width: 80%;
  grid-column: 1;
  position: relative;
  margin: 0 0 0 2px;
  border: 1px solid;
  border-radius: 3px 3px 3px 3px;
  box-shadow: 0 4px 6px 0;
  justify-content: flex-start;
  padding: 10px;
  text-align: center;
`;

const Title = styled.h1`
  font-family: Poppins;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 0.5;
  font-size: calc(0vw + 2rem);
  color: #330662;
  animation: ${fadein} 2s;
`;

const Logo = styled.img`
  margin: 0px 5px 0px 0px;
`;

const Project = (props) => {
  const { title, subtitle, description, link } = props;

  return (
    <ProjectContainer>
      <Title> {title} </Title>
      <SubTitle>{subtitle}</SubTitle>
      <DescriptionContainer>
        <Description>{description}</Description>
      </DescriptionContainer>
      <LinkContainer>
        <Logo src={githublogo} />
        <Link href={`https://${link}`}>{link}</Link>
      </LinkContainer>
    </ProjectContainer>
  );
};

const ProjectsPage = () => {
  return (
    <MainContainer>
      <PageContainer>
        <MainDescriptionContainer>
          {/* Change description and title */}
          <Project
            title="Schedge API"
            subtitle="Course API for NYU"
            description="Schedge is an open source API to NYU's course catalog, geared at 
            eventually helping NYU students plan their courses easier and faster.
            Our goal with this API is to make it easier for 
            students to plan out their schedules, and eventually to also do some of that for them"
            link="github.com/BUGS-NYU/schedge"
          />
          <Project
            title="BUGS website"
            subtitle="Website For The Club"
            description="The website is built from scratch, using React, 
            to be a one-stop-shop for information about the Open
            Source Club. It's provides information about what the club is,
            the projects we work on, and upcoming events. We hope to constantly update
            the website with features"
            link="github.com/BUGS-NYU/bugs-nyu.github.io"
          />
          <Project
            title="Spark"
            subtitle="Mentorship Program"
            description="Spark is a mentorship program run by TorchNYU, an organization dedicated towards improving NYU CS, and BUGS, NYU's open source development club.

            We teach students practical and pragmatic software development through working on and shipping projects."
            link="github.com/torchnyu/spark"
          />
          <Project
            title="NYU data hubs"
            subtitle="NYU Data Hub"
            description="The data hub is an open source one stop shop for course API
            at NYU, collected using Schedge API. The data hub contains course API
            since fall 2019 to current semester. In the future, we would like to extend the project
            into a website with helpful advice about CS classes at NYU"
            link="github.com/BUGS-NYU/bugs-data-hub"
          />
        </MainDescriptionContainer>
      </PageContainer>
    </MainContainer>
  );
};

export default ProjectsPage;
