import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, NextRouter } from "next/router";
import Button from "../../../../components/Button";
/**Props */
import PortfolioProps from "./PortfolioProps";
/**Styles */
import {
  Grid, PortfolioContainer, Title, Subtitle,
  OtohMockup, OtohMockup2, DescriptionContainer,
  AwardContainer, AwardItem
} from "./styles";
/**Files */
import otohMockup from "../../../../../public/assets/others/otohmockup.webp";

const Portfolio: FC<PortfolioProps> = ({ t }): JSX.Element => {
  const router: NextRouter = useRouter();
  return (
    <Grid id="portfolio">
      <PortfolioContainer>
        <Title className="st1">{t("home.portfolio.title")}</Title>
        <Subtitle className="no-js-hiddenY">{t("home.portfolio.subtitle")}</Subtitle>
        <DescriptionContainer>
          <h4 className="no-js-hiddenX delay100">
            {t("home.portfolio.otoh.title")}
          </h4>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.portfolio.otoh.description1")}
          </p>
          <p className="p1 no-js-hiddenX delay100">
            {t("home.portfolio.otoh.description2")}
          </p>
          <OtohMockup2 className="no-js-hiddenX delay100" id="otoh-mockup">
            <Image
              loading="lazy"
              quality={50} width={521} height={347} sizes="100%"
              alt={t("home.portfolio.otoh.title")}
              title={t("home.portfolio.otoh.title")}
              src={otohMockup.src} />
          </OtohMockup2>
          <AwardContainer>
            <h6 className="no-js-hiddenX delay100">{t("home.portfolio.otoh.award.title")}</h6>
            <AwardItem className="no-js-hiddenX delay100">
              🥇
              <p className="p1">
                {t("home.portfolio.otoh.award.award1")}
                <br />
                <Link rel="external" href="https://premio.connectedsmartcities.com.br/o-que-e-o-premio-csc/#conteudo|7" target="_blank">
                  {t("home.portfolio.otoh.award.callToAction")}
                </Link>
              </p>
            </AwardItem>
            <AwardItem className="no-js-hiddenX delay100">
              🥈
              <p className="p1">
                {t("home.portfolio.otoh.award.award2")}
                <br />
                <Link rel="external" className="no-js-hiddenX delay100" href="https://www.cbic.org.br/premioinovacaoesustentabilidade/edicao-anterior-2022/" target="_blank">
                  {t("home.portfolio.otoh.award.callToAction")}
                </Link>
              </p>
            </AwardItem>
          </AwardContainer>
          <Link rel="external" className="no-js-hiddenX delay100" href={`https://www.otoh.com.br/${router.locale}`} target="_blank">
            <Button>
              {t("home.portfolio.otoh.learnMore")}
            </Button>
          </Link>
        </DescriptionContainer>
        <OtohMockup className="no-js-hiddenX delay100">
          <Image
            loading="lazy"
            quality={50} width={521} height={347} sizes="100%"
            alt={t("home.portfolio.otoh.title")}
            title={t("home.portfolio.otoh.title")}
            src={otohMockup.src} />
        </OtohMockup>
      </PortfolioContainer>
    </Grid>
  );
};

export default Portfolio;