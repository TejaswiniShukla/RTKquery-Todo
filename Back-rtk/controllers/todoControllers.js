
const Todo=require('../models/todoSchema')

  

module.exports = {
    //to show all todo
    ShowTodos :async (req,res,next) => {
     
      try {
        const todos = await Todo.find();
    
        res.status(200).json(todos);
      } catch (err) {
        console.error('Error fetching TODOs:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },


    
    // to edit the todo
    Edit: async (req,res,next) => {
      try {

  
        const { id } = req.params; 
      
        const updatedTodo = await Todo.findByIdAndUpdate(id, {title:'nai value aagyi hai' }, { new: true });
    
   
        if (!updatedTodo) {
          return res.status(404).json({ error: 'TODO not found' });
        }
        res.status(200).json(updatedTodo);
      } catch (err) {
        console.error('Error updating TODO:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
      
      
        },


    //to delte the todo
    Delete : async (req,res,next) => {
     
        const { id } = req.params;
      
    
       await Todo.findOneAndDelete({_id:id})
        .then(async deletedTodo => {
          console.log(deletedTodo,'deltedtodh');
          if(!deletedTodo){
            return  res.status(404).json({ error: 'TODO not found' });
          }
          else{
            return  res.status(200).json('todo deleted');
          }  
        })
        .catch((err) => {
          res.status(500).json({ error: 'Internal Server Error' });
        })
  
       
      },


    //addTodo
    AddTodo : async(req,res,next) => {
     
      try {
        const { title } = req.body;
        const newTodo = new Todo({ title });
    
        const savedTodo = await newTodo.save();
    
        res.status(201).json(savedTodo); 
      } catch (err) {
        console.error('Error creating TODO:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },

}