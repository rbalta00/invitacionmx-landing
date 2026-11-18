'use client';

export default function Themes() {
  return (
    <section id="temas" style={{
      background: 'var(--bg-white)',
      padding: '4rem 2rem',
      marginTop: '2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '1rem',
          color: 'var(--primary-dark)',
        }}>
          Elige tu Tema
        </h2>
        <p style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '14px',
          marginBottom: '2rem',
        }}>
          Explora el catálogo en vivo: cada tarjeta es una demo interactiva real de la invitación.
        </p>
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {/* Altura fija medida contra el catalogo real (document.documentElement.scrollHeight
              = 4045px, remedido en vivo el 2026-11-18 -- sin cambio respecto a la
              medicion anterior del 2026-11-02, sigue en 14 temas) -- el iframe es
              de otro origen, no se puede leer su alto en vivo, asi que si el
              catalogo crece/encoge (mas/menos temas) hay que volver a medir y
              actualizar este numero para que no reaparezca un scroll interno.
              Nota: la medicion se tomo con la pestaña a ~1672px de ancho (no se
              pudo forzar el viewport a los ~1136px reales del contenedor de esta
              landing -- resize_window no cambia el ancho efectivo de la pagina en
              este entorno); si el layout del catalogo es sensible al ancho,
              remedir desde un dispositivo/ventana al ancho real del contenedor
              antes de confiar en este numero al pixel. */}
          <iframe
            src="https://administradorinvitamx.vercel.app/?catalog=true"
            title="Catálogo de Temas XV en vivo"
            style={{
              width: '100%',
              height: '4100px',
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
