"use client";

import FormData from "@/components/FormData";
import Result from "@/components/Result";
import {
  useFetchFormData,
  useSaveFormData,
  useRemoveFormData,
} from "@/composables/use-form-data-api";
import { useFormData } from "@/composables/use-form-data";

export default function Wrap() {
  const { formData, setFormData, clearFormData } = useFormData();
  /** GET API */
  const { data, refetch } = useFetchFormData();
  /** POST API */
  const { mutate: save } = useSaveFormData({
    onSuccess: () => {
      clearFormData();
      refetch();
    },
  });
  /** DELETE API */
  const { mutate: remove } = useRemoveFormData({
    onSuccess: () => {
      refetch();
    },
  });
  return (
    <>
      <div>
        <FormData formData={formData} setFormData={setFormData} save={save} />
      </div>
      <div>
        <Result data={data} remove={remove} />
      </div>
    </>
  );
}
