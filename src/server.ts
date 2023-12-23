import { app } from "./app"

const DataSource = async () =>{
  try {
    app.listen({ port: 3000, host: 'localhost' }, (err: any) => {
      if (err) throw err
      console.log(`server listening on ${app.server.address().port}`)
    })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

DataSource()
