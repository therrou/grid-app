import React from 'react'
import { CardGrid } from './components/CardGrid';

import data from './data.json';

export const GridApp = () => {

    return (
        <>
            <CardGrid data={data} />
        </>
    )   
}
