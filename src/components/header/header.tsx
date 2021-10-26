import React from 'react';
import Dropdown from './dropdown';
import styles from './header.module.css';

interface HeaderProps {
    
}
 
interface HeaderState {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        // this.state = { :  };
    }
    render() { 
        return (
            <React.Fragment>
                <nav>
                    <ul className={styles.navContainer}>
                        <li className={styles.primaryNavigation}>Početna</li>               
                        <Dropdown />
                        <li className={styles.primaryNavigation}>Komentari</li> 
                    </ul>        
                </nav>
                
            </React.Fragment> 
            
         );
    }
}
 
export default Header;