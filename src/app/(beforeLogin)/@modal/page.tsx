import style from "@/app/(beforeLogin)/@modal/login.module.css";

export default function Page() {
  const onSubmit = () => {};
  const onClickClose = () => {};

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <button className={style.closeButton}>
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </button>
          <div>Z 가입하기</div>
        </div>
        <form>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                className={style.input}
                type="text"
                placeholder="아이디를 입력해주세용."
              />
            </div>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                className={style.input}
                type="password"
                placeholder="비밀번호를 입력해주세용."
              />
            </div>
          </div>
          <div className={style.message}>메세지 멧세지</div>
          <div className={style.modalFooter}>
            <button className={style.actionButton}>로그인하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}
