const openIn = document.querySelector('#SignIn');
    const openUp = document.querySelector('#SignUp');

    const signUp = document.querySelector('.modalSignUp');
    const signIn = document.querySelector('.modalSignIn');

    const closeIn = document.querySelector('#backIn');
    const closeUp = document.querySelector('#backOut');

    const login = document.querySelector('#login');
    const logout = document.querySelector('#logout');


    openUp.addEventListener('click', function () {
        signUp.classList.add('bg-active');
        signIn.classList.remove('bg-active');
    })

    openIn.addEventListener('click', function () {
        signIn.classList.add('bg-active');
        signUp.classList.remove('bg-active');
    })

    logout.addEventListener('click', function () {
        signUp.classList.add('bg-active');
        signIn.classList.remove('bg-active');
    })

    login.addEventListener('click', function () {
        signIn.classList.add('bg-active');
        signUp.classList.remove('bg-active');
    })
    //remove class bg-active or add display: none
    //close.addEventListener('click', function () {
    //    modal.classList.add('closeModal');
    //});
    closeIn.addEventListener('click', function () {
        signIn.classList.remove('bg-active');
    });
    closeUp.addEventListener('click', function () {
        signUp.classList.remove('bg-active');
    });

    document.addEventListener('keydown', function (e) {
        let keyCode = e.code;
        if (keyCode === 'Escape') {
            signIn.classList.remove('bg-active');
        }
    });
    document.addEventListener('keydown', function (e) {
        let keyCode = e.code;
        if (keyCode === 'Escape') {
            signUp.classList.remove('bg-active');
        }
    });