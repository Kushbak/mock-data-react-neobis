import { useEffect, useState } from "react";
import "./App.css";
import { createOrder, getOrders } from "./api";

function App() {
  const [data, setData] = useState([]);

  const addNewOrder = async () => {
    const updatedOrders = await createOrder({
      order_name: 'new Order',
      date: new Date(),
      owner: {
        name: 'new owner'
      }
    })
    console.log(updatedOrders)
    setData(updatedOrders)
  }

  useEffect(() => {
    getOrders()
      .then(response => {
        setData(response)
      })
  }, []);

  return (
    <div className="App">
      <h2>ЭТА ТИПА ГЛАВНАЯ СТРАНИЦА <button onClick={addNewOrder}>ДОБАВИТЬ НОВЫЙ ТОВАР</button></h2>
      <div className="orders">
        {data.map((item) => (
          <div key={item.id} className="order">
            <h2>название: {item.order_name} </h2>
            <h2>дата: {item.date}</h2>
            <h2>Продавец: {item.owner.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
