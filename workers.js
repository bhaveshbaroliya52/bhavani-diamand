// let workers = JSON.parse(localStorage.getItem("workers")) || [];

// const workerName = document.getElementById("workerName");
// const addWorkerBtn = document.getElementById("addWorkerBtn");
// const workersTable = document.getElementById("workersTable");


// function displayWorkers(){

//     workersTable.innerHTML = "";

//     workers.forEach((worker,index)=>{

//         workersTable.innerHTML += `
//             <tr>
//                 <td>${index + 1}</td>

//                 <td>${worker.name}</td>

//                 <td>
//                    <button class="edit-btn" onclick="editWorker(${index})">
//     Edit
// </button>

//                     <button class="delete-btn" onclick="deleteWorker(${index})">
//                         Delete
//                     </button>
//                 </td>
//             </tr>
//         `;

//     });

// }


// addWorkerBtn.addEventListener("click",()=>{

//     let name = workerName.value.trim();


//     if(name === ""){
//         alert("Please enter worker name");
//         return;
//     }


//     workers.push({
//         id: Date.now(),
//         name:name,
//         salary:0,
//         entries:[]
//     });


//     localStorage.setItem(
//         "workers",
//         JSON.stringify(workers)
//     );


//     workerName.value="";

//     displayWorkers();

// });


// function deleteWorker(index){

//     workers.splice(index,1);


//     localStorage.setItem(
//         "workers",
//         JSON.stringify(workers)
//     );


//     displayWorkers();

// }


// displayWorkers();

// function editWorker(index){

//     let newName = prompt(
//         "Enter new worker name",
//         workers[index].name
//     );


//     if(newName != null && newName.trim() != ""){

//         workers[index].name = newName.trim();


//         localStorage.setItem(
//             "workers",
//             JSON.stringify(workers)
//         );


//         displayWorkers();

//     }

// }

// Workers Array
let workers = JSON.parse(localStorage.getItem("workers")) || [];

// Elements
const workerName = document.getElementById("workerName");
const addWorkerBtn = document.getElementById("addWorkerBtn");
const workersContainer = document.getElementById("workersContainer");

// Show Workers
function displayWorkers() {

    workersContainer.innerHTML = "";

    workers.forEach((worker, index) => {

        workersContainer.innerHTML += `
        
        <div class="worker-card">

            <h3>${worker.name}</h3>

            <button onclick="deleteWorker(${index})">
                Delete
            </button>

        </div>

        `;

    });

}

// Add Worker
addWorkerBtn.addEventListener("click", () => {

    let name = workerName.value.trim();

    if (name === "") {

        alert("Please Enter Worker Name");

        return;

    }

    workers.push({

        id: Date.now(),

        name: name,

        salary: 0,

        work: []

    });

    localStorage.setItem("workers", JSON.stringify(workers));

    workerName.value = "";

    displayWorkers();

});

// Delete Worker
function deleteWorker(index) {

    if (confirm("Delete this worker?")) {

        workers.splice(index, 1);

        localStorage.setItem("workers", JSON.stringify(workers));

        displayWorkers();

    }

}

displayWorkers();



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

