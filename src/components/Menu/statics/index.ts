import House from '../../../assets/icons/house.svg';
import User from '../../../assets/icons/user.svg';
import Portfolio from '../../../assets/icons/portfolio.svg';
import Resume from '../../../assets/icons/resume.svg';
import Services from '../../../assets/icons/services.svg';
import Email from '../../../assets/icons/email.svg';
import { IMenuOption } from '../typing';

export const menuOptions: IMenuOption[] = [
    {
        url: '#home',
        title: 'Home',
        icon: House
    },
    {
        url: '#about',
        title: 'About',
        icon: User
    },
    {
        url: '#about',
        title: 'Resume',
        icon: Resume
    },
    {
        url: '#about',
        title: 'Portfolio',
        icon: Portfolio
    },
    {
        url: '#about',
        title: 'Services',
        icon: Services
    },
    {
        url: '#about',
        title: 'Contact',
        icon: Email
    }
];
