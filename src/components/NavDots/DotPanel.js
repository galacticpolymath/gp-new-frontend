import Dot from './Dot';
import React from 'react';

function Panel(){

    return(
        <div className="scroll-indicator-controller">
            <Dot section={"section01"} title={"Benefits"} />
            <Dot section={"section02"} title={"Pricing"} />
            <Dot section={"section03"} title={"Add-ons"} />
            <Dot section={"section04"} title={"Features"} />
            <Dot section={"section05"} title={"Get Started"} />
        </div>
    )
}

export default Panel