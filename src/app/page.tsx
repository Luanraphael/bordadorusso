import type { ReactNode } from "react";
import LandingEffects from "./landing-effects";

const CHECKOUT = "https://pay.hotmart.com/X108375866D?checkoutMode=10";

// Preços no formato "10$" (sem separador de milhar, para não parecer mil).
const PRICE = "10$";
const OLD_PRICE = "20$";
const SAVINGS = "137,50$";
const TOTAL_VALUE = "147,50$";

const HERO_RESULTS = [
  { src: "/assets/hero-1.jpg", alt: "Cuadro con textura y relieve", h: 650 },
  { src: "/assets/hero-2.jpg", alt: "Almohadón de bordado ruso", h: 650 },
  { src: "/assets/hero-3.jpg", alt: "Bolso personalizado", h: 650 },
  { src: "/assets/hero-4.jpg", alt: "Diseño infantil personalizado", h: 650 },
  { src: "/assets/hero-5.jpg", alt: "Posavasos, llaveros y souvenirs", h: 650 },
  { src: "/assets/hero-6.jpg", alt: "Nombre bordado personalizado", h: 650 },
  { src: "/assets/hero-7.jpg", alt: "Pieza de bordado ruso", h: 520 },
  { src: "/assets/hero-8.jpg", alt: "Pieza de bordado ruso", h: 650 },
];

const IDENTIFIED = [
  {
    title: "Pensás que necesitás saber dibujar",
    text: "Ves diseños que te encantan, pero no sabés cómo llevarlos a la tela.",
  },
  {
    title: "No sabes donde comprar los materiales",
    text: "No sabés qué comprar y temés gastar de más en materiales que no necesitás.",
  },
  {
    title: "Arrancás y abandonás por falta de claridad",
    text: "Los tutoriales sueltos te confunden y terminás trabándote en los primeros pasos.",
  },
  {
    title: "Querés generar ingresos, pero no sabés por dónde empezar",
    text: "Querés vender tus creaciones, pero no sabés qué piezas hacer ni cómo comenzar.",
  },
];

const PROOFS = [
  { src: "/assets/prueba-1.jpg", h: 1992 },
  { src: "/assets/prueba-2.jpg", h: 1858 },
  { src: "/assets/prueba-3.jpg", h: 1946 },
  { src: "/assets/prueba-4.jpg", h: 1852 },
  { src: "/assets/prueba-5.jpg", h: 1856 },
  { src: "/assets/prueba-6.jpg", h: 1927 },
];

const INCLUDES = [
  {
    icon: "🎥",
    title: "Videoclases completas paso a paso",
    text: "Desde cero hasta avanzado: seguí cada técnica en video, en orden, desde la primera puntada hasta la terminación.",
  },
  {
    icon: "🧶",
    title: "Donde comprar los materiales para gastar muy poco",
    text: "Sabé qué comprar y dónde conseguirlo sin gastar de más, en tu ciudad o por internet.",
  },
  {
    icon: "🖼️",
    title: "Más de 100 moldes listos para imprimir",
    text: "Imprimí, transferí y empezá. No necesitás saber dibujar.",
  },
  {
    icon: "🏡",
    title: "Ideas para crear, regalar o vender",
    text: "Creá cuadros, almohadones, bolsos y piezas para regalar o vender.",
  },
];

const BONUSES = [
  {
    img: "/assets/bono-1.png",
    h: 1133,
    title: "+100 Moldes Creativos Listos para Imprimir",
    text: "Diseños listos para imprimir y transferir.",
    value: "37,90$",
  },
  {
    img: "/assets/bono-2.png",
    h: 1133,
    title: "Guía paso a paso para conseguir los materiales economicos",
    text: "Qué comprar y dónde conseguirlo sin gastar de más.",
    value: "24,90$",
  },
  {
    img: "/assets/bono-3.png",
    h: 1133,
    title: "+10 Tutoriales paso a paso con ideas para crear y vender",
    text: "Tutoriales con nuevas ideas para crear, regalar o vender.",
    value: "29,90$",
  },
  {
    img: "/assets/bono-4.png",
    h: 1133,
    title: "Excel de Costos | Calcula a que precio vender",
    text: "Para saber cuánto cobrar si decidís vender.",
    value: "19,90$",
  },
  {
    img: "/assets/bono-5.jpg",
    h: 1275,
    title: "Certificado de finalización del Curso de Bordado Ruso",
    text: "Recibí tu certificado al completar el curso y reconocé todo lo que aprendiste.",
    value: "14,90$",
  },
];

const FAQ = [
  {
    q: "¿Necesito experiencia para empezar?",
    a: "No. El curso fue pensado para principiantes: son videoclases paso a paso que explican la técnica desde cero hasta el nivel avanzado.",
  },
  {
    q: "¿Los materiales son difíciles de conseguir?",
    a: "No. La herramienta especial para bordado ruso y el resto de los materiales son económicos y fáciles de conseguir. Dentro del curso vas a encontrar una guía simple para saber qué comprar sin gastar de más.",
  },
  {
    q: "¿Es un producto físico?",
    a: "No. Es un curso digital en videoclases y recibís el acceso después de confirmarse el pago.",
  },
  {
    q: "¿Puedo verlo desde el celular?",
    a: "Sí. Podés ver las videoclases desde el celular, una tablet o la computadora.",
  },
  {
    q: "¿Puedo vender las piezas que haga?",
    a: "Sí. Podés crear para uso personal, regalar o vender. Los resultados económicos dependen de cada persona y de cómo comercialice sus piezas.",
  },
  {
    q: "¿Cuándo recibo el acceso?",
    a: "El acceso se envía por correo después de confirmarse el pago.",
  },
];

function GiftIcon() {
  return (
    <svg className="brl__offer-line-icon" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
        d="M12 8v13m0-13V6a2 2 0 1 1 2 2h-2Zm0 0V5.5A2.5 2.5 0 1 0 9.5 8H12ZM5 12h14M5 12a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"
      />
    </svg>
  );
}

function Countdown({ as: Tag = "span", className, label }: { as?: "span" | "div"; className: string; label: ReactNode }) {
  return (
    <Tag className={className} data-brl-countdown aria-label="Tiempo restante de la oferta">
      {label}
      <strong>
        <b data-brl-minutes>10</b>:<b data-brl-seconds>00</b>
      </strong>
    </Tag>
  );
}

function OfferLine({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="brl__offer-line">
      <span>
        <GiftIcon />
        <span className="brl__offer-line-copy">
          <strong>{label}</strong>
        </span>
      </span>
      <em>{children}</em>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element -- imagens com width/height fixos, como na página de referência. */
export default function Home() {
  return (
    <main>
      <section id="brl" className="brl">
        <div className="brl__announcement" role="status">
          <div className="brl__announcement-copy">
            <Countdown className="brl__announcement-timer" label="OFERTA TERMINA EN " />
          </div>
        </div>

        <div className="brl__hero">
          <div className="brl__wrap brl__hero-inner">
            <div className="brl__hero-copy">
              <div className="brl__hero-author">
                <img src="/assets/juliana-avatar.jpg" alt="Juliana Duarte" width={120} height={120} loading="eager" className="brl__hero-author-image" />
                <span className="brl__hero-author-copy">
                  <small>MÉTODO CREADO Y ENSEÑADO POR</small>
                  <strong>Juliana Duarte</strong>
                  <em>Especialista en Bordado Ruso</em>
                </span>
              </div>
              <h1 aria-label="Aprendé Bordado Ruso desde cero y convertí este hobby en una nueva fuente de ingresos">
                <span className="brl__hero-title-line">Aprendé Bordado Ruso</span>{" "}
                <span className="brl__hero-title-line">desde cero y convertí</span>{" "}
                <em>
                  <span className="brl__hero-title-line">este hobby en una nueva</span>{" "}
                  <span className="brl__hero-title-line">fuente de ingresos</span>
                </em>
              </h1>
              <div className="brl__lead rte">
                <p>
                  Creá piezas con <strong>terminaciones profesionales y listas para vender</strong>, siguiendo{" "}
                  <strong>videoclases paso a paso, completas desde cero hasta avanzado,</strong> y más de <strong>100 moldes listos para usar</strong>. Empezá sin
                  experiencia, sin saber dibujar y sin necesitar materiales caros.
                </p>
              </div>
              <div className="brl__hero-results" aria-label="Ejemplos de piezas de bordado ruso">
                <div className="brl__hero-results-window">
                  <div className="brl__hero-results-rail" data-brl-hero-rail>
                    {[0, 1].map((group) => (
                      <div key={group} className="brl__hero-results-group" aria-hidden={group === 1 ? true : undefined}>
                        {HERO_RESULTS.map((r) => (
                          <figure key={r.src} className="brl__hero-result">
                            <img
                              src={r.src}
                              alt={group === 0 ? r.alt : ""}
                              width={520}
                              height={r.h}
                              loading={group === 0 ? "eager" : "lazy"}
                              className="brl__hero-result-image"
                            />
                          </figure>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="brl__identified brl__section">
          <div className="brl__wrap">
            <div className="brl__section-head brl__reveal">
              <h2>
                ¿Te sentís <em>identificado?</em>
              </h2>
              <p>Si alguna de estas situaciones te resulta familiar, este curso es para vos.</p>
            </div>
            <div className="brl__identified-grid">
              {IDENTIFIED.map((item) => (
                <article key={item.title} className="brl__identified-card brl__reveal">
                  <span className="brl__identified-x" aria-hidden="true">
                    ×
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="brl__identified-bridge brl__reveal">
              Si respondiste “sí” a alguna de estas situaciones, tenemos la solución.
            </p>
          </div>
        </div>

        <div className="brl__proof brl__section">
          <div className="brl__wrap">
            <div className="brl__section-head brl__reveal">
              <div className="brl__kicker">ELLAS YA SE ANIMARON</div>
              <h2>Empezaron desde cero</h2>
              <p>
                Mirá los mensajes de alumnas que se animaron a crear, mostrar sus trabajos y empezar a recibir sus primeros
                pedidos.
              </p>
            </div>
            <div className="brl__proof-grid" aria-label="Experiencias compartidas por alumnas">
              {PROOFS.map((p) => (
                <article key={p.src} className="brl__proof-card brl__reveal">
                  <img
                    src={p.src}
                    alt="Mensaje de una alumna sobre su emprendimiento de bordado ruso"
                    width={900}
                    height={p.h}
                    loading="lazy"
                    className="brl__proof-image"
                  />
                </article>
              ))}
            </div>
            <div className="brl__swipe brl__swipe--proof">
              Deslizá para ver sus experiencias <span aria-hidden="true">→</span>
            </div>
            <a className="brl__button brl__button--primary brl__section-cta brl__proof-cta" href={CHECKOUT} data-brl-checkout-link>
              <span>YO TAMBIÉN QUIERO EMPEZAR</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="brl__includes brl__section">
          <div className="brl__wrap">
            <div className="brl__section-head brl__reveal">
              <h2>
                ¿Qué vas a encontrar <em>adentro?</em>
              </h2>
              <p>Todo lo que necesitás para aprender desde cero y crear tus primeras piezas.</p>
            </div>
            <div className="brl__includes-grid">
              {INCLUDES.map((item) => (
                <article key={item.title} className="brl__include-card brl__reveal">
                  <span aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="brl__creator brl__section">
          <div className="brl__wrap brl__creator-card brl__reveal">
            <div className="brl__creator-media">
              <img
                src="/assets/juliana.png"
                alt="Juliana Duarte"
                width={900}
                height={1125}
                loading="lazy"
                className="brl__creator-image brl__creator-image--cutout"
              />
            </div>
            <div className="brl__creator-copy">
              <div className="brl__kicker">UN MENSAJE DE JULIANA</div>
              <h2>
                Creé este método para que <em>empezar te resulte simple</em>
              </h2>
              <div className="rte">
                <p>
                  Cuando empecé, no encontraba un curso que reuniera en un solo lugar los materiales correctos, la técnica y
                  las terminaciones. El Bordado Ruso es sencillo, pero sin una explicación clara puede parecer mucho más
                  difícil de lo que realmente es.
                </p>
                <p>
                  Por eso organicé este método paso a paso: para acompañarte desde tu primera puntada y ayudarte a crear tus
                  propias piezas con seguridad.
                </p>
              </div>
              <div className="brl__signature">
                <strong>Juliana Duarte</strong>
                <span>Profesora de bordado ruso y creadora del método</span>
              </div>
            </div>
          </div>
        </div>

        <div className="brl__bonuses brl__wrap brl__section">
          <div className="brl__section-head brl__reveal">
            <div className="brl__kicker">RECURSOS QUE ACOMPAÑAN TU CURSO</div>
            <h2>
              5 bonos para ayudarte a <em>crear desde el primer día</em>
            </h2>
            <p>Deslizá para conocer los recursos incluidos con tu acceso.</p>
          </div>
          <div className="brl__bonus-rail">
            {BONUSES.map((bonus, i) => (
              <article key={bonus.title} className="brl__bonus brl__reveal">
                <div className="brl__bonus-number">BONO {i + 1}</div>
                <img src={bonus.img} alt={bonus.title} width={850} height={bonus.h} loading="lazy" className="brl__bonus-image" />
                <h3>{bonus.title}</h3>
                <p>{bonus.text}</p>
                <div className="brl__bonus-value">
                  <s>{bonus.value}</s>
                  <strong>HOY GRATIS</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="brl__swipe brl__swipe--bonuses">
            Deslizá para ver todos los bonos <span aria-hidden="true">→</span>
          </div>
        </div>

        <div className="brl__offer brl__section brl__offer--mix" id="brl-offer">
          <div className="brl__wrap">
            <div className="brl__offer-price-box brl__reveal" id="brl-buy">
              <div className="brl__offer-social-ribbon" aria-label="Valoración de alumnas">
                <span aria-hidden="true">★★★★★</span>
                <strong>4,9/5 · +890 alumnas</strong>
              </div>
              <Countdown as="div" className="brl__offer-timer brl__offer-timer--inline" label={<span>Oferta reservada por</span>} />
              <h2 className="brl__offer-product-title">Curso de Bordado Ruso en videoclases, desde cero | Juliana Duarte</h2>
              <div className="brl__offer-price-row">
                <s>{OLD_PRICE}</s>
                <strong>{PRICE}</strong>
              </div>
              <div className="brl__offer-lines">
                <OfferLine label="Videoclases prácticas paso a paso, desde cero hasta avanzado">INCLUIDAS</OfferLine>
                <OfferLine label="Soporte por WhatsApp con Juliana para resolver tus dudas">INCLUIDO</OfferLine>
                {BONUSES.map((bonus, i) => (
                  <OfferLine key={bonus.title} label={`Bono #${i + 1}: ${bonus.title}`}>
                    <s>{bonus.value}</s>
                    <strong>GRATIS</strong>
                  </OfferLine>
                ))}
              </div>
              <p className="brl__offer-savings">Ahorrás en total {SAVINGS}</p>
              <div className="brl__offer-slots brl__offer-slots--critical">
                <span aria-hidden="true"></span>
                <div>
                  <p>
                    Quedan <strong>5 cupos disponibles</strong> con este precio
                  </p>
                  <span className="brl__offer-slots-bar" aria-hidden="true">
                    <i></i>
                  </span>
                </div>
              </div>
              <div className="brl__offer-purchase">
                <a className="brl__button brl__button--primary brl__button--full" href={CHECKOUT} data-brl-checkout-link>
                  <span>QUIERO EMPEZAR AHORA</span>
                  <small>Acceso inmediato · 14 días de garantía</small>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="brl__summary brl__section">
          <div className="brl__wrap">
            <div className="brl__value-summary brl__reveal">
              <div className="brl__value-summary-head">
                <span>RESUMEN DE TODO LO QUE RECIBÍS</span>
                <h3>Todo para aprender, crear y empezar a vender</h3>
              </div>
              <div className="brl__value-lines">
                <div>
                  <span>🧶 Curso Digital de Bordado Ruso desde Cero</span>
                  <strong>{OLD_PRICE}</strong>
                </div>
                <div>
                  <span>▶ Videoclases paso a paso, desde cero hasta avanzado</span>
                  <strong>INCLUIDAS</strong>
                </div>
                {BONUSES.slice(0, 4).map((bonus) => (
                  <div key={bonus.title}>
                    <span>🎁 {bonus.title}</span>
                    <strong>
                      <s>{bonus.value}</s> GRATIS
                    </strong>
                  </div>
                ))}
                <div>
                  <span>🎓 Certificado de finalización</span>
                  <strong>
                    <s>{BONUSES[4].value}</s> GRATIS
                  </strong>
                </div>
                <div className="brl__value-support">
                  <span>💬 Soporte por WhatsApp con Juliana</span>
                  <strong>INCLUIDO</strong>
                </div>
              </div>
              <div className="brl__value-total">
                <span>VALOR REAL DE TODO</span>
                <s>{TOTAL_VALUE}</s>
              </div>
              <div className="brl__value-today">
                <span>HOY PAGÁS SOLAMENTE</span>
                <strong>{PRICE}</strong>
                <small>AHORRÁS {SAVINGS}</small>
              </div>
              <a className="brl__button brl__button--primary brl__button--full" href={CHECKOUT} data-brl-checkout-link>
                <span>QUIERO ACCEDER AHORA</span>
                <span aria-hidden="true">→</span>
              </a>
              <p>El acceso incluye el curso completo en videoclases y 5 bonos.</p>
            </div>
          </div>
        </div>

        <div className="brl__faq brl__section">
          <div className="brl__wrap">
            <div className="brl__section-head brl__reveal">
              <div className="brl__kicker">PREGUNTAS FRECUENTES</div>
              <h2>
                Todo lo que necesitás saber <em>antes de empezar</em>
              </h2>
            </div>
            <div className="brl__faq-list">
              {FAQ.map((item) => (
                <details key={item.q} className="brl__faq-item brl__reveal">
                  <summary>
                    {item.q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <div className="rte">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="brl__final brl__wrap brl__section brl__reveal">
          <div className="brl__kicker">EMPEZÁ HOY</div>
          <h2>
            Aprovechá el 50% OFF y <em>empezá hoy</em>
          </h2>
          <p>Aprendé con videoclases paso a paso, desde cero hasta avanzado, y creá para vos, para regalar o para empezar a vender desde casa.</p>
          {/* Os espaços entre o selo e o mockup reproduzem a linha da referência (os dois são inline). */}
          <div className="brl__final-promo">SOLO HOY: LOS 5 BONOS VAN GRATIS</div>{" "}
          <img src="/assets/mockup.jpg" alt="Curso de Bordado Ruso en videoclases" width={900} height={675} loading="lazy" className="brl__final-image" />{" "}
          <div className="brl__price brl__price--center">
            <span className="brl__price-compare">{OLD_PRICE}</span>
            <strong>{PRICE}</strong>
          </div>
          <a className="brl__button brl__button--primary" href={CHECKOUT} data-brl-checkout-link>
            <span>QUIERO ACCEDER CON 50% OFF</span>
            <span aria-hidden="true">→</span>
          </a>
          <div className="brl__legal">Producto digital. Las imágenes de piezas son ilustrativas.</div>
        </div>
      </section>
      <LandingEffects />
    </main>
  );
}
