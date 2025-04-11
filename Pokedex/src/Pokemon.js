function Pokemon(props) {
  return (
    <>
      <div className="custom-card">
        <img
          src={props.imageUrl}
          alt={props.alt}
          title={props.title}
          className="custom-card-img"
        />
        <div className="custom-card-body">
          <h3 className="custom-card-title">{props.title}</h3>
          <p className="custom-card-text">{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
