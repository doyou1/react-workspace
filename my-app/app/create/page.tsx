"use client";
import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const router = useRouter();

  const onSubmit = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    };

    const res = await fetch(`http://localhost:9999/topics`, options);
    const result = await res.json();
    const lastId = result.id;

    window.location.href = `/read/${lastId}`;
    // router.push(`/read/${lastId}`)
  }

  return (
    <div>
      <p>
        <input type="text" name="title" placeholder="title" onChange={(e) => setTitle(e.target.value) } />
      </p>
      <p>
        <textarea name="body" placeholder="body" onChange={(e) => setBody(e.target.value) }></textarea>
      </p>
      <p>
        <input type="button" value="create" onClick={onSubmit} />
      </p>
    </div>
  );
}
