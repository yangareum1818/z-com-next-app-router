"use client";

import BackButton from "@/app/(beforeLogin)/_component/BackButton";
import style from "./signup.module.css";
import onSubmit from "../_lib/signup";
import { useFormState, useFormStatus } from "react-dom";

function showMessage(message: string) {
  if (message === "no_id") return "아이디를 입력하세요.";
  if (message === "no_name") return "닉네임을 입력하세요.";
  if (message === "no_password") return "비밀번호를 입력하세요.";
  if (message === "no_image") return "이미지를 업로드하세요.";
  if (message === "user_exists") return "이미 사용중인 아이디입니다.";
}

export default function SignupModal() {
  const [state, formAction] = useFormState(onSubmit, { message: null });
  const { pending } = useFormStatus();

  return (
    <div className={style.modalBackground}>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          <BackButton />
          <h3>계정을 생성하세요.</h3>
        </div>
        <form action={formAction}>
          <div className={style.modalBody}>
            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="id">
                아이디
              </label>
              <input
                id="id"
                name="id"
                className={style.input}
                type="text"
                placeholder=""
                required
              />
            </div>

            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="name">
                닉네임
              </label>
              <input
                id="name"
                name="name"
                className={style.input}
                type="text"
                placeholder=""
                required
              />
            </div>

            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                className={style.input}
                type="password"
                placeholder=""
                required
              />
            </div>

            <div className={style.inputDiv}>
              <label className={style.inputLabel} htmlFor="image">
                프로필
              </label>
              <input
                id="image"
                name="image"
                className={style.input}
                type="file"
                accept="image/*"
                style={{ lineHeight: "3.7rem" }}
                required
              />
            </div>
            <div className={style.modalFooter}>
              <button
                type="submit"
                className={style.actionButton}
                disabled={pending}
              >
                가입하기
              </button>
              <p className={style.error}>{showMessage(state?.message)}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
