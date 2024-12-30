import express from 'express';
import { db } from './config/db.config.js';
import authRoutes from './routes/auth.routes.js'; 
import postRoutes from './routes/post.routes.js';
// import userRoutes from './routes/user.routes.js';


const app= express();

app.use(express.json());

db.connect((err)=>{
    if(err){
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
});

app.get('/api',(req,res)=>{
    res.json("api works..");
});

app.use("/api/auth",authRoutes);
// app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);

const port=8081;
app.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`);
    
});