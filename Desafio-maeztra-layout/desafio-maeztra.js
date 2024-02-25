// Função para definir um cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

// Função para obter o valor de um cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookieParts = cookie.split('=');
        if (cookieParts[0] === name) {
            return cookieParts[1];
        }
    }
    return null;
}

// Verifica se há um cookie que indica se o popup foi fechado anteriormente
const popupClosed = getCookie("popupClosed");

// Se o cookie estiver definido como "true", oculta o popup
if (popupClosed === "true") {
    document.getElementById("popupWrapper","popupWrapper-mobile").style.display = "none";
}

document.getElementById("closePopup","closePopup-mobile").addEventListener("click", function() {
    // Oculta o popup
    document.getElementById("popupWrapper","popupWrapper-mobile").style.display = "none";
    // Define um cookie para indicar que o popup foi fechado
    setCookie("popupClosed", "true", 7); // O cookie expira em 7 dias
});
document.getElementById("closePopup").addEventListener("click", function() {
    // Oculta o popup
    document.getElementById("popupWrapper").style.display = "none";
    // Define um cookie para indicar que o popup foi fechado
    setCookie("popupClosed", "true", 7); // O cookie expira em 7 dias
});

document.getElementById("closePopup-mobile").addEventListener("click", function() {
    // Oculta o popup mobile
    document.getElementById("popupWrapper-mobile").style.display = "none";
    // Define um cookie para indicar que o popup foi fechado
    setCookie("popupClosed", "true", 7); // O cookie expira em 7 dias
});
