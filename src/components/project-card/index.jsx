import {CommonCard} from "@/components/styled/common-card.jsx";
import CustomImage from "@/components/custom-image/index.jsx";
import PropTypes from 'prop-types';
import React from "react";
import {CommonSkillButton} from "@/components/styled/common-skill-button.jsx";
import {Tooltip} from "antd";
import LinkIcon from "@/assets/images/link.svg?react";
import styled from "styled-components";

export const ProjectCard = (props) => {
  return (
    <CustomCard {...props}>
      <div style={{width: "100%", height: "55%"}}>
        {/* eslint-disable-next-line react/prop-types */}
        <CustomImage src={props.image} style={{borderRadius: "20px", overflow: "hidden"}}/>
      </div>
      <h3 style={{textAlign: "left", fontFamily: "Poppins", margin: "5px 0", marginTop: "10px"}}>{props?.title}</h3>
      <p style={{textAlign: "left"}}>{props?.desc}</p>
      <SkillBar>
        {props?.skills?.map((skill, index) => (
          <Tooltip key={index} title={skill.title}>
            <CustomSkillButton>
              {skill.icon}
            </CustomSkillButton>
          </Tooltip>
        ))}
      </SkillBar>
      <VisitProject>
        <LinkIcon style={{height: "15px", width: "15px", marginRight: "5px"}}/>
        Visit Project
      </VisitProject>
    </CustomCard>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  skills: PropTypes.array,
};

const VisitProject = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    width: fit-content;
    
    &:hover {
        text-shadow: 0 0 15px #DBDBDBaa;
        text-decoration: underline;
    }
`;

const SkillBar = styled.div`
  display: flex;
  gap: 10px;
  background-color: #363536;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px 0;
  width: fit-content;
  max-width: 100%;
`;

const CustomSkillButton = styled(CommonSkillButton)`
  width: 20px;
`;

const CustomCard = styled(CommonCard)`
  cursor: pointer;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;