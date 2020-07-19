console.clear();

// Orientacion para Fotografias

const landscape = 0;
const portrait = 1;
const square = 2;
const panorama = 3;

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

enum FelType {
    Invoice = 'Invoice',
    SpecialInvoice = 'SpecialInvoice'
}

const photo: PhotoOrientation = PhotoOrientation.Landscape;
console.log('photo:',photo);

let invoice : FelType;
invoice = FelType.SpecialInvoice;

console.log('invoice type:',invoice);