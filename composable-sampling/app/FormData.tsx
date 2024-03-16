'use client';

import { useFormData } from "./composables/use-form-data";

export default function FormData() {
    const { formData, setFormData } = useFormData();

    return (
      <>
      <div>
        <div>id: <input type="text" name="id" value={formData.id} onChange={(e) => setFormData({...formData, id: e.target.value})} /></div>
        <div>password: <input type="text" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} /></div>
        <div>nickname: <input type="text" name="nickname" value={formData.nickName} onChange={(e) => setFormData({...formData, nickName: e.target.value})}  /></div>
        <div>age: <input type="number" name="age" value={formData.age} onChange={(e) => setFormData({...formData, age: Number(e.target.value)})}  /></div>
      </div>
      <div>
        <h4>result</h4>
        <div>id: { formData.id }</div>
        <div>password: { formData.password }</div>
        <div>nickName: { formData.nickName }</div>
        <div>age: { formData.age }</div>
      </div>
      </>
    );
  }
  