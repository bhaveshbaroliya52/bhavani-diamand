 // ===============================
// Login Protection
// ===============================

if (localStorage.getItem("isLogin") !== "true") {

    window.location.href = "login.html";

}


// ===============================
// Logout
// ===============================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        localStorage.removeItem("isLogin");

        window.location.href = "login.html";

    });

}


// ===============================
// Dashboard
// ===============================

const workers = JSON.parse(localStorage.getItem("workers")) || [];

const totalWorkers = document.getElementById("totalWorkers");
const totalSalary = document.getElementById("totalSalary");
const todayDate = document.getElementById("todayDate");
const todayWork = document.getElementById("todayWork");


// Total Workers
if (totalWorkers) {

    totalWorkers.textContent = workers.length;

}


// Total Salary
if (totalSalary) {

    let salary = 0;

    workers.forEach(worker => {

        worker.work.forEach(entry => {

            salary += entry.amount;

        });

    });

    totalSalary.textContent = "₹" + salary;

}


// Today's Date
if (todayDate) {

    todayDate.textContent = new Date().toLocaleDateString();

}


// Today's Work
if (todayWork) {

    let today = new Date().toLocaleDateString();

    let work = 0;

    workers.forEach(worker => {

        worker.work.forEach(entry => {

            if (entry.date === today) {

                work += entry.amount;

            }

        });

    });

    todayWork.textContent = "₹" + work;

}


// responsive

/* Mobile Menu */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.onclick = ()=>{

        navLinks.classList.toggle("active");

    }

}