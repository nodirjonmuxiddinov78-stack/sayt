let reg_btn = document.querySelector(".reg_btn");

if (reg_btn) {
  reg_btn.addEventListener("click", () => {
    let inp_reg = document.querySelector(".inp_reg");
    let inp_par = document.querySelector(".inp_par");

    if (!inp_reg.value.trim() || !inp_par.value.trim()) {
      return;
    }

    localStorage.setItem("user", inp_reg.value.trim());
    localStorage.setItem("password", inp_par.value);

    const successEl = document.getElementById("alert-success");
    if (successEl) successEl.style.display = "block";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);
  });
}
