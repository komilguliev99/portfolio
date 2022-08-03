import { AccordionFixed } from '../../components/AccordionFixed';
import React, { FC } from 'react';
import { LayerTitle } from '../../components/LayerTitle';
import './index.scss';
import { List } from '../../components/List';

export const Resume: FC<{}> = () => {
    return (
        <div className="Resume">
            <LayerTitle title="Resume" underlined />
            <p className="Resume__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione molestias est unde voluptatibus nemo doloribus eaque! Iure, doloremque dicta culpa ad, vel ipsum explicabo voluptatum maiores eius amet adipisci quibusdam quae accusantium sed provident laboriosam odit ut tempore aut. Accusamus in adipisci aperiam ea aliquid quas possimus quidem saepe.</p>

            <div className="Resume__grid">
                <div className="Resume__grid-item">
                    <h4 className="Resume__chapter">Summary</h4>
                    <AccordionFixed title="Komil Guliev" subtitle="Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.">
                        <List texts={['Dushanbe, Tajikistan', '(+992) 98 501 91 11', 'komil.guliev.a1999@gmail.com']} />
                    </AccordionFixed>

                    <h4 className="Resume__chapter">Education</h4>
                    <AccordionFixed title="Bachelor of computer sciense" label="2016 - 2020" subtitle="Higher School of Economics, Moscow, Russia">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium distinctio dolorum! Excepturi eveniet blanditiis ducimus deserunt magnam omnis modi aliquam ab consequuntur, aliquid corrupti exercitationem fugiat nam esse placeat?</p>
                    </AccordionFixed>
                </div>
                <div className="Resume__grid-item">
                    <h4 className="Resume__chapter">Professional Experience</h4>
                    <AccordionFixed title="Middle Frontend engineer" label="2022 - Present" subtitle="Zypl AI, Dushanbe, Tajikistan">
                        <List texts={['Development of projects with react', 'Testing UI features', 'Supporting of existing projects']} />
                    </AccordionFixed>
                    <AccordionFixed title="Frontend intern" label="Jan 2022 - May 2022" subtitle="Yandex N.V., Moscow, Russian">
                        <List texts={['Testing UI features', 'Supporting of existing projects']} />
                    </AccordionFixed>
                    <AccordionFixed title="Frontend engineer" label="Jan 2021 - Dec 2022" subtitle="Babilon mobile, Dushanbe, Tajikistan">
                        <List texts={['Development of projects with react', 'Supporting of existing projects']} />
                    </AccordionFixed>
                </div>
            </div>
        </div>
    );
};

