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

  // Algoritma cocok-cocokan
  const combined = (name1 + name2).toLowerCase().replace(/\s+/g, "");
  let total = 0;
  for (let i = 0; i < combined.length; i++) {
    total += combined.charCodeAt(i);
  }

  const percentage = total % 101; // hasil antara 0–100

  result.textContent = `Kecocokan ${name1} ❤️ ${name2} adalah ${percentage}%`;
});
