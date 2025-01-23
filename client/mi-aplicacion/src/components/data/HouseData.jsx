export const houses = [
    {
      id: 1,
      title: "Ático luminoso con terraza",
      price: 1500,
      surface: 120,
      bedrooms: 3,
      restrooms: 2,
      features: ["Terraza", "Garaje", "Aire acondicionado", "Piscina comunitaria"],
      description: "Ático con gran terraza y vistas panorámicas, ideal para familias.",
      rent: 1,  // 1 = alquiler, 0 = venta
      location_name: "Barcelona",
      is_province: 0  // 1 = provincia, 0 = ciudad
    },
    {
      id: 2,
      title: "Chalet en zona residencial",
      price: 320000,
      surface: 200,
      bedrooms: 4,
      restrooms: 3,
      features: ["Jardín", "Piscina privada", "Garaje", "Chimenea"],
      description: "Chalet independiente con amplios espacios y jardín privado.",
      rent: 0,  // 1 = alquiler, 0 = venta
      location_name: "Valencia",
      is_province: 1  // 1 = provincia, 0 = ciudad
    },
    {
      id: 3,
      title: "Piso moderno en el centro",
      price: 950,
      surface: 75,
      bedrooms: 2,
      restrooms: 1,
      features: ["Ascensor", "Balcón", "Cerca del transporte público"],
      description: "Piso reformado con diseño moderno en pleno corazón de la ciudad.",
      rent: 1,  // 1 = alquiler, 0 = venta
      location_name: "Sevilla",
      is_province: 0  // 1 = provincia, 0 = ciudad
    }
  ];