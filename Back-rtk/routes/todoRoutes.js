const router=require("express").Router();
const {showUsers,Edit, Delete, AddUser, ShowTodos, AddTodo} = require('../controllers/todoControllers')


router.get("/show",ShowTodos);

router.post("/add",AddTodo)

router.patch("/edit/:id",Edit);

router.delete("/delete/:id",Delete);



module.exports = router;
