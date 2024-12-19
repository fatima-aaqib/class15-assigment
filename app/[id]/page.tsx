

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DynamicTodos = async (props: any) =>  {
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.params.id}`)
    const response = await url.json()
    console.log("Single todos",response)
    return (
        <h1 className="text-6xl">
            Dynamic Route <br /> <br />
            {response.title} 
        </h1>
    )
}
export default DynamicTodos;





//
// practice hands on
{/*
    const DynamicTodos = asyn (props: any) =>{
    console.log(props)
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos/${props.param.id}`)
    const response = await url.json()
    console.log("Single todos",response)
    return(
    <h1 className="text-6xl">
    Dynamic Route <br /> <br />
    {response.title}
    </h1>
    
    
    )
}
export default DynamicTodos;

    
    
    
    
    
    
    
    
    
    
    
    */}
