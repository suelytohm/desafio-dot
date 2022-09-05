// URL base da Imagem
export const resolveImage = img => {
  return img
    ? `https://image.tmdb.org/t/p/w500${img}`
    : 'https://www.inovegas.com.br/site/wp-content/uploads/2017/08/sem-foto.jpg'
}
