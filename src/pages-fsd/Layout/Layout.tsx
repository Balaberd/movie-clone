import { Footer, Header } from "@/widgets";
import { FC, ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export const Layout: FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
