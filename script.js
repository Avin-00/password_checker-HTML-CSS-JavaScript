function checkPassword() {
    const password = document.getElementById("password").value
    const result = document.getElementById("result")
  
    // Check password strength
    const strength = calculatePasswordStrength(password)
  
    // Display result
    if (strength < 3) {
      result.textContent = "Weak Password"
      result.className = "result weak"
    } else if (strength < 5) {
      result.textContent = "Medium Strength Password"
      result.className = "result medium"
    } else {
      result.textContent = "Strong Password"
      result.className = "result strong"
    }
  }
  
  function calculatePasswordStrength(password) {
    let strength = 0
  
    // Length check
    if (password.length >= 8) strength++
    if (password.length >= 12) strength++
  
    // Character type checks
    if (/[a-z]/.test(password)) strength++ // lowercase
    if (/[A-Z]/.test(password)) strength++ // uppercase
    if (/[0-9]/.test(password)) strength++ // numbers
    if (/[^a-zA-Z0-9]/.test(password)) strength++ // special characters
  
    return strength
  }
  
  