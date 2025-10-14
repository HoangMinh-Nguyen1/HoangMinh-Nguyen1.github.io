import styled from "styled-components";
import { motion } from "framer-motion";
import {useContext} from "react";
import {ScrollContext} from "@/store/scroll-context.jsx";

export const CommonCard = (props) => {
  const { currentFrame, setCurrentFrame } = useContext(ScrollContext);

  return (
    // eslint-disable-next-line react/prop-types
    <CommonCardStyle viewport={{ once: true }} initial={currentFrame === null ? "hidden" : "hidden"} animate="visible" variants={props?.variant ?? fadeIn} {...props}/>
  );
};


const CommonCardStyle = styled(motion.div)`
    width: 100%;
    height: 100%;
    background: #1e1e1e;
    padding: 20px;
    border-radius: ${({theme}) => theme.borderRadius};
    text-align: center;
    color: #e0e0e0;
    box-sizing: border-box;
    position: relative;
`;

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};