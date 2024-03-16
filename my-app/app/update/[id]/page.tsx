/* eslint-disable @next/next/no-async-client-component */
"use client";
import { useEffect, useState } from "react";

export default function Update({
  params,
}: Readonly<{
  params: { id: string };
}>) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9999/topics/${params.id}`)
      .then((res) => res.json())
      .then((result) => {
        setTitle(result.title);
        setBody(result.body);
      });
  }, [params.id]);

  const onSubmit = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };

    const res = await fetch(`http://localhost:9999/topics/${params.id}`, options);
    const result = await res.json();
    const targetId = result.id;

    window.location.href = `/read/${targetId}`;
  };

  return (
    <div>
      <p>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input type="button" value="update" onClick={onSubmit} />
      </p>
    </div>
  );
}
