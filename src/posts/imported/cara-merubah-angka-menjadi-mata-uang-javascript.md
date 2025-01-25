---
title: 'Cara Merubah Angka Menjadi Mata Uang di Javascript '
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:12:29.231Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-merubah-angka-menjadi-mata-uang-javascript
  type: atom
  url: http://localhost:3000/blog/cara-merubah-angka-menjadi-mata-uang-javascript
---
Di postingan ini kita akan belajar cara merubah angka menjadi mata uang, bisa menjadi rupiah, dolar, euro dan mata uang lainya dengan javascript.

## Dengan Intl.NumberFormat

Cara ini yang direkomendasikan oleh MDN, karena performa lebih cepat. Caranya harus membuat `object` baru berupa `Intl.NumberFormat`.

```
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → '3,500' jika dalam bahasa Inggris
```

atau dengan menambahkan `Intl.NumberFormat` pada variabel / const dan menambahkan bahasa serta opsi mata uang.

```
const currency = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
})
console.log(currency.format(3500))
// Output: "Rp 3.500,00"
```

Ke dalam bahasa Jepang dengan mata uang Yen Jepang.

```
const currency = new Intl.NumberFormat('ja-JP', {
  style: 'currency',
  currency: 'JPY',
})
console.log(currency.format(3500))
// Output: "￥3,500"
```

Kedalam bahasa Jerman dengan mata uang Euro

```
const currency = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})
console.log(currency.format(3500))
// Output: "3.500,00 €"
```

## Dengan toLocaleString

Kamu juga bisa menggunakan `toLocaleString()` untuk merubah angka menjadi mata uang.

```
const number = 123456.789
console.log(number.toLocaleString())
//Output locale 'en-US': "123.456,789"
```

**Sntax**

```
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

Menampilkan dalam bahasa dan menambahkan opsi mata uang. Sama halnya seperti `Intl.NumberFormat`

```
const number = 3500
console.log(number.toLocaleString('id-ID', {
  style: 'currency',
  currency: 'IDR'
}))
//Output yang diharapkan: "Rp 3.500,00"
```

## Akhir Kata

Pada dasarnya sama saja menggunakan keduanya, namun disarankan menggunakan `Intl.NumberFormat` untuk performa lebih cepat.