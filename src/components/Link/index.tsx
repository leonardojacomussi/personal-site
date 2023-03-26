import { FC, ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { Link as LinkScroll } from "react-scroll";

interface CustomLinkProps extends LinkProps {
  to?: string,
  rel?: string,
  scroll?: boolean
  children?: ReactNode,
  [key: string]: any,
};

const CustomLink: FC<CustomLinkProps> = ({ scroll, to, children, href, ...props }): JSX.Element => {
  if (scroll && to) {
    return (
      <LinkScroll {...props} activeClass="activeSection" offset={-90} to={to} spy smooth hashSpy={false} isdynamicduration={0} delay={0}>
        {children}
      </LinkScroll>
    );
  } else {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  };
};

CustomLink.defaultProps = {
  children: null,
  scroll: false,
  href: "#",
  to: "",
};

export default CustomLink;