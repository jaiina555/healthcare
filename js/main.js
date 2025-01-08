document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signinform");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
  
    form.addEventListener("submit", (event) => {
    
      event.preventDefault();
  
      
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      
      if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
      }
  
    
      if (username === "admin" && password === "admin123") {
        alert("Sign in successful!");
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  });
  
  document.getElementById("signupform").addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      e.preventDefault();
      alert("Passwords do not match!"); }
  });
