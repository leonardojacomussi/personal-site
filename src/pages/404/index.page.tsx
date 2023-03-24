import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { NextPage, GetStaticProps } from "next";
import Button from "../../components/Button";
import { getTranslator, Translator, dictionaries } from "../../i18n";

/**Styles */
import { Container , Content} from "./styles";
/**Props */
import NotFoundProps, { NotFoundStaticProps } from "./NotFoundProps";


const NotFoundPage: NextPage<NotFoundProps> = ({ dictionary }): JSX.Element => {
  const t: Translator = getTranslator(dictionary);
  console.log("aqui")
  return (
    <Fragment>
      <Head>
        <meta name="description" content={t("metadata.description")} />
        <title>{t("404.title")}</title>
      </Head>
      <Container>
        <Header t={t} />
        <Content>
          <h1>404 | {t("404.content")}</h1>
          <Link href="/">
            <Button>{t("404.btnGoToHome")}</Button>
          </Link>
        </Content>
        <Footer t={t} />
      </Container>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, ...props }): Promise<{ props: NotFoundStaticProps }> => {
  const dictionary = await dictionaries[locale]();
  return { props: { dictionary: dictionary } }
};

export default NotFoundPage;