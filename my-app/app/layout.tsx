/* eslint-disable @next/next/no-async-client-component */
"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Control } from "./Control";

// export const metadata: Metadata = {
//   title: "My App",
//   description: "My App",
//   icons: {
//     icon: "./favicon.ico",
//   },
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  type Topic = { id: string; title: string; body: string };
  // const res = await fetch("http://localhost:9999/topics", { next: { revalidate: 10 }}); // 캐시는 10초동안 유지하겠다.
  const res = await fetch("http://localhost:9999/topics", {
    cache: "no-store",
  }); // 캐시는 10초동안 유지하겠다.
  const topics: Topic[] = await res.json();

  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
          {topics.map((topic) => {
            return (
              <li key={topic.id}>
                <Link href={`/read/${topic.id}`}>{topic.title}</Link>
              </li>
            );
          })}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  );
}
