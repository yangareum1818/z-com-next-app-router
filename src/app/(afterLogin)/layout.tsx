import { ReactNode } from "react";

import style from "@/app/(afterLogin)/layout.module.css";
import Link from "next/link";
import Image from "next/image";

import zlogo from "../../../public/zlogo.png";
import NavMenu from "./_component/NavMenu";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <h1 className={style.logo}>
              <Link className={style.logoLink} href="/home">
                <Image
                  src={zlogo}
                  alt="z.com logo"
                  className={style.logoImage}
                />
              </Link>
            </h1>
            <nav>
              <ul>
                <NavMenu />
              </ul>
            </nav>
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <form action="" className={style.search}>
              <input type="search" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
