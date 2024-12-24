const dragArea = document.getElementById("dragArea");
const fileInput = document.getElementById("fileInput");
const fileStatus = document.getElementById("fileStatus");

dragArea.addEventListener("click", () => fileInput.click());
dragArea.addEventListener("dragover", (e) => {
	e.preventDefault();
	dragArea.style.backgroundColor = "#e8f5e9";
});
dragArea.addEventListener("dragleave", () => {
	dragArea.style.backgroundColor = "#fff";
});
dragArea.addEventListener("drop", (e) => {
	e.preventDefault();
	const file = e.dataTransfer.files[0];
	handleFile(file);
});
fileInput.addEventListener("change", (e) => {
	const file = e.target.files[0];
	handleFile(file);
});

function handleFile(file) {
	if (file) {
		const fileName = file.name;
		const newFileName = fileName.replace(/(\.[^.]*)$/, " debiased$1");
		fileStatus.textContent = `Uploaded: ${fileName} \u2794 New File downloaded: Updated_DataSheet.csv`;
	} else {
		fileStatus.textContent = "No file selected.";
	}
}
