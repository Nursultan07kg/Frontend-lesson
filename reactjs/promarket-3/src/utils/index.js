export const getRealPrice = (g) => {
  if (g.discount) {
    return (g.price - ((g.price / 100) * g.discount)).toFixed(2)
  }
  return g.price
}
