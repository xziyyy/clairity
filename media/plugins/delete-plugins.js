const fs = require('fs');
const path = '../../media/plugins/';

module.exports = {
  command: ['deleteplugin', 'hapusplugin', 'deleteplugins', 'hapusplugins'],
  exec: async (m, from, { args, reply }) => {
    try {
      if (!args[0]) return reply('Mohon sebutkan nama plugin yang ingin dihapus. Contoh: `hapusplugin namaplugin.js`');

      const fileName = args[0];
      const filePath = path + fileName;

      if (!fs.existsSync(filePath)) return reply(`Plugin *${fileName}* tidak ditemukan.`);

      fs.unlinkSync(filePath);
      reply(`Plugin *${fileName}* berhasil dihapus.`);
    } catch (err) {
      console.error('Gagal menghapus plugin:', err.message);
      reply('Terjadi kesalahan saat menghapus plugin.');
    }
  }
};