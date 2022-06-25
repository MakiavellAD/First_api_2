import express from "express";

const router = express.Router();

let users = [];
//get info 
router.get("/users", (req, res) =>{
    res.send("hello");
});

//adding users
router.post('/', (req, res) => {
    console.log("post succes");
    const user = req.body;
    users.push(user);
    res.send(`node with id${user.id} added to the json`);
});
//show all inf
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const forundUser = users.find((user) => user.id == id);


    res.send();
});
//delete user 
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id) != id;
    res.send(`note with the ${id} is deleted`);
});
//change info about user
router.patch('/:id', (req, res) => {
    const {id} = req.params;

    const noteUpd = users.find((user) => user.id == id);
});

export default router;