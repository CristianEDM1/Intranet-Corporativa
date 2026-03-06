import "../styles/Juridica.css";

export default function Juridica() {

  return (

    <div className="juridica-container">

      <header className="juridica-header">

        <div>
          <h1>Área Jurídica</h1>
          <p>
            Gestión de contratos, cumplimiento normativo y documentación corporativa.
          </p>
        </div>

        <button className="btn-primary">
          + Nuevo contrato
        </button>

      </header>


      <div className="juridica-search">

        <input
          type="text"
          placeholder="Buscar contratos, documentos o políticas..."
        />

      </div>


      <div className="juridica-tabs">

        <button className="active">Contratos</button>
        <button>Documentos</button>
        <button>Casos</button>
        <button>Normativa</button>

      </div>


      <section className="juridica-layout">


        <aside className="juridica-activity">

          <h3>Actividad legal</h3>

          <ul className="timeline">

            <li>
              <span></span>
              Contrato aprobado por dirección
            </li>

            <li>
              <span></span>
              Nueva política de datos registrada
            </li>

            <li>
              <span></span>
              Acuerdo comercial registrado
            </li>

            <li>
              <span></span>
              Actualización normativa interna
            </li>

          </ul>

        </aside>


        <main className="juridica-main">

          <h3>Contratos recientes</h3>

          <table className="tabla-legal">

            <thead>

              <tr>
                <th>Contrato</th>
                <th>Área</th>
                <th>Estado</th>
                <th>Vencimiento</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>Proveedor Logística</td>
                <td>Retail</td>
                <td>
                  <span className="estado activo">Activo</span>
                </td>
                <td>12/10/2026</td>
              </tr>

              <tr>
                <td>Servicio Ecommerce</td>
                <td>Ecommerce</td>
                <td>
                  <span className="estado revision">En revisión</span>
                </td>
                <td>05/09/2026</td>
              </tr>

              <tr>
                <td>Acuerdo Comercial</td>
                <td>Corporativo</td>
                <td>
                  <span className="estado alerta">Por vencer</span>
                </td>
                <td>01/07/2026</td>
              </tr>

            </tbody>

          </table>

        </main>


        <aside className="juridica-alertas">

          <h3>Alertas legales</h3>

          <ul>

            <li>
              Contrato proveedor textil vence en 15 días
            </li>

            <li>
              Revisión legal ecommerce pendiente
            </li>

            <li>
              Nueva normativa de datos por implementar
            </li>

          </ul>

        </aside>

      </section>

    </div>

  );

}