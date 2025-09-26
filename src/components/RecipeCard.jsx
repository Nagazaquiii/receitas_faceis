// Um componente para mostrar cada receita
function RecipeCard({ recipe }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      background: "#fafafa"
    }}>
      <h2>{recipe.nome}</h2>
      <p>{recipe.descricao}</p>
    </div>
  );
}

export default RecipeCard;
