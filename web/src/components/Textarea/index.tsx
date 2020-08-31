import React, {TextareaHTMLAttributes} from 'react';
import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { // passando todas as propriedades ao meu TextArea para que o usuário possa definir 
    label: string;
    name: string;
}

const Textarea:React.FC<TextareaProps> = (props) => {
    const { label, name, ...rest } = props;

    return(
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>                     
            <textarea id={name} {...rest}/>
        </div>
    )
}

export default Textarea;