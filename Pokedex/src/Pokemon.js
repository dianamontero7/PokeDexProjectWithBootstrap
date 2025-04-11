function Pokemon(props) {
  return (
    <>
      <div id={props.id} className="card" style={{ width: "18rem",
                                                   margin: "20px",
                                                   border: "1px solid #ddd",
                                                   borderRadius: "8px",
                                                 }}>
      <img
          src={props.imageUrl}
          alt={props.alt}
      />
        <div className="card-body" style={{padding: "16px"}}>
          <h3 className="card-title" style={{fontSize: "1.25rem",
                                             marginBottom: "8px"}}>{props.title}</h3>
          <p className="custom-card-text" style={{ color: "black"}}>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Pokemon;
