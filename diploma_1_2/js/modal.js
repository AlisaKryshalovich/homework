export const modalFunc = () => {
	const modal = document.querySelector(".modal");
	const modalButton = document.querySelector(".modal__button");

	modalButton.addEventListener("click", openModal);
	modal.addEventListener("click", closeModal);

	function openModal(e) {
		e.preventDefault();
		document.body.classList.toggle("modal--opened");
	}

	function closeModal(e) {
		e.preventDefault();
		const target = e.target;

		if (target.closest(".modal__close") || target.classList.contains("modal")) {
			document.body.classList.remove("modal--opened");
		}
	}
};
