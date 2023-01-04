// const { Socket } = require("")
const net = require("net")

const server = net.createServer(socket =>{
    socket.write("ping.")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

server.listen(8080)