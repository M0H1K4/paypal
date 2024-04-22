import React from "react";

export default function AboutPage() {
  return (
    <>
      <div className="containerAbout">
        <div className="containerAbout2">
          <h1 className="aboutPageH1">
            We empower innovators by delivering access to the financial system
          </h1>
          <div className="txtxAbout">
            <div className="txtsAboutPage1">
              <h2 className="aboutPageH2">Our Vision</h2>
              <p className="aboutPageP">
                Our main goal is to build beautiful consumer experiences along
                with developer-friendly infrastructure. The result is an
                intelligent tool that gives everyone the ability to create
                amazing products that solve big problems. We are deeply focused
                on democratizing financial services through technology.{" "}
              </p>
            </div>
            <div className="txtsAboutPage1">
              <h2 className="aboutPageH2">Our Business</h2>
              <p className="aboutPageP">
                At the core of our platform is the technical infrastructure APIs
                that connect consumers. Our innovative product provides key
                insights for businesses and individuals, as well as robust
                reporting for traditional financial institutions and developers.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
