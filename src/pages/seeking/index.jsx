import styled from "styled-components";
import {CommonContainer} from "@/components/styled/common-container.jsx";
import {Col, Flex, message, notification, Row, Tooltip} from "antd";
import {CommonCard} from "@/components/styled/common-card.jsx";
import {CustomTitle} from "@/components/styled/custom-title.jsx";
import portrait from "@/assets/images/Avatar 1 - seeking.png";
import {incentives, introduction, services} from "@/pages/seeking/constants.jsx";
import CustomImage from "@/components/custom-image/index.jsx";
import React, {useState} from "react";
import PrimaryButton from "@/components/button/primary-button.jsx";
import ServiceLogo from "@/pages/seeking/components/service-logo/index.jsx";
import {CustomInput} from "@/components/input/custom-input.js";
import {CustomTextarea} from "@/components/input/custom-textarea.js";
import {socials} from "@/pages/home/constants.jsx";
import {CommonSocialButton} from "@/components/styled/common-social-button.jsx";
import {LargeText} from "@/components/styled/text-size/large-text.jsx";
import {MediumText} from "@/components/styled/text-size/medium-text.jsx";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {SmallText} from "@/components/styled/text-size/small-text.jsx";
import {useMediaQuery} from "react-responsive";
import {HiddenScrollbar} from "@/components/styled/hidden-scrollbar.jsx";

const Seeking = (props) => {

  const isSmallScreen = useMediaQuery({maxWidth: 850});

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string()
      .min(2, 'Too Short!')
      .required('Required'),
  });

  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true)

    try {
      const res = await fetch("https://formspree.io/f/xrbyygoa", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      if (res.ok && res.status === 200) {
        messageApi.open({
          type: "success",
          content: `We received your message!`,
          className: "message-fix-style"
        });
      } else {
        messageApi.open({
          type: "error",
          content: `There is an error, please try again later!`,
          className: "message-fix-style"
        });
      }
    } catch {
      messageApi.open({
        type: "error",
        content: `There is an error, please try again later!`,
        className: "message-fix-style"
      });
    } finally {
      setLoading(false)
    }
  };

  const LargeLayout = ({ errors, touched, values, setValues }) => {
    return (
      <Row gutter={[30,30]}>
        <Col span={24}>
          <CustomTitleSeeking style={{color: "#F9D247", marginLeft: "40px"}}>JOBS I’M LOOKING FOR</CustomTitleSeeking>
          <CommonCard style={{height: "fit-content", minHeight: "280px", paddingBottom: "0px"}}>
            <DescLayout>
              <div style={{display: "flex", flexBasis: "45%", flexDirection: "column", paddingLeft: "20px"}}>
                <CustomTitleSeeking style={{fontSize: "20px"}}>{introduction.title}</CustomTitleSeeking>
                <HiddenScrollbar style={{flex: "1"}}>
                  <MediumText style={{flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                    <ContentRight dangerouslySetInnerHTML={{__html: introduction.descriptions[0]}}></ContentRight>
                    <ContentRight style={{marginBottom: 0, paddingBottom: 0}} dangerouslySetInnerHTML={{__html: introduction.descriptions[1]}}></ContentRight>
                  </MediumText>
                </HiddenScrollbar>

              </div>
              <PortraitContainer style={{flexBasis: "25%"}}>
                <CustomPortrait src={portrait} alt=""/>
              </PortraitContainer>
              <div style={{display: "flex", flexBasis: "30%", flexDirection: "column"}}>
                <CustomTitleSeeking style={{color: "#F9D247", fontSize: "20px"}}>What I Bring to the Role?</CustomTitleSeeking>
                <MediumText style={{flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                  <CustomList style={{flex: "1", display: "flex", flexDirection: "column"}}>
                    {incentives.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </CustomList>
                </MediumText>
              </div>
            </DescLayout>
          </CommonCard>
        </Col>

        <Col span={24}>
          <Row gutter={[30,10]}>
            <Col span={24}>
              <div style={{width: "100%", display: "flex", alignItems: "center"}}>
                <CustomTitleSeeking style={{margin: "0 20px", width: "fit-content", minWidth: "240px"}}>CONTACT ME</CustomTitleSeeking>
                <DashLine/>
              </div>
            </Col>
            <Col span={24}>
              <Row gutter={[20, 20]}>
                <Col span={10}>
                  <Row gutter={[20, 20]}>
                    <Col span={24}>
                      {/* eslint-disable-next-line react/prop-types */}
                      <CustomInput value={values.name} onChange={(e) => setValues({...values, name: e.target.value})} type={"text"} name={"name"} placeholder={"Your Name"}/>
                      {/* eslint-disable-next-line react/prop-types */}
                      {errors.name && touched.name ? (<ErrorMessage>{errors.name}</ErrorMessage>) : null}
                    </Col>
                    <Col span={24}>
                      {/* eslint-disable-next-line react/prop-types */}
                      <CustomInput value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} type={"text"} name={"email"} placeholder={"YourEmail@gmail.com"}/>
                      {/* eslint-disable-next-line react/prop-types */}
                      {errors.email && touched.email ? (<ErrorMessage>{errors.email}</ErrorMessage>
                      ) : null}
                    </Col>
                    <Col span={24}>
                      <CustomInput style={{opacity: 0}} name={"phone"} type={"text"} placeholder={"Your Phone Number"}/>
                    </Col>
                  </Row>
                </Col>
                <Col span={14}>
                  {/* eslint-disable-next-line react/prop-types */}
                  <CustomTextarea value={values.message} onChange={(e) => setValues({...values, message: e.target.value})} name={"message"} placeholder={"Send a message, get a response. It’s that simple!"}></CustomTextarea>
                  {/* eslint-disable-next-line react/prop-types */}
                  {errors.message && touched.message ? (<ErrorMessage>{errors.message}</ErrorMessage>) : null}
                </Col>
                <Col span={10}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    width: "60%",
                    gap: "10px",
                  }}>
                    {socials.map((social, index) => (
                      <div key={index} style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start"
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
                          }} style={{height: "45.5px", width: "45.5px"}}>
                            {social.icon}
                          </CommonSocialButton>
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col span={14}>
                  <div style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <PrimaryButton disabled={loading} type={"submit"} style={{color: "white", width: "50%", minWidth: "170px"}}>SEND MESSAGE</PrimaryButton>
                  </div>
                </Col>
              </Row>
            </Col>

            {/*<Col span={8}>*/}
            {/*  <CustomImage style={{width: "100%", height: "auto", aspectRatio: "10 / 8"}}/>*/}
            {/*  <CustomTitleSeeking style={{marginTop: "20px", marginLeft: "20px", width: "100%"}}>AS A FREELANCER</CustomTitleSeeking>*/}
            {/*</Col>*/}

            {/*{services.map((service, index) => (*/}
            {/*  <Col span={8} key={index}>*/}
            {/*    <CustomCard>*/}
            {/*      <ServiceLogo style={{height: "120px", width: "120px", margin: "20px 0"}} icon={service.icon}/>*/}
            {/*      <ServiceContent>*/}
            {/*        <CustomTitleSeeking style={{fontSize: "20px"}}>{service.title}</CustomTitleSeeking>*/}
            {/*        <p style={{textAlign: "left"}}>{service.description}</p>*/}
            {/*      </ServiceContent>*/}
            {/*      <PrimaryButton style={{color: "white"}}>BOOKING/DETAILS</PrimaryButton>*/}
            {/*    </CustomCard>*/}
            {/*  </Col>*/}
            {/*))}*/}
          </Row>
        </Col>
      </Row>
    )
  }

  // eslint-disable-next-line react/prop-types
  const SmallLayout = ({ errors, touched, values, setValues }) => {
    return (
      <>
        <CustomTitleSeeking style={{color: "#F9D247", fontSize: "30px", textAlign: "center", marginBottom: "20px"}}>JOBS I’M LOOKING FOR</CustomTitleSeeking>
        <ContentGrid>

          <CommonCard style={{overflow: "hidden", minHeight: "330px"}}>
            <Flex vertical style={{height: "100%"}}>
              <CustomTitleSeeking style={{fontSize: "22px", textAlign: "center", color: "white"}}>{introduction.title}</CustomTitleSeeking>
              <SmallText style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <ContentRight style={{textAlign: "left"}} dangerouslySetInnerHTML={{__html: introduction.descriptions[0]}}></ContentRight>
                                <div style={{display: "flex", flexDirection: "column", flex: "1", gap: "10px"}}>
                                                    <ContentRight style={{textAlign: "left", flex: "1"}}
                                                                  dangerouslySetInnerHTML={{__html: introduction.descriptions[1]}}></ContentRight>
                                                  </div>

              </SmallText>
            </Flex>
          </CommonCard>
        </ContentGrid>
        <ContentGrid>
          <Rect/>
          <div style={{paddingLeft: "10px"}}>
            <CustomTitleSeeking style={{color: "#F9D247", fontSize: "25px"}}>What I Bring to the
              Role?</CustomTitleSeeking>
            <SmallText>
              <CustomList>
                {incentives.map((item, index) => (
                  <li key={index}><MediumText>{item}</MediumText></li>
                ))}
              </CustomList>
            </SmallText>
          </div>
        </ContentGrid>
        <Row gutter={[30,10]}>
          <Col span={24}>
            <div style={{width: "100%", display: "flex", alignItems: "center"}}>
              <DashLine/>
              <CustomTitleSeeking style={{margin: "0 20px", width: "fit-content", minWidth: "240px"}}>CONTACT ME</CustomTitleSeeking>
            </div>
          </Col>
          <Col span={24}>
            <Row gutter={[20, 20]}>
              <Col span={24}>
                {/* eslint-disable-next-line react/prop-types */}
                <CustomInput value={values.name} onChange={(e) => setValues({...values, name: e.target.value})} type={"text"} name={"name"} placeholder={"Your Name"}/>
                {/* eslint-disable-next-line react/prop-types */}
                {errors.name && touched.name ? (<ErrorMessage>{errors.name}</ErrorMessage>) : null}
              </Col>
              <Col span={24}>
                {/* eslint-disable-next-line react/prop-types */}
                <CustomInput value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} type={"text"} name={"email"} placeholder={"YourEmail@gmail.com"}/>
                {/* eslint-disable-next-line react/prop-types */}
                {errors.email && touched.email ? (<ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}
              </Col>
              <Col span={24}>
                {/* eslint-disable-next-line react/prop-types */}
                <CustomTextarea rows={5} value={values.message} onChange={(e) => setValues({...values, message: e.target.value})} name={"message"} placeholder={"Send a message, get a response. It’s that simple!"}></CustomTextarea>
                {/* eslint-disable-next-line react/prop-types */}
                {errors.message && touched.message ? (<ErrorMessage>{errors.message}</ErrorMessage>) : null}
              </Col>
              <Col span={10}>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  width: "60%",
                  gap: "10px",
                }}>
                  {socials.map((social, index) => (
                    <div key={index} style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start"
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
                        }} style={{height: "45.5px", width: "45.5px"}}>
                          {social.icon}
                        </CommonSocialButton>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </Col>
              <Col span={14}>
                <div style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "end",
                }}>
                  <PrimaryButton disabled={loading} type={"submit"} style={{color: "white", width: "50%", minWidth: "165px"}}>SEND MESSAGE</PrimaryButton>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  }

  return (
    <CustomContainer {...props} style={!isSmallScreen ? {marginTop: "30px", display: "flex", alignItems: "center"}: {marginTop: "35px"}}>
      {contextHolder}
      <Formik
        initialValues={{
          name: '',
          message: '',
          email: '',
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setValues }) => (
          <Form>
            {
              isSmallScreen ? <SmallLayout {...{ errors, touched, values, setValues }}/> : <LargeLayout {...{ errors, touched, values, setValues }}/>
            }
          </Form>
        )}
      </Formik>
    </CustomContainer>
  );
}

const CustomTitleSeeking = styled(CustomTitle)`
    text-align: start;
    margin: 0;
    margin-bottom: 10px;


    @media (max-width: 1000px) {
        margin-bottom: 5px;
    }
`;

const Rect = styled.div`
    width: calc(100% + 10px);
    height: 100%;
    margin-left: -10px;
    background-color: #F9D247;
`;

const RotatedTitle = styled(CustomTitleSeeking)`
    transform: rotate(-90deg);
    left: -5px;
    position: absolute;
    width: max-content;
    line-height: 0px;
    margin: 1px;
`;

const RotatedText = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr;
    margin-bottom: 20px;

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;

const CustomContainer = styled(CommonContainer)`
    height: fit-content;
    min-height: 100%;
`;

const CustomCard = styled(CommonCard)`
    display: flex;
    flex-direction: column;
`;

const DescLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 10px;
    text-align: start;
    position: relative;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const ServiceContent = styled.div`
    flex: 1;
`;

const ErrorMessage = styled.div`
    color: red;
    font-weight: 600;
    font-size: 14px;
    margin-left: 10px;
`;

const PortraitContainer = styled.div`
    flex-basis: 30%;
    align-self: flex-end;
    margin-top: -100px;
    margin-bottom: -6px; 
`;

const CustomPortrait = styled.img`
  width: 100%;
  max-height: 380px;
  object-fit: contain;
  object-position: center bottom;
`;

const SmallLayoutPortrait = styled(CustomPortrait)`
    margin: auto;
    max-height: 250px;
`;

const DashLine = styled.div`
  height: 0;
  width: calc(100% + 10px);
  margin-left: -10px;
  border: 1px solid #F9D247;
`;

const ContentRight = styled.div`
    p {
        margin-bottom: 0 !important;
    }
        & > *:last-child {
        margin-bottom: 0 !important;
    }
`;

const CustomList = styled.ul`
  flex: 1;
  padding-left: 20px;
  margin: 0;
  li {
    line-height: 35px;
  }
    
    @media (max-width: 1000px) {
        li {
            line-height: 30px;
        }
    }

    @media (max-width: 900px) {
        li {
            line-height: 25px;
        }
    }
`;

export default Seeking;