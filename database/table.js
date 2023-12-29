const sqlite = require("sqlite3").verbose();
const path = require('path');
const db = new sqlite.Database(path.resolve(
    __dirname,  'posts.db'),
    sqlite.OPEN_READWRITE,
    (err) => {
        if (err) throw err;
    }
)
const createPost =`
CREATE TABLE post(
    id INTEGER PRIMARY KEY,
    title VARCHAR(80),
    post VARCHAR(250)
)
`
db.run(createPost);