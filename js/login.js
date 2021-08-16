document.getElementById('login-submit').addEventListener('click', function(){
    // get user email;
    const userEmail = document.getElementById('user-email').value;
    //get user password;
    const userPassword = document.getElementById('user-password').value;

    // login condition
    if (userEmail == 'abubakar@gmail.com' && userPassword == 2255){
        window.location.href = 'all-page/internal-site.html';
    }

})