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
];
