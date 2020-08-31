import React from 'react';
import './styles.css';
import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { // passando todas as propriedades ao meu Select para que o usuário possa definir 
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select:React.FC <SelectProps> = (props) => {
    const { label, name, options,...rest } = props;

    return(
        <div className= "select-block">
            <label htmlFor={name}>{label}</label>                     
            <select defaultValue="" id={name} {...rest}>
            <option value="" disabled hidden>Selecione uma opção</option> 
                {options.map(option => {
                    return <option 
                            key={option.value} 
                            value={option.value}>
                            {option.label}
                    </option>
                })}
            </select>
        </div>
    )
}

export default Select;