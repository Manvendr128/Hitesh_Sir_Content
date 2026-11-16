import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
  res.send("Monu Attri");
});

app.get('/jokes',(req,res)=>{
  const jokes=[
    {
      id : 1,
      title:'A Joke',
      content:'first joke'
    },
    {
      id : 2,
      title:'B Joke',
      content:'Second joke'
    }

  ]
  res.send(jokes);
})

app.listen(port,()=>{
  console.log(`server is run at http://localhost:${port}`);
});