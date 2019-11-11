// const siempreno = false

// const nosVamosACasar = new Promise((resolve, reject) => {
//   if (siempreno) {
//     reject('se va llorando')
//   } else {
//     resolve('ay kemosion')
//   }
// })

// nosVamosACasar
//   .then(response => console.log(response))
//   .catch(errMessage => console.log(errMessage))

// const calentarcafe = new Promise(resolve => {
//   setTimeout(() => resolve('El café esta listó'), 1300)
// })
// const calentarChawich = new Promise(resolve => {
//   setTimeout(() => resolve('El chanwich esta listó'), 2000)
// })

// Promise.race([calentarcafe, calentarChawich]).then(result =>
//   console.log(result)
// )

// console.log('Mochila lista')

const lavarTrastes = new Promise((resolve, reject) => {
  setTimeout(() => resolve('trastes listos'), 5000)
})
const lavarRopa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('ropa lista'), 8000)
})
const limpiarMesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Mesa lista'), 2000)
})

const colgarRopa = new Promise((resolve, reject) => {
  setTimeout(() => resolve('ropa tendida'), 6000)
})

const ropaSeca = new Promise((resolve, reject) => {
  setTimeout(() => resolve('ropa seca'), 10000)
})
const jugarLol = new Promise((resolve, reject) => {
  setTimeout(() => resolve('jugando Lol'), 10000)
})

console.log('deje la ropa lavando y limpiamos los trastes')
// lavarRopa.then(res => {
//   console.log(res)
//   colgarRopa.then(res => {
//     console.log(res, 'puedo dejar a secar la ropa y jugar')
//     ropaSeca.then(res => {
//       console.log(res)
//     })
//     jugarLol.then(res => {
//       console.log(res)
//     })
//   })
// })

// lavarTrastes.then(res => {
//   console.log(res, 'puedo limpiar la mesa')
//   limpiarMesa.then(res => {
//     console.log(res)
//   })
// })

async function useless() {
  const lavarRopaRes = await lavarRopa
  console.log(lavarRopaRes)
  const colgarRopaRes = await colgarRopa
  console.log(colgarRopaRes, 'puedo dejar a secar la ropa y jugar')
  if (colgarRopaRes) {
    const ropaSecaRes = await ropaSeca
    console.log(ropaSecaRes)
    const jugatLolRes = await jugarLol
    console.log(jugatLolRes)
  }

  const lavarTrastesRes = await lavarTrastes
  console.log(lavarTrastesRes, 'puedo limpiar la mesa')
  const limpiarMesaRes = await limpiarMesa
  console.log(limpiarMesaRes)
}

useless().catch(err => console.log(err))
