import './Timeline.css'

export function Timeline() {
  return (
    <section className="timeline-section">

      <div className="timeline">

        {/* ITEM 1 */}

        <div className="timeline-item">

          <div className="timeline-top has-line">
            <h3>Técnico em informática</h3>
            <span>
                <img className='icons' src='localization.png' alt='Logo de localização'></img>
                IFPB - Campus Esperança
            </span>
            <small>(Educação)</small>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-bottom">
            <p>Mar 2022 - Dez 2024</p>
          </div>

        </div>

        {/* ITEM 2 */}

        <div className="timeline-item">

          <div className="timeline-top">
            <p>Set 2025 - Dez 2028</p>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-bottom has-line">
            <h3>Tecnólogo em Análise e Desenv. de Sistemas</h3>
            <span>
                <img className='icons' src='localization.png' alt='Logo de localização'></img>
                IFPB - Campus Esperança
            </span>
            <small>(Educação)</small>
          </div>

        </div>

        {/* ITEM 3 */}

        <div className="timeline-item">

          <div className="timeline-top has-line"><h3>Desenvolvedor Fullstack</h3>
            <span>
                <img className='icons' src='building.png' alt='Logo de prédio'></img>
                Codexity
            </span>
            <small>(Carreira)</small>
          </div>

          <div className="timeline-dot"></div>

          <div className="timeline-bottom">
            <p>Abr 2025 - o momento</p>
          </div>

        </div>

      </div>

    </section>
  )
}