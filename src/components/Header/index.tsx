import { FC, useEffect, useRef, MutableRefObject, useState } from "react";
import Button from "../Button";
import SideBar from "../SideBar";
import SwitchTheme from "../SwitchTheme";
import { Link as LinkScroll } from "react-scroll";
import LanguageDropdown from "../LanguageDropdown";
/**Styles */
import {
  Grid, HeaderContainer, Logo, Middle, Right
} from "./styles";
/**Props */
import HeaderProps from "./HeaderProps";
/**Helpers */
import { listenToScroll } from "./helpers";

const Header: FC<HeaderProps> = ({ t }) => {
  const [isOnTop, setIsOnTop] = useState(false);
  const headerRef: MutableRefObject<HTMLDivElement> = useRef();
  // console.log("theme: ", typeof theme)

  useEffect(() => {
    window.addEventListener("scroll", () => listenToScroll(isOnTop, setIsOnTop, headerRef.current));
    const headerRefCurrent: HTMLElement | null = headerRef.current;
    return () => {
      if (!headerRefCurrent) return;
      window.removeEventListener("scroll", () => listenToScroll(isOnTop, setIsOnTop, headerRefCurrent));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid ref={headerRef} isOnTop={isOnTop}>
      <HeaderContainer>
        <Logo className="header-animate">
          <LinkScroll href="#top" activeClass="activeSection" offset={-100} to="top" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
            Leonardo<br />Jacomussi
          </LinkScroll>
        </Logo>
        <Middle>
          <LinkScroll href="#services" className="header-animate" activeClass="activeSection" offset={-100} to="services" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
            {t("header.services")}
          </LinkScroll>
          <LinkScroll href="#about-me" className="header-animate" activeClass="activeSection" offset={-100} to="about-me" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
            {t("header.aboutMe")}
          </LinkScroll>
          <LinkScroll href="#qualifications" className="header-animate" activeClass="activeSection" offset={-100} to="qualifications" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
            {t("header.qualifications")}
          </LinkScroll>
          <LinkScroll href="#portfolio" className="header-animate" activeClass="activeSection" offset={-100} to="portfolio" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
            {t("header.portfolio")}
          </LinkScroll>
          <LanguageDropdown className="header-animate" t={t} />
          <SwitchTheme t={t} className="header-animate" />
        </Middle>
        <Right>
          <SideBar className="header-animate" t={t} />
          <LinkScroll href="#contact" className="header-animate" activeClass="activeSection" offset={-100} to="contact" spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
            <Button style={{ width: "11.5rem", height: "6rem" }}>
              {t("header.contact")}
            </Button>
          </LinkScroll>
        </Right>
      </HeaderContainer>
    </Grid>
  );
};

export default Header;