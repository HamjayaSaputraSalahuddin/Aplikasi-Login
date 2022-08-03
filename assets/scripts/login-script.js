/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */


/*Membuat variabel disetiap element view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// Membuat variabel untuk menyimpan informasi email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    // Mendapatkan input email dan password pengguna dari form.
    const email = inputEmailElement.value;
    const pass = inputPasswordElement.value;

    /* Memastikan bahwa nilai email dan password sesuai dengan nilai yang disimpan */
    if (email == expectedEmail && pass == expectedPassword) {
    
    /* Jika sesuai maka program akan berpindah ke halaman home */
      goToHome();
    } else {

    /* Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah */
      showPopUp();
    }
});
