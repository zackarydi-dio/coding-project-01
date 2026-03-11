const form = document.getElementById("feedback-form");
const inputs = document.querySelectorAll(".input-field");
const charCount = document.getElementById("char-count");
const comments = document.getElementById("comments");
const validationMessage = document.getElementById("validation-message");
const feedbackDisplay = document.getElementById("feedback-display");

if (!form || !charCount || !comments || !validationMessage || !feedbackDisplay) {
    console.error("Required DOM elements not found. Check your HTML structure.");
}

if (comments && charCount) {
    comments.addEventListener("input", function(){
        charCount.textContent = "Characters: " + comments.value.length;
    });
}

if (form) {
    form.addEventListener("mouseover", function(event){
        if(event.target.classList.contains("input-field")){
            const tooltip = event.target.nextElementSibling;
            if(tooltip && tooltip.classList.contains("tooltip")){
                tooltip.classList.add("show");
            }
        }
    });

    form.addEventListener("mouseout", function(event){
        if(event.target.classList.contains("input-field")){
            const tooltip = event.target.nextElementSibling;
            if(tooltip && tooltip.classList.contains("tooltip")){
                tooltip.classList.remove("show");
            }
        }
    });
}

if (form) {
    form.addEventListener("submit", function(event){
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let comment = comments.value.trim();

        if(name === "" || email === "" || comment === ""){
            validationMessage.textContent = "Please fill in all fields.";
            return;
        }

        validationMessage.textContent = "";

        let entry = document.createElement("div");
        entry.classList.add("feedback-entry");

        entry.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Comment:</strong> ${comment}
        `;

        feedbackDisplay.appendChild(entry);

        form.reset();
        charCount.textContent = "Characters: 0";
    });
}

document.body.addEventListener("click", function(){
    console.log("Background clicked");
});

if (form) {
    form.addEventListener("click", function(event){
        event.stopPropagation();
    });
}