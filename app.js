/* ================================================================
   app.js — Portafolio · Dennis Cuadros Sotomayor
   Ingeniería de Sistemas y Computación · Base de Datos · 2025
================================================================ */

/* ============================================================
   1. DATOS — 16 SEMANAS
   status: "done"    → Completado  (badge verde)
           "pending" → Por completar (badge ámbar)

   files: Array de archivos PDF por semana.
   Cada archivo: { name, path, type }
   Ejemplo:
     { name: "Manual de Instalación SQL", path: "SEMANA_1/Manual.pdf", type: "PDF" }
   Si no hay archivos, dejar el array vacío: files: []
============================================================ */
const weeks = [
  {
    num: 1, unit: 1,
    title: "Semana 1 — Introducción a Bases de Datos",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: [
      { name: "Manual de Instalación SQL",      path: "ARCH/SEMANA_1/Manual_de_Instalacion_SQL.pdf",    type: "PDF" },
      { name: "Manual de subir Web a GitHub",  path: "ARCH/SEMANA_1/Subir_Web_GitHub.pdf",  type: "PDF" },
      { name: "Guía para crear cuenta en GitHub",path: "ARCH/SEMANA_1/GUIA_GibHub.pdf",            type: "PDF" }
    ]
  },
  {
    num: 2, unit: 1,
    title: "Semana 2 — Modelo Entidad-Relación (ER)",
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
    githubUrl: "https://github.com/DCS1801/BASE-DE-DATOS-II-.git",
    files: [
      { name: "Manual de Instalación SQL",      path: "ARCH/SEMANA_1/Manual_de_Instalacion_SQL.pdf",    type: "PDF" },
      { name: "Manual de subir Web a GitHub",  path: "ARCH/SEMANA_2/Rep_BD.pdf",  type: "PDF" },
      
    ]
  },
  {
    num: 3, unit: 1,
    title: "Semana 3 — Modelo Relacional",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 4, unit: 1,
    title: "Semana 4 — SQL: DDL · Creación de Esquemas",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 5, unit: 2,
    title: "Semana 5 — SQL: DML · Manipulación de Datos",
    desc:  "INSERT, UPDATE y DELETE. Transacciones y control de errores con ROLLBACK / COMMIT.",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 6, unit: 2,
    title: "Semana 6 — SQL: Consultas SELECT Básicas",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 7, unit: 2,
    title: "Semana 7 — JOINs y Subconsultas Avanzadas",
    desc:  "INNER, LEFT, RIGHT y FULL OUTER JOIN. Subconsultas correlacionadas y planes de ejecución.",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 8, unit: 2,
    title: "Semana 8 — Normalización (1FN, 2FN, 3FN)",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 9, unit: 3,
    title: "Semana 9 — Vistas, Índices y Procedimientos",
    desc:  "Creación de VIEWS para abstracción, INDEX para rendimiento y primeros STORED PROCEDURES.",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 10, unit: 3,
    title: "Semana 10 — Funciones y Triggers",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 11, unit: 3,
    title: "Semana 11 — Transacciones y Concurrencia",
    desc:  "Propiedades ACID, niveles de aislamiento, bloqueos y manejo de deadlocks en entornos concurrentes.",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 12, unit: 3,
    title: "Semana 12 — Seguridad y Gestión de Privilegios",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 13, unit: 4,
    title: "Semana 13 — Backup, Restore y Replicación",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 14, unit: 4,
    title: "Semana 14 — NoSQL · Introducción a MongoDB",
    desc:  "Bases de datos no relacionales: documentos BSON, colecciones, CRUD en MongoDB y comparativa SQL.",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 15, unit: 4,
    title: "Semana 15 — Proyecto Integrador · Desarrollo",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  },
  {
    num: 16, unit: 4,
    title: "Semana 16 — Exposición Final y Evaluación",
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
    githubUrl: "https://github.com/dennis-cuadros",
    files: []
  }
];

/* ============================================================
   2. CONFIGURACIÓN DE UNIDADES
============================================================ */
const unitConfig = {
  1: { label: "Unidad 1", name: "Fundamentos y Modelado" },
  2: { label: "Unidad 2", name: "SQL y Normalización" },
  3: { label: "Unidad 3", name: "Objetos Avanzados y Administración" },
  4: { label: "Unidad 4", name: "Proyecto Integrador y NoSQL" }
};

/* ============================================================
   3. ÍCONOS SVG REUTILIZABLES
============================================================ */
const icons = {
  db: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>`,
  calendar: `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>`,
  file: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>`,
  eye: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>`,
  download: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>`,
  check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`,
  clock: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>`
};

/* ============================================================
   4. RENDER DE UNIDADES Y TARJETAS
============================================================ */
function statusInfo(s) {
  if (s === 'done') return { cls: 'status-done',    dot: 'status-dot status-done',    txt: '✓ Completado' };
  return                   { cls: 'status-pending', dot: 'status-dot status-pending', txt: '○ Por completar' };
}

function renderUnits() {
  const container = document.getElementById('units-container');
  const unitIds   = [...new Set(weeks.map(w => w.unit))];

  unitIds.forEach(uid => {
    const unitWeeks = weeks.filter(w => w.unit === uid);
    const cfg       = unitConfig[uid];

    const section = document.createElement('section');
    section.className = 'unit-section';
    section.setAttribute('aria-label', `${cfg.label}: ${cfg.name}`);

    section.innerHTML = `
      <div class="unit-header">
        <span class="unit-badge">${cfg.label}</span>
        <span class="unit-name">${cfg.name}</span>
        <span class="unit-count">${unitWeeks.length} semanas</span>
      </div>
      <div class="weeks-grid" id="unit-${uid}-grid" role="list"></div>`;

    container.appendChild(section);

    const grid = section.querySelector(`#unit-${uid}-grid`);
    unitWeeks.forEach((w, idx) => renderCard(w, idx, grid));
  });
}

function renderCard(w, idx, grid) {
  const st         = statusInfo(w.status);
  const filesCount = w.files ? w.files.length : 0;

  const card = document.createElement('article');
  card.className   = 'week-card';
  card.tabIndex    = 0;
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `Semana ${w.num}: ${w.title}`);
  card.style.animationDelay = `${idx * 55}ms`;

  card.innerHTML = `
    <div class="card-stripe"></div>
    <span class="card-num-bg" aria-hidden="true">${String(w.num).padStart(2,'0')}</span>

    <div class="card-body">
      <!-- Fila superior -->
      <div class="card-top-row">
        <span class="card-week-pill">
          ${icons.calendar}
          Semana ${String(w.num).padStart(2,'0')}
        </span>
        <div class="card-db-badge" title="Base de Datos" aria-hidden="true">
          ${icons.db}
        </div>
      </div>

      <!-- Título -->
      <h3 class="card-title">${w.title}</h3>

      <!-- Descripción -->
      <p class="card-desc">${w.desc}</p>

      <!-- Tags -->
      <div class="card-tags" aria-label="Tecnologías">
        ${w.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>

    <div class="card-divider"></div>

    <!-- Footer -->
    <div class="card-footer">
      <div class="card-status">
        <span class="${st.dot}"></span>
        <span class="${st.cls}">${st.txt}</span>
      </div>
      <div style="display:flex;align-items:center;gap:.5rem;">
        <span class="card-files-count">
          ${icons.file}
          ${filesCount} archivo${filesCount !== 1 ? 's' : ''}
        </span>
        <span class="card-arrow" aria-hidden="true">${icons.arrow}</span>
      </div>
    </div>`;

  card.addEventListener('click',   ()  => openPanel(w));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPanel(w); }
  });

  grid.appendChild(card);
}

/* ============================================================
   5. BARRA DE PROGRESO
============================================================ */
function animateProgress() {
  const done  = weeks.filter(w => w.status === 'done').length;
  const total = weeks.length;
  const pct   = Math.round((done / total) * 100);

  document.getElementById('progress-count').textContent = `${done} / ${total} semanas completadas`;
  document.getElementById('progress-pct').textContent   = `${pct}%`;

  setTimeout(() => {
    document.getElementById('progress-fill').style.width = `${pct}%`;
  }, 400);
}

/* ============================================================
   6. PANEL DE ARCHIVOS
============================================================ */
function openPanel(w) {
  const st = statusInfo(w.status);

  /* Chip y título */
  document.getElementById('panel-chip').textContent  = `Semana ${w.num}`;
  document.getElementById('panel-title').textContent = w.title;

  /* Estado */
  const statusEl = document.getElementById('panel-status');
  statusEl.className = `panel-status ${w.status}`;
  statusEl.innerHTML = w.status === 'done'
    ? `${icons.check} Completado`
    : `${icons.clock} Por completar`;

  /* Tags */
  document.getElementById('panel-tags').innerHTML =
    w.tags.map(t => `<span class="tag">${t}</span>`).join('');

  /* Detalles */
  document.getElementById('panel-details').innerHTML = w.details;

  /* GitHub */
  document.getElementById('panel-github').setAttribute('href', w.githubUrl);

  /* Archivos */
  const filesList = document.getElementById('panel-files');
  filesList.innerHTML = '';

  if (w.files && w.files.length > 0) {
    w.files.forEach(f => {
      const fileName = f.name;
      const row = document.createElement('div');
      row.className = 'file-row';
      row.innerHTML = `
        <div class="file-icon">${f.type}</div>
        <div class="file-info">
          <div class="file-name">${fileName}</div>
          <div class="file-meta">${f.path}</div>
        </div>
        <div class="file-actions">
          <a href="${f.path}" target="_blank" rel="noopener noreferrer"
             class="btn-view" aria-label="Ver ${fileName}">
            ${icons.eye} Ver
          </a>
          <a href="${f.path}" download="${fileName}"
             class="btn-dl" aria-label="Descargar ${fileName}">
            ${icons.download} Descargar
          </a>
        </div>`;
      filesList.appendChild(row);
    });
  } else {
    filesList.innerHTML = `
      <div class="no-files">
        📂 No hay archivos disponibles para esta semana aún.
      </div>`;
  }

  /* Abrir panel */
  document.getElementById('files-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  document.getElementById('files-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closePanelOnBg(e) {
  if (e.target.id === 'files-overlay') closePanel();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePanel();
});

/* ============================================================
   7. CANVAS ANIMADO (partículas rojas)
============================================================ */
function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const COUNT     = 60;
  const particles = [];

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
      r:  Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.32,
      dy: (Math.random() - 0.5) * 0.32,
      a:  Math.random() * 0.35 + 0.07
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    /* Cuadrícula sutil */
    ctx.strokeStyle = 'rgba(180,0,0,0.018)';
    ctx.lineWidth   = 1;
    const step = 72;
    for (let x = 0; x < W; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    /* Partículas */
    particles.forEach(p => {
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210,30,30,${p.a})`;
      ctx.fill();
    });

    /* Líneas de conexión */
    const MAX = 125;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < MAX) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(180,0,0,${0.08 * (1 - d / MAX)})`;
          ctx.lineWidth   = 0.65;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   8. INICIALIZACIÓN
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  renderUnits();
  animateProgress();
});