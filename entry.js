 // =====================================
// Bhavani Diamond Management System
// entry.js
// =====================================

// Workers Data
let workers = JSON.parse(localStorage.getItem("workers")) || [];

// Elements
const workerSelect = document.getElementById("workerSelect");
const workAmount = document.getElementById("workAmount");
const saveEntry = document.getElementById("saveEntry");
const entryList = document.getElementById("entryList");
const workerInfo = document.getElementById("workerInfo");

const infoWorkerNo = document.getElementById("infoWorkerNo");
const infoWorkerName = document.getElementById("infoWorkerName");
const infoSalary = document.getElementById("infoSalary");
const infoAbsent = document.getElementById("infoAbsent");
const infoWork = document.getElementById("infoWork");


function showWorkerInfo(workerNo){

    const worker = workers.find(w => w.workerNo == workerNo);

    if(!worker){

        workerInfo.style.display = "none";
        return;

    }

    workerInfo.style.display = "block";

    infoWorkerNo.innerHTML = "Worker No : " + worker.workerNo;

    infoWorkerName.innerHTML = "Name : " + worker.name;

    infoSalary.innerHTML = worker.salary || 0;

    infoAbsent.innerHTML = worker.absent || 0;

    let totalWork = 0;

    worker.work.forEach(entry=>{

        totalWork += Number(entry.amount);

    });

    infoWork.innerHTML = totalWork;




    showEntries();

}
showEntries();

// =====================================
// Load Workers in Dropdown
// =====================================
function loadWorkers() {

    workerSelect.innerHTML = `<option value="">Select Worker Number</option>`;

    workers.forEach((worker) => {

        workerSelect.innerHTML += `
            <option value="${worker.workerNo}">
                ${worker.workerNo}
            </option>
        `;

    });

}
workerSelect.addEventListener("change",()=>{

    showWorkerInfo(workerSelect.value);

});
// =====================================
// Show All Entries
// =====================================
function showEntries() {

    const historyBody = document.getElementById("historyBody");

    if (!historyBody) return;

    historyBody.innerHTML = "";

    const workerNo = Number(workerSelect.value);

    if (!workerNo) return;

    const worker = workers.find(w => w.workerNo == workerNo);

    if (!worker) return;

    if (worker.work.length === 0) {

        historyBody.innerHTML = `
            <tr>
                <td colspan="3" style="text-align:center;">
                    No History Found
                </td>
            </tr>
        `;

        return;
    }

    worker.work.forEach((entry, index) => {

        historyBody.innerHTML += `

        <tr>

            <td>${entry.date}</td>

            <td>${entry.amount}</td>

           <td>

    <button onclick="editEntry(${workers.indexOf(worker)},${index})">
        ✏️ Edit
    </button>

    <button onclick="deleteEntry(${workers.indexOf(worker)},${index})">
        🗑 Delete
    </button>

</td>

        </tr>

        `;

    });

}

// =====================================
// Save Entry
// =====================================

// saveEntry.addEventListener("click", () => {

//     let workerIndex = workerSelect.value;
//     let amount = Number(workAmount.value);

//     if (workerIndex === "") {

//         alert("Please Select Worker");
//         return;

//     }

//     if (amount <= 0) {

//         alert("Please Enter Valid Amount");
//         return;

//     }

//     workers[workerIndex].work.push({

//         id: Date.now(),

//         date: new Date().toLocaleDateString(),

//         amount: amount

//     });

//     localStorage.setItem("workers", JSON.stringify(workers));

//     workerSelect.value = "";
//     workAmount.value = "";

//     showEntries();

//     alert("Work Entry Saved Successfully");

// });
saveEntry.addEventListener("click", () => {

    const workerNo = Number(workerSelect.value);
    const amount = Number(workAmount.value);

    if (!workerNo) {
        alert("Please Select Worker Number");
        return;
    }

    if (amount <= 0) {
        alert("Please Enter Valid Work");
        return;
    }

    const worker = workers.find(w => w.workerNo == workerNo);

    if (!worker) {
        alert("Worker Not Found");
        return;
    }

    worker.work.push({

        id: Date.now(),

        date: new Date().toLocaleDateString(),

        amount: amount

    });

    worker.salary = worker.work.reduce((total, entry) => {

    return total + (Number(entry.amount) * (worker.rate || 10));

}, 0);

    localStorage.setItem("workers", JSON.stringify(workers));

    workAmount.value = "";

    showWorkerInfo(workerNo);

    showEntries();

    alert("Entry Saved");

});

// =====================================
// Delete Entry
// =====================================

function deleteEntry(workerIndex, entryIndex) {

    let ok = confirm("Delete this entry?");

    if (!ok) return;

    workers[workerIndex].work.splice(entryIndex, 1);
    let totalSalary = 0;

workers[workerIndex].work.forEach(entry => {

    totalSalary += Number(entry.amount) * (workers[workerIndex].rate || 10);

});

workers[workerIndex].salary = totalSalary;

    localStorage.setItem("workers", JSON.stringify(workers));

    showEntries();

}



function editEntry(workerIndex, entryIndex){

    let newAmount = prompt(
        "Enter New Diamond Count",
        workers[workerIndex].work[entryIndex].amount
    );

    if(newAmount === null) return;

    newAmount = Number(newAmount);

    if(newAmount <= 0){

        alert("Invalid Diamond Count");
        return;

    }

    workers[workerIndex].work[entryIndex].amount = newAmount;

    let totalSalary = 0;

workers[workerIndex].work.forEach(entry => {

    totalSalary += Number(entry.amount) * (workers[workerIndex].rate || 10);

});

workers[workerIndex].salary = totalSalary;

    localStorage.setItem(
        "workers",
        JSON.stringify(workers)
    );

    showWorkerInfo(workers[workerIndex].workerNo);

    alert("Entry Updated Successfully");

}

// =====================================
// Start
// =====================================

loadWorkers();
showEntries();


// responsive

/* Mobile Menu */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.onclick = ()=>{

        navLinks.classList.toggle("active");

    }

}


const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("overlay");

if(menuBtn){

    menuBtn.onclick = () =>{

        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");

    };

}

if(overlay){

    overlay.onclick = () =>{

        sidebar.classList.remove("active");
        overlay.classList.remove("active");

    };

}

const mobileLogout = document.getElementById("mobileLogout");

if(mobileLogout){

    mobileLogout.onclick = ()=>{

        localStorage.removeItem("isLogin");
        window.location.href="login.html";

    };

}


 