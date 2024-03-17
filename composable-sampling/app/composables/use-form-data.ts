import { useEffect, useState } from "react"

export type FormDataType = {
    id: string;
    password: string;
    nickName?: string;
    age: number;
};


// export const useFormData = () => {
//     const [formData, setFormData] = useState<FormData>({
//         id: "",
//         password: "",
//         nickName: undefined,
//         age: 0,
//     });

//     useEffect(() => {
//         setFormData({
//             id: "default id",
//             password: "default password",
//             nickName: undefined,
//             age: 20,
//         })
//     }, [formData]);

//     return {
//         formData,
//         setFormData,
//     }

// }