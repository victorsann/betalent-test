import search from '../../assets/icons/search.svg'
import { containsNumbers } from '../../utils/contains-number';

import { Input, InputArea } from "./styles";

interface TextInputParams {
    onChangeText: (t: string) => void
}

export function TextInput({ onChangeText }: TextInputParams) {

    const handleChange = (event: any) => {
        if (containsNumbers(event.target.value)) {
            onChangeText(event.target.value.replace(/\D/g, ""));
        } else {
            onChangeText(event.target.value);
        }
    };

    return (
        <InputArea>
            <Input placeholder={'Pesquisar'} onChange={handleChange} />
            <img src={search} />
        </InputArea>
    );
}