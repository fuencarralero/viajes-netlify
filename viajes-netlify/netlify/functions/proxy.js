/**
 * Netlify Function — Proxy para OpenRouter API
 * Variable de entorno necesaria: OPENROUTER_API_KEY
 * (configúrala en Netlify → Site configuration → Environment variables)
 */

const MODEL = "openrouter/free";

function getPrompt(tab, destination, fechas, origen, transporte, combustible, fueraCEE) {
  const d = destination;
  const f = fechas ? ` para el período ${fechas}` : "";
  const o = origen ? ` desde ${origen}` : " desde España";

  switch (tab) {
    case "alojamiento":
      return `Habla ÚNICAMENTE sobre alojamiento en ${d}${f}. Responde en español con emojis y markdown (##, -, **negrita**).
## Mejores zonas para alojarse
## Tipos de alojamiento y precios
(hoteles, hostels, apartamentos, casas rurales — rangos de precio por noche)
## Recomendaciones específicas
(nombres reales de establecimientos)
## Dónde reservar
Enlace Booking.com: https://www.booking.com/searchresults.es.html?ss=${d.replace(/ /g, "+")}
NO hables de visitas, gastronomía ni transporte.`;

    case "transporte_publico":
      return `Habla ÚNICAMENTE sobre cómo llegar a ${d}${o}${f} en transporte público. Responde en español con emojis y markdown.
## Opciones de tren
(compañías, duración, precio aproximado, URL donde comprar)
## Opciones de autobús
## Opciones de avión
(aeropuertos, aerolíneas, precio, dónde buscar vuelos)
## Opciones de barco/ferry (si aplica)
## Combinaciones recomendadas
## Consejos para reservar
NO hables de alojamiento ni gastronomía.`;

    case "transporte_camper":
      return `Habla ÚNICAMENTE sobre viaje en camper desde ${origen || "España"} hasta ${d}${f} con combustible ${combustible || "diésel"}. Responde en español con emojis y markdown.
## Ruta recomendada
(carreteras principales, distancia total, tiempo estimado)
## Gasolineras en ruta
Consulta precios en: https://preciosgasolineras.es y https://www.dieselogasolina.com
## Servicios para camper EN RUTA
(áreas con vaciado aguas grises/negras, agua potable, electricidad)
Webs para encontrar servicios: https://park4night.com y https://www.campercontact.com/es
## Servicios para camper EN DESTINO: ${d}
(áreas de acampada, parkings, campings — nombres, ubicación y precio estimado por noche)
- https://park4night.com/search?q=${d.replace(/ /g, "+")}
- https://www.campercontact.com/es/country/search?q=${d.replace(/ /g, "+")}
## Normas y regulaciones en ${d}
## Peajes y costes estimados
NO hables de hoteles ni gastronomía.`;

    case "transporte_vehiculo":
      return `Habla ÚNICAMENTE sobre viaje en vehículo desde ${origen || "España"} hasta ${d}${f} con ${combustible || "gasolina"}. Responde en español con emojis y markdown.
## Ruta recomendada
## Gasolineras en ruta
Consulta precios en: https://preciosgasolineras.es y https://www.dieselogasolina.com
## Peajes
## Coste estimado del combustible
## Aparcamiento en ${d}
## Consejos de conducción
NO hables de alojamiento ni gastronomía.`;

    case "visitas":
      return `Habla ÚNICAMENTE sobre qué visitar en ${d}${f}. Responde en español con emojis y markdown.
## Los 10 lugares imprescindibles
(descripción, horarios y precio de entrada de cada uno)
## Lugares menos conocidos
## Museos y centros culturales
## Monumentos y patrimonio histórico
## Rutas y paseos recomendados
## 🚌 Cómo llegar en transporte público
OBLIGATORIO: Para cada lugar imprescindible indica línea de bus/metro/tranvía, parada más cercana y tiempo desde el centro.
## Itinerario sugerido por días
NO hables de alojamiento ni gastronomía.`;

    case "actividades":
      return `Habla ÚNICAMENTE sobre actividades en ${d}${f}. Responde en español con emojis y markdown.
## Actividades de naturaleza
## Actividades históricas y culturales
## Actividades de aventura
## Actividades familiares
## Eventos y festivales${f}
## Cómo y dónde reservar
NO hables de alojamiento ni transporte.`;

    case "gastronomia":
      return `Habla ÚNICAMENTE sobre gastronomía de ${d}${f}. Responde en español con emojis y markdown.
## Platos típicos imprescindibles
## Bebidas típicas locales
## Mejores restaurantes por presupuesto
## Mercados y street food
## Horarios y costumbres gastronómicas
## Productos locales para llevar
NO hables de alojamiento ni transporte.`;

    case "tiempo":
      return `Habla ÚNICAMENTE sobre el clima en ${d}${f}. Responde en español con emojis y markdown.
## Clima esperado${f}
## Precipitaciones
## Qué ropa llevar
## Fenómenos meteorológicos especiales
## Comparativa por meses
## Consejos según el tiempo
NO hables de alojamiento ni transporte.`;

    case "mareas":
      return `Habla ÚNICAMENTE sobre mareas y zonas costeras en ${d}${f}. Responde en español con emojis y markdown.
Si es zona costera: coeficientes, playas, actividades, seguridad.
Si NO es costera: zonas de agua más cercanas (ríos, pantanos, playas fluviales, costa más próxima con distancia).
NO hables de alojamiento ni transporte.`;

    case "esim":
      /**
 * Netlify Function — Proxy para OpenRouter API
 * Variable de entorno necesaria: OPENROUTER_API_KEY
 * (configúrala en Netlify → Site configuration → Environment variables)
 */

const MODEL = "openrouter/free";

function getPrompt(tab, destination, fechas, origen, transporte, combustible, fueraCEE) {
  const d = destination;
  const f = fechas ? ` para el período ${fechas}` : "";
  const o = origen ? ` desde ${origen}` : " desde España";

  switch (tab) {
    case "alojamiento":
      return `Habla ÚNICAMENTE sobre alojamiento en ${d}${f}. Responde en español con emojis y markdown (##, -, **negrita**).
## Mejores zonas para alojarse
## Tipos de alojamiento y precios
(hoteles, hostels, apartamentos, casas rurales — rangos de precio por noche)
## Recomendaciones específicas
(nombres reales de establecimientos)
## Dónde reservar
Enlace Booking.com: https://www.booking.com/searchresults.es.html?ss=${d.replace(/ /g, "+")}
NO hables de visitas, gastronomía ni transporte.`;

    case "transporte_publico":
      return `Habla ÚNICAMENTE sobre cómo llegar a ${d}${o}${f} en transporte público. Responde en español con emojis y markdown.
## Opciones de tren
(compañías, duración, precio aproximado, URL donde comprar)
## Opciones de autobús
## Opciones de avión
(aeropuertos, aerolíneas, precio, dónde buscar vuelos)
## Opciones de barco/ferry (si aplica)
## Combinaciones recomendadas
## Consejos para reservar
NO hables de alojamiento ni gastronomía.`;

    case "transporte_camper":
      return `Habla ÚNICAMENTE sobre viaje en camper desde ${origen || "España"} hasta ${d}${f} con combustible ${combustible || "diésel"}. Responde en español con emojis y markdown.
## Ruta recomendada
(carreteras principales, distancia total, tiempo estimado)
## Gasolineras en ruta
Consulta precios en: https://preciosgasolineras.es y https://www.dieselogasolina.com
## Servicios para camper EN RUTA
(áreas con vaciado aguas grises/negras, agua potable, electricidad)
Webs para encontrar servicios: https://park4night.com y https://www.campercontact.com/es
## Servicios para camper EN DESTINO: ${d}
(áreas de acampada, parkings, campings — nombres, ubicación y precio estimado por noche)
- https://park4night.com/search?q=${d.replace(/ /g, "+")}
- https://www.campercontact.com/es/country/search?q=${d.replace(/ /g, "+")}
## Normas y regulaciones en ${d}
## Peajes y costes estimados
NO hables de hoteles ni gastronomía.`;

    case "transporte_vehiculo":
      return `Habla ÚNICAMENTE sobre viaje en vehículo desde ${origen || "España"} hasta ${d}${f} con ${combustible || "gasolina"}. Responde en español con emojis y markdown.
## Ruta recomendada
## Gasolineras en ruta
Consulta precios en: https://preciosgasolineras.es y https://www.dieselogasolina.com
## Peajes
## Coste estimado del combustible
## Aparcamiento en ${d}
## Consejos de conducción
NO hables de alojamiento ni gastronomía.`;

    case "visitas":
      return `Habla ÚNICAMENTE sobre qué visitar en ${d}${f}. Responde en español con emojis y markdown.
## Los 10 lugares imprescindibles
(descripción, horarios y precio de entrada de cada uno)
## Lugares menos conocidos
## Museos y centros culturales
## Monumentos y patrimonio histórico
## Rutas y paseos recomendados
## 🚌 Cómo llegar en transporte público
OBLIGATORIO: Para cada lugar imprescindible indica línea de bus/metro/tranvía, parada más cercana y tiempo desde el centro.
## Itinerario sugerido por días
NO hables de alojamiento ni gastronomía.`;

    case "actividades":
      return `Habla ÚNICAMENTE sobre actividades en ${d}${f}. Responde en español con emojis y markdown.
## Actividades de naturaleza
## Actividades históricas y culturales
## Actividades de aventura
## Actividades familiares
## Eventos y festivales${f}
## Cómo y dónde reservar
NO hables de alojamiento ni transporte.`;

    case "gastronomia":
      return `Habla ÚNICAMENTE sobre gastronomía de ${d}${f}. Responde en español con emojis y markdown.
## Platos típicos imprescindibles
## Bebidas típicas locales
## Mejores restaurantes por presupuesto
## Mercados y street food
## Horarios y costumbres gastronómicas
## Productos locales para llevar
NO hables de alojamiento ni transporte.`;

    case "tiempo":
      return `Habla ÚNICAMENTE sobre el clima en ${d}${f}. Responde en español con emojis y markdown.
## Clima esperado${f}
## Precipitaciones
## Qué ropa llevar
## Fenómenos meteorológicos especiales
## Comparativa por meses
## Consejos según el tiempo
NO hables de alojamiento ni transporte.`;

    case "mareas":
      return `Habla ÚNICAMENTE sobre mareas y zonas costeras en ${d}${f}. Responde en español con emojis y markdown.
Si es zona costera: coeficientes, playas, actividades, seguridad.
Si NO es costera: zonas de agua más cercanas (ríos, pantanos, playas fluviales, costa más próxima con distancia).
NO hables de alojamiento ni transporte.`;

    case "esim":
      return `Habla ÚNICAMENTE sobre conectividad móvil y eSIM para viajar a ${d} desde España. Responde en español con emojis y markdown.
IMPORTANTE: Solo menciona proveedores que realmente operen o tengan cobertura en ${d}. Si un proveedor no opera en ${d}, omítelo completamente.

## Por qué necesitas una eSIM o tarifa internacional
(explica brevemente los cargos por roaming fuera de la CEE y por qué conviene prepararlo antes de salir de España)

## 📊 Tabla comparativa de proveedores para ${d}
Crea una tabla markdown con SOLO los proveedores que operan en ${d}. Columnas:
| Proveedor | Tipo | Datos | Precio aprox. | Validez | Llamadas incluidas | Enlace |
|-----------|------|-------|---------------|---------|-------------------|--------|
Incluye en la tabla SOLO los que aplican a ${d}:
- Revolut eSIM (si opera en ${d})
- Yoigo Travel (si opera en ${d})
- Movistar Roaming (si opera en ${d})
- MásOrange/Orange Roaming (si opera en ${d})
- Vodafone Roaming Pass (si opera en ${d})
- Digi Roaming (si opera en ${d})
- Airalo (si opera en ${d})
- Holafly (si opera en ${d})
- Ubigi (si opera en ${d})
- Nomad (si opera en ${d})
- Maya (si opera en ${d})
Si no tienes datos exactos de precio usa "Consultar" en esa celda.

## 🏆 Mejor opción para ${d}
(recomienda el proveedor más conveniente para ${d} según cobertura, precio y facilidad — justifica brevemente)

## 📱 eSIM de Revolut (si opera en ${d})
- App Revolut → "eSIM" → disponible para planes Plus, Premium, Metal y Ultra
- https://www.revolut.com/es-ES/esim/

## 📱 Yoigo Travel (si opera en ${d})
- App Mi Yoigo o https://www.yoigo.com/movil/internacional
- Disponible para clientes con contrato

## 📡 Movistar Internacional (si opera en ${d})
- App Mi Movistar o llamar al 1004
- https://www.movistar.es/particulares/movil/servicios/roaming-internacional/

## 🟠 MásOrange / Orange (si opera en ${d})
- App Mi Orange o Mi MásMóvil
- Orange: https://www.orange.es/particulares/movil/tarifas/roaming/
- MásMóvil: https://www.masmovil.es/movil/roaming/

## 🔴 Vodafone Roaming Pass (si opera en ${d})
- App Mi Vodafone
- https://www.vodafone.es/c/particulares/es/productos-y-servicios/movil/roaming-y-viajes/

## 🔵 Digi Roaming (si opera en ${d})
- App MyDigi o https://www.digimobil.es/tarifas/roaming
- Especialmente económico

## 🌍 eSIMs independientes para ${d}
(solo las que tienen cobertura real en ${d}):
- Airalo → https://www.airalo.com
- Holafly → https://holafly.com/es
- Ubigi → https://cellulardata.ubigi.com/es
- Nomad → https://www.getnomad.app
- Maya → https://maya.net/es

## 📶 Cobertura local en ${d}
(operadores locales con mejor cobertura 4G/5G en ${d} y cómo comprar SIM local si prefieres)

## ⚙️ Cómo activar una eSIM paso a paso
1. Compra/activa antes de salir de España
2. Escanea el QR o introduce el código de activación
3. En ajustes del móvil → añadir plan de datos
4. Activa el plan al llegar a ${d}
(indica si el móvil debe ser libre de SIM)

## 💡 Consejos de conectividad
(gestión de datos, apps útiles sin conexión, WiFi gratuito en ${d}, cómo evitar cargos inesperados)
NO hables de alojamiento ni gastronomía.`;


    case "documentacion":
      return `Habla ÚNICAMENTE sobre documentación para viajar a ${d} desde España. Responde en español con emojis y markdown.
## Documentos necesarios
## Visado (si es necesario: proceso, coste, tiempo)
## Salud y vacunas
## Seguro de viaje
## Aduana
## Moneda y dinero
NO hables de alojamiento ni actividades.`;

    case "enlaces":
      return `Lista ÚNICAMENTE recursos web para ${d}. Responde en español con emojis y markdown con URLs reales.
## Web oficial de turismo
## Entradas y reservas de monumentos
## Transporte público local
## Apps imprescindibles
## Tours y actividades
## Mapas y navegación
## Otros recursos útiles`;

    case "consejos":
      return `Habla ÚNICAMENTE sobre consejos prácticos para ${d}${f}${o}. Responde en español con emojis y markdown.
## Seguridad
## Transporte local
## Idioma (palabras y frases útiles)
## Costumbres y etiqueta
## Estafas comunes
## Presupuesto diario (económico / medio / alto en euros)
## Consejos específicos${f}
NO hables de alojamiento ni gastronomía.`;

    default:
      return `Información general sobre ${d}. Responde en español con emojis y markdown.`;
  }
}

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "OPENROUTER_API_KEY no configurada" }),
    };
  }

  try {
    const { destination, tab, fechas, origen, transporte, combustible, fueraCEE } = JSON.parse(event.body);
    if (!destination || !tab) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Faltan parámetros" }),
      };
    }

    const prompt = getPrompt(tab, destination, fechas, origen, transporte, combustible, fueraCEE);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://viajes-ta.netlify.app",
        "X-Title": "Asistente de Viajes TA",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 4000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content
      ?? data.error?.message
      ?? JSON.stringify(data);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ text }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Error interno", detail: err.message }),
    };
  }
};


    case "documentacion":
      return `Habla ÚNICAMENTE sobre documentación para viajar a ${d} desde España. Responde en español con emojis y markdown.
## Documentos necesarios
## Visado (si es necesario: proceso, coste, tiempo)
## Salud y vacunas
## Seguro de viaje
## Aduana
## Moneda y dinero
NO hables de alojamiento ni actividades.`;

    case "enlaces":
      return `Lista ÚNICAMENTE recursos web para ${d}. Responde en español con emojis y markdown con URLs reales.
## Web oficial de turismo
## Entradas y reservas de monumentos
## Transporte público local
## Apps imprescindibles
## Tours y actividades
## Mapas y navegación
## Otros recursos útiles`;

    case "consejos":
      return `Habla ÚNICAMENTE sobre consejos prácticos para ${d}${f}${o}. Responde en español con emojis y markdown.
## Seguridad
## Transporte local
## Idioma (palabras y frases útiles)
## Costumbres y etiqueta
## Estafas comunes
## Presupuesto diario (económico / medio / alto en euros)
## Consejos específicos${f}
NO hables de alojamiento ni gastronomía.`;

    default:
      return `Información general sobre ${d}. Responde en español con emojis y markdown.`;
  }
}

exports.handler = async (event) => {
  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "OPENROUTER_API_KEY no configurada" }),
    };
  }

  try {
    const { destination, tab, fechas, origen, transporte, combustible, fueraCEE } = JSON.parse(event.body);
    if (!destination || !tab) {
      return {
        statusCode: 400,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: "Faltan parámetros" }),
      };
    }

    const prompt = getPrompt(tab, destination, fechas, origen, transporte, combustible, fueraCEE);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "HTTP-Referer": "https://viajes-ta.netlify.app",
        "X-Title": "Asistente de Viajes TA",
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: prompt }],
        max_tokens: 4000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content
      ?? data.error?.message
      ?? JSON.stringify(data);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ text }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Error interno", detail: err.message }),
    };
  }
};
