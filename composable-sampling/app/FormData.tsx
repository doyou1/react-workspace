"use client";

import { useEffect, useState } from "react";
import { FormDataType } from "./composables/use-form-data";

// import { useFormData } from "./composables/use-form-data";

export default function FormData() {
  // custom hook
  // const { formData, setFormData } = useFormData();

  /** 여러 화면에서 공통적으로 사용되는 경우는 custom hook으로 따로 빼는게 유리
   *  하지만, react는 렌더링 이슈로 굳이 빼는게 효율적이지 않다??? 웬만하면 하지마
   */
  // const { accessToken, setAccessToken } = useAccessTokenInLocalStorage();

  const [formData, setFormData] = useState<FormDataType>({
    id: "",
    password: "",
    nickName: undefined,
    age: 0,
  });

  useEffect(() => {
    setFormData({
      id: "default id",
      password: "default password",
      nickName: undefined,
      age: 20,
    });
  }, [formData]);

  return (
    <>
      <div>
        <div>
          id:{" "}
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          />
        </div>
        <div>
          password:{" "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div>
          nickname:{" "}
          <input
            type="text"
            name="nickname"
            value={formData.nickName}
            onChange={(e) =>
              setFormData({ ...formData, nickName: e.target.value })
            }
          />
        </div>
        <div>
          age:{" "}
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: Number(e.target.value) })
            }
          />
        </div>
      </div>
      <div>
        <h4>result</h4>
        <div>id: {formData.id}</div>
        <div>password: {formData.password}</div>
        <div>nickName: {formData.nickName}</div>
        <div>age: {formData.age}</div>
      </div>
    </>
  );
}
