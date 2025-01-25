---
title: Cara Mempercepat Loading Blogger dengan Lazysizes
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:16:36.861Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-mempercepat-loading-blogger-dengan-lazysizes
  type: atom
  url: http://localhost:3000/blog/cara-mempercepat-loading-blogger-dengan-lazysizes
---
Kecepatan loading blog sangatlah penting dimata google pun bagi pembaca. Sebuah blog dengan loading yang sangat cepat akan membuat pengguna nyaman ketika membaca, bayangkan jika blog dengan loading lambat dan anda berkunjung ke blog tersebut maka anda akan merasa jengkel disebabkan konten tidak kunjung muncul.

## Cara Kerja Lazysizes

Lazysizes adalah sebuah javascript yang membuat gambar dalam blog sobat di muat setelah kode-kode lain yang sangat penting di muat misal css html beserta javascript, setelah dimuat sepenuhnya maka gambar akan di muat paling akhir juga, lazysizes ini dapat memuat gambar yang akan ditampilkan sesuai dengan ukuran layar dari source gambar yang tersedia. Lazysizes sangat membantu mempercepat loading blog dan direkomendasikan oleh [web.dev](http://web.dev).

Supaya lazysizes bekerja kita harus menggantikan src dengan data-src atau ditimpa dengan srcset lalu menambahkan data-srcset. 

Ketika src diganti dengan data-src maka gambar tidak akan tampil karena data-src bukanlah kode yang akan menampilkan source gambar setelah itu javascript Lazysizes akan mengubah si data-src ini menjadi src yang akan menampilkan source gambar.

Coba saja kamu tulis kode html berikut dan buka dalam web browser, maka gambar tidak akan pernah tampil.

```
<img data-src="url-image.jpg"/>
```

Logikanya jika kamu akan kepasar lalu kamu menuju jalan buntu maka kamu tidak bisa menuju kepasar karena tidak ada jalan, lalu datanglah emak-emak yang membenarkan jalanmu untuk kepasar maka kamupun sampai dipasar.

Contoh penerapan kode.

```
<img data-src="image.jpeg" class="lazyload"/>
```

Berbeda lagi dengan srcset, kenapa? Karena srcset menimpa src sehingga source gambar ditampilkan tidak secara semestinya misalkan dengan gambar transparan, maka kita membutuhkan data-srcset yang akan menimpa srcset dengan gambar yang semestinya. 

Secara logika kamu akan pergi kepasar dan sudah tahu jalan yang benar namun ternyata ada sebuah gerbang dijalan tersebut sehingga kamu tidak bisa lewat lalu datanglah emak-emak yang membukakan gerbang tersebut sehingga kamu bisa lewat dan sampai kepasar. 

Contoh penerapan kode

```
<img src="image3.jpg" 
srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
data-srcset="image3.jpg 600w, image1.jpg 220w, image2.jpg 300w, image4.jpg 900w"
data-sizes="auto" class="lazyload" />
```

Bedanya metode data-src dan data-srcset ialah pada ukuran. Pada data-src kita hanya bia menerapkan satu source gambar sedangkan pada data-srcset kita bisa menerapkan source berbagai ukuran gambar sehingga ukuran gambar yang dimuat oleh browser sesuai dengan ukuran layar pengguna yang akan meminimalkan ukuran loading blog dan tentunya akan lebih cepat serta menghemat data ketika dimuat terutama mobile devices.

## Cara Kerja responsiveImage Blogger

Lalu ada responsiveImage dari blogger, responsiveImage ini berfungsi untuk mengubah ukuran gambar seperti thumbnail dan photo profil dari author.

Cara kerja dari responsiveImage blogger tidak jauh berbeda dengan penerapan lazysizes metode srcset. Bedanya terletak pada pemuatan, lazysizes akan memuat di akhir sedangkan responsiveImage Blogger akan dimuat secara standar.

Penerapanya akan menerapkan srcset dengan source gambar yang asli sehingga pemuatan gambar berjalan secara standar, berikut kode responsiveImage blogger.

```
<b:includable id='responsiveImage'>
<img expr:src='data:image'>
<b:class expr:name='data:imageClass'/>
<b:attr expr:value='data:altText ?: data:messages.image' name='alt'/>
<b:attr cond='data:enhancedSourceset.isYoutube' expr:value='resizeImage(data:enhancedSourceset, 1152, "1152:864")' name='data-ess'/>
<b:attr expr:value='data:originalWidth' name='data-original-width'/>
<b:attr expr:value='data:originalHeight' name='data-original-height'/>
<b:attr expr:value='data:image.isResizable ? data:sourceSizes : ""' name='sizes'/>
<b:attr expr:value='sourceSet(data:image, (data:imageSizes ?: [120,240,480,640,800]), data:imageRatio)' name='srcset'/>
</img>
</b:includable>
```

dengan kondisi pemanggilan seperti berikut.

```
<b:include data='{ image: data:post.featuredImage, imageSizes: [72,144], imageRatio: "1:1", sourceSizes: "72px" }' name='responsiveImage'/>
```

Maka menghasilkan html kurang lebih seperti berikut.

```
<img src="image.jpg"
alt="image"
data-original-width="200px"
data-original-height="200px"
sizes="72px"
srcset="image1.jpg 72px, image2.jpg 144px"></img>
```

  

Cukup rumit jika kurang memahami seluk beluk dari kode blogger dan HTML5.

Sederhananya source gambar dari `srcset` akan dimuat sesuai dengan value dari `sizes` jika value tidak ada yang sama maka ukuran yang mendekatilah yang akan dimuat.

Dengan begitu data dari source gambar yang dimuat tidak terbuang sia-sia, misalkan gambar dengan ukuran lebar 1200px dan ukuran 1MB dimuat dari layar dengan ukuran lebar 360px maka yang tampil tidak lebih dari 360px dan data yang diambil tetap 1MB.

Namun ketika menerapkan responsiveImage maka ukuran data bisa diperkecil karena lebar dari source gambar akan diubah ke 360px sehingga data yang dimuat akan lebih kecil dan tentunya akan menghemat data pemuatan terutama jika dimuat pada mobile devices.

Pada awalnya saya kira responsiveImage di blogger ini hanya berkerja jika gambar di simpan di cdn google seperti penyimpanan blogspot/blogger, google foto dan Google Drive. Nyatanya bekerja dengan gambar dari manapun gambar itu disimpan, saya mencobanya dengan gambar yang bisa kita download gratis di pexels namun saya tidak mendownloadnya melainkan mengambil url source gambarnya saja dan menambahkan gambar via url di postingan blogger.

Hasil akhir gambar tersebut dimuat dari cdn google dan dirubah ukurannya, sebagai contoh url yang sudah dimuat dari cdn google.

```
https://lh3.googleusercontent.com/proxy/TD2RbRjs1wf8ix_YmoCwGniv9g9GUGDIACHJgeaSDKY3KRSK1oHOHgBncHymnAIHuM-YQkZLKTTpll8Vb5NOWQYBM9iJwayzXzhaixeM365Otem-WAA=w300-h150-p-k-no-nu
```

Sedangkan url aslinya

```
https://images.pexels.com/photos/2228579/pexels-photo-2228579.jpeg
```

Wow! Ternyata blogger memiliki fitur yang saya inginkan dan baru saya ketahui beberapa bulan sebelum postingan ini dibuat.

## Menerapkan LazySizes pada ResponsiveImage

Pada saat saya menemukan fitur responsiveimage dari blogger dan menerapkanya saya pun menemukan hal baru yaitu lazysizes, saya pikir Lazysizes dan responsiveImage sudah ditakdirkan untuk bersama-sama dalam rangka mempercepat loading blog. 

Ketika saya menerapkannya, saya memiliki kesulitan dikarenakan saya belum begitu mengetahui kode blogger, namun tetap saya paksakan dan hasilnya bisa dibilang cukup memuaskan karena loading blog terasa cepat.

Untuk metode penerapanya perlu sobat simak dengan baik.

### **Spesifikasi Template**

Perlu diperhatikan karena fitur responsiveImage hanya berjalan dengan template blogger yang memiliki spesifikasi sebagai berikut

1.  Widget v3
    
2.  Layout v2
    

### **Penerapan**

Pasang terlebih dahulu lazysizes pada template dengan cara copy dan paste kode berikut bisa diatas kode \</head> maupun diatas kode \</body>.

```
<script src='https://fiik346.github.io/js/lazysizes/5.2.2.min.js'/>
```

Sekarang cari kode seperti berikut

```
<b:defaultmarkup type='Common'>
```

Sekarang tambahkan kode berikut tepat dibawah kode yang dicari tadi.

```
<b:includable id='responsiveImage'>
<img expr:data-src='data:image'>
<b:class expr:name='data:imageClass' />
<b:attr expr:value='data:fallBack ? data:fallBack : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="' name='srcset'/>
<b:attr expr:value='data:altText ?: data:messages.image' name='alt' />
<b:attr cond='data:enhancedSourceset.isYoutube' expr:value='resizeImage(data:enhancedSourceset, 1152, "1152:864")' name='data-ess' />
<b:attr expr:value='data:originalWidth' name='data-original-width' />
<b:attr expr:value='data:originalHeight' name='data-original-height' />
<b:attr expr:value='data:image.isResizable ? data:sourceSizes : ""' name='data-sizes' />
<b:attr expr:value='sourceSet(data:image, (data:imageSizes ?: [120,240,480,640,800]), data:imageRatio)' name='data-srcset' />
</img>
</b:includable>
```

Jika tidak ada maka bisa menambahkan kode berikut.

```
<b:defaultmarkups>
<b:defaultmarkup type='Common'>
<b:includable id='responsiveImage'>
<img expr:data-src='data:image'>
<b:class expr:name='data:imageClass' />
<b:attr expr:value='data:fallBack ? data:fallBack : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="' name='srcset'/>
<b:attr expr:value='data:altText ?: data:messages.image' name='alt' />
<b:attr cond='data:enhancedSourceset.isYoutube' expr:value='resizeImage(data:enhancedSourceset, 1152, "1152:864")' name='data-ess' />
<b:attr expr:value='data:originalWidth' name='data-original-width' />
<b:attr expr:value='data:originalHeight' name='data-original-height' />
<b:attr expr:value='data:image.isResizable ? data:sourceSizes : ""' name='data-sizes' />
<b:attr expr:value='sourceSet(data:image, (data:imageSizes ?: [120,240,480,640,800]), data:imageRatio)' name='data-srcset' />
</img>
</b:includable>
</b:defaultmarkups>
```

Sekarang cari kode seperti berikut.

```
<b:include ... name='responsiveImage'/>
```

Ganti dengan kode berikut

```
<b:include
data='{ image: data:featuredImage,
imageSizes: [300, 400, 640, 800],
imageRatio: "2:1", 
sourceSizes: "auto", 
imageClass: "card-img-top lazyload", 
altText: data:post.title,
fallBack: "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAQAAABeK7cBAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII=", 
enhancedSourceset: data:highRes }' name='responsiveImage'/>
```

\- Untuk imageSizes adalah ukuran lebar berapa saja gambar yang akan tampil misal 300, 400, 640, 800.  
\- imageRatio adalah rasio lebar dan tinggi gambar misal 2:1 atau 4:3  
\- imageClass adalah class dari gambar yang nantinya akan seperti `<img class="..."`, tapi jangan hapus lazyload karena class tersebutlah yang berfungsi sebagai pemanggil lazysizes  
\- fallBack itu tambahan saya sendiri bisa menggunakan gambar gif base64 ukuran sesuaikan dengan ratio

Hati hati ketika proses eksekusi, karena bisa berakibat fatal seperti gagal render dan yang tampil hanya blank.

## Akhir Kata

Caranya cukup mudah jika kamu memahami code dari blogger, karena yang dilakukan hanyalah menulis ulang dan memodifikasi kode responsiveImage sehingga hasil render sesuai dengan yang kita inginkan. Setelah menerapkan lazysizes pada responsiveimage blogger yang saya rasakan loading blog menjadi lebih cepat dibandingkan sebelumnya.

> Mohon maaf bila logika atau cara penyampaian kurang nyambung dan kurang dipahami silahkan tanyakan di kolom komentar jika kamu kurang paham

**Notes:** Setelah saya belajar lebih banyak javascript dengan framework vue dan react logika dan code blogger menjadi lebih mudah dipahami.