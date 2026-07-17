/* ==========================================
   PROFILE DATA
========================================== */

let profile = {
  name: "",
  username: "",
  location: "",
  interest: "",
  sdg: "",
  preference: "",
  goal: "",
  action: "",
  commitment: "",
};

let completed = 0;
const total = 9;

const steps = {
  basics: false,
  interests: false,
  actions: false,
};

/* ==========================================
   START / CONTINUE PROFILE
========================================== */

function startProfile() {
  if (!steps.basics) {
    step1();
  } else if (!steps.interests) {
    step2();
  } else if (!steps.actions) {
    step3();
  } else {
    alert("Your profile is already complete.");
  }
}

/* ==========================================
   STEP 1 - BASICS
========================================== */

function step1() {
  let name = prompt("STEP 1: BASICS\n\nEnter your name:", profile.name);

  if (name !== null) {
    profile.name = name.trim();
  }

  let username = prompt(
    "STEP 1: BASICS\n\nEnter your username:",
    profile.username,
  );

  if (username !== null) {
    profile.username = username.trim();
  }

  let location = prompt(
    "STEP 1: BASICS\n\nEnter your location:",
    profile.location,
  );

  if (location !== null) {
    profile.location = location.trim();
  }

  steps.basics =
    profile.name !== "" || profile.username !== "" || profile.location !== "";

  updateProfile();
}

/* ==========================================
   STEP 2 - INTERESTS
========================================== */

function step2() {
  let interest = prompt(
    "STEP 2: INTERESTS\n\nWhat are your interests?",
    profile.interest,
  );

  if (interest !== null) {
    profile.interest = interest.trim();
  }

  let sdg = prompt(
    "STEP 2: INTERESTS\n\nWhich SDG topic interests you most?",
    profile.sdg,
  );

  if (sdg !== null) {
    profile.sdg = sdg.trim();
  }

  let preference = prompt(
    "STEP 2: INTERESTS\n\nPreferred content type?",
    profile.preference,
  );

  if (preference !== null) {
    profile.preference = preference.trim();
  }

  steps.interests =
    profile.interest !== "" || profile.sdg !== "" || profile.preference !== "";

  updateProfile();
}

/* ==========================================
   STEP 3 - ACTIONS
========================================== */

function step3() {
  let goal = prompt(
    "STEP 3: ACTIONS\n\nWhat is your main health goal?",
    profile.goal,
  );

  if (goal !== null) {
    profile.goal = goal.trim();
  }

  let action = prompt(
    "STEP 3: ACTIONS\n\nWhat action will you take?",
    profile.action,
  );

  if (action !== null) {
    profile.action = action.trim();
  }

  let commitment = prompt(
    "STEP 3: ACTIONS\n\nYour commitment level?",
    profile.commitment,
  );

  if (commitment !== null) {
    profile.commitment = commitment.trim();
  }

  steps.actions =
    profile.goal !== "" || profile.action !== "" || profile.commitment !== "";

  updateProfile();
}

/* ==========================================
   UPDATE PROFILE DISPLAY
========================================== */

function updateProfile() {
  completed = Object.values(profile).filter((value) => value !== "").length;

  document.getElementById("basicBox").innerHTML = `
      <h3>📋 BASICS</h3>
      <p><strong>Name:</strong> ${profile.name || "-"}</p>
      <p><strong>Username:</strong> ${profile.username || "-"}</p>
      <p><strong>Location:</strong> ${profile.location || "-"}</p>
  `;

  document.getElementById("interestBox").innerHTML = `
      <h3>❤️ INTERESTS</h3>
      <p><strong>Interest:</strong> ${profile.interest || "-"}</p>
      <p><strong>SDG Topic:</strong> ${profile.sdg || "-"}</p>
      <p><strong>Preference:</strong> ${profile.preference || "-"}</p>
  `;

  document.getElementById("actionBox").innerHTML = `
      <h3>🎯 ACTIONS</h3>
      <p><strong>Goal:</strong> ${profile.goal || "-"}</p>
      <p><strong>Action:</strong> ${profile.action || "-"}</p>
      <p><strong>Commitment:</strong> ${profile.commitment || "-"}</p>
  `;

  if (steps.basics) {
    document.getElementById("interestBox").style.display = "block";
  }

  if (steps.interests) {
    document.getElementById("actionBox").style.display = "block";
  }

  updateProgress();
}

/* ==========================================
   UPDATE PROGRESS
========================================== */

function updateProgress() {
  const percent = Math.round((completed / total) * 100);

  document.getElementById("progressFill").style.width = percent + "%";

  document.getElementById("progressText").textContent = percent + "% Complete";

  const step1Indicator = document.getElementById("step1Indicator");
  const step2Indicator = document.getElementById("step2Indicator");
  const step3Indicator = document.getElementById("step3Indicator");

  if (completed < 3) {
    document.getElementById("currentStepTitle").textContent = "STEP 1: BASICS";

    step1Indicator.className = "step active";
    step2Indicator.className = "step upcoming";
    step3Indicator.className = "step upcoming";
  } else if (completed < 6) {
    document.getElementById("currentStepTitle").textContent =
      "STEP 2: INTERESTS";

    step1Indicator.className = "step completed";
    step2Indicator.className = "step active";
    step3Indicator.className = "step upcoming";
  } else if (completed < 9) {
    document.getElementById("currentStepTitle").textContent = "STEP 3: ACTIONS";

    step1Indicator.className = "step completed";
    step2Indicator.className = "step completed";
    step3Indicator.className = "step active";
  } else {
    document.getElementById("currentStepTitle").textContent =
      "PROFILE COMPLETE";

    step1Indicator.className = "step completed";
    step2Indicator.className = "step completed";
    step3Indicator.className = "step completed";

    document.getElementById("motivationalText").textContent =
      "Congratulations! Your health profile is fully completed.";

    document.getElementById("confirmation-card").style.display = "block";

    return;
  }

  let completedSteps = 0;

  if (steps.basics) completedSteps++;
  if (steps.interests) completedSteps++;
  if (steps.actions) completedSteps++;

  document.getElementById("motivationalText").textContent =
    `Progress: ${completedSteps} of 3 profile sections completed`;

  document.getElementById("confirmation-card").style.display = "none";

  document.getElementById("healthInsights").style.display = "none";
}

/* ==========================================
   RESET PROFILE
========================================== */

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
    commitment: "",
  };

  completed = 0;

  steps.basics = false;
  steps.interests = false;
  steps.actions = false;

  document.getElementById("basicBox").innerHTML = `
      <h3>📋 BASICS</h3>
      <p>Name: -</p>
      <p>Username: -</p>
      <p>Location: -</p>
  `;

  document.getElementById("interestBox").innerHTML = `
      <h3>❤️ INTERESTS</h3>
      <p>Interest: -</p>
      <p>SDG Topic: -</p>
      <p>Preference: -</p>
  `;

  document.getElementById("actionBox").innerHTML = `
      <h3>🎯 ACTIONS</h3>
      <p>Goal: -</p>
      <p>Action: -</p>
      <p>Commitment: -</p>
  `;

  document.getElementById("interestBox").style.display = "none";

  document.getElementById("actionBox").style.display = "none";

  document.getElementById("confirmation-card").style.display = "none";

  document.getElementById("healthInsights").style.display = "none";

  document.getElementById("progressFill").style.width = "0%";

  document.getElementById("progressText").textContent = "0% Complete";

  document.getElementById("currentStepTitle").textContent = "STEP 1: BASICS";

  document.getElementById("motivationalText").textContent =
    "Progress: 0 of 3 profile sections completed";

  document.getElementById("step1Indicator").className = "step active";

  document.getElementById("step2Indicator").className = "step upcoming";

  document.getElementById("step3Indicator").className = "step upcoming";
}

/* ==========================================
   HEALTH INSIGHTS
========================================== */

function showInsights() {
  let tips = [];

  if (profile.goal) {
    tips.push(`🎯 Stay focused on your goal: <strong>${profile.goal}</strong>`);
  }

  if (profile.interest) {
    tips.push(
      `❤️ Continue exploring your interest in <strong>${profile.interest}</strong>`,
    );
  }

  tips.push("💧 Drink at least 8 glasses of water daily.");
  tips.push("🏃 Exercise for at least 30 minutes each day.");
  tips.push("🥗 Eat a balanced diet rich in fruits and vegetables.");
  tips.push("😴 Aim for 7–9 hours of quality sleep every night.");
  tips.push("🩺 Schedule regular medical check-ups.");

  const completionRate = Math.round((completed / total) * 100);

  document.getElementById("healthInsights").innerHTML = `
      <div>
          <h3>🌟 Personalized Health Insights</h3>
          <br>
        
          <p><strong>Name:</strong> ${profile.name || "Not Provided"}</p>
          <p><strong>Location:</strong> ${profile.location || "Not Provided"}</p>
          <p><strong>Main Goal:</strong> ${profile.goal || "Not Provided"}</p>
          <p><strong>Commitment Level:</strong> ${profile.commitment || "Not Provided"}</p>
          <p><strong>Profile Completion:</strong> ${completionRate}%</p>

          <br>
          <h4>Recommended Health Tips</h4>
          <br>

          <ul>
              ${tips.map((tip) => `<li>${tip}</li>`).join("")}
          </ul>
          <br>
          <p>
              🌍 Thank you for supporting SDG 3:
              Good Health and Well-Being.
          </p>
      </div>
  `;

  document.getElementById("healthInsights").style.display = "flex";
}

/* ==========================================
   INITIALIZE PAGE
========================================== */

window.onload = function () {
  resetProfile();
};
