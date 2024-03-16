/* eslint-disable @next/next/no-async-client-component */
"use client";

export default async function Read({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const res = await fetch(`http://localhost:9999/topics/${params.id}`);
  const topic = await res.json();

  return (
    <>
      <h2>{topic.title}</h2>
      <h4>{topic.body}</h4>
      Read id: {params.id}
    </>
  );
}
