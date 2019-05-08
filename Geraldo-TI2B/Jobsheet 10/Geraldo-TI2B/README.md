# 10. Routes

Praktikum - Bagian 1: Configure the Routes
---

* Membuat komponen posts, form-member, navbar, not-found, dan home

![](img/10/1.PNG)

* Buka file **app.module.ts**. Memastikan komponen pada langkah 1 sudah terdaftar seperti berikut:

![](img/10/2.PNG)

* Menambahkan module router pada file **app.module.ts** seperti berikut:

![](img/10/3.PNG)

* Buka file **navbar.component.html** kemudian menambahkan code sebagai berikut:

![](img/10/4.PNG)

* Buka file **navbar.component.html** kemudian ganti code menjadi sebagai berikut:

![](img/10/5.PNG)

* Hasilnya seperti berikut:

![](img/10/6.PNG)

Praktikum - Bagian 2: Router Outlet
---

* Buka file **app.component.html** kemudian menambahkan code sebagai berikut:

![](img/10/7.PNG)

* Hasilnya seperti berikut:

![](img/10/8.PNG)

* Inspect Element:

![](img/10/9.PNG)

> app-navbar berhasil di jalankan

* Menjalankan link **localhost:4200/form** 

![](img/10/10.PNG)

* Menjalankan link **localhost:4200/post** 

![](img/10/11.PNG)

* Menjalankan link **localhost:4200/coba** 

![](img/10/12.PNG)

> Penjelasan langkah 3, 4 dan 5: Membuat beberapa outlet untuk link. Setiap link mempunyai component sendiri kecuali link **localhost:4200/coba** karena tidak dibuatkan component

Praktikum - Bagian 3: Add Link
---

* Buka file **navbar.component.html** kemudian menambahkan link pada href tiap menu seperti berikut:

![](img/10/13.PNG)

> Jika klik navbar home dan post, maka link akan berubah menjadi .../home dan .../post

* Memodifikasi href menjadi routerLink pada halaman **navbar.component.html** seperti berikut:

![](img/10/14.PNG)

* Hasilnya seperti berikut:

![](img/10/15.PNG)

* Memodifikasi class li pada file **navbar.component.html** menjadi seperti berikut:

![](img/10/16.PNG)

* Hasilnya seperti berikut:

![](img/10/17.PNG)

Praktikum - Bagian 4: Accessing Route Parameter
---

* Membuat komponen baru bernama **profile** dengan perintah `ng g c profile`

![](img/10/18.PNG)

* Buka file **app.module.ts** kemudian menambahkan route untuk profile sebagai berikut:

![](img/10/19.PNG)

* Buka file **home.component.html** kemudian menambahkan code sebagai berikut:

![](img/10/20.PNG)

* Modifikasi file **profile.component.ts** menjadi seperti berikut:

![](img/10/21.PNG)

* Hasilnya seperti berikut:

![](img/10/22.PNG)

> Link Joko Bowo mempunyai id, yang terletak pada routerLink

* Modifikasi file **profile.component.ts** menjadi seperti berikut:

![](img/10/23.PNG)

* Hasilnya seperti berikut:

![](img/10/24.PNG)