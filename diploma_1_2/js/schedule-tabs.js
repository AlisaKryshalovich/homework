export const scheduleTabsFunc = () => {
	const tabs2 = document.querySelectorAll(".schedule__item");
	const blocks2 = document.querySelectorAll(".schedule__block");

	tabs2.forEach((tab) => {
		tab.addEventListener("click", function (e) {
			e.preventDefault();

			tabs2.forEach((t) => t.classList.remove("active"));
			blocks2.forEach((b) => b.classList.remove("active"));

			this.classList.add("active");
			const targetId = this.getAttribute("href").replace("#", "");
			const targetBlock = document.getElementById(targetId);
			if (targetBlock) {
				targetBlock.classList.add("active");
			}
		});
	});

	// Активируем первый таб по умолчанию
	if (tabs2.length > 0) {
		tabs2[0].click();
	}
};
