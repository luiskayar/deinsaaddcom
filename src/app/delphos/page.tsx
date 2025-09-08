"use client";
import React, { useState } from 'react';
import { quantifyBold } from '@/app/fonts';

// Tipo para los módulos
interface Modulo {
  id: number;
  titulo: string;
  icono: string;
  descripcion: string;
  caracteristicas: string[];
}

// Datos de los módulos
const modulos: Modulo[] = [
  {
    id: 1,
    titulo: "Planificación Estratégica",
    icono: `<svg width="32" height="32" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.3 42.6667H15.9V21.3333H5.3V42.6667ZM21.2 42.6667H31.8V5.33333H21.2V42.6667ZM37.1 42.6667H47.7V26.6667H37.1V42.6667ZM0 42.6667V21.3333C0 19.8667 0.5194 18.6116 1.5582 17.568C2.597 16.5244 3.84427 16.0018 5.3 16H15.9V5.33333C15.9 3.86667 16.4194 2.61156 17.4582 1.568C18.497 0.524445 19.7443 0.00177778 21.2 0H31.8C33.2575 0 34.5056 0.522667 35.5444 1.568C36.5832 2.61333 37.1018 3.86844 37.1 5.33333V21.3333H47.7C49.1575 21.3333 50.4056 21.856 51.4444 22.9013C52.4832 23.9467 53.0018 25.2018 53 26.6667V42.6667C53 44.1333 52.4815 45.3893 51.4444 46.4347C50.4074 47.48 49.1593 48.0018 47.7 48H5.3C3.8425 48 2.59523 47.4782 1.5582 46.4347C0.521167 45.3911 0.00176667 44.1351 0 42.6667Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Defina, gestione y proyecte el futuro de su organización con precisión. Alineé metas, KPIs, planes y presupuestos bajo metodologías como BSC o GpRD, apoyado por inteligencia artificial, simulaciones avanzadas y análisis estratégico 360°.",
    caracteristicas: ["Metas y KPIs alineados", "Simulación de escenarios", "Inteligencia estratégica", "Metodologías flexibles"]
  },
  {
    id: 2,
    titulo: "Planes Anuales Operativos",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M24 7.5C23.6022 7.5 23.2206 7.65804 22.9393 7.93934C22.658 8.22064 22.5 8.60218 22.5 9V12C22.5 12.3978 22.658 12.7794 22.9393 13.0607C23.2206 13.342 23.6022 13.5 24 13.5C24.3978 13.5 24.7794 13.342 25.0607 13.0607C25.342 12.7794 25.5 12.3978 25.5 12V9C25.5 8.60218 25.342 8.22064 25.0607 7.93934C24.7794 7.65804 24.3978 7.5 24 7.5ZM7.5 24C7.5 23.6022 7.65804 23.2206 7.93934 22.9393C8.22064 22.658 8.60218 22.5 9 22.5H12C12.3978 22.5 12.7794 22.658 13.0607 22.9393C13.342 23.2206 13.5 23.6022 13.5 24C13.5 24.3978 13.342 24.7794 13.0607 25.0607C12.7794 25.342 12.3978 25.5 12 25.5H9C8.60218 25.5 8.22064 25.342 7.93934 25.0607C7.65804 24.7794 7.5 24.3978 7.5 24ZM34.5 24C34.5 23.6022 34.658 23.2206 34.9393 22.9393C35.2206 22.658 35.6022 22.5 36 22.5H39C39.3978 22.5 39.7794 22.658 40.0607 22.9393C40.342 23.2206 40.5 23.6022 40.5 24C40.5 24.3978 40.342 24.7794 40.0607 25.0607C39.7794 25.342 39.3978 25.5 39 25.5H36C35.6022 25.5 35.2206 25.342 34.9393 25.0607C34.658 24.7794 34.5 24.3978 34.5 24ZM24 34.5C24.3978 34.5 24.7794 34.658 25.0607 34.9393C25.342 35.2206 25.5 35.6022 25.5 36V39C25.5 39.3978 25.342 39.7794 25.0607 40.0607C24.7794 40.342 24.3978 40.5 24 40.5C23.6022 40.5 23.2206 40.342 22.9393 40.0607C22.658 39.7794 22.5 39.3978 22.5 39V36C22.5 35.6022 22.658 35.2206 22.9393 34.9393C23.2206 34.658 23.6022 34.5 24 34.5Z" fill="#FF6D00"/>
    <path d="M9.90001 12.022L10.94 13.062C11.223 13.3351 11.602 13.4861 11.9953 13.4825C12.3886 13.4789 12.7648 13.321 13.0427 13.0428C13.3207 12.7645 13.4783 12.3882 13.4815 11.9949C13.4848 11.6016 13.3334 11.2228 13.06 10.94L12.022 9.90001C14.7132 7.61365 18.0025 6.14528 21.5015 5.66836C25.0004 5.19144 28.5627 5.72589 31.7677 7.20858C34.9726 8.69128 37.6862 11.0603 39.588 14.0357C41.4898 17.0111 42.5002 20.4687 42.5 24C42.5091 28.3897 40.9485 32.638 38.1 35.978L37.06 34.938C36.9216 34.7948 36.756 34.6806 36.573 34.6021C36.3899 34.5236 36.1931 34.4823 35.9939 34.4806C35.7947 34.479 35.5972 34.5171 35.4129 34.5926C35.2286 34.6681 35.0612 34.7795 34.9204 34.9204C34.7796 35.0613 34.6683 35.2289 34.593 35.4132C34.5177 35.5976 34.4798 35.7952 34.4816 35.9943C34.4835 36.1935 34.5249 36.3903 34.6036 36.5733C34.6823 36.7562 34.7967 36.9217 34.94 37.06L35.978 38.1C32.638 40.9485 28.3897 42.5091 24 42.5C20.4687 42.5002 17.0111 41.4898 14.0357 39.588C11.0603 37.6862 8.69128 34.9726 7.20858 31.7677C5.72589 28.5627 5.19143 25.0004 5.66836 21.5015C6.14528 18.0025 7.61365 14.7132 9.90001 12.022ZM8.80001 8.79801C6.80048 10.7922 5.21461 13.1617 4.13346 15.7705C3.05232 18.3793 2.49721 21.176 2.50001 24C2.50001 35.874 12.126 45.5 24 45.5C26.8232 45.5033 29.6193 44.949 32.2277 43.8689C34.8362 42.7888 37.2056 41.2042 39.2 39.206L39.202 39.202M39.202 39.202C41.2008 37.2075 42.788 34.8378 43.8684 32.229C44.9489 29.6202 45.5033 26.8237 45.5 24C45.5 12.126 35.874 2.50001 24 2.50001C21.1762 2.49695 18.3796 3.05174 15.7708 4.13254C13.1619 5.21334 10.7943 6.79885 8.80001 8.79801" fill="#FF6D00"/>
    <path d="M15.8859 34.2341L24.1319 30.486C25.7499 29.7521 26.5579 29.384 27.2519 28.866C27.8639 28.406 28.4099 27.862 28.8679 27.248C29.3859 26.556 29.7539 25.748 30.4879 24.13L34.2359 15.884C34.7819 14.684 35.0559 14.082 34.9439 13.718C34.8958 13.5627 34.8106 13.4213 34.6956 13.3063C34.5806 13.1913 34.4393 13.1061 34.2839 13.058C33.9199 12.946 33.3199 13.218 32.1179 13.766L23.8719 17.514C22.2539 18.248 21.4459 18.616 20.7519 19.134C20.1399 19.594 19.5939 20.1381 19.1359 20.752C18.6179 21.444 18.2499 22.2521 17.5159 23.8701L13.7679 32.1161C13.2219 33.3161 12.9479 33.9181 13.0599 34.2821C13.1079 34.4374 13.1932 34.5788 13.3082 34.6938C13.4232 34.8088 13.5645 34.894 13.7199 34.9421C14.0839 35.0541 14.6839 34.7821 15.8859 34.2341ZM24.0019 28C22.941 28 21.9236 27.5786 21.1735 26.8285C20.4233 26.0783 20.0019 25.0609 20.0019 24C20.0019 22.9392 20.4233 21.9218 21.1735 21.1716C21.9236 20.4215 22.941 20 24.0019 20C25.0628 20 26.0802 20.4215 26.8303 21.1716C27.5805 21.9218 28.0019 22.9392 28.0019 24C28.0019 25.0609 27.5805 26.0783 26.8303 26.8285C26.0802 27.5786 25.0628 28 24.0019 28Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Ejecute su estrategia con eficiencia, alineando metas operativas y presupuestos. Controle compras, riesgos y cargas de trabajo, con integración total a su ERP y enfoque en resiliencia institucional.",
    caracteristicas: ["Alineación operativa", "Presupuesto y compras", "Riesgos y resiliencia", "Gestión de capacidad"]
  },
  {
    id: 3,
    titulo: "Gestión de Proyectos",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M44.7784 3.58696C44.7613 3.50405 44.7209 3.42773 44.662 3.36696C44.603 3.30619 44.528 3.26348 44.4456 3.24384C38.9547 1.90134 26.2675 6.6854 19.3937 13.5563C18.1678 14.7724 17.0501 16.093 16.0534 17.5032C13.9337 17.3157 11.8141 17.4723 10.0075 18.2598C4.9103 20.5032 3.42624 26.357 3.0128 28.8751C2.98935 29.0129 2.9982 29.1543 3.03865 29.2881C3.07909 29.422 3.15004 29.5446 3.2459 29.6464C3.34176 29.7481 3.45993 29.8263 3.5911 29.8746C3.72228 29.923 3.86289 29.9403 4.00187 29.9251L12.1872 29.0223C12.193 29.6394 12.2302 30.2558 12.2987 30.8692C12.3399 31.2951 12.529 31.6931 12.8331 31.9942L16.0028 35.1563C16.3042 35.46 16.702 35.649 17.1278 35.6907C17.7377 35.7589 18.3507 35.7961 18.9644 35.8023L18.0662 43.9773C18.0513 44.1162 18.0687 44.2567 18.1171 44.3878C18.1655 44.5189 18.2437 44.637 18.3454 44.7328C18.4471 44.8286 18.5697 44.8996 18.7034 44.9401C18.8371 44.9806 18.9784 44.9896 19.1162 44.9663C21.6297 44.5632 27.4937 43.0792 29.7241 37.982C30.5116 36.1754 30.6728 34.066 30.4909 31.9566C31.9045 30.9599 33.2286 29.8419 34.4481 28.6154C41.3434 21.7548 46.1003 9.35071 44.7784 3.58696ZM27.5687 20.431C26.9391 19.8018 26.5102 19 26.3364 18.127C26.1625 17.254 26.2514 16.349 26.5919 15.5266C26.9324 14.7042 27.5092 14.0012 28.2493 13.5066C28.9894 13.012 29.8595 12.748 30.7497 12.748C31.6398 12.748 32.51 13.012 33.2501 13.5066C33.9901 14.0012 34.5669 14.7042 34.9074 15.5266C35.2479 16.349 35.3369 17.254 35.163 18.127C34.9891 19 34.5602 19.8018 33.9306 20.431C33.5131 20.8491 33.0173 21.1808 32.4714 21.4071C31.9256 21.6335 31.3406 21.7499 30.7497 21.7499C30.1588 21.7499 29.5737 21.6335 29.0279 21.4071C28.4821 21.1808 27.9863 20.8491 27.5687 20.431Z" fill="#FF6D00"/>
    <path d="M15.7875 37.4466C15.2737 37.9613 14.4497 38.1619 13.4578 38.3334C11.2294 38.7131 9.26156 36.7875 9.66187 34.5347C9.81469 33.6806 10.2666 32.4834 10.5478 32.2022C10.6093 32.1419 10.6502 32.0638 10.6648 31.9789C10.6793 31.8941 10.6667 31.8068 10.6289 31.7294C10.591 31.6521 10.5297 31.5887 10.4537 31.5482C10.3777 31.5077 10.2909 31.4921 10.2056 31.5038C8.95946 31.6562 7.80013 32.2212 6.91219 33.1088C4.70813 35.3147 4.5 43.5 4.5 43.5C4.5 43.5 12.69 43.2919 14.8941 41.0859C15.7843 40.1987 16.35 39.0376 16.5 37.7897C16.5347 37.3978 16.0575 37.1644 15.7875 37.4466Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Impulsar sus iniciativas de mejora, innovación y crecimiento de la organización, con una plataforma robusta que incluye herramientas de apoyo tales como: Gantt, PERT y rutas críticas, Presupuesto vs. ejecución, Riesgos y problemas, Georreferenciación, Delphos AI para predicción y automatización.",
    caracteristicas: ["Gantt, PERT y rutas críticas", "Presupuesto vs. ejecución", "Riesgos y problemas", "Georreferenciación"]
  },
  {
    id: 4,
    titulo: "Gestión del Desempeño",
    icono: `<svg width="32" height="32" viewBox="0 0 53 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 31V34C34 35.2 33.2 36 32 36C30.8 36 30 35.2 30 34V31H18V34C18 35.2 17.2 36 16 36C14.8 36 14 35.2 14 34V31H10C8.6 31 7.2 30.6 6 30V38C6 41.4 8.6 44 12 44H36C39.4 44 42 41.4 42 38V30C40.8 30.6 39.4 31 38 31H34ZM42 12H34V10C34 6.6 31.4 4 28 4H20C16.6 4 14 6.6 14 10V12H6C4.8 12 4 12.8 4 14V22C4 25.4 6.6 28 10 28H38C41.4 28 44 25.4 44 22V14C44 12.8 43.2 12 42 12ZM30 12H18V10C18 8.8 18.8 8 20 8H28C29.2 8 30 8.8 30 10V12Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Transforme la gestión del talento organizacional con un enfoque en la medición de resultados. Nuestro módulo va más allá de la evaluación tradicional del desempeño, entendida como un proceso continuo y sistemático para analizar, medir y valorar el rendimiento de los colaboradores. A la luz de las leyes locales, hemos evolucionado la herramienta para superar el autoengaño de la administración pública, donde la falta de trazabilidad y los planes individuales de trabajo son la norma.",
    caracteristicas: []
  },
  {
    id: 5,
    titulo: "Gestión de Riesgos",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.6 9.22572L43.002 31.5477C44.928 34.7537 43.982 38.9717 40.888 40.9677C39.8502 41.6415 38.6393 41.9999 37.402 41.9997H10.596C6.954 41.9997 4 38.9397 4 35.1617C4 33.8837 4.346 32.6337 4.996 31.5477L18.4 9.22572C20.324 6.01972 24.392 5.03772 27.486 7.03372C28.342 7.58572 29.066 8.33572 29.6 9.22572ZM24 33.9997C24.5304 33.9997 25.0391 33.789 25.4142 33.4139C25.7893 33.0389 26 32.5301 26 31.9997C26 31.4693 25.7893 30.9606 25.4142 30.5855C25.0391 30.2104 24.5304 29.9997 24 29.9997C23.4696 29.9997 22.9609 30.2104 22.5858 30.5855C22.2107 30.9606 22 31.4693 22 31.9997C22 32.5301 22.2107 33.0389 22.5858 33.4139C22.9609 33.789 23.4696 33.9997 24 33.9997ZM24 15.9997C23.4696 15.9997 22.9609 16.2104 22.5858 16.5855C22.2107 16.9606 22 17.4693 22 17.9997V25.9997C22 26.5301 22.2107 27.0389 22.5858 27.4139C22.9609 27.789 23.4696 27.9997 24 27.9997C24.5304 27.9997 25.0391 27.789 25.4142 27.4139C25.7893 27.0389 26 26.5301 26 25.9997V17.9997C26 17.4693 25.7893 16.9606 25.4142 16.5855C25.0391 16.2104 24.5304 15.9997 24 15.9997Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Proteja su institución con visión y anticipación. Este módulo permite gestionar riesgos de forma integral bajo ISO 31000 y COSO ERM, con configuraciones personalizables, autoevaluaciones avanzadas y cumplimiento regulatorio automatizado. Incluye todo el ciclo del riesgo, matrices y metodologías flexibles, controles con madurez, análisis cuantitativo (VaR, Monte Carlo, Backtesting) y generación automática de archivos XML para superintendencias.",
    caracteristicas: []
  },
  {
    id: 6,
    titulo: "Continuidad del Negocio",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1033_1378)">
    <path d="M23.6576 42.1068L44.0843 26.0934C44.403 25.844 44.6608 25.5253 44.838 25.1614C45.0153 24.7976 45.1074 24.3982 45.1074 23.9934C45.1074 23.5887 45.0153 23.1893 44.838 22.8254C44.6608 22.4616 44.403 22.1429 44.0843 21.8934L23.6576 5.89342C23.2724 5.58318 22.806 5.39052 22.3141 5.33849C21.8223 5.28647 21.3258 5.37729 20.8843 5.60009C20.4538 5.82839 20.0987 6.17661 19.8621 6.60257C19.6254 7.02853 19.5173 7.51396 19.5509 8.00009V16.9334L5.33759 5.89342C4.95501 5.58849 4.49343 5.39894 4.00695 5.34698C3.52048 5.29503 3.02928 5.38283 2.59093 5.60009C2.14461 5.82186 1.76937 6.16427 1.50778 6.58848C1.24619 7.01269 1.1087 7.50171 1.11092 8.00009V40.0001C1.11119 40.4962 1.24984 40.9824 1.5113 41.404C1.77275 41.8257 2.14664 42.166 2.59093 42.3868C3.02968 42.6024 3.52057 42.6893 4.00669 42.6374C4.49282 42.5855 4.95428 42.3969 5.33759 42.0934L19.5509 31.0801V40.0001C19.52 40.484 19.6293 40.9666 19.8658 41.3899C20.1023 41.8133 20.4559 42.1594 20.8843 42.3868C21.323 42.6024 21.8139 42.6893 22.3 42.6374C22.7862 42.5855 23.2476 42.3969 23.6309 42.0934L23.6576 42.1068Z" fill="#FF6D00"/>
    </g>
    <defs>
    <clipPath id="clip0_1033_1378">
    <rect width="48" height="48" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
    descripcion: "Implemente un Sistema de Gestión de Continuidad del Negocio (SGCN) alineado con ISO 22301. Evalúe impactos, documente planes BCP/DRP, gestione simulacros y asegure la preparación organizacional ante crisis. Incluye BIA avanzado con MTPD y RTO, cumplimiento ISO precargado, pruebas y simulacros, gestión de competencias y soporte con IA para generar riesgos, controles y estrategias de continuidad.",
    caracteristicas: []
  },
  {
    id: 7,
    titulo: "Seguridad de la Información",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34 18V14C34 8.4 29.6 4 24 4C18.4 4 14 8.4 14 14V18C10.6 18 8 20.6 8 24V38C8 41.4 10.6 44 14 44H34C37.4 44 40 41.4 40 38V24C40 20.6 37.4 18 34 18ZM18 14C18 10.6 20.6 8 24 8C27.4 8 30 10.6 30 14V18H18V14ZM26.2 31L26 31.2V34C26 35.2 25.2 36 24 36C22.8 36 22 35.2 22 34V31.2C20.8 30 20.6 28.2 21.8 27C23 25.8 24.8 25.6 26 26.8C27.2 27.8 27.4 29.8 26.2 31Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Implemente y gestione un SGSI robusto alineado con ISO 27001. Proteja activos digitales, evalúe riesgos, gestione incidentes y automatice controles con apoyo de inteligencia artificial. Incluye la norma precargada (ISO 27001:2022), análisis de riesgos, gestión de activos, control de incidentes y vulnerabilidades, y ciberseguridad asistida por IA.",
    caracteristicas: []
  },
  {
    id: 8,
    titulo: "Cumplimiento Normativo",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1018_1198)">
    <path d="M18.2311 -0.000161258C17.9631 0.0396841 17.7072 0.138009 17.4815 0.287839C17.4815 0.287839 15.1462 1.75738 12.6354 3.34692C10.1246 4.93461 7.33139 6.68476 6.69262 7.03922L6.57631 7.09461C4.25754 8.52538 3.7757 10.8626 3.69262 12.1734C3.68708 12.2343 3.69262 12.2841 3.69262 12.3488C3.67231 12.8398 3.69262 13.1555 3.69262 13.1555V37.2718C3.69262 40.7758 7.77816 42.4614 11.6551 42.4614C12.9474 42.4614 14.2397 42.2528 15.3474 41.8835C16.0858 41.5143 16.6157 40.7758 16.6157 40.0374V20.6528C16.6157 16.4066 17.5388 14.4128 20.308 12.7512C21.0465 12.382 28.7892 7.03738 28.7892 7.03738C29.1585 6.66815 29.5388 5.91861 29.5388 5.36476V5.19122C29.5388 4.45276 29.1695 3.88784 28.6157 3.51861C28.0618 3.14938 27.3234 3.14938 26.7695 3.51861C26.5849 3.70322 15.3234 11.2854 12.9234 12.5777C10.5234 14.0546 8.284 14.4109 7.73016 13.6725C7.55847 13.5008 7.40893 12.9746 7.38493 12.4614V12.3451C7.38677 11.8429 7.516 10.8977 8.53877 10.2681C9.57631 9.6903 12.1517 8.04538 14.6551 6.46138C15.7129 5.79122 15.844 5.71922 16.6729 5.19122C16.782 5.64223 17.057 6.0356 17.443 6.29304C17.8291 6.55048 18.2979 6.65311 18.7562 6.58049C19.2145 6.50786 19.6287 6.26533 19.9162 5.90115C20.2038 5.53697 20.3437 5.07787 20.308 4.61522V1.84599C20.3101 1.58285 20.2559 1.32231 20.149 1.08183C20.0421 0.841354 19.8851 0.6265 19.6884 0.451673C19.4917 0.276846 19.26 0.146085 19.0086 0.0681579C18.7573 -0.00976951 18.4922 -0.0330631 18.2311 -0.000161258ZM33.0003 6.46138C32.7067 6.5102 32.4293 6.62928 32.1917 6.80845C32.1917 6.80845 22.8982 13.0614 21.2883 14.134L21.2311 14.1931C19.8945 15.1955 19.1025 16.3881 18.7499 17.4792C18.5534 18.095 18.4562 18.7381 18.4618 19.3845V19.9623C18.4592 20.0195 18.4592 20.0768 18.4618 20.134V42.4614C18.4618 45.9691 22.5012 47.9998 26.1935 47.9998C27.8551 47.9998 29.3542 47.6417 30.4618 46.9032C32.6772 45.6109 43.3849 37.27 43.3849 37.27C43.9388 36.9008 44.308 36.3801 44.308 35.8263V11.8263C44.308 10.9032 43.9498 10.3494 43.2114 9.98015C42.6575 9.61092 41.7474 9.78445 41.1935 10.1537C38.2397 12.3691 30.2883 18.6238 28.4422 19.7315C25.8575 21.2085 23.4225 21.5777 22.4994 20.6546C22.1302 20.2854 22.1542 19.9383 22.1542 19.3845C22.164 19.0645 22.2028 18.7949 22.2705 18.5758C22.3738 18.2546 22.5843 17.8595 23.3652 17.2503C23.4022 17.2208 23.3837 17.2226 23.4225 17.1931C24.7572 16.3014 28.8391 13.5192 31.5012 11.71C31.6521 12.1146 31.9399 12.4536 32.3148 12.6679C32.6897 12.8822 33.1278 12.9583 33.553 12.883C33.9782 12.8078 34.3636 12.5858 34.6421 12.2558C34.9205 11.9258 35.0745 11.5086 35.0772 11.0768V8.30753C35.0793 8.04439 35.0251 7.78385 34.9182 7.54337C34.8114 7.30289 34.6543 7.08804 34.4577 6.91321C34.261 6.73838 34.0292 6.60762 33.7778 6.5297C33.5265 6.45177 33.2614 6.42848 33.0003 6.46138ZM40.6157 19.9623V23.6546L31.3849 30.8066V27.1143L40.6157 19.9623Z" fill="#FF6D00"/>
    </g>
    <defs>
    <clipPath id="clip0_1018_1198">
    <rect width="48" height="48" fill="white"/>
    </clipPath>
    </defs>
    </svg>`,
    descripcion: "Gestione con confianza sus obligaciones legales, regulatorias y de buenas prácticas. Vincule normas como ISO 27001, 22301, 9001 y COBIT 2019 con riesgos, controles y auditorías en un entorno centralizado y dinámico. Incluye planes precargados, alertas legales, gestión de auditorías, hallazgos y terceros, todo con trazabilidad completa para asegurar el cumplimiento y minimizar riesgos reputacionales.",
    caracteristicas: []
  },
  {
    id: 9,
    titulo: "Gestión de Terceros",
    icono: `<svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30.3187 7.9875L21.2438 15.3375C19.7344 16.5562 19.4438 18.75 20.5875 20.3156C21.7969 21.9844 24.15 22.3125 25.7719 21.0469L35.0813 13.8094C35.7375 13.3031 36.675 13.4156 37.1906 14.0719C37.7063 14.7281 37.5844 15.6656 36.9281 16.1812L34.9688 17.7L51.5813 33H55.5C57.9844 33 60 30.9844 60 28.5V16.5C60 14.0156 57.9844 12 55.5 12H47.9344L47.5687 11.7656L40.7625 7.40625C39.3281 6.4875 37.65 6 35.9437 6C33.9 6 31.9125 6.70312 30.3187 7.9875ZM32.4563 19.65L27.6094 23.4187C24.6562 25.725 20.3719 25.125 18.1594 22.0875C16.0781 19.2281 16.6031 15.2344 19.35 13.0125L27.15 6.70312C26.0625 6.24375 24.8906 6.00937 23.7 6.00937C21.9375 6 20.2219 6.525 18.75 7.5L12 12H4.5C2.01562 12 0 14.0156 0 16.5V28.5C0 30.9844 2.01562 33 4.5 33H14.6437L23.2125 40.8187C25.05 42.4969 27.8906 42.3656 29.5687 40.5281C30.0844 39.9562 30.4312 39.2906 30.6094 38.5969L32.2031 40.0594C34.0312 41.7375 36.8812 41.6156 38.5594 39.7875C38.9812 39.3281 39.2906 38.7937 39.4875 38.2406C41.3063 39.4594 43.7812 39.2062 45.3094 37.5375C46.9875 35.7094 46.8656 32.8594 45.0375 31.1812L32.4563 19.65Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Evalúe, supervise y optimice su red de proveedores, socios y contratistas. Aplique due diligence, gestione contratos y SLAs, y controle riesgos que afectan la continuidad, seguridad y cumplimiento de su organización.",
    caracteristicas: ["Gestión de terceros", "Due diligence", "Aliados estratégicos", "Riesgo proveedor"]
  },
  {
    id: 10,
    titulo: "Gestión de TI",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 6C39.0609 6 40.0783 6.42143 40.8284 7.17157C41.5786 7.92172 42 8.93913 42 10V32C42 33.0609 41.5786 34.0783 40.8284 34.8284C40.0783 35.5786 39.0609 36 38 36H30V38H32C32.5304 38 33.0391 38.2107 33.4142 38.5858C33.7893 38.9609 34 39.4696 34 40C34 40.5304 33.7893 41.0391 33.4142 41.4142C33.0391 41.7893 32.5304 42 32 42H16C15.4696 42 14.9609 41.7893 14.5858 41.4142C14.2107 41.0391 14 40.5304 14 40C14 39.4696 14.2107 38.9609 14.5858 38.5858C14.9609 38.2107 15.4696 38 16 38H18V36H10C8.93913 36 7.92172 35.5786 7.17157 34.8284C6.42143 34.0783 6 33.0609 6 32V10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6H38ZM26 36H22V38H26V36ZM38 10H10V32H38V10Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Opere y controle su infraestructura y servicios de TI con base en COBIT e ITIL. Gestione activos, incidentes, mantenimiento y servicios alineados a la estrategia institucional con una CMDB inteligente y conectada.",
    caracteristicas: ["COBIT 2019", "ITIL", "CMDB", "Gestión de TI"]
  },
  {
    id: 11,
    titulo: "Auditoría",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.5906 40.4079L34.6863 31.4997C37.3561 28.0206 38.6026 23.6562 38.1728 19.2919C37.7431 14.9275 35.6693 10.8901 32.3722 7.99847C29.0751 5.10689 24.8016 3.57772 20.4185 3.72117C16.0354 3.86461 11.8709 5.66994 8.76994 8.77092C5.66896 11.8719 3.86364 16.0363 3.72019 20.4194C3.57674 24.8025 5.10591 29.0761 7.9975 32.3732C10.8891 35.6703 14.9266 37.7441 19.2909 38.1738C23.6553 38.6035 28.0196 37.3571 31.4988 34.6872L40.4106 43.601C40.6199 43.8103 40.8684 43.9763 41.1419 44.0896C41.4153 44.2028 41.7084 44.2611 42.0044 44.2611C42.3004 44.2611 42.5935 44.2028 42.8669 44.0896C43.1404 43.9763 43.3888 43.8103 43.5981 43.601C43.8074 43.3917 43.9735 43.1432 44.0867 42.8698C44.2 42.5963 44.2583 42.3032 44.2583 42.0072C44.2583 41.7113 44.2 41.4182 44.0867 41.1447C43.9735 40.8713 43.8074 40.6228 43.5981 40.4135L43.5906 40.4079ZM8.24877 20.9997C8.24877 18.478 8.99654 16.0129 10.3975 13.9162C11.7985 11.8195 13.7898 10.1853 16.1196 9.22028C18.4493 8.25526 21.0129 8.00277 23.4862 8.49473C25.9594 8.98669 28.2313 10.201 30.0144 11.9841C31.7975 13.7673 33.0118 16.0391 33.5038 18.5123C33.9957 20.9856 33.7432 23.5492 32.7782 25.879C31.8132 28.2087 30.179 30.2 28.0823 31.601C25.9856 33.002 23.5205 33.7497 20.9988 33.7497C17.6183 33.7463 14.3773 32.4019 11.987 30.0115C9.59666 27.6212 8.25224 24.3802 8.24877 20.9997Z" fill="#FF6D00"/>
    </svg>`,
    descripcion: "Planifique, ejecute y dé seguimiento a auditorías internas y externas de forma estructurada. Desde la evaluación de riesgos hasta la gestión de hallazgos y acciones correctivas, con soporte de IA para priorización y análisis inteligente.",
    caracteristicas: []
  },
  {
    id: 12,
    titulo: "Gobernanza y Acuerdos",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 14C42.5304 14 43.0391 14.2107 43.4142 14.5858C43.7893 14.9609 44 15.4696 44 16C44 16.5304 43.7893 17.0391 43.4142 17.4142C43.0391 17.7893 42.5304 18 42 18V38C42.5304 38 43.0391 38.2107 43.4142 38.5858C43.7893 38.9609 44 39.4696 44 40C44 40.5304 43.7893 41.0391 43.4142 41.4142C43.0391 41.7893 42.5304 42 42 42H6C5.46957 42 4.96086 41.7893 4.58579 41.4142C4.21071 41.0391 4 40.5304 4 40C4 39.4696 4.21071 38.9609 4.58579 38.5858C4.96086 38.2107 5.46957 38 6 38V18C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14H42ZM14 22C13.4696 22 12.9609 22.2107 12.5858 22.5858C12.2107 22.9609 12 23.4696 12 24V38H16V24C16 23.4696 15.7893 22.9609 15.4142 22.5858C15.0391 22.2107 14.5304 22 14 22ZM24 22C23.4696 22 22.9609 22.2107 22.5858 22.5858C22.2107 22.9609 22 23.4696 22 24V38H26V24C26 23.4696 25.7893 22.9609 25.4142 22.5858C25.0391 22.2107 24.5304 22 24 22ZM34 22C33.4696 22 32.9609 22.2107 32.5858 22.5858C32.2107 22.9609 32 23.4696 32 24V38H36V24C36 23.4696 35.7893 22.9609 35.4142 22.5858C35.0391 22.2107 34.5304 22 34 22ZM36 8C36.5304 8 37.0391 8.21071 37.4142 8.58579C37.7893 8.96086 38 9.46957 38 10C38 10.5304 37.7893 11.0391 37.4142 11.4142C37.0391 11.7893 36.5304 12 36 12H12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2107 11.0391 10 10.5304 10 10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8H36Z" fill="#FF6D00"/>
</svg>`,
    descripcion: "Gestione sesiones, acuerdos y compromisos con trazabilidad completa. Vincule decisiones a riesgos, planes y responsables, con control de votaciones, actas y seguimiento documentado.",
    caracteristicas: ["Gobernanza institucional", "Acuerdos estratégicos"]
  },
  {
    id: 13,
    titulo: "Gestión de Activos Sensibles",
    icono: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42 22C42 33.1 34.32 43.48 24 46C13.68 43.48 6 33.1 6 22V10L24 2L42 10V22ZM24 42C31.5 40 38 31.08 38 22.44V12.6L24 6.36V42Z" fill="#FF6D00"/>
</svg>`,
    descripcion: "Administre activos críticos con trazabilidad, georreferenciación y mantenimiento predictivo. Evalúe riesgos físicos, fallas y desastres para proteger la continuidad de los servicios estratégicos.",
    caracteristicas: ["Infraestructura crítica", "CMDB", "Mantenimiento predictivo", "Análisis BIA"]
  },
  {
    id: 14,
    titulo: "Información Gerencial",
    icono: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.42 0.000133213H13.5C9.9212 0.00542339 6.4905 1.42944 3.9599 3.96003C1.42931 6.49063 0.00529018 9.92134 0 13.5001V26.5001C0.00529018 30.0789 1.42931 33.5096 3.9599 36.0402C6.4905 38.5708 9.9212 39.9948 13.5 40.0001H26.5C30.0788 39.9948 33.5095 38.5708 36.0401 36.0402C38.5707 33.5096 39.9947 30.0789 40 26.5001V13.5001C39.9974 11.7213 39.6438 9.96044 38.9594 8.31851C38.275 6.67657 37.2734 5.18583 36.0118 3.93172C34.7503 2.6776 33.2536 1.68477 31.6077 1.01011C29.9617 0.335452 28.1988 -0.00776301 26.42 0.000133213ZM30.2 21.3801H29.92C29.5679 21.3769 29.2278 21.2515 28.9578 21.0253C28.6879 20.7991 28.5049 20.4863 28.44 20.1401L28.08 18.1401L25.46 22.1401C24.9664 22.8749 24.207 23.3896 23.3417 23.5761C22.4764 23.7626 21.5725 23.6063 20.82 23.1401L16.28 20.2601C16.1964 20.2277 16.1036 20.2277 16.02 20.2601C15.9156 20.277 15.8221 20.3345 15.76 20.4201L11.12 26.6001C10.9782 26.7842 10.7966 26.9338 10.5888 27.0377C10.381 27.1416 10.1523 27.1971 9.92 27.2001C9.59521 27.2016 9.27895 27.0962 9.02 26.9001C8.72956 26.6642 8.53777 26.3283 8.48226 25.9583C8.42676 25.5883 8.51155 25.2109 8.72 24.9001L13.36 18.7201C13.8708 18.0455 14.6135 17.5841 15.4447 17.4253C16.2759 17.2664 17.1364 17.4214 17.86 17.8601L22.42 20.7401C22.5132 20.7864 22.6192 20.7997 22.721 20.7779C22.8227 20.7561 22.914 20.7005 22.98 20.6201L25.66 16.6201L23.5 16.9201C23.3056 16.9569 23.1059 16.955 22.9123 16.9146C22.7187 16.8742 22.5349 16.7961 22.3715 16.6846C22.208 16.5732 22.0682 16.4307 21.9598 16.2652C21.8515 16.0997 21.7768 15.9145 21.74 15.7201C21.7032 15.5258 21.7051 15.3261 21.7455 15.1324C21.7859 14.9388 21.8641 14.755 21.9755 14.5916C22.0869 14.4282 22.2295 14.2883 22.3949 14.1799C22.5604 14.0716 22.7456 13.9969 22.94 13.9601L28.46 12.9401H29.18C29.2318 12.9218 29.2882 12.9218 29.34 12.9401L29.64 13.1001L29.94 13.3401C30.012 13.4268 30.072 13.5201 30.12 13.6201C30.176 13.713 30.2165 13.8143 30.24 13.9201L31.28 19.5201C31.3341 19.7132 31.349 19.9152 31.3237 20.1141C31.2985 20.313 31.2336 20.5048 31.1329 20.6783C31.0322 20.8517 30.8977 21.0031 30.7375 21.1237C30.5773 21.2442 30.3945 21.3314 30.2 21.3801Z" fill="#FF6D00"/>
</svg>`,
    descripcion: "Nuestro módulo de información gerencial está diseñado para la alta dirección. No se trata solo de visualizar datos, sino de obtener información cierta, de calidad y oportuna para la toma de decisiones. Conéctese a múltiples fuentes, genere dashboards interactivos y simule escenarios. Deje de hacer autopsias a sus resultados y obtenga biopsias en tiempo real que le permitan actuar con inteligencia estratégica. Acceda a la información clave que necesita, en cualquier momento y desde cualquier dispositivo, para liderar su organización hacia el éxito.",
    caracteristicas: []
  },

];

// Función para procesar texto con formato markdown básico
function formatText(text: string) {
  // Dividir por saltos de línea
  const lines = text.split('\n');
  
  return lines.map((line, index) => {
    // Si la línea está vacía, retornar un espacio
    if (line.trim() === '') {
      return <div key={index} className="h-4"></div>;
    }
    
    // Procesar negritas (**texto**)
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const formattedParts = parts.map((part, partIndex) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={partIndex} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    
    // Si la línea comienza con •, es una lista
    if (line.trim().startsWith('•')) {
      return (
        <div key={index} className="flex items-start mb-2">
          <span className="text-orange-500 mr-2 mt-1">•</span>
          <span className="text-gray-300">{formattedParts}</span>
        </div>
      );
    }
    
    return (
      <div key={index} className="mb-3">
        {formattedParts}
      </div>
    );
  });
}

// Componente Popup para módulos
function ModuloPopup({ modulo, onClose }: { modulo: Modulo; onClose: () => void }) {
  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center z-50 p-4">
      <div className="bg-[#181818] rounded-xl shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto text-left">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="flex justify-center items-center" dangerouslySetInnerHTML={{ __html: modulo.icono }}></span>
            <h2 className="text-2xl font-bold text-white">{modulo.titulo}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
          >
            ×
          </button>
        </div>
        
        <div className="text-gray-300 text-base leading-relaxed mb-6">
          {formatText(modulo.descripcion)}
        </div>

        {modulo.caracteristicas && modulo.caracteristicas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {modulo.caracteristicas.map((caracteristica: string, idx: number) => (
              <div key={idx} className="bg-[#232323] rounded-lg p-4 text-sm text-gray-200">
                {caracteristica}
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-semibold shadow transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function DelphosPage() {
  const [moduloSeleccionado, setModuloSeleccionado] = useState<Modulo | null>(null);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Círculo azul difuminado a la izquierda */}
      <div className="absolute top-32 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-900 via-blue-400 to-transparent opacity-40 blur-[100px] pointer-events-none z-0" />
      {/* Círculo naranja difuminado a la derecha */}
      <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-500 via-yellow-400 to-transparent opacity-30 blur-[120px] pointer-events-none z-0" />
      {/* Hexágono decorativo */}
      <img
        src="/images/hexagono.png"
        alt="Hexágono decorativo"
        className="absolute bottom-10 right-10 w-[320px] opacity-20 pointer-events-none z-0"
        draggable="false"
      />
      {/* HERO SECTION */}
      <section className="w-full py-20 text-left px-4 md:px-0 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Delphos</h1>
          {/* Línea naranja degradada */}
          <div className="h-1 w-48 mb-8 bg-gradient-to-r from-orange-500 via-orange-400/60 to-transparent rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
            La Plataforma Modular Líder en Gobernanza, Riesgo, Cumplimiento y más.
          </h2>
          <p className="text-white mb-4">
            Integre planificación, riesgos, cumplimiento y desempeño en una sola plataforma SaaS, alineada con estándares internacionales.
          </p>

          {/* Matriz de Módulos Clave */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              <span className="text-orange-500">Módulos Clave</span>
            </h3>
            <div className="text-white text-center mb-8 max-w-4xl mx-auto">
              <p className="text-lg mb-4">
                Delphos es la plataforma de Gestión, Riesgos y Cumplimiento (GRC) en la nube que evoluciona con su organización.
              </p>
              <p className="text-base leading-relaxed">
                Integra todo lo que se necesita para planificar, controlar riesgos y cumplir con normativas, en un solo sistema modular, seguro y escalable. Diseñada para adaptarse a su realidad, Delphos permite empezar por lo esencial como la planificación o el cumplimiento y escalar hacia una gestión integral alineada con estándares y mejores prácticas globales.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {modulos.map((modulo) => (
                <div
                  key={modulo.id}
                  onClick={() => setModuloSeleccionado(modulo)}
                  className="bg-[#181818] rounded-lg p-4 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center items-center mb-3 h-8" dangerouslySetInnerHTML={{ __html: modulo.icono }}></div>
                  <h4 className="text-sm font-semibold text-white leading-tight">
                    {modulo.titulo}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Universo Delphos */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            <span className="text-orange-500">Universo Delphos</span>
          </h2>
          
          <div className="text-white text-center mb-12 max-w-4xl mx-auto">
            <p className="text-lg mb-4">
              Descubra la familia completa de soluciones DELPHOS diseñadas para transformar la gestión institucional
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              Cada producto está optimizado para necesidades específicas, pero todos comparten la misma base tecnológica y filosofía de excelencia operativa.
            </p>
          </div>

          {/* Grid de productos DELPHOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Delphos Continuum */}
            <div
              onClick={() => setModuloSeleccionado({
                id: 1,
                titulo: "Delphos Continuum",
                icono: "🛡️",
                descripcion: "Gestione riesgos, continuidad del negocio y cumplimiento normativo desde una sola plataforma.\n\n**DELPHOS Continuum** es una solución SaaS que permite implementar y mantener un sistema robusto de gestión de riesgos, continuidad operativa y seguridad de la información. Está alineado con normas como ISO 22301, ISO 27001, ISO 31000 y COBIT 2019, y permite trazabilidad total entre riesgos, controles, procesos y activos críticos.\n\nDesde el BIA y los planes BCP/DRP, hasta las autoevaluaciones normativas (ISO, SEVRI, etc.), la plataforma automatiza procesos clave para facilitar auditorías, análisis y toma de decisiones estratégicas.\n\n**Funciones destacadas:**\n\n• Gestión de riesgos estratégicos, operativos y normativos\n• BIA, BCP y DRP con trazabilidad integrada\n• Autoevaluaciones normativas (ISO, SEVRI)\n• IA para análisis y generación de estrategias",
                caracteristicas: []
              })}
              className="group bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-orange-500/30"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className={`${quantifyBold.className} text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300`}>
                  Delphos Continuum
                </h3>
                <img 
                  src="/images/pruebas/Continuum-1.svg" 
                  alt="Delphos Continuum" 
                  className="w-28 h-28 mb-4 object-contain scale-125 group-hover:scale-140 transition-transform duration-300" 
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Gestión integral de riesgos, continuidad del negocio y cumplimiento normativo
                </p>
              </div>
            </div>

            {/* Delphos Core */}
            <div
              onClick={() => setModuloSeleccionado({
                id: 2,
                titulo: "Delphos Core",
                icono: "📊",
                descripcion: "El motor central para la planificación, los proyectos y la gestión institucional.\n\n**Delphos Core** es la plataforma base de DELPHOS para gestionar la planificación estratégica, los planes operativos anuales, la gestión de proyectos y el seguimiento institucional. Alinea objetivos, acciones y resultados con trazabilidad total y flujos automatizados.\n\n**Funciones destacadas:**\n\n• Gestión de planificación estratégica (BSC, GpRD, PND, PEM)\n• Planes operativos anuales por unidad, vinculados a objetivos y presupuestos\n• Portafolios de proyectos con seguimiento de ejecución, alertas y prioridades\n• Indicadores estratégicos y operativos con monitoreo visual en tiempo real",
                caracteristicas: []
              })}
              className="group bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-orange-500/30"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className={`${quantifyBold.className} text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300`}>Delphos Core</h3>
                <img 
                  src="/images/pruebas/delphos-1.svg" 
                  alt="Delphos Core" 
                  className="w-28 h-28 mb-4 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Planificación estratégica, proyectos y gestión institucional centralizada
                </p>
              </div>
            </div>

            {/* Delphos Elite */}
            <div
              onClick={() => setModuloSeleccionado({
                id: 3,
                titulo: "Delphos Elite",
                icono: "💼",
                descripcion: "Impulsando el alto rendimiento con evaluación estratégica del desempeño.\n\n**Delphos Elite** es el módulo especializado en la gestión integral del desempeño institucional, de equipos y de personas. Alinea los objetivos estratégicos con los resultados reales mediante herramientas flexibles de evaluación, seguimiento y retroalimentación.\n\nCumple con los lineamientos de la **Ley 9635** de Fortalecimiento de las Finanzas Públicas, facilitando la implementación de sistemas de evaluación del desempeño en el sector público de forma objetiva, trazable y conforme a la normativa vigente.\n\n**Beneficios clave:**\n\n• Aumenta la motivación, mejora la rendición de cuentas, fortalece la toma de decisiones en recursos humanos y promueve una cultura de alto desempeño en todos los niveles.",
                caracteristicas: []
              })}
              className="group bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-orange-500/30"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className={`${quantifyBold.className} text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300`}>Delphos Elite</h3>
                <img 
                  src="/images/pruebas/delphosElite-3.svg" 
                  alt="Delphos Elite" 
                  className="w-28 h-28 mb-4 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Gestión del desempeño institucional y evaluación estratégica
                </p>
              </div>
            </div>

            {/* Delphos BI */}
            <div
              onClick={() => setModuloSeleccionado({
                id: 4,
                titulo: "Delphos BI",
                icono: "📈",
                descripcion: "Transforme los datos en decisiones con inteligencia institucional.\n\n**Delphos BI** es la solución de inteligencia de negocios de DELPHOS que permite crear tableros gerenciales, cubos multidimensionales y reportes dinámicos, alimentados desde fuentes internas o externas como bases de datos SQL, Excel o sistemas institucionales.\n\nDesde salidas de rendición de cuentas hasta visualizaciones estratégicas en tiempo real, facilita el análisis predictivo, la evaluación de desempeño y la toma de decisiones informadas.",
                caracteristicas: []
              })}
              className="group bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-orange-500/30"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className={`${quantifyBold.className} text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300`}>Delphos BI</h3>
                <img 
                  src="/images/pruebas/delphosBi-1.svg" 
                  alt="Delphos BI" 
                  className="w-28 h-28 mb-4 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Inteligencia de negocios y análisis de datos institucionales
                </p>
              </div>
            </div>

            {/* Delphos Mobile */}
            <div
              onClick={() => setModuloSeleccionado({
                id: 5,
                titulo: "Delphos Mobile",
                icono: "📱",
                descripcion: "Lleve la gestión institucional en la palma de su mano.\n\n**Delphos Mobile** permite a funcionarios y líderes acceder, visualizar y actualizar información clave desde cualquier lugar, en tiempo real. Compatible con Android y iOS, la app facilita el seguimiento de indicadores, tareas, alertas, riesgos, proyectos y acuerdos, manteniendo la trazabilidad y el control desde el dispositivo móvil.\n\nIdeal para entornos de campo, sesiones remotas o supervisión ejecutiva, **Delphos Mobile** extiende las capacidades de la plataforma a cada colaborador, fortaleciendo la eficiencia y la oportunidad en la toma de decisiones.",
                caracteristicas: []
              })}
              className="group bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-orange-500/30"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className={`${quantifyBold.className} text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300`}>Delphos Mobile</h3>
                <img 
                  src="/images/pruebas/delphos-1.svg" 
                  alt="Delphos Mobile" 
                  className="w-28 h-28 mb-4 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Acceso móvil a la gestión institucional desde cualquier lugar
                </p>
              </div>
            </div>

            {/* Delphos Funcion@ */}
            <div
              onClick={() => setModuloSeleccionado({
                id: 6,
                titulo: "Delphos Funcion@",
                icono: "📋",
                descripcion: "Simule, proyecte y pronostique con precisión y flexibilidad.\n\n**Delphos Funcion@** es el módulo analítico de simulación y pronóstico de la plataforma DELPHOS. Permite crear modelos personalizados, evaluar escenarios, aplicar métodos estadísticos y realizar simulaciones dinámicas para apoyar decisiones estratégicas, operativas o presupuestarias.\n\nSu entorno de cálculo es similar al de una hoja electrónica, pero sin sus limitaciones, y con más de **13 métodos de pronóstico automático**, elegidos por precisión. Puede utilizarse en planificación, riesgos, finanzas, desempeño, continuidad, cumplimiento y más.\n\nIdeal para instituciones públicas y entidades reguladas que requieren evaluar el impacto de variables, visualizar proyecciones, optimizar recursos y anticiparse a tendencias.",
                caracteristicas: []
              })}
              className="group bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-orange-500/30"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className={`${quantifyBold.className} text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300`}>Delphos Funcion@</h3>
                <img 
                  src="/images/pruebas/delphosFunciona-1.svg" 
                  alt="Delphos Funcion@" 
                  className="w-28 h-28 mb-4 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Simulación, pronóstico y análisis predictivo avanzado
                </p>
              </div>
            </div>

            {/* Delphos Portal */}
            <div
              onClick={() => setModuloSeleccionado({
                id: 7,
                titulo: "Delphos Portal",
                icono: "🌐",
                descripcion: "Experiencias digitales personalizadas para cada institución.\n\n**DELPHOS Portal** permite crear portales institucionales a la medida, adaptados al diseño, estructura y necesidades de cada organización. Mejora significativamente la experiencia del usuario al mostrar solo la información y herramientas que necesita según su perfil y nivel jerárquico.\n\nSe integra con todos los módulos DELPHOS para ofrecer acceso centralizado a tareas, indicadores, alertas, documentos y reportes clave.\n\n**Beneficios clave:**\n\n✔ Mejora la experiencia del usuario\n✔ Refuerza la identidad institucional\n✔ Acceso rápido y personalizado\n✔ Mayor adopción del sistema",
                caracteristicas: []
              })}
              className="group bg-gradient-to-br from-[#181818] to-[#1a1a1a] rounded-xl p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-orange-500/30"
            >
              <div className="flex flex-col items-center text-center h-full">
                <h3 className={`${quantifyBold.className} text-lg md:text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300`}>Delphos Portal</h3>
                <img 
                  src="/images/pruebas/delphosPortal-1.svg" 
                  alt="Delphos Portal" 
                  className="w-28 h-28 mb-4 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Portales institucionales personalizados y experiencias digitales
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className=" py-16 relative z-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ¿Listo para <span className="bg-orange-500 text-white px-2 rounded">transformar</span> su organización a mayores niveles de competitividad?
          </h2>
          <p className="text-gray-200 mb-8">Únase a más de 500 instituciones que ya confían en DEINSA.</p>
          <div className="flex flex-col items-center">
            <a
              href="/contacto"
              className="flex items-center gap-2 text-white font-semibold uppercase tracking-wide px-6 py-3 border-b border-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              <span className="text-orange-500 text-xl font-bold">+</span>
              <span className="text-xs md:text-sm">Solicitar demostración</span>
            </a>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {moduloSeleccionado && (
        <ModuloPopup
          modulo={moduloSeleccionado}
          onClose={() => setModuloSeleccionado(null)}
        />
      )}
    </div>
  );
} 