import Link from "next/link";
import style from "./post.module.css";

import dayjs from "dayjs";
import "dayjs/locale/ko";

import relativeTime from "dayjs/plugin/relativeTime";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import PostImages from "./PostImages";
import { Post } from "@/model/Post";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean;
  post: Post;
};

export default function Post({ noImage, post }: Props) {
  const target = post;

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
          </Link>
          <div className={style.postShade} />
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{target.User.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{target.User.id}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>
              {dayjs(target.createAt).fromNow(true)}
            </span>
          </div>
          <div>{target.content}</div>
          {!noImage && <PostImages post={target} />}
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
