import React, { FC } from 'react';
import { LayerTitle } from '../../components/LayerTitle';
import DefaultUser from '../../assets/def-user.jpg';
import './index.scss';
import { Fact } from '../../components/Fact';

export const About: FC<{}> = () => {
    const myTitle = 'Frontend engineer & Web developer';

    return (
        <div className="About">
            <LayerTitle title="About" underlined />
            <p className="About__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione molestias est unde voluptatibus nemo doloribus eaque! Iure, doloremque dicta culpa ad, vel ipsum explicabo voluptatum maiores eius amet adipisci quibusdam quae accusantium sed provident laboriosam odit ut tempore aut. Accusamus in adipisci aperiam ea aliquid quas possimus quidem saepe.</p>
            <div className="About__info">
                <div className="About__img fadeRight">
                    <img src={DefaultUser} alt="" />
                </div>
                <div className="About__container fadeLeft">
                    <LayerTitle title={myTitle} size="xl" />
                    <p className="About__subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, unde aperiam? Quasi libero tempora quibusdam doloremque amet ex eveniet. Repudiandae!</p>
                    <div className="About__info-box">
                        <Fact title="Birthday" value="1 July 1999" />
                        <Fact title="Age" value="23" />
                        <Fact title="Website" value="www.dcapers.com" />
                        <Fact title="Degree" value="Bachelor" />
                        <Fact title="Phone" value="+992 98 501 91 11" />
                        <Fact title="Email" value="komil.guliev.a1999@gmail.com" />
                        <Fact title="City" value="Dushanbe, Tajikistan" />
                        <Fact title="Freelance" value="Available" />
                    </div>
                    <p className="About__subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse non explicabo ab cupiditate natus architecto modi error molestias quidem soluta reprehenderit minus enim, ad ratione rem. Vitae voluptates placeat excepturi, numquam labore eius dolores explicabo id cupiditate iste? Consequatur amet, odio officia est ex aut cum accusamus? Repudiandae vero alias, impedit, voluptate quaerat mollitia veniam velit adipisci, reprehenderit consequatur a error non unde! Qui officiis possimus blanditiis accusantium sint dolorum alias asperiores. Temporibus, esse quaerat maiores quis facere dignissimos in!</p>
                </div>
            </div>
        </div>
    );
};

