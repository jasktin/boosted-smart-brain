import React from 'react';
import './Rank.css'

const Rank = ({name, entries}) => {
    return (
        <section>
            <div className='white f2'>
                {`${name}, your current entry counts are...`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </section>
    )
}

export default Rank;