import Link from "next/link";
import BackButton from "../../_component/BackButton";
import style from "./chatRoom.module.css";
import cx from "classnames";

import { faker } from "@faker-js/faker";

import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatRoom() {
  const user = {
    id: "Hero",
    nickname: "영웅맨",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "yangareum1818",
      content: "Hello ~",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "hero",
      content: "Nick me too",
      createdAt: new Date(),
    },
    {
      messageId: 3,
      roomId: 123,
      id: "yangareum1818",
      content: "me too",
      createdAt: new Date(),
    },
    {
      messageId: 4,
      roomId: 123,
      id: "hero",
      content: "Good By ~",
      createdAt: new Date(),
    },
  ];
  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <img src={user.image} alt={user.id} />
        <div className={style.userNickname}>
          <b>{user.nickname}</b>
        </div>
        <span className={style.userId}>@{user.id}</span>
        <div className={style.dDay}>가입일: 2024년 01월</div>
      </Link>
      <div className={style.list}>
        {messages.map((l) => {
          if (l.id === "yangareum1818") {
            return (
              <div
                key={l.messageId}
                className={cx(style.message, style.myMessage)}
              >
                <div className={style.content}>{l.content}</div>
                <div className={style.date}>
                  {dayjs(l.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </div>
              </div>
            );
          }
          return (
            <div
              key={l.messageId}
              className={cx(style.message, style.yourMessage)}
            >
              <div className={style.content}>{l.content}</div>
              <div className={style.date}>
                {dayjs(l.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
