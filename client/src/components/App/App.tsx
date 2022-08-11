import Header from "../Header/Header";
import Home from '../../pages/Home/Home'
import Cart from "../../pages/Cart/Cart";
import styles from './App.module.scss'

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header/>
			<Home/>
			{/*<Cart/>*/}
		</div>
	);
}

export default App;
