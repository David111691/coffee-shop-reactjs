const HomePage: React.FC = () => {
	return (
		<div className="homepage">
			<div className="homepage__picture-container">
				<picture className="homepage__picture">
					{/* Если ширина до 400px */}
					<source
						srcSet="cafe_choc_mobile.webp"
						media="(max-width: 400px)"
					/>

					{/* Если ширина до 700px (и больше 400px, т.к. media проверяются сверху вниз) */}
					<source
						srcSet="cafe_choc_mobile_larger.webp"
						media="(max-width: 700px)"
					/>

					<img
						className="homepage__img"
						src="cafe_chocolate.webp"
						alt="Chocolate image"
						width="100"
						height="100"
					/>
				</picture>
				<div className="homepage__header-container">
					<h2 className="homepage__picture-header">
						Organic Chocolate
					</h2>
					<p className="homepage__picture-label">
						Pure, rich flavor of organic chocolate ethically sourced
						from Tanzania
					</p>
					<a className="homepage__picture-link" href="#">
						SHOP CHOCOLATE
					</a>
				</div>
			</div>
			<div className="homepage__items">
				<div className="homepage__item">
					<img
						className="homepage__item-image"
						src="//mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=1440"
						alt=""
						srcSet="//mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=200 200w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=300 300w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=400 400w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=500 500w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=600 600w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=800 800w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=1000 1000w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=1200 1200w, //mastmarket.com/cdn/shop/files/20240823_KateJordan_Photographer_Mast_Jars_Strawberry_00431.jpg?v=1725330738&amp;width=1400 1400w"
						width="1440"
						height="1800"
						sizes="(max-width: 699px) 100vw, (max-width: 1149px) 50vw, 33vw"
						draggable="false"
					/>
					<a className="homepage__item-link" href="#">
						SHOP PANTRY
					</a>
				</div>
				<div className="homepage__item">
					<img
						className="homepage__item-image"
						src="//mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=1440"
						alt=""
						srcSet="//mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=200 200w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=300 300w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=400 400w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=500 500w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=600 600w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=800 800w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=1000 1000w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=1200 1200w, //mastmarket.com/cdn/shop/files/20240619_KateJordan_Photographer_Mast_Coffee_DarkRoast_0050.jpg?v=1719122966&amp;width=1400 1400w"
						width="1440"
						height="1800"
						sizes="(max-width: 699px) 100vw, (max-width: 1149px) 50vw, 33vw"
						draggable="false"
					/>
					<a className="homepage__item-link" href="#">
						SHOP COFFEE
					</a>
				</div>
				<div className="homepage__item">
					<img
						className="homepage__item-image"
						src="//mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=1440"
						alt=""
						srcSet="//mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=200 200w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=300 300w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=400 400w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=500 500w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=600 600w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=800 800w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=1000 1000w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=1200 1200w, //mastmarket.com/cdn/shop/files/20230907_KateJordan_Photographer_Mast_Chocolate_DarkChocolate_70percent_0052copyRT.jpg?v=1720808679&amp;width=1400 1400w"
						width="1440"
						height="1800"
						sizes="(max-width: 699px) 100vw, (max-width: 1149px) 50vw, 33vw"
						draggable="false"
					/>
					<a className="homepage__item-link" href="#">
						SHOP CHOCOLATE
					</a>
				</div>
			</div>
			<section className="homepage__info">
				<div className="homepage__info-text">
					<p>Now Open:</p>
					<h2 className="homepage__info-header">Mast Market: Brooklyn</h2>
					<p>We're open daily from 9 AM to 7 PM.</p>
					<p>
						Nestled in the heart of Greenpoint, our newest location
						brings together local flavors and a cozy community feel.
						We’ve partnered with nearby growers and artisans to
						offer truly fresh, organic goods. Come see us at 55
						Greenpoint Avenue in Brooklyn — we’d love to welcome
						you!
					</p>
					<a className="homepage__info-link" href="#">Find Out More</a>
				</div>
				<div>
					<img
						className="homepage__info-img"
						src="//mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=1500"
						alt=""
						srcSet="//mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=200 200w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=300 300w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=400 400w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=500 500w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=600 600w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=700 700w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=800 800w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=900 900w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=1000 1000w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=1200 1200w, //mastmarket.com/cdn/shop/files/bedford.jpg?v=1730292593&amp;width=1400 1400w"
						width="1500"
						height="1500"
						loading="eager"
						sizes="(max-width: 699px) 50vw, 500px"
					/>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
