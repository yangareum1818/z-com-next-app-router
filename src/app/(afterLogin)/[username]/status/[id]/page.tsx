import BackButton from "@/app/(afterLogin)/_component/BackButton";
import style from "./singlePost.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import CommentForm from "./_component/CommentForm";
import SinglePost from "./_component/SinglePost";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getSinglePost } from "./_lib/getSinglePost";
import { getComments } from "./_lib/getComments";
import Comments from "./_component/Comments";

type Props = { params: { id: string } };

export default async function Page({ params }: Props) {
  const { id } = params;
  const queryclient = new QueryClient();
  await queryclient.prefetchQuery({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
  });
  await queryclient.prefetchQuery({
    queryKey: ["posts", id, "commens"],
    queryFn: getComments,
  });
  const dehydratedState = dehydrate(queryclient);

  return (
    <div className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>게시하기</h3>
        </div>
        <div className={style.postList}>
          <SinglePost id={id} />
          <CommentForm id={id} />
          <div>
            <Comments id={id} />
          </div>
        </div>
      </HydrationBoundary>
    </div>
  );
}
