document.getElementById("matchBtn").addEventListener("click", function() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const warning = document.getElementById("warning");
  const result = document.getElementById("result");

  // Reset tampilan
  warning.textContent = "";
  result.textContent = "";

  // Validasi input
  if (!name1 || !name2) {
    warning.textContent = "⚠️ Kedua nama harus diisi!";
    return;
  }

  if (
    (name1.toLowerCase() === "raynard" && name2.toLowerCase() === "tiffany") ||
    (name1.toLowerCase() === "tiffany" && name2.toLowerCase() === "raynard")
  ) {
    result.textContent = `❤️ Kecocokan ${name1} & ${name2} adalah 0%!`;
    return;
  }

  if (
    (name1.toLowerCase() === "jason" && name2.toLowerCase() === "vanessa") ||
    (name1.toLowerCase() === "vanessa" && name2.toLowerCase() === "jason")
  ) {
    result.textContent = `❤️ Kecocokan ${name1} & ${name2} adalah 100%!`;
    return;
  }

  if (
    (name1.toLowerCase() === "freddy" && name2.toLowerCase() === "davina") ||
    (name1.toLowerCase() === "davina" && name2.toLowerCase() === "freddy")
  ) {
    result.textContent = `❤️ Kecocokan ${name1} & ${name2} adalah 100%!`;
    return;
  }

  if (
    (name1.toLowerCase() === "peter" && name2.toLowerCase() === "chika") ||
    (name1.toLowerCase() === "chika" && name2.toLowerCase() === "peter")
  ) {
    result.textContent = `❤️ Kecocokan ${name1} & ${name2} adalah 100%!`;
    return;
  }

  if (
    (name1.toLowerCase() === "raynard" && name2.toLowerCase() === "nathania") ||
    (name1.toLowerCase() === "nathania" && name2.toLowerCase() === "raynard")
  ) {
    result.textContent = `❤️ Kecocokan ${name1} & ${name2} adalah 0%!`;
    return;
  }

  if (
    (name1.toLowerCase() === "raynard" && name2.toLowerCase() === "thania") ||
    (name1.toLowerCase() === "thania" && name2.toLowerCase() === "raynard")
  ) {
    result.textContent = `❤️ Kecocokan ${name1} & ${name2} adalah 0%!`;
    return;
  }

  if (
    (name1.toLowerCase() === "raynard" && name2.toLowerCase() === "tania") ||
    (name1.toLowerCase() === "tania" && name2.toLowerCase() === "raynard")
  ) {
    result.textContent = `❤️ Kecocokan ${name1} & ${name2} adalah 0%!`;
    return;
  }




  // Algoritma cocok-cocokan
  const combined = (name1 + name2).toLowerCase().replace(/\s+/g, "");
  let total = 0;
  for (let i = 0; i < combined.length; i++) {
    total += combined.charCodeAt(i);
  }

  const percentage = total % 101; // hasil antara 0–100

  result.textContent = `Kecocokan ${name1} ❤️ ${name2} adalah ${percentage}%`;
});
