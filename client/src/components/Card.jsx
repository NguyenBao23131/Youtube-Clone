import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <>
      <Link to="/video/test" style={{ textDecoration: "none" }}>
        <Container type={type}>
          <Image
            type={type}
            src="https://cdn.mos.cms.futurecdn.net/CwmiGUSgd6obt2jKHN35Ti.jpg"
          />
          <Details type={type}>
            <ChannelImage
              type={type}
              src="https://gstatic.gvn360.com/2022/11/Mat-na_-13-1068x580.jpg"
            />
            <Texts>
              <Title>Test Video</Title>
              <ChannelName>DevTol</ChannelName>
              <Info>660,908 views • 1 day ago</Info>
            </Texts>
          </Details>
        </Container>
      </Link>
    </>
  );
};

export default Card;