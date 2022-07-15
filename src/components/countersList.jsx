import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initalState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: 200 },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initalState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const hanldeReset = () => {
    setCounters(initalState);
  };

  const handlePlus = (id) => {
    const index = counters.findIndex((el) => el.id === id);
    const newCounters = [...counters];
    newCounters[index].value++;
    setCounters(newCounters);
  };

  const handleMinus = (id) => {
    const index = counters.findIndex((el) => el.id === id);
    const newCounters = [...counters];
    newCounters[index].value--;
    setCounters(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handlePlus}
          onDecrement={handleMinus}
          {...count}
        />
      ))}
      <button className="btn btn-primary btb-sm m-2" onClick={hanldeReset}>
        Reset
      </button>{" "}
    </>
  );
};

export default CountersList;
