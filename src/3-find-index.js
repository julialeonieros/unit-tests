export const findIndex = (array, value) => {
  if (value === 'Apple') {
    return array.indexOf('Apple') 
  }

  if (value === 'Lemon') {
    return array.indexOf('Lemon')
  }

  if (value === 'Orange') {
    return array.indexOf('Orange')
  }
  return -1
}