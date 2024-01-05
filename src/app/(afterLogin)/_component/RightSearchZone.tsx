"use client";

import { usePathname } from "next/navigation";
import SearchForm from "./SearchForm";
import style from "./rightSearchZone.module.css";

export default function RightSearchZone() {
  const pathname = usePathname();

  const onChangeAll = () => {};
  const onChangeFollow = () => {};

  if (pathname === "/explore") return null;
  if (pathname === "/search") {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <span>모든 사용자</span>
              <input
                type="radio"
                name="pf"
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <span>내가 팔로우하는 사람들</span>
              <input
                type="radio"
                name="pf"
                value="on"
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "6rem", width: "inherit" }}>
      <SearchForm />
    </div>
  );
}
