import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    Name: "Namaaa",
    Nickname: "Nickname",
  });
});

router.get("/book", (req, res) => {
  res.status(200).json({
    daftarBacaan: {
      Name: "Atomic Habits",
      Nickname: "James Clear",
    },
  });
});

// Tugas
// buatlah sebuah operasi matematika ketika route 'operasi-matematika' di akses lakukan operasi matematika seperti penjumlahan, pengurangan, pembagian, dan perkalian

router.get("/operasi-aritmatika-1", (req, res) => {
  // Contoh endpoint /operasi-aritmatika-1?operation=add&a=5&b=3
  const { operation, a, b } = req.query;
  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "Parameter a dan b harus berupa angka." });
  }

  let result;
  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else if (operation === "divide") {
    if (num2 === 0) {
      return res.status(400).json({ error: "Tidak bisa membagi dengan nol." });
    }
    result = num1 / num2;
  } else {
    return res.status(400).json({
      error:
        'Operasi tidak valid. Gunakan "add", "subtract", "multiply", atau "divide".',
    });
  }
  res.status(200).json({ operation, result });
});

router.get("/operasi-aritmatika-2", (req, res) => {
  const a = 10;
  const b = 6;

  if (a === 0 || b === 0) {
    // Kembalikan nilai agar eksekusi kode terhenti
    return res
      .status(400)
      .json({ error: "Tidak dapat mengoperasikan bilangan 0" });
  }

  function perkalian(a, b) {
    return a * b;
  }
  function pembagian(a, b) {
    return (a / b).toFixed(1);
  }
  function penjumlahan(a, b) {
    return a + b;
  }
  function pengurangan(a, b) {
    return a - b;
  }

  res.status(200).json({
    hasil: {
      penjumlahan: penjumlahan(a, b),
      perkalian: perkalian(a, b),
      pembagian: parseFloat(pembagian(a, b)),
      pengurangan: pengurangan(a, b),
    },
  });
});

export default router;
