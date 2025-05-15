import React from "react";

const Spinner = () => {
	return (
		<div className="flex justify-center items-center">
			<div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin" />
		</div>
	);
};

export default Spinner;
