import React, { FC } from 'react';
import './index.scss';

interface IFormItem {
	label: string;
	type?: 'input' | 'textarea';
}

const FormInput = <input />;
const FormTextarea = <textarea />;

const TYPE = {
    input: FormInput,
    textarea: FormTextarea
};

export const FormItem: FC<IFormItem> = ({
    label,
    type = 'input'
}) => {
    return (
        <div className="FormItem">
            <p className="FormItem__label">{ label }</p>
            { TYPE[type] }
        </div>
    );
};
