import React, { Suspense, useState } from "react";
import "./App.css";
import { MenuItem } from "./entities/MenuItem";
import FoodOrder from "./components/FoodOrder";
import { useSelector } from "react-redux";
import { RootState } from "./store";
const Foods = React.lazy(() => import("./components/Foods")); // Lazy load
export const foodItemsContext = React.createContext<MenuItem[]>([]); // Contexto para pasar los items de comida

function App() {
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null);
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);

  const foods = useSelector((state: RootState) => state.food);

  return (
    <foodItemsContext.Provider value={foods}>
      <div className="App">
        {/* Si NO hay comida seleccionada */}
        {!selectedFood ? (
          <>
            <button
              className="toggleButton"
              onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
            >
              {isChooseFoodPage ? "Disponibilidad" : "Pedir Comida"}
            </button>
            <h3 className="title">Comida Rápida Online</h3>
            {!isChooseFoodPage ? (
              <>
                <h4 className="subTitle">Menús</h4>
                <ul className="ulApp">
                  {foods.map((item: MenuItem) => (
                    <li key={item.id} className="liApp">
                      <p>{item.name}</p>
                      <p>#{item.quantity}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <Suspense fallback={<div>Cargando platos...</div>}>
                  <Foods foodItems={foods} onFoodSelected={setSelectedFood} />
                </Suspense>
              </>
            )}
          </>
        ) : (
          // Si hay comida seleccionada
          <FoodOrder
            food={selectedFood}
            onReturnToMenu={() => setSelectedFood(null)}
          />
        )}
      </div>
    </foodItemsContext.Provider>
  );
}

export default App;
