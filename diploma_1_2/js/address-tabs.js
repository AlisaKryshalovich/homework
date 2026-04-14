export const addressTabsFunc = () => {
	const tabs3 = document.querySelectorAll(".address__item");
	const blocks3 = document.querySelectorAll(".address__block");

	tabs3.forEach((tab) => {
		tab.addEventListener("click", function (e) {
			e.preventDefault();

			const targetId = this.getAttribute("href").replace("#", "");
			const targetBlock = document.getElementById(targetId);

			if (this.classList.contains("active")) {
				this.classList.remove("active");
				if (targetBlock) {
					targetBlock.classList.remove("active");
				}
				return;
			}

			tabs3.forEach((tab) => tab.classList.remove("active"));
			blocks3.forEach((block) => block.classList.remove("active"));

			this.classList.add("active");
			if (targetBlock) {
				targetBlock.classList.add("active");
			}
		});
	});

	// Активируем первый таб по умолчанию
	// if (tabs3.length > 0) {
	//     tabs3[0].click();
	// }
};
