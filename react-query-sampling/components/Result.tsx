"use client";
import { UseMutateFunction } from "@tanstack/react-query";
import { FormData } from "../composables/use-form-data";

type Props = {
    data: FormData[] | undefined;
    remove: UseMutateFunction<Response, Error, string, unknown>;
};

export default function Result(props: Props) {
  return (
    <>
      <div>Result</div>
      {props.data?.map((item, idx) => {
        return (
          <div key={idx}>
            id: {item.id}, userid: {item.userid}, password: {item.password}

            <button onClick={() => props.remove(item.id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
}
