import { ReactNode } from "react";

import style from "@/app/(afterLogin)/layout.module.scss";
import Link from "next/link";
import Image from "next/image";

import zlogo from "../../../public/zlogo.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import RightSearchZone from "./_component/RightSearchZone";
import { auth } from "@/auth";
import RQProvider from "./_component/RQProvider";

type Props = { children: ReactNode; modal: ReactNode };

export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await auth();

  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <h1 className={style.logo}>
              <Link
                className={style.logoLink}
                href={session?.user ? "/home" : "/"}
              >
                <Image
                  src={zlogo}
                  alt="z.com logo"
                  className={style.logoImage}
                />
              </Link>
            </h1>
            {session?.user && (
              <nav>
                <ul>
                  <NavMenu />
                </ul>
                <Link href="/compose/tweet" className={style.postButton}>
                  <span>게시하기</span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1472mwg r-lrsllp"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    <g>
                      <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                    </g>
                  </svg>
                </Link>
              </nav>
            )}
            <LogoutButton />
          </div>
        </section>
      </header>
      <RQProvider>
        <div className={style.rightSectionWrapper}>
          <div className={style.rightSectionInner}>
            <main className={style.main}>{children}</main>
            <section className={style.rightSection}>
              <RightSearchZone />
              <TrendSection />
              <div className={style.followRecommend}>
                <h3>팔로우 추천</h3>
                <FollowRecommend />
                <FollowRecommend />
                <FollowRecommend />
              </div>
            </section>
          </div>
        </div>
        {modal}
      </RQProvider>
    </div>
  );
}
