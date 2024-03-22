import express from "express";
import pg from "pg";
import path from "path";
import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "run360",
    password: "123456",
    port: 5432,
});
db.connect();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let run = [];

app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM items ORDER BY id ASC");
        run = result.rows;

        res.render("index", {
            listRuns: run,
        });
    } catch (err) {
        console.log(err);
    }
});

app.get("/allRuns", async (req, res) => {
    try {
        res.render("allRuns");
    } catch (err) {
        console.log(err);
    }
});

app.post("/add", async (req, res) => {
    const { location, distance, time, notes } = req.body; 

    try {
        await db.query("INSERT INTO items (location, distance, time, notes) VALUES ($1, $2, $3, $4)", [location, distance, time, notes]);
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.send("Error adding the run.");
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
