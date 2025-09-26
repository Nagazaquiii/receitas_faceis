import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/recipes")
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🍳 Receitas de Culinária</h1>
      <div style={{ display: "grid", gap: "10px" }}>
        {recipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}

export default App;
