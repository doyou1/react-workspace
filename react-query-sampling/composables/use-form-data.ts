import { useState } from "react";

export type FormData = {
  id: string;
  userid: string;
  password: string;
};

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    userid: "",
    password: "",
  });

  const clearFormData = () => {
    setFormData({
      id: "",
      userid: "",
      password: "",
    });
  };

  return {
    formData,
    setFormData,
    clearFormData,
  };
};
