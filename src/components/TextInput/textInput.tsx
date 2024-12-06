import { useState } from "react";
import { EyeOffOutline, EyeOutline } from "react-ionicons";

export type TextInputProps = {
    label: string,
    name?: string,
    idInput: string,
    value?: string,
    placeholder?: string,
    typeInput: string,
    className: string,
    textChanged?: (text: any) => void;
}
export default function TextInput({ label, name, idInput, value, placeholder, typeInput, className, textChanged }: TextInputProps) {
    const handleInputChange = (e: any) => {
        if (textChanged) {
            textChanged(e.target.value);
        }
    };

    const [toggleSeePassword, setToggleSeePassword] = useState<boolean>(false)

    return (
        <div className={className} style={{ position: "relative" }}>
            <label htmlFor={name} className="">{label}</label>
            <input type={toggleSeePassword ? "text" : typeInput} name={name} id={idInput} placeholder={placeholder} value={value} className="p-2 border-2 border-black rounded-lg" onChange={handleInputChange} />
            {
                typeInput == "password" && (
                    <div className="absolute right-2 bottom-3.5" onClick={() => setToggleSeePassword(!toggleSeePassword)}>
                        {
                            toggleSeePassword ?
                                <EyeOutline
                                    color={'#00000'}
                                    title={"Ver senha"}
                                    height="25px"
                                    width="25px"
                                /> :
                                <EyeOffOutline
                                    color={'#00000'}
                                    title={"Ver senha"}
                                    height="25px"
                                    width="25px"
                                />
                        }

                    </div>
                )
            }
        </div>
    )
}