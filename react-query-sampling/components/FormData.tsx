"use client";

import { Dispatch, SetStateAction } from "react";
import { FormData } from "../composables/use-form-data";
import { UseMutateFunction } from "@tanstack/react-query";

type Props = {
    formData: FormData;
    setFormData:  Dispatch<SetStateAction<FormData>>;
    save: UseMutateFunction<Response, Error, FormData, unknown>;
};


export default function FormData(props: Props) {
  
  return (
    <>
      <div>FormData</div>
      <div>
        <input
          type="text"
          name="userid"
          placeholder="userid"
          value={props.formData.userid}
          onChange={(e) =>
            props.setFormData({
              ...props.formData,
              userid: e.target.value,
            })
          }
        />
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={props.formData.password}
          onChange={(e) =>
            props.setFormData({
              ...props.formData,
              password: e.target.value,
            })
          }
        />
      </div>
      <div>
        <button onClick={() => props.save(props.formData)}>Save</button>
      </div>
    </>
  );
}
