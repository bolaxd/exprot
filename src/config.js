import path from 'path'
import chalk from 'chalk'

global.Config = {
	PORT: 3000,
	pth: (...p) => path.join(process.cwd(), ...p),
	front: 'frontend/',
	back: 'backend/',
	pathAPI: '/api',
}

/**
 * Ini adalah LOG untuk web nya agar terorganisir
*/
global.log = {
	info: (teks) => console.log(chalk.bgCyan(chalk.black(`INFO!!! => ${teks}`))),
	err: (teks) => console.log(chalk.red(`ERR!!! => ${teks}`)),
	warn: (teks) => console.log(chalk.magenta(`WARN!!! => ${teks}`)),
}