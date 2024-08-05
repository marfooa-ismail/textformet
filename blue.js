const textArea = document.getElementById('t');
const output = document.getElementById('output');


function applyFormatting() {
	const text = textArea.value;
	const formattedText = formatText(text);
	output.innerHTML = formattedText;
}


function formatText(text) {
	const bold = document.getElementById('b').checked;
	const italic = document.getElementById('i').checked;
	const underline = document.getElementById('u').checked;
	const fontSize = document.getElementById('font-size').value;
	const fontStyle = document.getElementById('font-style').value;

	let formattedText = text;

	if (bold) {
		formattedText = `<b>${formattedText}</b>`;
	}
	if (italic) {
		formattedText = `<i>${formattedText}</i>`;
	}
	if (underline) {
		formattedText = `<u>${formattedText}</u>`;
	}
    
	formattedText = `<span style="font-size: ${fontSize}px; font-family: ${fontStyle}">${formattedText}</span>`;

	return formattedText;
}