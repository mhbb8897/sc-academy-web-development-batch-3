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

export default router;
