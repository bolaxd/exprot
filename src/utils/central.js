import fs from 'fs'
import path from 'path'

const Central = (App) => {
	let i = fs.readdirSync(Config.pth(Config.front), { withFileTypes: true }),
	r = fs.readdirSync(Config.pth(Config.back), { withFileTypes: true }),
	x = i.filter(a => a.isDirectory()).map(q => q.name),
	u = i.filter(a => !a.isDirectory() && !a.name.endsWith('js') && !a.name.endsWith('html') && !a.name.endsWith('css')).map(v => v.name)
	if (x.length >0) log.warn(`terdapat ${x.length} folder didalam folder frontend, Silahkan delete folder yang ada dalam folder frontend tersebut agar warn hilang!.`)
	if (u.length >0) log.warn(`terdapat ${x.length} file selain [ .js, .html, .css ] didalam folder views, Silahkan delete file tersebut agar warn hilang!.`)
	r.forEach(async file => {
		let n = file.name, w = file.isDirectory()
		if (!w && n.endsWith('js')) {
			let q = await import(`../../${Config.back+n}`)
			let s = q.default
			if (s && s.path && /get/i.test(s.method) && s.main) App.get(s.path, s.main)
			if (s && s.path && /post/i.test(s.method) && s.main) App.post(s.path, s.main)
			if (s && s.path && /put/i.test(s.method) && s.main) App.put(s.path, s.main)
			if (s && s.path && /delete/i.test(s.method) && s.main) App.delete(s.path, s.main)
		}
	})
	i.forEach(file => {
		let f = file.name, d = file.isDirectory()
		if (!d) {
			if (/index/i.test(f) && f.endsWith('html')) App.get('/', (req, res) => res.sendFile(Config.pth(`/${FolderFront+f}`)))
			else if (!/index/i.test(f) && f.endsWith('html')) App.get(`/${f.split('.')[0].toLowerCase()}`, (req, res) => res.sendFile(Config.pth(`/${FolderFront+f}`)))
		}
	})
}

export default Central