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
                <div className={styles.primaryNavigation}>Početna</div> 
                <div className={styles.primaryNavigation}>Nacionalni parkovi</div>
                <div className={styles.primaryNavigation}>Komentari</div> 
            </React.Fragment> 
            
         );
    }
}
 
export default Header;