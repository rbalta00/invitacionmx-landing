'use client';

import { useEffect, useRef, useState } from 'react';

interface ThemesProps {
  catalogoUrl?: string;
  tituloIframe?: string;
}

// Altura fija del GRID de 14 tarjetas del catálogo (ver comentario de abajo sobre cómo se midió).
const ALTURA_GRID_CATALOGO = '4100px';

export default function Themes({
  catalogoUrl = 'https://invitaciones.invitamx.app/?catalog=true',
  tituloIframe = 'Catálogo de Temas XV en vivo',
}: ThemesProps = {}) {
  // Fix "demo en vivo desajustado en celular" (2026-11-26/27, v2 -- ver CLAUDE.md de
  // administradorinvitamx): el catálogo embebido abajo usa `vh` para el marco de celular de su
  // demo, que se calcula contra el alto de ESTE iframe, no contra la pantalla real del
  // visitante -- con el iframe fijo a 4100px (medido para que el grid quepa sin scroll), el
  // marco salía ~3362px de alto en celular. El catálogo nos avisa por `postMessage` cuándo entra
  // o sale de la vista de un tema/estilo; mientras está dentro, agrandamos el iframe al alto
  // real de la ventana del visitante (el `vh` de adentro ya calcula bien contra eso) y lo
  // regresamos a la altura fija del grid al volver.
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [alturaIframe, setAlturaIframe] = useState(ALTURA_GRID_CATALOGO);
  const [demoAbierta, setDemoAbierta] = useState(false);

  useEffect(() => {
    function onMessage(ev: MessageEvent) {
      if (!ev.data || ev.data.type !== 'invitamx-catalog-demo') return;
      // Solo confiar en mensajes que vengan del iframe real del catálogo, no de cualquier otra
      // ventana/origen que por lo que sea intente mandar el mismo tipo de mensaje.
      if (iframeRef.current && ev.source !== iframeRef.current.contentWindow) return;
      setDemoAbierta(!!ev.data.expanded);
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  useEffect(() => {
    if (!demoAbierta) {
      setAlturaIframe(ALTURA_GRID_CATALOGO);
      return;
    }
    const actualizar = () => setAlturaIframe(`${window.innerHeight}px`);
    actualizar();
    window.addEventListener('resize', actualizar);
    return () => window.removeEventListener('resize', actualizar);
  }, [demoAbierta]);

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
            ref={iframeRef}
            src={catalogoUrl}
            title={tituloIframe}
            style={{
              width: '100%',
              height: alturaIframe,
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
}
