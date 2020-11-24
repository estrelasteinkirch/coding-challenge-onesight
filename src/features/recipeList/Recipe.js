import { Link } from "react-router-dom";

export default function Recipe({ recipe }) {
  const { name, thumb, id } = recipe;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <img src={thumb} alt={name} />
      </td>

      <td>
        <Link to={`/receitas/${id}`}>Ver receita</Link>
      </td>
    </tr>
  );
}
