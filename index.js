const express = require("express")
const app = express()
//console.dir(app)

// app.use((req, res)=>{
//     console.log("We've got a new request")
//     // res.send("Hello3")

// })
// app.get('/', (req, res)=>{
//     res.send("home")
   
// })

app.get('/r/:subreddit', (req, res)=>{
    const{subreddit} = res.subreddit
    res.send("home")

})

app.get('/r/:subreddit', (req, res)=>{
    //const subreddit = req.params.subreddit
    const {subreddit} = req.params
    res.send(`welcome to ${subreddit}`)
   
})

app.get('/r/:subreddit/:postID', (req, res)=>{
    //const subreddit = req.params.subreddit
    const {subreddit, postID} = req.params
    res.send(`Welcome to post id ${postID} on ${subreddit}`)
   
})

app.get('/cat', (req, res)=>{
    res.send("Cat")
})

app.get('/search', (req, res)=>{
    //const {q} = req.query
    const q = req.query.q
    res.send(`<h1>Search for ${q}</h1>`)
})


app.get('*', (req, res)=>{
    res.send("unknown path")
})

app.listen(3000, ()=>{
console.log("Listening on part 3000")
})