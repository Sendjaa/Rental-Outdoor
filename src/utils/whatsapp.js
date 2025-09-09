export function generateWhatsappMessage(data) {
  let pesan = `📌Rental peralatan Baru!\n\n`;
  pesan += `👤 Nama: ${data.nama}\n`
  pesan += `📧 Email: ${data.email}\n`
  pesan += `📱 No HP: ${data.noHp}\n`
  pesan += `🏠 Alamat: ${data.alamat}\n`
  pesan += `📅 Tanggal: ${data.tanggalMulai} s/d ${data.tanggalSelesai}\n\n`
  pesan += `🎒 Produk:\n`

  if (Array.isArray(data.produk)) {
    data.produk.forEach((item, i) => {
      pesan += `   ${i + 1}. ${item}\n`;
    });
  } else {
    pesan += "   Tidak ada produk yang dipilih.\n";
  }

  pesan += `\n💰 Total: Rp${(data.total ?? 0).toLocaleString("id-ID")}`;
  if (data.catatan) {
    pesan += `\n📝 Catatan: ${data.catatan}`
  }
  return pesan;

}
