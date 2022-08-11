import emptyCartPng from '../../assets/img/empty-cart.png'
import styles from './EmptyCart.module.scss'

const EmptyCart = () => {
	return (
		<div className="content">
			<div className={`container ${styles.containerCart}`}>
				<div className={`cart ${styles.cartEmpty}`}>
					<h2>Корзина пустая <div className={styles.cartEmptyIcon}>😕</div></h2>
					<p>
						Вероятней всего, вы не заказывали ещё пиццу.<br/>
						Для того, чтобы заказать пиццу, перейди на главную страницу.
					</p>
					<img src={emptyCartPng} alt="Empty cart"/>
					<a href="/" className={`button ${styles.buttonBlack}`}>
						<span>Вернуться назад</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default EmptyCart;