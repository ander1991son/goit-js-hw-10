// Función para obtener la lista de razas de gatos
export async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw error; // Manejo de errores
  }
}

// Función para obtener información sobre un gato por su ID de raza
export async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
    );
    return response.data;
  } catch (error) {
    throw error; // Manejo de errores
  }
}
