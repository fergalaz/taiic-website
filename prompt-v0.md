# TAIIC — The AI Insight Circle — Landing Page

## Contexto
Landing page para The AI Insight Circle (TAIIC), una experiencia exclusiva donde ejecutivos C-Level analizan el impacto real de la IA en sus industrias. El sitio debe transmitir exclusividad, inteligencia y sofisticación. NO es un producto SaaS ni una startup — es un evento/experiencia de alto nivel para tomadores de decisiones.

## Stack requerido
- Next.js App Router
- Tailwind CSS
- Framer Motion para animaciones scroll-triggered
- Lucide icons o Phosphor icons (peso Light)
- Google Fonts: Instrument Serif (headlines), Geist Sans (body), Geist Mono (labels/eyebrows)

## Dirección de diseño

### Estética: Editorial Luxury + Ethereal Glass
- Fondo: OLED black (#050505), NUNCA #000000 puro
- Superficie de cards: #0A0A0B con borde hairline white/10
- Accent: Dorado desaturado (#C9A84C) — un solo color de acento, nada más
- Texto primario: #E8E4DC (warm off-white)
- Texto secundario: #8A8680 (warm gray)
- Textura: Noise overlay fijo a opacity 3-4% sobre todo el sitio para romper la planitud digital
- Ambient glow: Radial gradients dorados sutiles que se mueven entre secciones

### Tipografía
- Headlines: Instrument Serif, text-6xl a text-9xl en desktop, tracking-tight, leading-[0.9]
- Body: Geist Sans, text-base a text-lg, leading-relaxed, max-w-[65ch]
- Labels/eyebrows: Geist Mono, text-[11px], uppercase, tracking-[0.2em], color dorado
- NUNCA usar Inter, Roboto, Arial, Open Sans

### Layout
- Container: max-w-[1400px] mx-auto
- Full-height hero: min-h-[100dvh] (NUNCA h-screen)
- Grid asimétrico: Usar grid-cols-12 con distribuciones como 7/5, 5/7, 8/4
- Secciones con padding generoso: py-32 md:py-40 mínimo
- ROMPER la simetría: no todas las secciones deben tener el mismo layout
- Usar overlap, negative margins, y z-index para crear profundidad

### Cards — Patrón Double-Bezel (Doppelrand)
```
Outer shell: bg-white/[0.03] ring-1 ring-white/[0.08] p-1.5 rounded-[2rem]
Inner core: bg-[#0A0A0B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] rounded-[calc(2rem-0.375rem)]
```
- Hover: ring pasa a white/[0.15], inner bg sube a #0D0D0E
- Las cards DEBEN verse claramente distintas del fondo — aumentar contraste de bordes

### Motion
- Easing custom: cubic-bezier(0.32, 0.72, 0, 1) — NUNCA linear ni ease-in-out
- Scroll reveals: translate-y-16 opacity-0 → translate-y-0 opacity-100, 800ms+
- Spring physics en botones: type: "spring", stiffness: 400, damping: 25
- Staggered entry: delay incremental de 80-150ms entre elementos hermanos
- Botón pressed: active:scale-[0.98]

### Botones — Patrón Island
```
Pill shape: rounded-full px-8 py-4
Trailing icon: w-8 h-8 rounded-full bg-black/20 con icono centrado
Hover: group-hover:translate-x-1 en el icono
```

---

## Estructura de secciones (8 secciones)

### 1. NAVBAR — Floating Glass Pill
- Fija arriba centrada con pt-6
- backdrop-blur-2xl bg-white/[0.04] border border-white/[0.08] rounded-full
- Logo: Círculo SVG con "AI" dentro + wordmark "THE AI INSIGHT CIRCLE" en text-[11px] uppercase tracking-[0.15em]
- Links desktop: Experiencia, Equipo, Contenidos + botón pill "Registro" con borde dorado
- Mobile: Hamburger → overlay fullscreen backdrop-blur-3xl con links staggered

### 2. HERO — Impacto editorial, NO genérico
IMPORTANTE: El hero debe sentirse como la portada de una revista de negocios premium, no como un template de SaaS.

Layout: Editorial split 7/5 columns
- Columna izquierda:
  - Eyebrow: "STRATEGIC INTELLIGENCE FOR THE AI ECONOMY"
  - Headline: "Beyond" (línea 1) + "AI Hype" (línea 2). "AI" en color dorado.
  - Tamaño: text-6xl md:text-8xl lg:text-9xl
  - Subtexto: "Donde la inteligencia artificial deja de ser promesa y se convierte en criterio."
  - CTA: Botón Island dorado "Vive la experiencia" con ArrowRight

- Columna derecha (desktop only):
  - EN VEZ de un orb abstracto genérico, usar una imagen de fondo dramática (un auditorio vacío, una mesa de conferencia, un espacio arquitectónico premium) dentro de un contenedor con bordes redondeados, filtro de color oscuro con overlay dorado sutil, y un efecto de parallax o float suave.
  - O alternativa: un video placeholder con overlay oscuro y play button sutil.

- Scroll indicator animado al fondo

### 3. EXPERIENCIA — Editorial split con imagen real
Layout: grid 7/5

- Columna izquierda:
  - Eyebrow: "EXPERIENCIA"
  - Headline: "The AI Insight Circle"
  - 3 párrafos de copy (ver contenido abajo)
  - Pull quote con borde izquierdo dorado: "The AI Insight Circle no sigue la conversacion. La eleva. La ordena. Y, en muchos casos, la define."

- Columna derecha:
  - Imagen dentro de Double-Bezel card, aspect-ratio 3/4
  - Usar imagen relevante (conferencia, espacio premium, networking ejecutivo)

Copy:
"The AI Insight Circle es un espacio donde se define como la inteligencia artificial transformara los negocios, las industrias y la toma de decisiones a nivel regional."

"Reunimos a un circulo selecto de ejecutivos C-Level y lideres empresariales para participar en experiencias cuidadosamente disenadas, donde la conversacion trasciende la teoria y se enfoca en el impacto real de la IA."

"En un entorno de confianza, rigurosidad y alto nivel intelectual, los participantes acceden a perspectivas globales, casos concretos y discusiones estrategicas que permiten comprender —con precision— que esta funcionando, que no, y que viene."

### 4. OPORTUNIDADES — Bento grid asimétrico
Layout: grid-cols-12 con cards de tamaño variable (7/5, 5/7)

4 cards Double-Bezel, cada una con:
- Icono dentro de un contenedor cuadrado con fondo dorado sutil (bg-[#C9A84C]/10 border border-[#C9A84C]/20)
- Título en text-xl
- Descripción en text-sm text-secondary
- Hover: ring más visible + bg inner más claro

Cards:
1. (7 cols) "Analizar el impacto medible de la IA" — Evaluacion concreta del retorno de inversion y transformacion digital en distintas industrias.
2. (5 cols) "Anticipar riesgos estrategicos" — Identificacion temprana de amenazas y oportunidades en contextos de alta incertidumbre tecnologica.
3. (5 cols) "Traducir complejidad en decisiones" — Convertir lenguaje tecnico en frameworks accionables para la alta direccion.
4. (7 cols) "Generar conexiones entre lideres" — Networking de alto nivel entre ejecutivos que enfrentan desafios similares en sus industrias.

Texto adicional debajo: "La experiencia se enriquece con la participacion de speakers internacionales y una curaduria rigurosa de contenidos, donde el aprendizaje no solo proviene del exito, sino tambien del error."

### 5. EQUIPO — Layout diferente a las demás secciones
IMPORTANTE: Esta sección debe romper el patrón visual de las anteriores. Considerar:
- Una sección con fondo ligeramente diferente (gradiente sutil, o imagen de fondo con overlay muy oscuro)
- Layout 5/7 (invertido respecto a Experiencia)

- Eyebrow: "EQUIPO"
- Headline: "No es para todos." (línea 1) + "Es para quienes deciden." (línea 2, en dorado)

- Columna izquierda (5 cols): Copy + statement card
  Copy:
  "Un equipo multidisciplinario con experiencia en negocios, tecnologia y estrategia, que disena experiencias al nivel de quienes toman decisiones."
  "Cada encuentro combina contenido curado, aprendizaje real y networking de alto nivel, en entornos cuidadosamente seleccionados y con una ejecucion logistica de estandar excepcional."
  "Una experiencia 360, donde cada detalle esta pensado para ser tan relevante como la conversacion."
  
  Statement card Double-Bezel: "No se trata solo de entender la IA. Se trata de decidir mejor con ella." (segunda línea en dorado)

- Columna derecha (7 cols): 3 team cards en grid asimétrico
  - Cards con avatar placeholder (gradiente sutil, NO foto random de paisaje)
  - Nombres: "Por confirmar" / Roles: Director Estrategia, Director Contenidos, Director Experiencia

### 6. CONTENIDOS — Split con lista e industrias
Layout: grid 7/5

- Eyebrow: "CONTENIDOS"
- Headline: "Contenidos The AI Insight Circle"

- Columna izquierda (7 cols): Lista de industrias
  Sub-label: "IA POR INDUSTRIA"
  Cada item: dot dorado + texto, con hover que mueve el texto a la derecha y cambia color
  - IA en banca: eficiencia, riesgo y personalizacion
  - IA en retail: experiencia de cliente y optimizacion
  - IA en salud: decisiones clinicas y gestion operativa
  - IA en mineria/energia: optimizacion y seguridad
  - IA en telecomunicaciones: automatizacion y customer experience

- Columna derecha (5 cols): 3 pillar cards stacked
  Sub-label: "EJES TEMATICOS"
  Cards Double-Bezel con borde top dorado:
  1. Estrategia y Negocio — Modelos de decision, ROI de IA, y frameworks para la alta direccion.
  2. Transformacion y Liderazgo — Gestion del cambio, cultura digital, y liderazgo en entornos de incertidumbre.
  3. Riesgo, Etica y Regulacion — Gobernanza de datos, sesgo algoritmico, y cumplimiento normativo.

### 7. REGISTRO — Formulario centrado con glow
- Sección centrada con radial gradient dorado sutil de fondo
- Eyebrow: "REGISTRO"
- Headline: "Vive la experiencia ahora"
- Subtexto: "Completa tus datos para ser parte del proximo encuentro de The AI Insight Circle."

Formulario dentro de Double-Bezel card (max-w-2xl):
- Nombre + Apellido (2 cols)
- Email corporativo
- Empresa + Cargo (2 cols)
- Industria (select: Banca, Retail, Salud, Mineria y Energia, Telecomunicaciones, Tecnologia, Otro)
- Mensaje (textarea, opcional)
- Botón submit: "Enviar solicitud" dorado full-width con icono PaperPlaneTilt

Input styling: bg-white/[0.04] border border-white/[0.08] rounded-xl, focus con ring dorado

Estado success: Icono CheckCircle dentro de círculo dorado + "Gracias por tu interes" + "Nos pondremos en contacto contigo pronto para confirmar tu participacion."

### 8. FOOTER — Limpio, no genérico
- border-t border-white/[0.06]
- Grid asimétrico (5/3/4 cols)
- Col 1: Logo + wordmark + tagline "Strategic Intelligence for the AI Economy. Experiencias exclusivas para ejecutivos C-Level."
- Col 2: Links de navegación (Experiencia, Equipo, Contenidos, Registro)
- Col 3: Contacto (contacto@theaiinsightcircle.com) + link "Volver al inicio" con ArrowUp
- Bottom bar: Copyright 2026 + "Designed with precision."

---

## Anti-patterns — NUNCA hacer esto:
- NO usar purple/blue gradients ni neon glows
- NO usar #000000 puro como fondo
- NO crear 3 cards iguales en columnas simétricas
- NO repetir el mismo layout (label + h2 + contenido) en todas las secciones — variar
- NO usar Inter, Roboto, Arial
- NO usar imágenes de paisajes random como placeholder — usar gradientes sutiles o imágenes relevantes al contexto ejecutivo/conferencia
- NO usar emojis
- NO usar easing linear — siempre cubic-bezier custom
- NO dejar secciones como texto plano sobre fondo negro sin ninguna textura ni profundidad
- NO hacer todas las cards con opacity tan baja que no se distinguen del fondo
- NO usar "Lorem ipsum"
- NO hacer hover states instantáneos — siempre con transición de 300ms+

## Técnicas premium a aplicar:
- Noise/grain overlay fijo sobre todo el sitio (opacity 3-4%)
- Radial gradients ambientales que varían entre secciones
- Background imagery con overlay oscuro en al menos 1-2 secciones
- Parallax sutil o float animation en elementos visuales
- Staggered scroll reveals con delays incrementales
- True glassmorphism en navbar (backdrop-blur + inner border + inner shadow)
- Spotlight borders en cards al hacer hover (border que se ilumina)
- Whitespace generoso — dejar que el diseño respire
- Variación de ritmo entre secciones (algunas compactas, otras expansivas)
