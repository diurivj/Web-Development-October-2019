// 1. Debemos de tener la libreria de Jasmine
// 2. Debemos de tener una carpeta para nuestro codigo que queremos testear
// 3. Debemos de tener una carpeta para nuestros tests

// Forma de como escribir un test en Jasmine

describe('Aqui va el titulo principal de tus tests', () => {
		describe('Aqui van los subtitulos, por area o parte de tu codigo que quieres testear', () => {
				it('descripcion de que deberia de hacer tu codigo', () => {
					expect(something).toBe(valorcorrecto)
				})
		})
		describe('Dentro de otra subarea', () => {
				it('otro test', () => {
					expect(edadDeDiego).toEqual(undefined)
				})
		})
})
