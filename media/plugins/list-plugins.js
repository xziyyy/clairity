const fs = require('fs');
const path = './media/plugins/';

module.exports = {
  command: ['totallistplugins', 'totalplugin', 'totalplugins', 'listplugin', 'listplugins'],
  exec: async (m, from, { reply }) => {
    try {
      const files = fs.readdirSync(path).filter(file => file.endsWith('.js'));
      if (files.length === 0) return reply('Belum ada plugin yang ditemukan di folder plugin.');

      const list = files.map((file, i) => `${i + 1}. ${file}`).join('\n');
      reply(`*Total Plugin: ${files.length}*\n\n${list}`);
    } catch (err) {
      console.error('Error membaca folder plugin:', err.message);
      reply('Gagal membaca daftar plugin.');
    }
  }
};