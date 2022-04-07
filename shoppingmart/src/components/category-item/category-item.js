import { useNavigate } from "react-router-dom";
import "./category-item.styles.scss";
const Categoryitem = (props) => {
  const {
    category: { title, imageUrl },
  } = props;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(`/shop/${title}`);

  return (
    <div className="category-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  );
};

export default Categoryitem;
