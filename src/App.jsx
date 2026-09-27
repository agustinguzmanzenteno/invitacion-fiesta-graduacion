import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  GraduationCap,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

const EVENT_DATE = new Date("2026-10-10T17:00:00-04:00");

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    const difference = Math.max(0, EVENT_DATE.getTime() - now);
    return [
      ["Días", Math.floor(difference / 86400000)],
      ["Horas", Math.floor((difference / 3600000) % 24)],
      ["Min", Math.floor((difference / 60000) % 60)],
      ["Seg", Math.floor((difference / 1000) % 60)],
    ];
  }, [now]);
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const countdown = useCountdown();
  const eventHasArrived = countdown.every(([, value]) => value === 0);
  const confirmByWhatsApp = () => {
  const message = `Hola, confirmo mi asistencia a la celebración de Alejandra y Agustin`;

  const whatsappUrl = `https://wa.me/59163946752?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

  return (
    <main className="site-shell">
      {!opened ? (
        <section className="cover">
          <img className="botanical-frame cover-frame" src="/tropi-frame.png" alt="" aria-hidden="true" />
          <div className="cover-panel">
            <p className="kicker green">Dos personas · Dos momentos especiales</p>
            <h1>Una celebración</h1>
            <p className="cover-script">para compartir en familia</p>
            <div className="people-preview">
              <article className="alejandra-preview">
                <span>01</span><b>Alejandra Guzman Zenteno</b><small>Fiesta Tropi Coqueta</small>
              </article>
              <div className="preview-divider"><i>✦</i></div>
              <article className="agustin-preview">
                <span>02</span><b>Agustin Guzman Zenteno</b><small>Celebración de graduación</small>
              </article>
            </div>
            <button onClick={() => setOpened(true)}><Sparkles size={17} /> Abrir invitación</button>
            <small>10 de octubre de 2026</small>
          </div>
        </section>
      ) : (
        <div className="experience">
          <section className="tropical-section">
            <img className="botanical-frame invitation-frame" src="/tropi-frame.png" alt="" aria-hidden="true" />
            <div className="tropical-copy">
              <img className="panel-floral-frame" src="/hibiscus-margin.png" alt="" aria-hidden="true" />
              <p className="kicker green">Primera razón para celebrar</p>
              <p className="bows">୨ৎ · ୨ৎ</p>
              <h1>Fiesta <span>Tropi Coqueta</span></h1>
              <div className="thirty-celebration thirty-years"><b>Mis</b><span>30</span></div>
              <p className="celebrant">Alejandra Guzman Zenteno</p>
              <div className="pearl-rule"><span /><b>◉</b><span /></div>
              <p className="tropical-body">Entre flores, colores tropicales, lazos y mucha alegría, quiero celebrar un nuevo año de vida junto a las personas que más quiero.</p>
              <div className="tropical-event-grid">
                <article><CalendarDays /><small>Fecha</small><strong>Sábado 10</strong><span>Octubre de 2026</span></article>
                <article><Clock3 /><small>Hora</small><strong>17:00</strong><span>Te esperamos puntualmente</span></article>
                <article><MapPin /><small>Lugar</small><strong>Avenida Andina y Calle Ezequiel Rodriguez, Zona Capacachi Norte</strong><span>Cochabamba, Bolivia</span></article>
              </div>
              <div className="tropical-dress-code">
                <span className="dress-icon">✦</span>
                <div className="dress-details">
                  <b>Código de vestimenta</b>
                  <strong>Tropical elegante</strong>
                  <div className="color-palette" aria-label="Paleta sugerida: fucsia, rojo, naranja, amarillo suave y blanco">
                    <span className="swatch swatch-fuchsia" title="Fucsia" />
                    <span className="swatch swatch-red" title="Rojo" />
                    <span className="swatch swatch-orange" title="Naranja" />
                    <span className="swatch swatch-yellow" title="Amarillo suave" />
                    <span className="swatch swatch-white" title="Blanco" />
                  </div>
                </div>
              </div>
              <p className="hint">La celebración continúa con el gran logro de Agustin…</p>
              <a className="continue-link" href="#graduacion">Ver invitación <ChevronDown /></a>
            </div>
          </section>

          <section className="transition-section">
            <p>Segunda celebración</p>
            <GraduationCap strokeWidth={1.2} />
            <h2>Un sueño cumplido <span>una nueva etapa comienza</span></h2>
          </section>

          <section className="graduation-section" id="graduacion">
            <div className="confetti" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, index) => <i key={index} style={{ "--i": index }} />)}
            </div>
            <article className="graduation-card">
              <div className="corner tl" /><div className="corner tr" /><div className="corner bl" /><div className="corner br" />
              <GraduationCap className="hero-cap" strokeWidth={1.2} />
              <p className="kicker gold">Hoy celebramos un gran logro</p>
              <div className="ornament"><span>✦</span></div>
              <p className="intro">Después de años de esfuerzo, aprendizajes y sueños, ha llegado el momento de celebrar el cierre de una etapa y el comienzo de una nueva aventura.</p>
              <p className="invite">Acompáñanos a compartir este logro</p>
              <h3>Agustin Guzman Zenteno</h3>
              <p className="degree">Graduación · 2026</p>
              <a className="map-link" href="https://maps.app.goo.gl/ZetdjJrqStBAqRZj8" target="_blank" rel="noreferrer">
                <MapPin size={17} /> Abrir ubicación en Google Maps
              </a>
              <div className="countdown-block">
                {eventHasArrived ? (
                  <div className="big-day-message">
                    <div className="big-day-confetti" aria-hidden="true">
                      {Array.from({ length: 22 }).map((_, index) => <i key={index} style={{ "--i": index }} />)}
                    </div>
                    <Sparkles /><span>¡Llegó el gran día!</span><small>Es momento de celebrar</small>
                  </div>
                ) : (
                  <>
                    <p>Faltan</p>
                    <div className="countdown">
                      {countdown.map(([label, value]) => (
                        <div key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <div className="rsvp">
                <p>
                  Tu presencia hará que las celebraciones sean todavía más especiales.
                </p>

                <button type="button" onClick={confirmByWhatsApp}>
                  <Send size={17} />
                  Confirmar por WhatsApp
                </button>

                <small>
                  Presiona el botón y envía el mensaje para confirmar tu asistencia.
                </small>
              </div>
              <p className="closing">Con cariño, Alejandra y Agustin</p>
            </article>
          </section>
        </div>
      )}
    </main>
  );
}
