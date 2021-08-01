import Select from 'react-select'
import React, {useState} from 'react'

const SelectBar = () => {
    const [selected, setSelected] = useState(null)
    const options = [
        { value: 'phone', label: 'Phone' },
        { value: 'laptop', label: 'Laptop' },
        { value: 'phone parts', label: 'Phone parts' },
        { value: 'gaming console', label: 'Gaming console' },
        { value: ' gadgets', label: 'Gadgets' },
        { value: 'tablets', label: 'Tablets' },
        { value: 'electronics', label: 'Electronics' },
        { value: 'accessories', label: 'Accessories' },
        { value: 'others', label: 'Others' },
      ];
    return (
        <div>
            <h1>Select All that Applies</h1>
            <Select value={selected} isMulti={true} isSearchable={true} isClearable={true} options={options} onChange={(selected) => setSelected(selected)}/>
        </div>
    )
}

export default SelectBar
