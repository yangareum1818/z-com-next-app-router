import { ReactNode } from "react";

const HomePage = ({ children }: { children: ReactNode }) => {
  return <main>홈 레이아웃 페이지{children}</main>;
};
export default HomePage;
