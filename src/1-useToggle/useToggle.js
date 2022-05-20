import { useCallback, useState } from "react";

export default function useToggle(defaultValue) {
	const [value, setValue] = useState(defaultValue);

	// function toggleValue(value) {
	//     setValue(currentValue =>  typeof value === 'boolean'  ? value : !currentValue)
	// }

	// Define and memorize toggler function in case we pass down the component,
	// This function change the boolean value to it's opposite value
	const toggle = useCallback(() => setValue((state) => !state), []);

	return [value, toggle];
}
