export const headerFunc = () => {
	const defaultScroll = 0;
	const headerEl = document.querySelector(".header");

	window.addEventListener("scroll", () => {
		const scrollPos = window.scrollY;
		if (scrollPos > defaultScroll) {
			headerEl.classList.add("header__shadow");
		} else {
			headerEl.classList.remove("header__shadow");
		}
	});
};
