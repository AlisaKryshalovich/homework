export const aboutSliderFunc = () => {
	new Swiper(".about-slider", {
		direction: "vertical",
		slidesPerView: "auto",
		spaceBetween: 0,
		pagination: {
			el: ".about__pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}" data-index="${index + 1}"></span>`;
			},
		},
		on: {
			init: function () {
				updatePagination(this.realIndex);
			},
			slideChange: function () {
				updatePagination(this.realIndex);
			},
		},
	});

	function updatePagination(activeIndex) {
		const bullets = document.querySelectorAll(
			".about__pagination .swiper-pagination-bullet",
		);
		bullets.forEach((bullet, index) => {
			bullet.textContent = index === activeIndex ? index + 1 : "";
		});
	}
};
