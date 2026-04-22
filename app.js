/* ================================================================
   app.js — Portafolio · Dennis Cuadros Sotomayor
   Ingeniería de Sistemas y Computación · Base de Datos · 2025
================================================================ */

/* ============================================================
   1. DATOS DE LAS 16 SEMANAS
   status: "done"    → Completado  (badge verde)
           "pending" → Por completar (badge ámbar)
   Cambia githubUrl a tu repositorio real de cada semana.
============================================================ */
const weeks = [
  {
    num: 1,
    title: "Introducción a las Bases de Datos",
    desc:  "Conceptos fundamentales: definición de BD, tipos (relacional, NoSQL), rol del SGBD y primer modelado.",
    tags:  ["Conceptos BD", "Modelo ER", "SGBD"],
    status: "done",
    details: `
      <strong>Objetivos logrados:</strong>
      <ul>
        <li>Definición y propósito de una base de datos.</li>
        <li>Diferencias entre BD relacionales y NoSQL.</li>
        <li>Introducción al modelo Entidad-Relación (ER).</li>
        <li>Instalación y configuración de MySQL / PostgreSQL.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 2,
    title: "Modelo Entidad-Relación (ER)",
    desc:  "Diseño de diagramas ER: entidades, atributos, relaciones, cardinalidad y notación Chen vs. crow's foot.",
    tags:  ["Diagrama ER", "Cardinalidad", "Notación Chen"],
    status: "done",
    details: `
      <strong>Actividades realizadas:</strong>
      <ul>
        <li>Diseño de diagrama ER para un sistema universitario.</li>
        <li>Identificación de entidades fuertes y débiles.</li>
        <li>Cardinalidades 1:1, 1:N y M:N.</li>
        <li>Uso de draw.io para diagramas profesionales.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 3,
    title: "Modelo Relacional",
    desc:  "Transformación del modelo ER al relacional: tablas, claves primarias, foráneas e integridad referencial.",
    tags:  ["Tablas", "Primary Key", "Foreign Key"],
    status: "done",
    details: `
      <strong>Temas cubiertos:</strong>
      <ul>
        <li>De entidades a tablas relacionales paso a paso.</li>
        <li>PRIMARY KEY y FOREIGN KEY.</li>
        <li>Restricciones: NOT NULL, UNIQUE, CHECK, DEFAULT.</li>
        <li>Integridad referencial y acciones ON DELETE.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 4,
    title: "SQL: DDL – Creación de Esquemas",
    desc:  "Lenguaje de Definición de Datos: CREATE, ALTER y DROP. Creación de la base del proyecto integrador.",
    tags:  ["SQL", "DDL", "CREATE TABLE", "ALTER"],
    status: "done",
    details: `
      <strong>Scripts desarrollados:</strong>
      <ul>
        <li>CREATE DATABASE y CREATE TABLE con constraints.</li>
        <li>ALTER TABLE para añadir columnas y restricciones.</li>
        <li>DROP TABLE con IF EXISTS para seguridad.</li>
        <li>Documentación del esquema con comentarios SQL.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 5,
    title: "SQL: DML – Manipulación de Datos",
    desc:  "INSERT, UPDATE y DELETE. Transacciones y control de errores básico con ROLLBACK / COMMIT.",
    tags:  ["DML", "INSERT", "UPDATE", "DELETE"],
    status: "done",
    details: `
      <strong>Prácticas realizadas:</strong>
      <ul>
        <li>Inserción masiva con INSERT INTO … VALUES múltiples.</li>
        <li>UPDATE seguro con cláusula WHERE filtrada.</li>
        <li>DELETE con confirmación de registros afectados.</li>
        <li>Transacciones: BEGIN, COMMIT, ROLLBACK.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 6,
    title: "SQL: Consultas SELECT Básicas",
    desc:  "Consultas fundamentales: WHERE, ORDER BY, GROUP BY, HAVING, LIMIT y operadores lógicos.",
    tags:  ["SELECT", "WHERE", "ORDER BY", "GROUP BY"],
    status: "done",
    details: `
      <strong>Ejercicios resueltos:</strong>
      <ul>
        <li>Filtrado con =, &lt;&gt;, IN, BETWEEN, LIKE, IS NULL.</li>
        <li>Agrupación con COUNT, SUM, AVG, MAX, MIN.</li>
        <li>Ordenamiento multi-columna ASC / DESC.</li>
        <li>Subconsultas escalares en el WHERE.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 7,
    title: "JOINs y Subconsultas Avanzadas",
    desc:  "INNER, LEFT, RIGHT y FULL OUTER JOIN. Subconsultas correlacionadas y análisis de planes de ejecución.",
    tags:  ["JOIN", "Subconsultas", "EXPLAIN"],
    status: "done",
    details: `
      <strong>Casos de estudio:</strong>
      <ul>
        <li>JOIN entre 3 o más tablas del proyecto integrador.</li>
        <li>Diferencias prácticas: INNER vs LEFT JOIN.</li>
        <li>Subconsultas con EXISTS y NOT EXISTS.</li>
        <li>Uso de EXPLAIN para optimizar consultas lentas.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 8,
    title: "Normalización (1FN, 2FN, 3FN)",
    desc:  "Formas normales para eliminar redundancias y anomalías. Aplicación al esquema del proyecto integrador.",
    tags:  ["Normalización", "1FN", "2FN", "3FN"],
    status: "done",
    details: `
      <strong>Proceso aplicado:</strong>
      <ul>
        <li>Detección de dependencias funcionales.</li>
        <li>Transformación a 1FN, 2FN y 3FN paso a paso.</li>
        <li>Antes / después del esquema del proyecto.</li>
        <li>Verificación con herramientas de diagrama ER.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 9,
    title: "Vistas, Índices y Procedimientos",
    desc:  "Creación de VIEWS para abstracción, INDEX para rendimiento y primeros STORED PROCEDURES en PL/SQL.",
    tags:  ["VIEW", "INDEX", "Stored Procedure"],
    status: "done",
    details: `
      <strong>Temas trabajados:</strong>
      <ul>
        <li>CREATE VIEW para simplificar consultas frecuentes.</li>
        <li>Índices compuestos y su impacto en EXPLAIN.</li>
        <li>Procedimientos almacenados con parámetros IN / OUT.</li>
        <li>Ventajas de encapsular lógica en el servidor.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 10,
    title: "Funciones y Triggers",
    desc:  "Funciones definidas por el usuario (UDF) y disparadores TRIGGER para automatizar lógica de negocio.",
    tags:  ["FUNCTION", "TRIGGER", "Automatización"],
    status: "done",
    details: `
      <strong>Implementaciones realizadas:</strong>
      <ul>
        <li>Funciones escalares y de tabla en SQL.</li>
        <li>TRIGGER BEFORE / AFTER INSERT, UPDATE, DELETE.</li>
        <li>Caso práctico: auditoría automática de cambios.</li>
        <li>Pruebas de triggers con escenarios reales.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 11,
    title: "Transacciones y Concurrencia",
    desc:  "Propiedades ACID, niveles de aislamiento, bloqueos (locks) y manejo de deadlocks en entornos concurrentes.",
    tags:  ["ACID", "Transacciones", "Locks", "Deadlock"],
    status: "pending",
    details: `
      <strong>Contenido planificado:</strong>
      <ul>
        <li>ACID: Atomicidad, Consistencia, Aislamiento, Durabilidad.</li>
        <li>Niveles: READ UNCOMMITTED → SERIALIZABLE.</li>
        <li>Simulación de deadlocks y estrategias de resolución.</li>
        <li>Ejercicios con sesiones concurrentes en MySQL.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 12,
    title: "Seguridad y Gestión de Privilegios",
    desc:  "Gestión de usuarios, roles, GRANT/REVOKE y mejores prácticas de seguridad en bases de datos.",
    tags:  ["Seguridad", "GRANT", "REVOKE", "Roles"],
    status: "pending",
    details: `
      <strong>Contenido planificado:</strong>
      <ul>
        <li>CREATE USER con políticas de contraseña segura.</li>
        <li>GRANT y REVOKE a nivel de tabla y columna.</li>
        <li>Roles predefinidos y personalizados.</li>
        <li>Principio de mínimo privilegio aplicado al proyecto.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 13,
    title: "Backup, Restore y Replicación",
    desc:  "Estrategias de respaldo: mysqldump, pg_dump, backups lógicos vs físicos. Introducción a la replicación.",
    tags:  ["Backup", "Restore", "Replicación"],
    status: "pending",
    details: `
      <strong>Contenido planificado:</strong>
      <ul>
        <li>Backup completo e incremental con mysqldump.</li>
        <li>Restauración ante fallos simulados.</li>
        <li>Configuración básica maestro-esclavo (replicación).</li>
        <li>Políticas de retención de respaldos.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 14,
    title: "NoSQL – Introducción a MongoDB",
    desc:  "Bases de datos no relacionales: documentos BSON, colecciones, CRUD en MongoDB y comparativa con SQL.",
    tags:  ["NoSQL", "MongoDB", "BSON", "CRUD"],
    status: "pending",
    details: `
      <strong>Contenido planificado:</strong>
      <ul>
        <li>Instalación de MongoDB y uso de MongoDB Compass.</li>
        <li>Operaciones: insertOne, find, updateMany, deleteOne.</li>
        <li>Comparativa práctica: SQL vs NoSQL por caso de uso.</li>
        <li>Modelado de documentos embebidos y referenciados.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 15,
    title: "Proyecto Integrador – Desarrollo",
    desc:  "Implementación completa: diseño ER → esquema relacional → normalización → scripts SQL → consultas avanzadas.",
    tags:  ["Proyecto Final", "Integración", "SQL Avanzado"],
    status: "pending",
    details: `
      <strong>Entregables planificados:</strong>
      <ul>
        <li>Diagrama ER y modelo relacional documentados.</li>
        <li>Script SQL completo (DDL + DML + vistas + SP + triggers).</li>
        <li>Consultas avanzadas con JOINs y subconsultas.</li>
        <li>Informe técnico en PDF con capturas de evidencia.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  },
  {
    num: 16,
    title: "Exposición Final y Evaluación",
    desc:  "Presentación del proyecto integrador ante el docente: demo en vivo, sustentación y reflexión del ciclo.",
    tags:  ["Exposición", "Demo en Vivo", "Evaluación Final"],
    status: "pending",
    details: `
      <strong>Criterios de evaluación:</strong>
      <ul>
        <li>Funcionamiento correcto del sistema de base de datos.</li>
        <li>Calidad del diseño y normalización aplicada.</li>
        <li>Claridad en la sustentación oral y defensa técnica.</li>
        <li>Documentación técnica completa y repositorio publicado.</li>
      </ul>`,
    githubUrl: "https://github.com/dennis-cuadros"
  }
];

/* ============================================================
   2. RENDER DE TARJETAS
============================================================ */

/** Devuelve clase CSS y texto del estado */
function statusLabel(s) {
  if (s === 'done') return { cls: 'status-done',    txt: '✓ Completado'    };
  return                   { cls: 'status-pending', txt: '○ Por completar' };
}

/** Genera las 16 tarjetas en el grid */
function renderWeeks() {
  const grid = document.getElementById('weeks-grid');
  grid.innerHTML = '';

  weeks.forEach((w, idx) => {
    const st      = statusLabel(w.status);
    const tagsHTML = w.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const delay    = `${idx * 45}ms`;

    const card = document.createElement('article');
    card.className = 'week-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Semana ${w.num}: ${w.title}`);
    card.style.animationDelay = delay;

    card.innerHTML = `
      <!-- Número decorativo de fondo -->
      <span class="week-num-bg" aria-hidden="true">${String(w.num).padStart(2,'0')}</span>

      <!-- Fila superior: símbolo </> y chip de semana -->
      <div class="card-top">
        <div class="card-code-icon" aria-hidden="true">&lt;/&gt;</div>
        <div class="week-chip">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Semana ${w.num}
        </div>
      </div>

      <!-- Contenido -->
      <h3 class="week-title">${w.title}</h3>
      <p  class="week-desc">${w.desc}</p>

      <!-- Tecnologías -->
      <div class="week-tags">${tagsHTML}</div>

      <!-- Estado -->
      <div class="week-status">
        <span class="status-dot ${st.cls}"></span>
        <span class="${st.cls}">${st.txt}</span>
      </div>`;

    /* Abrir modal al hacer clic o presionar Enter/Espacio */
    card.addEventListener('click', () => openModal(w));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(w); }
    });

    grid.appendChild(card);
  });

  lucide.createIcons();
}

/** Calcula y anima la barra de progreso */
function animateProgress() {
  const done  = weeks.filter(w => w.status === 'done').length;
  const total = weeks.length;
  const pct   = Math.round((done / total) * 100);

  document.getElementById('progress-count').textContent = `${done} / ${total} semanas completadas`;
  document.getElementById('progress-pct').textContent   = `${pct}%`;

  /* Pequeño delay para que la transición CSS sea visible */
  setTimeout(() => {
    document.querySelector('.progress-fill').style.width = `${pct}%`;
  }, 250);
}

/* ============================================================
   3. MODAL
============================================================ */

/** Abre el modal con los datos de la semana */
function openModal(w) {
  const st = statusLabel(w.status);

  document.getElementById('modal-chip').textContent  = `Semana ${w.num}`;
  document.getElementById('modal-title').textContent = w.title;
  document.getElementById('modal-body').innerHTML    = w.details;
  document.getElementById('modal-tags').innerHTML    =
    w.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('modal-github').href       = w.githubUrl;

  /* Actualizar pastilla de estado */
  const statusEl = document.getElementById('modal-status');
  statusEl.className = `modal-status ${w.status}`;
  statusEl.innerHTML = w.status === 'done'
    ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Completado`
    : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Por completar`;

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

/** Cierra el modal */
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/** Cierra el modal al hacer clic en el overlay (fuera del cuadro) */
function closeModalOnBg(e) {
  if (e.target.id === 'modal-overlay') closeModal();
}

/* Cerrar modal con Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================================
   4. CANVAS ANIMADO  –  cuadrícula + partículas
============================================================ */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  const ctx    = canvas.getContext('2d');
  let W, H;
  const particles = [];
  const COUNT = 60;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x:  Math.random() * 1920,
      y:  Math.random() * 1080,
      r:  Math.random() * 1.6 + 0.4,
      dx: (Math.random() - 0.5) * 0.36,
      dy: (Math.random() - 0.5) * 0.36,
      a:  Math.random() * 0.5 + 0.12
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* Cuadrícula */
    ctx.strokeStyle = 'rgba(0,212,255,0.024)';
    ctx.lineWidth   = 1;
    const step = 65;
    for (let x = 0; x < W; x += step) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = 0; y < H; y += step) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

    /* Partículas */
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,212,255,${p.a})`;
      ctx.fill();
    });

    /* Conexiones */
    const MAX = 130;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < MAX) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0,102,255,${0.09*(1-d/MAX)})`;
          ctx.lineWidth   = 0.7;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   5. INICIALIZACIÓN
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initCanvas();
  renderWeeks();
  animateProgress();
});
