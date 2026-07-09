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

/* ==========================================
   START PROFILE
========================================== */

function startProfile() {
  let name = prompt("STEP 1: BASICS\nQuestion 1/9\n\nEnter your name:");

  if (name !== null) {
    profile.name = name.trim();
    updateProfile();
  }

  let username = prompt("STEP 1: BASICS\nQuestion 2/9\n\nEnter your username:");

  if (username !== null) {
    profile.username = username.trim();
    updateProfile();
  }

  let location = prompt("STEP 1: BASICS\nQuestion 3/9\n\nEnter your location:");

  if (location !== null) {
    profile.location = location.trim();
    updateProfile();
  }

  let interest = prompt(
    "STEP 2: INTERESTS\nQuestion 4/9\n\nWhat are your interests?",
  );

  if (interest !== null) {
    profile.interest = interest.trim();
    updateProfile();
  }

  let sdg = prompt(
    "STEP 2: INTERESTS\nQuestion 5/9\n\nWhich SDG topic interests you most?",
  );

  if (sdg !== null) {
    profile.sdg = sdg.trim();
    updateProfile();
  }

  let preference = prompt(
    "STEP 2: INTERESTS\nQuestion 6/9\n\nPreferred content type?",
  );

  if (preference !== null) {
    profile.preference = preference.trim();
    updateProfile();
  }

  let goal = prompt(
    "STEP 3: ACTIONS\nQuestion 7/9\n\nWhat is your main health goal?",
  );

  if (goal !== null) {
    profile.goal = goal.trim();
    updateProfile();
  }

  let action = prompt(
    "STEP 3: ACTIONS\nQuestion 8/9\n\nWhat action will you take?",
  );

  if (action !== null) {
    profile.action = action.trim();
    updateProfile();
  }

  let commitment = prompt(
    "STEP 3: ACTIONS\nQuestion 9/9\n\nYour commitment level?",
  );

  if (commitment !== null) {
    profile.commitment = commitment.trim();
    updateProfile();
  }
}

/* ==========================================
   REVISIT STEP 1
========================================== */

function step1() {
  let name = prompt("Edit Name:", profile.name);

  if (name !== null) {
    profile.name = name.trim();
  }

  let username = prompt("Edit Username:", profile.username);

  if (username !== null) {
    profile.username = username.trim();
  }

  let location = prompt("Edit Location:", profile.location);

  if (location !== null) {
    profile.location = location.trim();
  }

  updateProfile();
}

/* ==========================================
   REVISIT STEP 2
========================================== */

function step2() {
  let interest = prompt("Edit Interest:", profile.interest);

  if (interest !== null) {
    profile.interest = interest.trim();
  }

  let sdg = prompt("Edit SDG Topic:", profile.sdg);

  if (sdg !== null) {
    profile.sdg = sdg.trim();
  }

  let preference = prompt("Edit Preference:", profile.preference);

  if (preference !== null) {
    profile.preference = preference.trim();
  }

  updateProfile();
}

/* ==========================================
   REVISIT STEP 3
========================================== */

function step3() {
  let goal = prompt("Edit Goal:", profile.goal);

  if (goal !== null) {
    profile.goal = goal.trim();
  }

  let action = prompt("Edit Action:", profile.action);

  if (action !== null) {
    profile.action = action.trim();
  }

  let commitment = prompt("Edit Commitment:", profile.commitment);

  if (commitment !== null) {
    profile.commitment = commitment.trim();
  }

  updateProfile();
}

/* ==========================================
   UPDATE PROFILE
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

  if (completed >= 3) {
    document.getElementById("interestBox").style.display = "block";
  }

  if (completed >= 6) {
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

  document.getElementById("motivationalText").textContent =
    "Complete your profile to personalize your health journey.";

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
    "Complete your profile to personalize your health journey.";

  document.getElementById("step1Indicator").className = "step active";

  document.getElementById("step2Indicator").className = "step upcoming";

  document.getElementById("step3Indicator").className = "step upcoming";
}

/* ==========================================
   HEALTH INSIGHTS
========================================== */

function showInsights() {
  let tips = [];

  if (profile.goal !== "") {
    tips.push(`🎯 Stay focused on your goal: ${profile.goal}`);
  }

  if (profile.interest !== "") {
    tips.push(`❤️ Continue exploring your interest in ${profile.interest}.`);
  }

  tips.push("💧 Drink at least 8 glasses of water daily.");
  tips.push("🏃 Exercise for at least 30 minutes each day.");
  tips.push("🥗 Eat a balanced diet rich in fruits and vegetables.");
  tips.push("😴 Aim for 7–9 hours of quality sleep every night.");
  tips.push("🩺 Schedule regular medical check-ups.");

  const completionRate = Math.round((completed / total) * 100);

  const html = `
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

  const insightBox = document.getElementById("healthInsights");

  insightBox.innerHTML = html;
  insightBox.style.display = "flex";

  insightBox.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* ==========================================
   INITIALIZE PAGE
========================================== */

window.onload = function () {
  resetProfile();
};
