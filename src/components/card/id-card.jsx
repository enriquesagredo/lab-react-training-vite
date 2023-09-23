

function IdCard({ data }) {
  return (
    <div>
      {data.map((user, index) => (
        <div className="card mb-3" style={{ maxWidth: '540px' }} key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={user.img} className="img-fluid rounded-start" alt={`${user.firstName} ${user.lastName}`} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{user.firstName}</h5>
                <p className="card-text">
                  <strong>Apellido:</strong> {user.lastName}
                  <br />
                  <strong>Género:</strong> {user.gender}
                  <br />
                  <strong>Altura:</strong> {user.height} cm
                </p>
                <p className="card-text"><small className="text-muted">Última actualización hace 3 minutos</small></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IdCard;

