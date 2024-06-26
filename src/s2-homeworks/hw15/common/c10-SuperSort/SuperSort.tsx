import React from 'react'
import hw_none_icon from '../../icons/hw_none_icon.svg'
import hw_up_icon from '../../icons/hw_up_icon.svg'
import hw_down_icon from '../../icons/hw_down_icon.svg'


const downIcon = hw_down_icon
const upIcon = hw_up_icon
const noneIcon = hw_none_icon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    switch (sort) {
        case up: {
            return ''
        }
        case down: {
            return up
        }
        default: {
            return down
        }
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                style={{width: '10px', marginLeft: '7px'}}
                src={icon}
                alt={'sort icon must be here'}/>
        </span>
    )
}

export default SuperSort
