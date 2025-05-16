import type { ITextArrayInputProps } from "@/types/ITextArrayInput";
import { type ChangeEvent, type FC, useState } from "react";

const TextArrayInput: FC<ITextArrayInputProps> = ({ text, setText }) => {
	const [lines, setLines] = useState<string[]>([]);

	const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const input = e.target.value;
		setText(input);
		setLines(input.split("\n").filter((line) => line.trim() !== ""));
	};

	return (
		<div className="w-full flex justify-center items-center pt-6">
			<div className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full space-y-4">
				<textarea
					id="text-array-input"
					value={text}
					onChange={handleChangeText}
					placeholder="Текст"
					className="w-full min-h-[300px] border border-gray-300 rounded-md p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
		</div>
	);
};

export default TextArrayInput;
