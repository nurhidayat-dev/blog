---
title: Cara Membuat JSON dari Data Google Spreadsheet
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:11:55.983Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-membuat-json-dari-data-google-spreadsheet
  type: atom
  url: http://localhost:3000/blog/cara-membuat-json-dari-data-google-spreadsheet
---
Di postingan kali ini saya akan membagikan tutorial membuat json endpoint (API) dari sebuah data google spreadsheet yang mana data tersebut berasal dari google form. Jadi yang pertama harus dilakukan adalah membuat form atau formulir dari google form.

langsung saja, pertama buka [drive.google.com](http://drive.google.com) . lalu klik tombol baru.

![](assets/Screenshot_9-NqlB3yXDiPvE.png)

setelah itu klik tambah google formulir, lalu pilih formulir kosong.

![](assets/Screenshot_10-qdMXmd6kbCNa.png)

kemudian buat sebuah formulir misalkan, formulir Nama.

Tampilan awal :

![](assets/Screenshot_11-g159l7uSOtWi.png)

Misalnya menjadi seperti dibawah :

\* untuk menambahkan form input yang lain, bisa dengan mengklik tombol plus di sebelah kanan form.

![](assets/Screenshot_12-CnaaV3xxaiZ4.png)![](assets/Screenshot_14-UituQZDcalRq.png)

setelah selesai membuat form, lalu klik tombol kirim yang berada disebelah kanan atas. nanti akan muncul tampilan seperti dibawah ini :

![](assets/Screenshot_15-gtTEGqDyLgVl.png)

\* untuk link bisa langsung disalin atau dicopy, atau pun bisa diperpendek URL nya supaya lebih baik dan ringkas.

![](assets/Screenshot_16-3SWPK4TQsKxU.png)

setelah mengcopy atau menyalin URL nya, lalu pastekan di browser anda. nanti akan muncul tampilannya seperti pada gambar dibawah ini:

![](assets/Screenshot_17-iV5Ty3kZu8Yz.png)

lalu isi misalkan Nama Akmal, setelah diisi kemudian klik kirim. setelah mengklik tombol kirim lalu kembali ke tampilan dimana menginputkan formulir atau soal.

![](assets/Screenshot_14-71QR3NRQdDh9.png)

Klik tab respon disebelah tab pertanyaan. semua yang diinput sebelumnya akan muncul disini. Tampilannya akan seperti dibawah ini:

![](assets/Screenshot_20-MVBHvHAFCOW5.png)

kemudian klik tombol spreadsheet (seperti tanda plus) yang berwarna hijau, maka akan muncul popup seperti dibawah ini:

![](assets/Screenshot_21-91YrT0pH5mgP.png)

Klik buat, maka akan muncul tampilan spreadsheet :

![](assets/Screenshot_22-LfjwWfVKcvVB.png)

Klik file lalu pilih publishkan di web :

![](assets/Screenshot_26-uA8xc7N1wpVS.png)

Lalu klik publikasikan.

![](assets/Screenshot_27-36YdJpT1kAk9.png)

Klik ok.

![](assets/Screenshot_28-HUUYDdHKsZZn.png)

Kemudian buka lagi tampilan spreadsheet yang tadi.

![](assets/Screenshot_25-tu91ays17sRc.png)

\* Salin Id yang ditandai warna biru tersebut. lalu masukkan id tersebut ke url seperti dibawah ini:

![](assets/carbon+%283%29-A3lSdVdsBOXj.png)

\* ubah id dan numbersheet. **id** berasal dari yang sebelumnya disalin dan untuk numbersheet bisa diisi dengan **1.**

[**Contoh Lengkap**](https://spreadsheets.google.com/feeds/cells/1x3uErM1oZGFXk2TV2mFP_06I8daIyteGF8hcP3tRbLM/1/public/full?alt=json)

Setelah selesai lalu buka url tersebut maka tampilannya akan muncul tampilan seperti dibawah ini:

![](assets/Screenshot_29-RclhBwlBpmPH.png)

Selesai. sampai berjumpa di artikel berikutnya.