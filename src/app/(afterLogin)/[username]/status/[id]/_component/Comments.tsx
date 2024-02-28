"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "../_lib/getComments";
import { Post as IPost } from "@/model/Post";
import Post from "@/app/(afterLogin)/_component/Post";

type Props = { id: string };

export default function Comments({ id }: Props) {
  // 게시글이 없을 경우 답글도 없다. ( 게시글 데이터를 가져온다. )
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);

  const { data, error } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["posts", id, "comments"],
    queryFn: getComments,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    // 이런식도 가능 (원본 글이 없을 때, 아예 댓글을 가져오지 않기에 좀 더 효율 적이다.)
    enabled: !!post,
  });

  if (post) {
    return data?.map((post) => <Post key={post.postId} post={post} />);
  }
  return null;
}
