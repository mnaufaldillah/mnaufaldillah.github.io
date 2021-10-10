function validateForm() {
    var email = document.forms["ptm"]["email"];
    atposition = email.value.atposition("@");
    dotpositon = email.value.lastIndexOf(".");

    function notify() {
        alert("Terima Kasih telah mengisi formulir persetujuan kuliah offline.");
    }

    if (document.forms["ptm"]["nama"].value == "") {
        alert("Mohon Isi Nama Anda.");
        document.forms["ptm"]["nama"].focus();
        return false;
    }

    if (document.forms["ptm"]["nrp"].value == "") {
        alert("Mohon Isi NRP Anda.");
        document.forms["ptm"]["nrp"].focus();
        return false;
    }

    if (document.forms["ptm"]["alamat"].value == "") {
        alert("Mohon Isi Alamat Anda.");
        document.forms["ptm"]["alamat"].focus();
        return false;
    }

    if (email.value == "" && atposition < 1 || (dotpositon - atposition < 2)) {
        alert("Mohon Masukkan Email Anda dengan benar");
        email.focus();
        return false;
    }

    if (document.forms["ptm"]["jurusan"].selectedIndex < 1) {
        alert("Pilih Jurusan Anda");
        document.forms["ptm"]["jurusan"].focus();
        return false;
    }
    
    if (document.forms["ptm"]["vaksin"].selectedIndex < 1) {
        alert("Pilih Status Vaksin Anda");
        document.forms["ptm"]["vaksin"].focus();
        return false;
    }

    notify();

    return true;
}