const sqlite = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite.Database(path.resolve(
    __dirname, '..', 'database', 'posts.db'),
    sqlite.OPEN_READWRITE,
    (err) => {
        if (err) throw err;
    }
)


const getAllPosts = (req, res) => {
    const posts = db.all(`SELECT * FROM post`, [], (err, rows) => {
      if (err) throw err;
      res.status(200).json(rows); // Use status code 200 for successful data retrieval
    });
  };

//Get post by id
//get post by id
const getPostById = (req, res) => {
  db.all(`SELECT * FROM post WHERE id = ${req.params.id}`, [], (err, rows) => {
    if (err) throw err;
    if (!rows[0]) {
      return res.status(404).send("Not found");
    }
    return res.status(200).json(rows[0]);
  });
};


const addNewPost = (req, res) => {
  const post = db.run(
    `INSERT INTO post(title, post) VALUES (?,?)`,
    [req.body.title, req.body.post],
    (err) => {
      if (err) throw err;
      res.status(201).json({ message: "Post created successfully" }); // Send a success message instead of the entire post object
    }
  );  
};
    
//Update data 
const updatePost = (req, res)=>{
  db.run(
    `UPDATE post SET title = ?, post = ? WHERE id = ?`, 
    [req.body.title, req.body.post, req.params.id],
    (err) => {
      if (err) throw err;
      res.status(201).send("Data updated")
     }
  )
}

//Delete data
const deletePost = (req, res) =>{
  db.run(`DELETE FROM post WHERE id = ?`, [req.params.id], (err) => {
    if (err) throw err;
    res.status(200).send("Data deleted")
  })
}


module.exports = {getAllPosts, addNewPost , updatePost , getPostById, deletePost}