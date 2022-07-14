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
    const newCounters = counters.filter((counter) => counter.id != id);
    setCounters(newCounters);
  };

  const hanldeReset = () => {
    setCounters(initalState);
  };

  const hanldePlus = (id) => {
    setCounters(
      initalState.map((el) => {
        if (el.id === id) {
          el.value += 1;
        }
      })
    );
  };

  const hanldeMinus = (id) => {
    setCounters(
      initalState.map((el) => {
        if (el.id === id) {
          el.value -= 1;
        }
      })
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={hanldePlus}
          onDecrement={hanldeMinus}
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
