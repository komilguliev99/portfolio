import { CardBox } from '../../components/CardBox';
import { FactLabel } from '../../components/FactLabel';
import React, { FC } from 'react';
import { LayerTitle } from '../../components/LayerTitle';
import './index.scss';
import { FlexBox } from '../../components/FlexBox';
import { FormItem } from '../../components/FormItem';
import { Button } from '../../components/Button';
import { YMaps } from '../../components/Ymaps';

export const Contact: FC<{}> = () => {
    return (
        <div className="Contact">
            <LayerTitle title="Contact" underlined />
            <p className="Contact__text">Lorem ipsum dolor sit amet consectetur laboriosam odit ut tempore aut. Accusamus in adipisci aperiam ea aliquid quas possimus quidem saepe.</p>

            <div className="Contact__content transparency">
                <div className="Contact__content-item">
                    <CardBox fullHeight>
                        <FactLabel title="Location" subtitle="Dushanbe, Tajikistan" icon="location" />
                        <FactLabel title="Email" subtitle="komil.guliev.a1999@gmail.com" icon="mail" />
                        <FactLabel title="Call" subtitle="+992 985 019 111" icon="phone" />
                        <div className="Contact__map-container"><YMaps /></div>
                    </CardBox>
                </div>
                <div className="Contact__content-item">
                    <CardBox fullHeight>
                        <FlexBox cols={2} gap={2}>
                            <div className="FlexBox__item">
                                <FormItem label="Your Name" />
                            </div>
                            <div className="FlexBox__item">
                                <FormItem label="Your Email" />
                            </div>
                        </FlexBox>
                        <FormItem label="Subject" />
                        <FormItem type="textarea" label="Message" />
                        <div className="Contact__centered">
                            <Button title="Send Message" size="sm" />
                        </div>
                    </CardBox>
                </div>
            </div>
        </div>
    );
};

