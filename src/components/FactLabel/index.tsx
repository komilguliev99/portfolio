import React, { FC } from 'react';
import LocationIcon from '../../assets/icons/location.svg';
import MailIcon from '../../assets/icons/mail.svg';
import PhoneIcon from '../../assets/icons/phone.svg';
import './index.scss';

const ICONS = {
    location: LocationIcon,
    mail: MailIcon,
    phone: PhoneIcon
};

interface IFactLabel {
	title: string;
	subtitle: string;
	icon: 'location' | 'mail' | 'phone';
}

export const FactLabel: FC<IFactLabel> = ({
    title, subtitle, icon
}) => {
    return (
        <div className="FactLabel">
            <div className={'FactLabel__icon'}>
                <img src={ICONS[icon]} alt="" />
            </div>
            <div className="FactLabel__content">
                <h4 className="FactLabel__title">{ title }</h4>
                <p className="FactLabel__subtitle">{ subtitle }</p>
            </div>
        </div>
    );
};
