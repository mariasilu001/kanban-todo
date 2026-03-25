const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({
        message: "Сильвер контролирует этот сервер, а Лили в безопасности.",
    });
});

app.use((err, req, res, next) => {
    console.error("Произошла ошибка:");
    console.log(err.message);
    console.error(err.stack);

    res.status(500).json({
        message: "Внутренняя ошибка сервера",
        error: err.message,
    });
});

app.listen(PORT, () => {
    console.log(`Сервер Лили запущен на порту localhost:${PORT}/`);
});
