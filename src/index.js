const express = require('express')

const app = express()

app.get('/courses', (request, response) => {
    return response.json(
    ["course1","course2","course3"]    
    )
})

app.post('/courses', (request,response) => {
    return response.json( ["course1","course2","course3",'course4'] )
})

app.post('courses/:id', (request,response) => {
    return response.json( ["course6","course2","course3"] )
})

app.patch('/courses/id:', (request,response) => {
    return response.json()
})

app.listen(3333)



