import React, { useState } from 'react';
import DropdownList from 'react-native-dropdown-select-list';

const Dropdown = ({ List, setSelected, maxHeight = 130 }) => {
    return (
        <DropdownList
            search={false}
            boxStyles={{ width: 225, borderColor: 'black', }}
            setSelected={setSelected}
            data={List}
            maxHeight={maxHeight}
        />
    );
}
export default Dropdown;

// Custon Dropdown component
