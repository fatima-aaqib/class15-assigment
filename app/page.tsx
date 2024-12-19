/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"

/* eslint-disable react/jsx-key */
export default async function Home() {
  const url = await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await url.json()
  console.log(response)



  return (
    <div>
      {
        
        response.map((todos: any) => (
          <div>
            <Link href={`${todos.id}`}>
              <h4 className="text-5xl">
                {todos.title} &nbsp; &nbsp; {todos.id}
              </h4>
            </Link>
          </div>
        ))
      }
    </div>

  )
}
// practice hands on
{/* export default asyn function homr(){
  const url = await fetch("https://jsonplaceholder.typicode.com/todos")
  const response = await url.json()
  console.log(response)
  
  return(
  <main>
  {
  response.map((todo: any) =>
  <div>
  <Link href={`${todo.id}}>
  <h4 className="text-7xl">
  {todos.title} &nbsp; &nbsp; {todo.id}
  </h4>
  </Link>
  
  
  
  </div>)}
  </main>
  
  )} */}
