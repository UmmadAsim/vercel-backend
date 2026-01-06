import TodoSchema from "../model/todo.model.js"
export const createtodo = async(req, res)=>{
    try{
     const todo= await TodoSchema.create(req.body) 
     res.status(200).json(todo) 
        
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}
export const fetchtodo  = async (req, res)=>{
    try{
      const todo = await (await TodoSchema.find().sort({createdAt:-1}))
      res.status(200).json(todo)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}
export const updatetodo = async (req, res)=>{
    try{
     const {id} = req.params
     const todo =  await TodoSchema.findByIdAndUpdate(id, req.body,{new:true})

     if(!todo)
        return res.status(404).json({message:"Todo not found"})
     res.status(200).json(todo)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}
export const deletetodo = async(req, res)=>{
    try{
       const {id} = req.params
       const todo =   await TodoSchema.findByIdAndDelete(id)
     
     if(!todo)
        return res.status(404).json({message:"Todo  not found"})
    res.status(200).json({message:"Todo deleted successfully"})

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

