import NavigationContext from "@/navigation-context.jsx";
import {ThemeProvider} from "styled-components";
import {antdTheme, theme} from "@/theme.js";
import {ConfigProvider, message, notification} from "antd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ScrollContext} from "@/store/scroll-context.jsx";
import Layout from "@/components/layout/index.jsx";
import Portfolio from "@/pages/home/index.jsx";
import Project from "@/pages/project/index.jsx";
import Experience from "@/pages/experience/index.jsx";
import Seeking from "@/pages/seeking/index.jsx";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {menuItems} from "@/constants/index.jsx";

const App = () => {
  const [currentFrame, setCurrentFrame] = useState(null);
  const frameRefs = {
    home: useRef(null),
    project: useRef(null),
    experience: useRef(null),
    seeking: useRef(null),
  };

  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const listRefsKeys = Object.keys(frameRefs);
    listRefsKeys.forEach((key, index) => {
      const ref = frameRefs[key];
      if (
        (e.deltaY < 0 && ref.current.offsetTop + ref.current.offsetHeight - containerRef.current.scrollTop > 100 && ref.current.offsetTop + ref.current.offsetHeight - containerRef.current.scrollTop < ref.current.offsetHeight / 2) ||
        (e.deltaY > 0 && (containerRef.current.scrollTop + containerRef.current.offsetHeight) - ref.current.offsetTop > 100 && (containerRef.current.scrollTop + containerRef.current.offsetHeight) - ref.current.offsetTop < ref.current.offsetHeight / 2)
      ) {
        // e.stopPropagation();
        // ref?.current?.scrollIntoView({
        //   behavior: "smooth"
        // })
        setCurrentFrame(key);
      }
    })
  }

  const views = {
    "home": <Portfolio ref={frameRefs["home"]} frameRefs={frameRefs}/>,
    "project": <Project ref={frameRefs["project"]}/>,
    "experience": <Experience ref={frameRefs["experience"]}/>,
    "seeking": <Seeking ref={frameRefs["seeking"]}/>,
  }

  const view = views?.[currentFrame] ?? views["home"];

  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={antdTheme}>
        <BrowserRouter>
          <ScrollContext.Provider value={{ currentFrame, setCurrentFrame }}>
            <Routes>
              <Route path="/" element={
                <Layout ref={containerRef} frameRefs={frameRefs} onScroll={handleScroll}>
                  {/*<Portfolio ref={frameRefs["home"]} frameRefs={frameRefs}/>*/}
                  {/*<Project ref={frameRefs["project"]}/>*/}
                  {/*<Experience ref={frameRefs["experience"]}/>*/}
                  {/*<Seeking ref={frameRefs["seeking"]}/>*/}
                  {view}
                </Layout>
              } />
            </Routes>
          </ScrollContext.Provider>
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  )
}

export default App;