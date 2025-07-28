        const loginForm = document.getElementById('loginForm');
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        
        // Toggle password visibility
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
        });
        
        // Form validation
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Validate email
            if (!emailInput.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                emailInput.classList.add('error');
                emailError.style.display = 'block';
                isValid = false;
            } else {
                emailInput.classList.remove('error');
                emailError.style.display = 'none';
            }
            
            // Validate password
            if (passwordInput.value.length < 8) {
                passwordInput.classList.add('error');
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordInput.classList.remove('error');
                passwordError.style.display = 'none';
            }
            
            // If valid, proceed with login
            if (isValid) {
                // Here you would typically make an API call
                console.log('Login form submitted:', {
                    email: emailInput.value,
                    password: passwordInput.value,
                    remember: document.getElementById('remember').checked
                });
                
                // Show success (in a real app, you'd redirect or show a toast)
                loginForm.reset();
                alert('Login successful!');
                alert('We will be back with more pages soon!');
            }
        });
