import "./Author.css";

const Author = ({
    name,
    avatarUrl = "https://unsplash.com/es/fotos/una-mano-sosteniendo-un-anillo-con-la-puesta-de-sol-en-el-fondo-ruJX1Qcz3T4",
    avatarAlt = "Avatar de un autor",
  }) => {
    return (
      <div className="author">
        <img src={avatarUrl} alt={avatarAlt} />
        <span className="paragraph paragraph-xs font-bold">{name}</span>
      </div>
    );
  };
  
  export default Author;
  