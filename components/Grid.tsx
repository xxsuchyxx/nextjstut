import React from 'react';
import {BentoGrid, BentoGridItem} from "@/components/ui/BentoGrid";

const Grid = () => {
    return (
        <div>
            <BentoGrid>
                {[{title: 'Title1', description: 'Description1', id:1}, {title: 'Title2', description: 'Description2', id:2}, {title: 'Title3', description: 'Description3', id:3}].map((item, index) => (
                    <BentoGridItem key={index} id={item.id} title={item.title} description={item.description}/>
                ))}
            </BentoGrid>
        </div>
    );
};

export default Grid;