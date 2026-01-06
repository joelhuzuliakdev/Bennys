const users = [
    { user: "admin", pass: "1234", role: "ADMIN" },
    { user: "empleado", pass: "1234", role: "EMPLEADO" },
    ];

    document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const userInput = document.getElementById("user").value;
        const passInput = document.getElementById("pass").value;

        const found = users.find(
        (u) => u.user === userInput && u.pass === passInput
        );

        if (!found) {
        const inputs = [
            document.getElementById("user"),
            document.getElementById("pass"),
        ];

        inputs.forEach((input) => {
            input.classList.add("border-red-500", "shake");
            setTimeout(() => {
            input.classList.remove("border-red-500", "shake");
            }, 500);
        });

        alert("Usuario o contraseña incorrectos");
        return;
        }

        localStorage.setItem("rol", found.role);
        localStorage.setItem("usuario", found.user);

        if (found.role === "ADMIN") {
        window.location.href = "/admin";
        } else {
        window.location.href = "/pos";
        }
    });
});