"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export const Control = () => {
  const params: { id: string } = useParams();
  const id = params.id;

    const handleDelete = async () => {
        const options = {
            method: "DELETE",
          };
      
          const res = await fetch(`http://localhost:9999/topics/${params.id}`, options);
          window.location.href = "/";
    }

  return (
    <ul>
      <li>
        <Link href="/create">Create</Link>
      </li>

      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <input type="button" value="delete" onClick={handleDelete} />
          </li>
        </>
      ) : undefined}
    </ul>
  );
};
