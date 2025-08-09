document.addEventListener("DOMContentLoaded", () => {
  const loginFormBox = document.querySelector(".form-box.login");
  const signupFormBox = document.querySelector(".form-box.signup");
  const forgotContainer = document.getElementById("forgot-container");
  const resetMsg = document.getElementById("reset-msg");

  // Close buttons redirect to home page (change to your homepage URL if needed)
  document.getElementById("close-login").addEventListener("click", () => {
    window.location.href = "/Travel_agency/Travel_agency/index.html";
  });

  document.getElementById("close-signup").addEventListener("click", () => {
    window.location.href = "/Travel_agency/Travel_agency/index.html";
  });

  // Show signup form, hide login & forgot password
  document.getElementById("show-signup").addEventListener("click", (e) => {
    e.preventDefault();
    loginFormBox.classList.add("hidden");
    signupFormBox.classList.remove("hidden");
    forgotContainer.classList.add("hidden");
    resetMsg.style.display = "none";
  });

  // Show login form, hide signup & forgot password
  document.getElementById("show-login").addEventListener("click", (e) => {
    e.preventDefault();
    signupFormBox.classList.add("hidden");
    loginFormBox.classList.remove("hidden");
    forgotContainer.classList.add("hidden");
    resetMsg.style.display = "none";
  });

  // Show forgot password container, hide login form
  document.getElementById("forgot-password").addEventListener("click", (e) => {
    e.preventDefault();
    forgotContainer.classList.remove("hidden");
    loginFormBox.classList.add("hidden");
    resetMsg.style.display = "none";

    // Prefill forgot password inputs from login form fields
    const loginEmail = document.querySelector(".form-box.login input[type='email']");
    const loginPassword = document.querySelector(".form-box.login input[type='password']");
    document.getElementById("forgot-email").value = loginEmail.value || "";
    document.getElementById("recent-password").value = loginPassword.value || "";
  });

  // Cancel reset button hides forgot password and shows login again
  document.getElementById("cancel-reset-btn").addEventListener("click", () => {
    forgotContainer.classList.add("hidden");
    loginFormBox.classList.remove("hidden");
    resetMsg.style.display = "none";
  });

  // Simulate sending reset link (demo)
  document.getElementById("send-reset-btn").addEventListener("click", (e) => {
    e.preventDefault();
    resetMsg.style.display = "block";
  });

  // Prevent default form submission (demo)
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", (e) => e.preventDefault());
  });
});