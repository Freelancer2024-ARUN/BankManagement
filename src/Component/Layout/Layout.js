import React from 'react';
import ReactDOM from "react-router-dom";
import MenuBar from './MenuBar';
import DirectoryBar from './DirectoryBar';
import MainContent from './MainContent';
import FooterBar from './FooterBar';


function Layout() {
    return (
        <div className="Layout">
            {/* Implement the MenuBar */}
            <MenuBar />
             {/* Implement the Current Page Directory Bar */}
            {/* <DirectoryBar /> */}
            {/* Implement the Current Page Content */}
            <MainContent/>
            {/* Implement the Footer Page */}
            <FooterBar/>
        </div>
    );
}
export default Layout;
