import Counter from "./counter"
import Todo from "./todo"

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Mening Loyihalarim</h1>
      <Todo />
      <Counter />
    </div>
  )
}

export default Home