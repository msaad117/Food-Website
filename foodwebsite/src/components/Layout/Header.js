import { Fragment } from "react";

import Meals from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header = () => {
    return(
<Fragment>
    <header className={classes.header}>
        
    <h1>ReactMeals</h1>
    <button >Cart</button>
       
    </header>
    <div className={classes['main-image']}>
  <img src={Meals} alt={"Food Image"}/>
    </div>
</Fragment>
    );

};
export default Header