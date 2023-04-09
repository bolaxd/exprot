# EXPROT ?

kenapa exprot? ya karna udah ada express, jadi bingung mo ngasi nama apa :v 

* `Org Tanya`: Bang ini Apaan si?
* `Gw`: ini Framework exprot

* `Org Tanya`: Fungsi nya apaan?
* `Gw`: Pake nanya lagi, ini framework kecil kecilan, bisa nulis frontend developer atau pun backend developer

* `Org Tanya`: Lah trus ngoding nya?
* `Gw`: Apalagi, kan gw dah bilang tadi ini exprot framework buat front / back backend

* `Org Tanya`: Ngga, maksud gw ini tempat ngoding nya di direktory apa? apa ada direktory khusus buat ngoding nya?
* `Gw`: Owh iya, gw lupa ngasih tau kalo ntar ngoding nya ada direktory khusus nya

------

# Perinci / aturan ngoding di exprot 

## Perkenalan
Exprot adalah framework kecil kecilan yang di ciptakan untuk membuat web ataupun API, dengan menggunakan framework express framework ini bisa dikatakan kloningan nya express 
Mulai saja dengan men git clone Repo ini dengan cli berikut:
```
> git clone https://github.com/bolaxd/exprot
```

lalu install dependensinya dengan perintah berikut: 
```
> npm install
```

lalu jalan kan perintah `npm run dev` untuk memulai mendevelopment web

<p align="center">
<img width="" src="https://img.shields.io/github/repo-size/bolaxd/exprot?color=lightblue&label=Repo%20Size&style=for-the-badge&logo=appveyor">
</p>

------
## Cara nya gimana?

Nah exprot ini memiliki direktory khusus yang di bikin untuk memudahkan orng membuat router atau page untuk front.

Terdapat 4 buah sub folder utama yang terpenting disini:
* backend
* frontend
* public
* src




### API dari `exprot`

untuk membuat API dengan framework ini anda bisa menggunakan folder `backend` dan mulai lah membuat file dan mengisi file tersebut dengan isian di bawah ini:

```js
import send from '../src/utils/send.js'

const Tes = {
	path: '/tes',
	method: 'GET',
	main: (req, res, next) => {
		return send.OK(null, res, `Success testing di server`)
	}
}

export default Tes;
```

dari code diatas kita telah membuat 1 router dengan nama `/tes`, dengan method `get` dan message nya yang di tampilkan adalah code 200 yang arti nya success
untuk mendapatkan status code dan pesan yang beragam anda bisa melihat list di bawah ini:

* status 100 => `send.Continue(data, res, message)`
* status 101 => `send.SwitchingProts(data, res, message)`
* status 200 => `send.OK(data, res, message)`
* status 201 => `send.Created(data, res, message)`
* status 202 => `send.Accepted(data, res, message)`
* status 400 => `send.BadRequest(data, res, message)`
* status 403 => `send.Forbidden(data, res, message)`
* status 404 => `send.NotFound(data, res, message)`
* status 405 => `send.MethodNotAllowed(data, res, message)`
* status 408 => `send.RequestTimeout(data, res, message)`
* status 500 => `send.ServerError(data, res, message)`

Dari list sini api akan menampilkan code dan pesan dengan bagus. dan untuk data nya jika tidak ada maka kamu bisa tulis `null`.

Owh iya jika status code di atas tidak sesuai dengan yg kamu minta kamu bisa men Custom nya sendiri:
```js
send.Custom(data, res, code, status, message)
```

### Web dari exprot 

untuk membuat web dari exprot / front end anda bisa akses folder `frontend` sebagai html nya, dan menarik nya disini anda tidak perlu membuat router, router otomatis terbuat ketika anda membuat file html nya,
semisal anda membuat file html dengan nama: `home.html` maka otomatis akan terbuat path url dengan nama home yang bisa di akses ketika local / production,

`!!! Front end disini harus berada didalam folder frontend, jika anda menciptakan file di root folder lain, maka tidak akan terbaca sebagai router`

#### lalu bagaimana dengan styling css nya?

Exprot disini sudah support tailwind css, jadi jika anda ingin menambahkan style anda, anda tidak perlu membuat file berekstensi `.css` anda bisa membuat nya di dalam html nya langsung!

tapi jikalau tailwind merasa kurang cukup? anda bisa mwnambahkan style css anda sendiri di dalam public

`!!! Tapi perlu di ingat, jika anda menambahkan style sendiri anda harus menambahkan nya di file main.css di dalam Folder public/main.css, dan pastikan style anda berada di bawah @tailwind blabla`

## Sudah semua tinggal hostingan nya

Umtuk hostingan saya sangat sarankan anda menghosting nya di <a href="https://vercel.com">vercel</a>

#### Cara nya gimana buat menghosting nya?
* pertama anda buat akun dulu di  <a href="https://vercel.com">vercel</a>
* Lalu abs tu taut in akun vercel kamu ke github kamu
* Lalu Import repo kamu yang menggunakan framework exprot untuk di jalankan di sana
* otomatis update ketika di repo github mu terupdate

------

## Ending

Jika framework ini merasa membantu kamu jangan lupa donasi gw ya bang :)

Jangan lupa sawer saya disini:
* [`Buy Me A Coffee`](https://www.buymeacoffee.com/bolaxd1)
* [`Trakteer`](https://trakteer.id/geichi-mv-yotba)