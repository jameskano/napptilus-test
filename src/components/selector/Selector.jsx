// Styles
import "./Selector.scss";

// React
import { Fragment, useEffect, useState } from "react";

const Selector = ({ options, onChange, value }) => {
	const [optionValue, setOptionValue] = useState(value);

	useEffect(() => {
		setOptionValue(value);
	}, [value]);

	const renderOptions = options.map((option) => {
		return (
			<option key={option.name} value={option.code}>
				{option.name}
			</option>
		);
	});

	return (
		<select className="selector-component" value={optionValue} onChange={onChange}>
			{options.length > 1 ? (
				<Fragment>
					<option disabled value={-1}>
						Select...
					</option>
					{renderOptions}
				</Fragment>
			) : (
				<Fragment>{renderOptions}</Fragment>
			)}
		</select>
	);
};

export default Selector;
