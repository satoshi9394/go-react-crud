


export const App = () => {
  const appGet = async () => {
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json()
    console.log(data)
  }
  return (
    <main>
      <h1>Hello word desde react</h1>
    
      <button onClick={appGet}>
        obtener datos
      </button>
    </main>
  )
}
