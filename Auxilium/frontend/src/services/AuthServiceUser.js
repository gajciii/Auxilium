class AuthServicesUser {
    static async login(username, password) {
        try {
            const response = await fetch('http://localhost:8080/api/v1/uporabniki/prijava', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uporabniskoIme: username, geslo: password }),
            });

            if (response.ok) {
                const userData = await response.json();

                // Successful login
                // Save user data to localStorage
                localStorage.setItem('user', JSON.stringify(userData));

                return true;
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData.message);
                return false;
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            return false;
        }
    }
}

export default AuthServicesUser;
