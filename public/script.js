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
		fileStatus.textContent = `Uploaded: ${fileName} \u2794 New File downloaded: Updated_DataSheet.csv - Scroll Downwards`;
	} else {
		fileStatus.textContent = "No file selected.";
	}
}
window.onscroll = () => {
	scrollNavbar();
};
const links = document.querySelectorAll("nav a");
scrollNavbar = () => {
	var navBar = document.getElementById("navbar");
	if (document.documentElement.scrollTop > 50) {
		navBar.classList.add("fixed-header");
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.add("scrolled-active");
		}
		navbar.style.width = "100%";
	} else {
		navBar.classList.remove("fixed-header");
		for (let i = 0; i < links.length; i++) {
			const element = links[i];
			element.classList.remove("scrolled-active");
		}
		navbar.style.width = "94%";
	}
};

// Show the file statistics section when a file is selected
function showHiddenSection() {
	const fileInput = document.getElementById("fileInput");
	const hiddenSection = document.getElementById("file-statistics");

	if (fileInput.files.length > 0) {
		hiddenSection.style.display = "block";
	}
}

// Show and remove a section after 3 seconds if a file is selected
function showAndRemoveSection() {
	const fileInput = document.getElementById("fileInput");
	const section = document.getElementById("loader1");

	if (fileInput.files.length > 0) {
		section.style.display = "flex"; // Display the section as a flex container

		// Remove the section after 3 seconds
		setTimeout(() => {
			section.remove();
		}, 5000);
	}
}

// Trigger functions when the file input changes (file is selected)
document.getElementById("fileInput").addEventListener("change", function () {
	showHiddenSection(); // Call to show hidden section
	showAndRemoveSection(); // Call to show and remove the section
});
