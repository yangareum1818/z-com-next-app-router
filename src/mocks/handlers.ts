import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/login", () => {
    console.log("로그인");
    return HttpResponse.json(
      {
        id: "yangareum1818",
        nickname: "알음쨩",
        image: "/areum.png",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
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
    return HttpResponse.text(JSON.stringify("user_exists"), {
      status: 403,
    });
    // return HttpResponse.text(JSON.stringify('ok'), {
    //   headers: {
    //     'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
    //   }
    // })
  }),
];
