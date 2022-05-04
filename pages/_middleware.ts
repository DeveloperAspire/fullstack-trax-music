import { NextResponse } from "next/server";

const signedinPages = ['/', '/playlist', "/library"];


export default function middleware(req) {
      if(signedinPages.find((p)=> p === req.nextUrl.pathname)) {
            const token = req.cookies.TRAX_ACCESS_TOKEN

            const url = req.nextUrl.clone();
            url.pathname = "/sign-in";

            if(!token) {
                  return NextResponse.redirect(url)
            }
      }
}