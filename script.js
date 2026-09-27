/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   1. DARK / LIGHT THEME
========================================= */

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");

    } else {

        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");

    }

});


/* =========================================
   2. PROJECT FILTERING
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project-item");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.filter;


        /* Change active button */

        filterButtons.forEach((btn) => {

            btn.classList.remove("active");
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-outline-primary");

        });


        button.classList.add("active");
        button.classList.remove("btn-outline-primary");
        button.classList.add("btn-primary");


        /* Filter projects */

        projects.forEach((project) => {

            const projectCategory = project.dataset.category;


            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =========================================
   3. CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const subjectInput = document.getElementById("subject");

const messageInput = document.getElementById("message");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    /* Clear old errors */

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("subjectError").textContent = "";
    document.getElementById("messageError").textContent = "";

    document.getElementById("successMessage")
        .classList.add("d-none");


    let isValid = true;


    /* Name validation */

    if (nameInput.value.trim() === "") {

        document.getElementById("nameError").textContent =
            "Please enter your name.";

        isValid = false;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailInput.value.trim() === "") {

        document.getElementById("emailError").textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        document.getElementById("emailError").textContent =
            "Please enter a valid email.";

        isValid = false;

    }


    /* Subject validation */

    if (subjectInput.value.trim() === "") {

        document.getElementById("subjectError").textContent =
            "Please enter a subject.";

        isValid = false;

    }


    /* Message validation */

    if (messageInput.value.trim() === "") {

        document.getElementById("messageError").textContent =
            "Please enter your message.";

        isValid = false;

    }


    /* Success */

    if (isValid) {

        document.getElementById("successMessage")
            .classList.remove("d-none");

        contactForm.reset();

    }

});


/* =========================================
   4. JAVASCRIPT ARRAY OF SKILLS
========================================= */

const skills = [
    "Python",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "FastAPI",
    "MySQL",
    "PostgreSQL",
    "Machine Learning"
];

console.log("My Technical Skills:");

skills.forEach((skill) => {
    console.log(skill);
});


/* =========================================
   5. PROJECT OBJECTS
========================================= */

const projectDetails = [

    {
        title: "MathGenius AI",
        category: "AI",
        technology: "React.js, Groq API, Three.js"
    },

    {
        title: "Student Performance Classification",
        category: "Machine Learning",
        technology: "Python, Random Forest"
    },

    {
        title: "Digital Learning Platform",
        category: "Web",
        technology: "HTML, CSS, JavaScript, PostgreSQL"
    }

];


console.log("Project Details:");

projectDetails.forEach((project) => {

    console.log(
        `${project.title} - ${project.category}`
    );

});


/* =========================================
   6. NAVBAR AUTO CLOSE ON MOBILE
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

const navbarMenu = document.getElementById("navbarMenu");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navbarMenu.classList.contains("show")) {

            const navbarButton =
                document.querySelector(".navbar-toggler");

            navbarButton.click();

        }

    });

});


/* =========================================
   7. CURRENT YEAR IN FOOTER
========================================= */

const currentYear = new Date().getFullYear();

console.log(`Portfolio Year: ${currentYear}`);