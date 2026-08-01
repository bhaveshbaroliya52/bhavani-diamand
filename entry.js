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

// =====================================
// Load Workers in Dropdown
// =====================================

function loadWorkers() {

    workerSelect.innerHTML = `<option value="">Select Worker</option>`;

    workers.forEach((worker, index) => {

        workerSelect.innerHTML += `
            <option value="${index}">
                ${worker.name}
            </option>
        `;

    });

}

// =====================================
// Show All Entries
// =====================================

function showEntries() {

    entryList.innerHTML = "";

    let totalEntries = 0;

    workers.forEach((worker, workerIndex) => {

        worker.work.forEach((entry, entryIndex) => {

            totalEntries++;

            entryList.innerHTML += `

                <div class="entry-card">

                    <h3>${worker.name}</h3>

                    <p>${entry.date}</p>

                    <h2>₹${entry.amount}</h2>

                    <button onclick="deleteEntry(${workerIndex}, ${entryIndex})">
                        🗑 Delete
                    </button>

                </div>

            `;

        });

    });

    if (totalEntries === 0) {

        entryList.innerHTML = `<p>No entries found.</p>`;

    }

}

// =====================================
// Save Entry
// =====================================

saveEntry.addEventListener("click", () => {

    let workerIndex = workerSelect.value;
    let amount = Number(workAmount.value);

    if (workerIndex === "") {

        alert("Please Select Worker");
        return;

    }

    if (amount <= 0) {

        alert("Please Enter Valid Amount");
        return;

    }

    workers[workerIndex].work.push({

        id: Date.now(),

        date: new Date().toLocaleDateString(),

        amount: amount

    });

    localStorage.setItem("workers", JSON.stringify(workers));

    workerSelect.value = "";
    workAmount.value = "";

    showEntries();

    alert("Work Entry Saved Successfully");

});

// =====================================
// Delete Entry
// =====================================

function deleteEntry(workerIndex, entryIndex) {

    let ok = confirm("Delete this entry?");

    if (!ok) return;

    workers[workerIndex].work.splice(entryIndex, 1);

    localStorage.setItem("workers", JSON.stringify(workers));

    showEntries();

}

// =====================================
// Start
// =====================================

loadWorkers();
showEntries();