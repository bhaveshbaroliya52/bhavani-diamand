// let workers = JSON.parse(localStorage.getItem("workers")) || [];

// const reportTable = document.getElementById("reportTable");


// function showReport(){

//     reportTable.innerHTML = "";


//     workers.forEach((worker,index)=>{

//         let totalWork = 0;


//         worker.entries.forEach((entry)=>{

//             totalWork += entry.amount;

//         });


//         reportTable.innerHTML += `

//         <tr>

//             <td>${index + 1}</td>

//             <td>${worker.name}</td>

//             <td>₹${totalWork}</td>

//             <td>₹${worker.salary}</td>

//             <td>
// <button class="view-btn" onclick="viewWorker(${index})">
//     View
// </button>
//             </td>

//         </tr>

//         `;

//     });

// }


// showReport();

// function viewWorker(index){

//     let worker = workers[index];

//     let details = "";

//     worker.entries.forEach((entry)=>{

//         details += 
//         entry.date + " : ₹" + entry.amount + "\n";

//     });


//     alert(
//         "Worker : " + worker.name +
//         "\n\nWork History:\n" +
//         details +
//         "\nTotal Salary : ₹" + worker.salary
//     );

// }

let workers = JSON.parse(localStorage.getItem("workers")) || [];

const reportContainer = document.getElementById("reportContainer");

function loadReport(){

    reportContainer.innerHTML = "";

    workers.forEach(worker => {

        let total = 0;

        worker.work.forEach(entry => {

            total += entry.amount;

        });

        reportContainer.innerHTML += `

        <div class="worker-card">

            <h2>${worker.name}</h2>

            <h3>Total Salary : ₹${total}</h3>

        </div>

        `;

    });

}

loadReport();