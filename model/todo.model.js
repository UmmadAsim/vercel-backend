import {Schema, model} from 'mongoose'

const todoSchema = new Schema({
    title:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    des:{
        type: String,
        required: true,
        lowercase:true,
        trim:true
    }
}, {timestamps:true})

const TodoSchema = model('todo', todoSchema)
export default TodoSchema