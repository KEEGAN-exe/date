const $buttons_container = document.querySelector(".container");
const $button_cancel = document.querySelector(".movement");
const $acept = document.querySelector(".acept");
let ctn = 0;

$button_cancel.addEventListener("mouseenter", () => {
  ctn = 1 + ctn;
  const randomX =
    Math.random() *
    ($buttons_container.clientWidth - $button_cancel.offsetWidth);
  const randomY =
    Math.random() *
    ($buttons_container.clientHeight - $button_cancel.offsetHeight);

  $button_cancel.style.left = randomX + "px";
  $button_cancel.style.top = randomY + "px";

  if (ctn === 10) {
    $button_cancel.style.display = "none";
    setTimeout(() => {
      alert("TANTO INSISTES EN DARLE AL NO ? DALE AL SI NO MA");
    }, 300);
  }

  if (ctn >= 5) {
    const parpadeo = setInterval(() => {
      $acept.style.backgroundColor = "yellow";
      $acept.style.color = "black";
      setTimeout(() => {
        $acept.style.backgroundColor = "tomato";
        $acept.style.color = "white";
      }, 200);
    }, 400);

    setTimeout(() => {
      clearInterval(parpadeo);
    }, 5000);
  }

  console.log(ctn);
});

$button_cancel.addEventListener("click", () => {
  alert("BUSCASTE DARLE AL NO COMO SEA, TA BIEN, AHI SE VE EL CARIÑO :(");
});

$acept.addEventListener("click", () => {
  alert(
    "MIERCOLES 14 DE FEBRERO EN LA RICCI A LAS 8PM,PIDE PERMISO HASTA MAS DE MEDIANOCHE, TE QUIERO 💖"
  );
});
