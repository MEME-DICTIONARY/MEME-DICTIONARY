import footer_logo from "../assets/img/logo.png";
import styled from "styled-components";

function Footer() {
    return (
        <FooterWrapper>
            <FooterLogo>
                <img src={footer_logo} alt="푸터로고" />
            </FooterLogo>
            <FooterEmail>meme.dictionary2022@gmail.com</FooterEmail>
            <FooterCopyRight>
                &copy; 2022. 밈과사전 All right reserved
            </FooterCopyRight>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background-color: #2e335f;
  justify-content: center;
  align-items: center;
`;

const FooterLogo = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-top: 33px;

  & > img {
    width: 50%;
  }
`;

const FooterInfo = styled.p`
  color: #fff;
  padding: 10px;
`;
const FooterEmail = styled(FooterInfo)``;
const FooterCopyRight = styled(FooterInfo)`
  margin-bottom: 20px;
`;

export default Footer;
