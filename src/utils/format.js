// Formatação do preço dos filmes
export const formatMoney = arg => {
  return parseFloat(arg).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
