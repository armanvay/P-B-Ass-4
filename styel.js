let interviewlist = [];
let rejectedlist = [];


let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let jobs = document.getElementById("jobs");

const allcard = document.getElementById("all-card");
const filtersection = document.getElementById("filtered-section");

function calculateCount() {
  total.innerText = allcard.children.length;
  interview.innerText = interviewlist.length;
  rejected.innerText = rejectedlist.length;
}


calculateCount();

// toggole
const all = document.getElementById("all");
const interviewbtn = document.getElementById("interviewbtn");
const rejectedbtn = document.getElementById("rejectedbtn");

function toggole(id) {
  // Remove color
  all.classList.remove("bg-blue-500");
  interviewbtn.classList.remove("bg-blue-500");
  rejectedbtn.classList.remove("bg-blue-500");

  //  color
  document.getElementById(id).classList.add("bg-blue-500");

  if (id === "all") {
    allcard.classList.remove("hidden");
    filtersection.classList.add("hidden");
    jobs.innerText = allcard.children.length;
  } else if (id === "interviewbtn") {
    allcard.classList.add("hidden");
    filtersection.classList.remove("hidden");
    renderInterview();
    jobs.innerText = interviewlist.length;
  } else if (id === "rejectedbtn") {
    allcard.classList.add("hidden");
    filtersection.classList.remove("hidden");
    renderRejected();
    jobs.innerText = rejectedlist.length;
  }
}

// even wiht main  interview reject delete
document.querySelector("main").addEventListener("click", function (e) {
  const parent = e.target.closest(".flex");
  if (!parent) return;

  const mobile = parent.querySelector(".mobile")?.innerText;
  const react = parent.querySelector(".react")?.innerText;
  const remote = parent.querySelector(".remote")?.innerText;
  const build = parent.querySelector(".build")?.innerText;
  const cardinfo = { mobile, react, remote, build };

  //  interview button click
  if (e.target.classList.contains("int")) {
    parent.querySelector(".not").innerText = "Interview";
    parent.querySelector(".not").className = "not btn bg-green-500 text-white";

  
    rejectedlist = rejectedlist.filter((item) => item.mobile !== mobile);

   
    if (!interviewlist.find((item) => item.mobile === mobile)) {
      interviewlist.push(cardinfo);
    }

    calculateCount();
    if (interviewbtn.classList.contains("bg-blue-500")) renderInterview();
  }

  //  rejected button click
  if (e.target.classList.contains("rej")) {
    parent.querySelector(".not").innerText = "Rejected";
    parent.querySelector(".not").className = "not btn bg-red-500 text-white";

 
    interviewlist = interviewlist.filter((item) => item.mobile !== mobile);

   
    if (!rejectedlist.find((item) => item.mobile === mobile)) {
      rejectedlist.push(cardinfo);
    }

    calculateCount();
    if (rejectedbtn.classList.contains("bg-blue-500")) renderRejected();
  }

  // dileted
  if (e.target.classList.contains("del")) {
    
    interviewlist = interviewlist.filter((item) => item.mobile !== mobile);
    rejectedlist = rejectedlist.filter((item) => item.mobile !== mobile);

    // Remove
    parent.remove();

    calculateCount();
    if (!filtersection.classList.contains("hidden")) {
      if (interviewbtn.classList.contains("bg-blue-500")) {
        renderInterview();
        jobs.innerText = interviewlist.length;
      }
      if (rejectedbtn.classList.contains("bg-blue-500")) {
        renderRejected();
        jobs.innerText = rejectedlist.length;
      }
    }
  }
});

// inrerview 
function renderInterview() {
  filtersection.innerHTML = "";
  if (interviewlist.length === 0) {
    filtersection.innerHTML = `
      <div class="text-center bg-white p-10">
        <img src="img/not.png" class="mx-auto mb-4 w-16"/>
        <p class="text-2xl font-bold text-[#002C5C]">No jobs available</p>
        <p class="text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  interviewlist.forEach((job) => {
    const div = document.createElement("div");
    div.className =
      "flex  justify-between bg-white p-6 rounded-full";

    div.innerHTML = `
      <div class="space-y-2">
        <p class="mobile text-2xl font-bold">${job.mobile}</p>
        <p class="react font-semibold text-[#64748B]">${job.react}</p>
        <p class="remote text-[#64748B]">${job.remote}</p>
        <button class="not btn bg-green-500 text-white">Interview</button>
        <p class="build text-[#64748B]">${job.build}</p>
        <div>
          <button class="int btn text-green-500 border-green-500">Interview</button>
          <button class="rej btn text-red-500 border-red-500">Rejected</button>
        </div>
      </div>
      <div>
        <p class="border border-gray-400 cursor-pointer p-1 rounded-full">
          <i class="del fa-solid fa-trash-can"></i>
        </p>
      </div>
    `;
    filtersection.appendChild(div);
  });
}

// rejected 
function renderRejected() {
  filtersection.innerHTML = "";
  if (rejectedlist.length === 0) {
    filtersection.innerHTML = `
      <div class="text-center bg-white p-10">
        <img src="img/not.png" class="mx-auto mb-4 w-16"/>
        <p class="text-2xl font-bold text-[#002C5C]">No jobs available</p>
        <p class="text-gray-500">Check back soon for new job opportunities</p>
      </div>
    `;
    return;
  }

  rejectedlist.forEach((job) => {
    const div = document.createElement("div");
    div.className =
      "flex  justify-between bg-white p-6 rounded-full";

    div.innerHTML = `
      <div class="space-y-2">
        <p class="mobile text-2xl font-bold">${job.mobile}</p>
        <p class="react font-semibold text-[#64748B]">${job.react}</p>
        <p class="remote text-[#64748B]">${job.remote}</p>
        <button class="not btn bg-red-500 text-white">Rejected</button>
        <p class="build text-[#64748B]">${job.build}</p>
        <div>
          <button class="int btn text-green-500 border-green-500">Interview</button>
          <button class="rej btn text-red-500 border-red-500">Rejected</button>
        </div>
      </div>
      <div>
        <p class="border border-gray-400 cursor-pointer p-1 rounded-full">
          <i class="del fa-solid fa-trash-can"></i>
        </p>
      </div>
    `;
    filtersection.appendChild(div);
  });
}
