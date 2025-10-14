import styled from "styled-components";
import {CommonContainer} from "@/components/styled/common-container.jsx";
import {ProjectCard} from "@/components/project-card/index.jsx";
import {Col, Row} from "antd";
import {projects} from "@/pages/project/constants.jsx";
import {CustomTitle} from "@/components/styled/custom-title.jsx";

const Project = (props) => {

  return (
    <CustomContainer {...props}>
      <CustomTitle>RECENT PROJECTS</CustomTitle>
      <div style={{flex: 1, width: "100%"}}>
        <Row gutter={[30,30]}>
          {projects.map((project, index) => (
            <Col key={index} xs={24} sm={24} md={12} lg={8}>
              <ProjectCard  onClick={(e) => {
                e.preventDefault();
                window.open(project.link, '_blank');
              }} {...project}/>
            </Col>
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

export default Project;