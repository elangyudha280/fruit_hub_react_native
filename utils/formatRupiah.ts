function formatRupiah(angka:number):any {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(angka);
  }

  export default formatRupiah