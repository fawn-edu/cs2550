document.getElementById("profile-image-clickable").addEventListener("click", _ => {
	document.querySelector("dialog").showModal();
});

const dialog = document.querySelector("dialog");

dialog.addEventListener("click", ev => {
	if (ev.target == dialog) dialog.close();
});
