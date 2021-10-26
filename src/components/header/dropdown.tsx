import React, {useState} from 'react'
import styles from './header.module.css';
import drop from './dropdown.module.css';

function Dropdown() {
    const [state, setstate] = useState(false);

    const showDropdown = () => {
        setstate(true);
    }

    const hideDropdown = () => {
        setstate(false);
    }

    return (
        <div className="dropdown">
            <div className="dropdown-menu" onClick={showDropdown} onMouseLeave={hideDropdown}>
            <li className={styles.primaryNavigation + ' ' + styles.middleElement}>Nacionalni parkovi</li>
                {state ?(
                    <ul className={drop.dropdownList} onMouseEnter={showDropdown}>
                        <li>NP Brijuni</li>
                        <li>NP Krka</li>
                        <li>NP Paklenica</li>
                        <li>NP Plitvička jezera</li>
                        <li>NP Kornati</li>
                        <li>NP Mljet</li>
                        <li>NP Risnjak</li>
                        <li>NP Sjeverni Velebit</li>
                    </ul>
                ):
                null}
                
            </div>
            
        </div>
    )
}

export default Dropdown
