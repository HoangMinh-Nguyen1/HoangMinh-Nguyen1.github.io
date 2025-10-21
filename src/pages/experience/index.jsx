import styled from "styled-components";
import {CommonContainer} from "@/components/styled/common-container.jsx";
import {Col, Row} from "antd";
import {experiences} from "@/pages/experience/constants.jsx";
import {CommonCard} from "@/components/styled/common-card.jsx";
import {CustomTitle} from "@/components/styled/custom-title.jsx";
import {SmallText} from "@/components/styled/text-size/small-text.jsx";
import {MediumText} from "@/components/styled/text-size/medium-text.jsx";
import {useMediaQuery} from "react-responsive";

const Experience = (props) => {

  const isSmallScreen = useMediaQuery({maxWidth: 850});

  return (
    <CustomContainer {...props}>
      <CustomTitle style={isSmallScreen ? {marginBottom: "10px"} : {}}>
        {isSmallScreen ? "MY EXPERIENCE" : "EXPERIENCE OR WORK"}
      </CustomTitle>
      <div style={{flex: 1, width: "100%"}}>
        <Row gutter={[20,20]}>
          {experiences.map((exp, index) => (
            <>
              <Col xs={24} md={10}>
                <CompanyTitle>{exp.name}</CompanyTitle>
              </Col>
              <Col xs={24} md={14}>
                <CommonCard style={{padding: "30px"}}>
                  {exp.positions.map((pos, posIndex) => (
                    <div key={posIndex} style={{textAlign: "start", marginBottom: posIndex !== exp.positions.length - 1 ?  "15px" : "0" }}>
                      <h3 style={{fontFamily: "Poppins"}}>{pos.title}</h3>
                      <SmallText style={{color: "#B4B4B4"}}>{pos.startDate} - {pos.endDate}</SmallText>
                      <MediumText><PositionDesc style={{color: "#DBDBDB"}} dangerouslySetInnerHTML={{__html: pos.description}}></PositionDesc></MediumText>
                    </div>
                  ))}
                </CommonCard>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </CustomContainer>
  )
}

const CustomContainer = styled(CommonContainer)`
    height: fit-content;
    min-height: 100%;
`;

const CompanyTitle = styled(CustomTitle)`
    font-size: 30px;
    color: #fff;
    text-align: start;
    
    @media (max-width: 1000px) {
        margin-bottom: 0;
        width: 100%;
        text-align: center;
    }
`;

const PositionDesc = styled.div`
    ul {
        margin: 0;
        margin-top: 10px;
        padding-left: 25px;
    }
`;

export default Experience;