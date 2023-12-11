# HITOPIA - Problem Solving Test

Repository ini berisi solusi untuk tiga soal problem solving yang diberikan oleh HITOPIA.

## 1. Weighted Strings

Soal ini meminta untuk membuat fungsi yang menentukan apakah bobot karakter atau substring dari sebuah string sama dengan angka tertentu.

**Aturan:**

* Bobot karakter a sampai z adalah 1 sampai 26.
* Bobot substring adalah penjumlahan bobot karakter-karakternya.
* Jika terdapat karakter yang berulang dan berurutan, maka perlu dirincikan ke dalam bentuk substring.

**Solusi:**

Solusinya menggunakan stack untuk menyimpan karakter-karakter yang telah diproses. Setiap kali karakter baru dimasukkan ke dalam stack, bobotnya dihitung dan dibandingkan dengan angka yang diberikan. Jika bobotnya sama, maka fungsi mengembalikan `True`. Jika tidak, maka fungsi mengembalikan `False`.

**Kompleksitas:**

Kompleksitas waktu algoritma ini adalah O(n), di mana n adalah panjang string. Hal ini karena algoritma harus mengecek setiap karakter di dalam string.

## 2. Highest Palindrome

Soal ini meminta untuk membuat fungsi yang menentukan palindrom tertinggi dari sebuah string dengan melakukan replacement sejumlah k karakter.

**Aturan:**

* String harus merepresentasikan sebuah angka.
* Jika tidak ditemukan palindrom, maka fungsi mengembalikan -1.
* Fungsi hanya boleh menggunakan rekursif.

**Solusi:**

Solusinya menggunakan rekursi untuk membagi string menjadi dua bagian. Jika bagian kiri dan kanan string adalah palindrom, maka fungsi mengembalikan string tersebut. Jika tidak, maka fungsi akan mencoba melakukan replacement pada satu karakter di bagian kiri atau kanan string.

**Kompleksitas:**

Kompleksitas waktu algoritma ini adalah O(n^2), di mana n adalah panjang string. Hal ini karena algoritma harus mencoba setiap kemungkinan replacement.

## 3. Balanced Bracket

Soal ini meminta untuk membuat fungsi yang menentukan apakah struktur bracket dari sebuah string seimbang.

**Aturan:**

* Tanda bracket yang diperbolehkan adalah (, ), {, }, dan [, ].
* Bracket bisa dipisahkan dengan atau tanpa whitespace.

**Solusi:**

Solusinya menggunakan stack untuk menyimpan tanda bracket yang telah diproses. Setiap kali tanda bracket baru dimasukkan ke dalam stack, tanda bracket yang sesuai harus ada di bagian atas stack. Jika tidak, maka struktur bracket tidak seimbang.

**Kompleksitas:**

Kompleksitas waktu algoritma ini adalah O(n), di mana n adalah panjang string. Hal ini karena algoritma hanya perlu memeriksa setiap tanda bracket di dalam string.

