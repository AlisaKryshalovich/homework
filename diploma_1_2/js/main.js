import { headerFunc } from "./header.js";
import { telMaskFunc } from "./telMask.js";
import { modalFunc } from "./modal.js";
import { burgerFunc } from "./burger.js";
import { aboutSliderFunc } from "./about-slider.js";
import { totalTabsFunc } from "./total-tabs.js";
import { scheduleTabsFunc } from "./schedule-tabs.js";
import { addressTabsFunc } from "./address-tabs.js";

try {
	// Фиксация хэдера, появление тени
	headerFunc();

	// Маска для телефона
	telMaskFunc();

	// Модальное окно "Консультация"
	modalFunc();

	// Бургер
	burgerFunc();

	// Слайдер в about
	aboutSliderFunc();

	// Таб total
	totalTabsFunc();

	// Таб schedule
	scheduleTabsFunc();

	// Таб address
	addressTabsFunc();

} catch (error) {
	console.error(error);
}
