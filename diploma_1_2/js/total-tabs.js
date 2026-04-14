export const totalTabsFunc = () => {
	const tabs = document.querySelectorAll(".tabs__item");
	const blocks = document.querySelectorAll(".tabs__block");

	tabs.forEach((tab) => {
		tab.addEventListener("click", function (e) {
			e.preventDefault();

			tabs.forEach((t) => t.classList.remove("active"));
			blocks.forEach((b) => b.classList.remove("active"));

			this.classList.add("active");
			const targetId = this.getAttribute("href").replace("#", "");
			const targetBlock = document.getElementById(targetId);
			if (targetBlock) {
				targetBlock.classList.add("active");
			}
		});
	});

	// Активируем первый таб по умолчанию
	if (tabs.length > 0) {
		tabs[0].click();
	}
};
