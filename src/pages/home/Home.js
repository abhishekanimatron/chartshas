import ChartContainer from "../../components/chart_container/ChartContainer";
import TableContainer from "../../components/table_container/TableContainer";
import Navbar from "../../components/Nav/Navbar";
import styled from "styled-components/macro";

import "./Home.css";
import { useState } from "react";
function Home() {
  const [toggleTab, setToggleTab] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="contact-details">
          <h4>
            <a href="https://www.linkedin.com/in/azrallex/">
              Name - Abhishek Verma
            </a>
          </h4>
          <h4>
            <a href="mailto:abhishekverma297ab@gmail.com">
              Email ID - abhishekverma297ab@gmail.com
            </a>
          </h4>
          <h4>
            <a href="tel:+919669003542">Contact No. - +91 966 900 3542</a>
          </h4>
        </div>
        {toggleTab ? (
          <h1>- Medals Table -</h1>
        ) : (
          <h1>- Medals Visualization -</h1>
        )}
        <div className="tab-container">
          <p
            className={toggleTab ? "" : "active-tab"}
            onClick={() => setToggleTab(0)}
          >
            Line Chart
          </p>
          <p
            className={toggleTab ? "active-tab" : ""}
            onClick={() => setToggleTab(1)}
          >
            Table
          </p>
        </div>
        {toggleTab ? <TableContainer /> : <ChartContainer />}
      </div>
      <FooterLinksContainer>
        <p>© Arthashastra 2021</p>
        <p>customer support</p>
        <p>more information</p>
        <p>about</p>
        <p>our works</p>
        <p>terms & conditions</p>
        <p>privacy policy</p>
        <p>powered by google</p>
      </FooterLinksContainer>
    </>
  );
}

export default Home;

const FooterLinksContainer = styled.div`
  padding: 2rem;
  margin-top: 10vh;
  background-color: rgb(166, 79, 248);
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
  p {
    cursor: pointer;
    letter-spacing: 1.5px;
    font-size: 0.7rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: lighter;
    &:hover {
      color: skyblue;
    }
  }
`;
