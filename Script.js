// Store user data
let profile = {
  name: "",
  username: "",
  location: "",
  interest: "",
  sdg: "",
  preference: "",
  goal: "",
  action: "",
  commitment: ""
};

let completed = 0;
const total = 9;

// Start profile
function startProfile() {
  step1();
}

// ============================
// STEP 1 - PERSONAL DETAILS
// ============================
function step1() {

  let name = prompt("Enter your name:");
  if (name === null) return;
  profile.name = name;

  let username = prompt("Enter your username:");
  if (username === null) return;
  profile.username = username;

  let location = prompt("Enter your location:");
  if (location === null) return;
  profile.location = location;

  updateProfile();
}

// ============================
// STEP 2 - INTERESTS
// ============================
function step2() {

  let interest = prompt("What are your interests? (e.g., climate, education)");
  if (interest === null) return;
  profile.interest = interest;

  let sdg = prompt("Which SDG topic are you interested in?");
  if (sdg === null) return;
  profile.sdg = sdg;

  let preference = prompt("Preferred content (video, articles, etc):");
  if (preference === null) return;
  profile.preference = preference;

  updateProfile();
}

// ============================
// STEP 3 - ACTIONS / GOALS
// ============================
function step3() {

  let goal = prompt("What is your main goal?");
  if (goal === null) return;
  profile.goal = goal;

  let action = prompt("What action will you take?");
  if (action === null) return;
  profile.action = action;

  let commitment = prompt("Your commitment level?");
  if (commitment === null) return;
  profile.commitment = commitment;

  updateProfile();

  if (completed === total) {
    document.getElementById("status").textContent =
      "Status: Profile fully completed ✅";
  }
}

// ============================
// UPDATE PROFILE DISPLAY
// ============================
function updateProfile() {

  completed = Object.values(profile).filter(v => v !== "").length;

  let output = document.getElementById("profile-output");

  output.innerHTML = `
    <h3>Your Profile (Updates Progressively)</h3>

    <div class="profile-row">
    <div class="profile-box">

    ${profile.name || profile.username || profile.location ? `
      <h4>Step 1: Personal Details</h4>
      ${profile.name ? `<p><strong>Name:</strong> ${profile.name}</p>` : ""}
      ${profile.username ? `<p><strong>Username:</strong> ${profile.username}</p>` : ""}
      ${profile.location ? `<p><strong>Location:</strong> ${profile.location}</p>` : ""}
    ` : ""}
    </div>

    <div class="profile-box">

    ${profile.interest || profile.sdg || profile.preference ? `
      <h4>Step 2: Interests</h4>
      ${profile.interest ? `<p><strong>Interest:</strong> ${profile.interest}</p>` : ""}
      ${profile.sdg ? `<p><strong>SDG Topic:</strong> ${profile.sdg}</p>` : ""}
      ${profile.preference ? `<p><strong>Preference:</strong> ${profile.preference}</p>` : ""}
    ` : ""}

    </div>

    <div class="profile-box">

    ${profile.goal || profile.action || profile.commitment ? `
      <h4>Step 3: Actions</h4>
      ${profile.goal ? `<p><strong>Goal:</strong> ${profile.goal}</p>` : ""}
      ${profile.action ? `<p><strong>Action:</strong> ${profile.action}</p>` : ""}
      ${profile.commitment ? `<p><strong>Commitment:</strong> ${profile.commitment}</p>` : ""}
    ` : ""}

    </div>
  `;

  updateProgress();
}

// ============================
// PROGRESS UPDATE
// ============================
function updateProgress() {

  let percent = Math.floor((completed / total) * 100);

  document.getElementById("progressText").textContent =
    "Completion: " + percent + "%";

  document.getElementById("progressFill").style.width =
    percent + "%";

  document.getElementById("status").textContent =
    "Status: " + completed + "/" + total + " completed";
}

// ============================
// RESET PROFILE
// ============================
function resetProfile() {

  profile = {
    name: "",
    username: "",
    location: "",
    interest: "",
    sdg: "",
    preference: "",
    goal: "",
    action: "",
    commitment: ""
  };

  completed = 0;

  document.getElementById("profile-output").innerHTML =
    "<h3>Your Profile (Updates Progressively)</h3>";

  document.getElementById("progress").textContent =
    "Completion: 0%";

  document.getElementById("status").textContent =
    "Status: Reset completed";
}