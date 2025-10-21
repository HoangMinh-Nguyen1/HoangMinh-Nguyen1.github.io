import React, {useContext} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {Col, Flex, message, Row, Tooltip} from "antd";
import CustomImage from "@/components/custom-image/index.jsx";
import CustomButton from "@/components/button/index.jsx";
import PrimaryButton from "@/components/button/primary-button.jsx";
import SecondaryButton from "@/components/button/secondary-button.jsx";
import portrait from "@/assets/images/portrait.png";
import portrait2 from "@/assets/images/portrait2.png";
import portrait3 from "@/assets/images/portrait3.png";
import {CV_LINK, skills, socials} from "@/pages/home/constants.jsx";

import { CommonContainer } from "@/components/styled/common-container.jsx";
import { CommonCard } from "@/components/styled/common-card.jsx";
import { CommonSkillButton } from "@/components/styled/common-skill-button.jsx";
import { CommonSocialButton } from "@/components/styled/common-social-button.jsx";
import {SmallText} from "@/components/styled/text-size/small-text.jsx";
import {LargeText} from "@/components/styled/text-size/large-text.jsx";
import {MediumText} from "@/components/styled/text-size/medium-text.jsx";
import {useMediaQuery} from "react-responsive";
import DownloadIcon from "@/assets/images/download.svg?react";
import {ScrollContext} from "@/store/scroll-context.jsx";

const Portfolio = (props) => {

  const isSmallScreen = useMediaQuery({maxWidth: 1000});

  const isExtraSmallScreen = useMediaQuery({maxWidth: 700});
  const { currentFrame, setCurrentFrame } = useContext(ScrollContext);

  const handleScroll = (id) => {
    // eslint-disable-next-line react/prop-types
    props?.frameRefs?.[id]?.current?.scrollIntoView({
      behavior: "smooth"
    });
    setCurrentFrame(id);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const LargeLayout = () => {
    return (
      <CommonContainer {...props}>
        {contextHolder}
        <Row gutter={20} style={{height: "100%"}}>
          <Col span={6}>
            <div style={{height: "100%", display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "67% 1fr", gap: "20px"}}>
              <CommonCard variant={fadeInLeft}>
                <Flex vertical justify={"space-between"} style={{height: "100%"}}>
                  <h2>Hoang Minh</h2>
                  <div style={{width: "100%", flex: "1", margin: "20px 0"}}>
                    <GlowCustomImage src={portrait2} isOverflow={"110%"} style={{boxShadow: "0 0 15px 2px #DBDBDB1E", opacity: "0.85"}}/>
                  </div>
                  <AlignedText style={{marginBottom: "20px"}}><SmallText>Dedicated to strategic and professional working experience. Striving for execellence.</SmallText></AlignedText>
                  <SecondaryButton onClick={(e) => {
                    e.preventDefault();
                    window.open(CV_LINK, '_blank');
                  }}>Download CV</SecondaryButton>
                </Flex>
              </CommonCard>
              <CommonCard variant={fadeInLeft} style={{height: "100%"}}>
                <Flex vertical justify={"space-between"} style={{height: "100%"}}>
                  <h2 style={{fontFamily: "Poppins", lineHeight: "20px"}}>Skills</h2>
                  <SkillGrid>
                    {skills.map((skill, index) => (
                      <div key={index} style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: index <= 4 ? "end" : "start",
                        justifyContent: "center"
                      }}>
                        <Tooltip key={index} title={skill.title} placement={index <= 4 ? "top" : "bottom"}>
                          <CommonSkillButton>
                            {skill.icon}
                          </CommonSkillButton>
                        </Tooltip>
                      </div>
                    ))}
                  </SkillGrid>
                  <AlignedText><SmallText>Visit the Projects section to see the work done with these web technologies.</SmallText></AlignedText>
                  {/*<SecondaryButton>Projects</SecondaryButton>*/}
                </Flex>
              </CommonCard>
            </div>
            {/*<Row gutter={[20, 20]} style={{height: "100%"}}>*/}
            {/*  <Col span={24} style={{height: "calc(60% - 40px)"}}>*/}
            {/*  </Col>*/}
            {/*  <Col span={24} style={{height: "calc(40%)"}}>*/}
            {/*    */}
            {/*  </Col>*/}
            {/*</Row>*/}
          </Col>
          <Col span={11}>
            <Content>
              <PortraitImage src={portrait} alt="portrait"/>
              <StyledCard>
                <h2 style={{textAlign: "left", fontSize: "30px", marginBottom: "10px"}}>HOANG MINH</h2>
                <Flex gap={16}>
                  <PrimaryButton onClick={() => handleScroll("project")}>Projects</PrimaryButton>
                  <CustomButton onClick={() => handleScroll("experience")}>Experience</CustomButton>
                </Flex>
              </StyledCard>
            </Content>
          </Col>
          <Col span={7}>
            <CommonCard variant={fadeInRight} style={{display: "flex", alignItems: "center"}}>
              <Flex vertical gap={15} style={{height: "100%"}}>
                <Flex vertical gap={10}>
                  <LargeText>
                    <AlignedText>Hoang Minh Nguyen - <strong>Marketing Fresher</strong></AlignedText>
                  </LargeText>
                  <MediumText>
                    <AlignedText>
                      Located in Hanoi, I have multiple media skills include photography, videography and graphic design with several marketing projects experience.
                    </AlignedText>
                  </MediumText>
                </Flex>

                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  width: "90%",
                  gap: "10px",
                  margin: "0 auto"
                }}>
                  {socials.map((social, index) => (
                    <div key={index} style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <Tooltip key={index} title={social.title} placement={index <= 4 ? "top" : "bottom"}>
                        <CommonSocialButton onClick={(e) => {
                          e.preventDefault();
                          if (social.title !== "Google") {
                            window.open(social.link, '_blank');
                          } else {
                            navigator.clipboard.writeText(social.link);

                            messageApi.open({
                              type: "success",
                              content: `Email copied!`,
                              className: "message-fix-style"
                            });
                          }
                        }}>
                          {social.icon}
                        </CommonSocialButton>
                      </Tooltip>
                    </div>
                  ))}
                </div>
                <div style={{width: "100%", flex: "1", marginTop: "20px"}}>
                  <CustomImage src={portrait3} style={{boxShadow: "0 0 15px 2px #DBDBDB1E", overflow: "hidden", opacity: "0.85"}}/>
                </div>
                <AlignedText><MediumText>Please send me messages on these social channels, or my email and I’ll answer you.</MediumText></AlignedText>
                <PrimaryButton onClick={() => handleScroll("seeking")}>Contact Me</PrimaryButton>
              </Flex>
            </CommonCard>
          </Col>
        </Row>
      </CommonContainer>
    );
  }

  const SmallLayout = () => {
    return (
      <>
        <FullContainer {...props}>
          <Content>
            <PortraitImage src={portrait} alt="portrait"/>
            <StyledCard>
              <h2 style={{textAlign: "left", fontSize: "30px", marginBottom: "10px"}}>HOANG MINH</h2>
              <Flex gap={16}>
                <PrimaryButton onClick={() => handleScroll("project")}>Projects</PrimaryButton>
                <CustomButton onClick={() => handleScroll("experience")}>Experience</CustomButton>
              </Flex>
            </StyledCard>
          </Content>
        </FullContainer>
        <CommonContainer>
          <DescriptionLayout>
            <FirstRow>
              <CommonCard>
                <Flex vertical justify={"space-between"} style={{height: "100%"}}>
                  <h2>Hoang Minh</h2>
                  <div style={{width: "100%", flex: "1", margin: "20px 0"}}>
                    <GlowCustomImage src={portrait2} isOverflow={"110%"} style={{boxShadow: "0 0 15px 2px #DBDBDB1E"}}/>
                  </div>
                  <AlignedText><SmallText>Dedicated to strategic and professional working experience. Striving for execellence.</SmallText></AlignedText>
                </Flex>
              </CommonCard>
              <ButtonGroup>
                {socials.map((social, index) => (
                    <Tooltip key={index} title={social.title} placement={index <= 4 ? "top" : "bottom"}>
                      <CommonSocialButton onClick={(e) => {
                        e.preventDefault();
                        if (social.title !== "Google") {
                          window.open(social.link, '_blank');
                        } else {
                          navigator.clipboard.writeText(social.link);

                          messageApi.open({
                            type: "success",
                            content: `Email copied!`,
                            className: "message-fix-style"
                          });
                        }
                      }}>
                        {social.icon}
                      </CommonSocialButton>
                    </Tooltip>
                ))}
                <ResumeButton onClick={(e) => {
                    e.preventDefault();
                    window.open(CV_LINK, '_blank');
                  }}>
                  <ResumeButtonText>MY RESUME</ResumeButtonText>
                  <DownloadIconWrapper><DownloadIcon/></DownloadIconWrapper>
                </ResumeButton>
              </ButtonGroup>
            </FirstRow>
            <CommonCard style={{height: "100%"}}>
              <Flex vertical justify={"space-between"} style={{height: "100%"}}>
                <h2 style={{fontFamily: "Poppins"}}>Skills</h2>
                <SkillGrid>
                  {skills.map((skill, index) => (
                    <div key={index} style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <Tooltip key={index} title={skill.title} placement={index <= 4 ? "top" : "bottom"}>
                        <CustomSkillButton>
                          {skill.icon}
                        </CustomSkillButton>
                      </Tooltip>
                    </div>
                  ))}
                </SkillGrid>
                <AlignedText><SmallText>Visit the Projects section to see the work done with these web technologies.</SmallText></AlignedText>
              </Flex>
            </CommonCard>
          </DescriptionLayout>
        </CommonContainer>
      </>
    )
  }

  return isSmallScreen ? <SmallLayout/> : <LargeLayout/>;
};

const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    flex: 1;
    margin: 5px;

    @media (max-width: 1200px) {
        gap: 2px;
    }
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(10, 1fr);
    }

    @media (max-width: 450px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

const CustomSkillButton = styled(CommonSkillButton)`
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: 1200px) {
        padding: 10px;
    }
`;

const ResumeButtonText = styled.span`
    position: absolute;
    width: max-content;
    top: 40%;
    color: #292929;
    transform: rotate(-90deg);
    font-size: 25px;
    line-height: 0px;
    font-weight: 600;
    @media (max-width: 700px) {
        font-size: 15px;
    }
`;

const DownloadIconWrapper = styled.div`
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: calc(100% - 10px);
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #292929;
    border-radius: 50%;
    @media (max-width: 700px) {
        svg {
            height: 20px;
        }
        font-size: 15px;
    }
`;

const ResumeButton = styled.button`
    box-sizing: border-box;
    position: relative;
    background-color: #fff;
    outline: none;
    margin: 0;
    padding: 5px; 
    border-radius: 29px;
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const FirstRow = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 58px;
    gap: 15px;
    
    @media (max-width: 700px) {
        grid-template-columns: 1fr 48px;
    }
`;

const DescriptionLayout = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-rows: 60% 1fr;
    gap: 15px;

    @media (max-width: 820px) {
        grid-auto-rows: 80% 1fr;
    }
`;

const FullContainer = styled(CommonContainer)`
    margin-top: -64px;
    padding: 0;
`;

const AlignedText = styled.p`
    text-align: start;
`;

const StyledCard = styled(motion.div)`
    width: fit-content;
    height: fit-content;
    background-color: rgba(100,100,100, 0.1);
    border: 1px solid rgba(255,255,255, 0.5);
    padding: 20px;
    border-radius: 30px;
    text-align: center;
    color: white;
    box-sizing: border-box;
    position: absolute;

    bottom: 10px;
    left: 10px;
    backdrop-filter: blur(10px);
`;

const Content = styled(CommonCard)`
    position: relative;
    flex: 1;
    background: linear-gradient(142deg, #F9D247, #B27907);
    padding: 20px;
    border-radius: ${({theme}) => theme.borderRadius};
    color: #e0e0e0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
    
    @media (max-width: 1000px) {
        border-radius: 0;
        padding: 10px;
    }
`;

const PortraitImage = styled.img`
    position: absolute;
    bottom: -10px;
    height: 100%;
    transform: scale(1.1);

    @media (max-width: 1000px) {
        transform: none;
        height: 95%;
    }
`;

const GlowCustomImage = styled(CustomImage)`
    img {
        left: 10px !important;
    }
    
    @media (max-width: 1700px) {
        min-width: 100%;
    }
`;



const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default Portfolio;
