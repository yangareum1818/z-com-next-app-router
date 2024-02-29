import { faker } from "@faker-js/faker";
import { http, HttpResponse, StrictResponse } from "msw";

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const User = [
  { id: "yangareum1818", nickname: "아로밍", image: "/areum.png" },
  { id: "zerocho", nickname: "제로초", image: "/5Udwvqim.jpg" },
  { id: "elonmusk", nickname: "Elon Musk", image: "/yRsRRjGO.jpg" },
  { id: "leoturtle", nickname: "레오", image: faker.image.avatar() },
];

export const handlers = [
  http.post("/api/login", () => {
    console.log("로그인");
    return HttpResponse.json(User[0], {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),
  http.post("/api/logout", () => {
    console.log("로그아웃");
    return new HttpResponse(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.post("/api/users", async () => {
    console.log("회원가입");
    // 성공, 실패 코드를 번갈아가면서 주석처리로 테스팅한다.
    // return HttpResponse.text(JSON.stringify("user_exists"), {
    //   status: 403,
    // });
    return HttpResponse.text(JSON.stringify("ok"), {
      headers: {
        "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),
  http.get("/api/postRecommends", async () => {
    console.log("추천 게시글 : posts 게시글 데이터");

    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Y.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[1],
        content: `${2} Y.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },

      {
        postId: 3,
        User: User[2],
        content: `${3} Y.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[3],
        content: `${4} Y.com is so marvelous. I'm gonna buy that.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/followingPosts", async () => {
    console.log(" 팔로잉 중 : followingPosts 게시글 데이터");

    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[1],
        content: `${2} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },

      {
        postId: 3,
        User: User[2],
        content: `${3} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[3],
        content: `${4} Stop following me. I'm too famous.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/search/:tag", async ({ request, params }) => {
    // 검색 결과의 게시글
    const { tag } = params;

    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[1],
        content: `${2} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },

      {
        postId: 3,
        User: User[2],
        content: `${3} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[3],
        content: `${4} 검색결과 ${tag}`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/users/:userId/posts", ({ request, params }) => {
    // 특정 사용자의 게시글
    const { userId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} ${userId}의 게시글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/users/:userId", ({ request, params }): StrictResponse<any> => {
    // 특정 유저 정보
    const { userId } = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json(found);
    }
    return HttpResponse.json(
      { message: "no_such_user" },
      {
        status: 404,
      }
    );
  }),
  http.get("/api/posts/:postId", ({ request, params }): StrictResponse<any> => {
    // 특정 사용자의 게시글 하나
    const { postId } = params;
    if (parseInt(postId as string) > 10) {
      return HttpResponse.json(
        { message: "no_such_single_post" },
        {
          status: 404,
        }
      );
    }
    return HttpResponse.json({
      postId,
      User: User[0],
      content: `${1} 게시글 아이디 ${postId}의 내용`,
      Images: [
        { imageId: 1, link: faker.image.urlLoremFlickr() },
        { imageId: 2, link: faker.image.urlLoremFlickr() },
        { imageId: 3, link: faker.image.urlLoremFlickr() },
      ],
      createdAt: generateDate(),
    });
  }),
  http.get("/api/posts/:postId/comments", ({ request, params }) => {
    // 게시글의 댓글
    const { postId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} 게시글 ${postId}의 답글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 1, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} 게시글 ${postId}의 답글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 1, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} 게시글 ${postId}의 답글`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} 게시글 ${postId}의 답글`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 1, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  http.get("/api/followRecommends", ({ request }) => {
    // 팔로우 추천
    return HttpResponse.json(User);
  }),
  http.get("/api/trends", ({ request }) => {
    // 나를 위한 트렌드
    return HttpResponse.json([
      { tagId: 1, title: "아롱이1", count: 152 },
      { tagId: 2, title: "아롱이2", count: 112 },
      { tagId: 3, title: "아롱이3", count: 12 },
      { tagId: 4, title: "아롱이4", count: 872 },
      { tagId: 5, title: "아롱이5", count: 42 },
      { tagId: 6, title: "아롱이6", count: 51 },
      { tagId: 7, title: "아롱이7", count: 92 },
      { tagId: 8, title: "아롱이8", count: 652 },
      { tagId: 9, title: "아롱이9", count: 94 },
      { tagId: 10, title: "아롱이10", count: 42 },
      { tagId: 11, title: "아롱이11", count: 78 },
      { tagId: 12, title: "아롱이12", count: 96 },
    ]);
  }),
];
