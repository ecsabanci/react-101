import React,{useState} from 'react'

const UseDropdown = (label, defaultState, options) => {

    const [state, setState] = useState(defaultState);

    const id = `use-dropdown-${label.replace(" ","").toLowerCase()}`;

    const Dropdown = () => (
        <label htmlFor={label}>
            {label}
            <select 
                id={id}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                disabled={!options.length}
            >

                <option>Choose {label}</option>
                {
                    options.map(item => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))
                }

            </select>
        </label>
    );

    return [state, Dropdown, setState]

}

export default UseDropdown;