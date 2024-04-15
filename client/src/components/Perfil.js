function Perfil() {
    return (
              <div className="card">
                <div className="rounded-top text-white d-flex flex-row bg-dark" >
                  <div className="ms-4 mt-5 d-flex flex-column" >
                    <p>
                        Mi foto
                    </p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-dark" data-mdb-ripple-color="dark">
                      Edit profile
                    </button>
                  </div>
                  <div className="ms-3" >
                    <h5>Ivan Alfaro</h5>
                    <p>Castellón de la Plana</p>
                  </div>
                </div>
                <div className="p-4 text-black" >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">253</p>
                      <p className="small text-muted mb-0">Rutas</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-1 h5">1026</p>
                      <p className="small text-muted mb-0">Seguidores</p>
                    </div>
                    <div>
                      <p className="mb-1 h5">478</p>
                      <p className="small text-muted mb-0">Siguiendo</p>
                    </div>
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Vehículos</p>
                    <div className="p-4" >
                      <p className="font-italic mb-1">Seat Ibiza 2005</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Últimas rutas realizadas</p>
                    <p className="mb-0"><a href="#!" className="text-muted">Mostrar todas</a></p>
                  </div>
                  <div className="row g-2">
                    <div className="col mb-2">
                      <p>Ruta 1</p>
                    </div>
                    <div className="col mb-2">
                    <p>Ruta 2</p>
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col">
                    <p>Ruta 3</p>
                    </div>
                    <div className="col">
                    <p>Ruta 4</p>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
  
  export default Perfil;
  