import React, {InputHTMLAttributes} from 'react';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { // passando todas as propriedades ao meu input para que o usuário possa definir 
    label: string;
    name: string;
}

const Input:React.FC<InputProps> = (props) => {
    const { label, name, ...rest } = props;

    return(
        <div className="input-block">
            <label htmlFor={name}>{label}</label>                     
            <input type="text" id={name} {...rest}/>
        </div>
    )
}

export default Input;