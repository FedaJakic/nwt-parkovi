import React from 'react';
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
                        <li className={styles.primaryNavigation + ' ' + styles.middleElement}>Nacionalni parkovi</li>
                        <li className={styles.primaryNavigation}>Komentari</li> 
                    </ul>        
                </nav>
                
            </React.Fragment> 
            
         );
    }
}
 
export default Header;