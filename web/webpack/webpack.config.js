import path from 'path';

module.exports = {
	SERVER_ENTRY: path.join(process.cwd(), 'server'),
	CONFIG_ENTRY: path.join(process.cwd(), 'config'),
	DIST: path.join(process.cwd(), 'dist')
};