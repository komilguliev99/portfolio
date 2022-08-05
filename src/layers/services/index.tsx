import { ServiceCard } from '../../components/ServiceCard';
import React, { FC } from 'react';
import { LayerTitle } from '../../components/LayerTitle';
import './index.scss';
import { FlexBox } from '../../components/FlexBox';

export const Services: FC<{}> = () => {
    return (
        <div className="Services">
            <LayerTitle title="Services" underlined />
            <p className="Services__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione molestias est unde voluptatibus nemo doloribus eaque! Iure, doloremque dicta culpa ad, vel ipsum explicabo voluptatum maiores eius amet adipisci quibusdam quae accusantium sed provident laboriosam odit ut tempore aut. Accusamus in adipisci aperiam ea aliquid quas possimus quidem saepe.</p>

            <FlexBox cols={3} gap={2}>
                <ServiceCard title="Site Layouts" icon="code" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi pariatur consequatur cumque tenetur voluptate totam quo suscipit tempore odit." />
                <ServiceCard title="Adaptive design" icon="adaptive" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi pariatur consequatur cumque tenetur voluptate totam quo suscipit tempore odit." />
                <ServiceCard title="Server side" icon="backend" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi pariatur consequatur cumque tenetur voluptate totam quo suscipit tempore odit." />
                <ServiceCard title="Integration" icon="integration" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi pariatur consequatur cumque tenetur voluptate totam quo suscipit tempore odit." />
                <ServiceCard title="Web-apps" icon="app" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi pariatur consequatur cumque tenetur voluptate totam quo suscipit tempore odit." />
            </FlexBox>
        </div>
    );
};

