generatePassword_v2()

function generatePassword_v2() {
    var password_label = document.getElementById("password-label");
    var password = '';


    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$/&%$!=?_-+';
        
    for (let i = 1; i <= 20; i++) {
        var char = Math.floor(Math.random()
                    * chars.length + 1);
            
        password += chars.charAt(char);
    }
        
    console.log(password);
    password_label.innerHTML = "Password: " + password;


    return password;
}

function generatePassword_v1() {
    var password_label = document.getElementById("password-label");

    password = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2);

    console.log(password);
    password_label.innerHTML = "Password: " + password;

    return password;
}
