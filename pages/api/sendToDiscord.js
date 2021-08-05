export default function sendToDiscord(req, res) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const webhookcontents = JSON.stringify({
    content:
      "Halo <@303011486916411392>, ada yang ngajukan permohonan nih. Ayuk direview dulu. Makasih.",
    embeds: [
      {
        type: "rich",
        title: "Pengajuan Pembuatan Materi",
        description: "",
        color: 0x0055ff,
        fields: [
          {
            name: "Nama Pemohon",
            value: req.body.nama,
          },
          {
            name: "Judul Materi",
            value: req.body.judulmateri,
          },
          {
            name: "Sasaran Kelas",
            value: req.body.kelas,
          },
          {
            name: "Sasaran Mata Pelajaran",
            value: req.body.matapelajaran,
          },
          {
            name: "Kontak Email",
            value: req.body.email,
          },
          {
            name: "Kontak WhatsApp",
            value: req.body.whatsapp,
          },
        ],
        author: {
          name: "AsaurusEdu - Mitra Apps",
          url: "https://mitra.asaurusedu.com",
        },
        footer: {
          text: "Submit Materi Notifications Alerts",
        },
      },
    ],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: webhookcontents,
    redirect: "follow",
  };

  fetch(
    process.env.WEBHOOK_URL,
    requestOptions
  )
    .then((response) => res.status(200).json(response.text()))
    .then((result) => console.log(result))
    .catch((error) => res.status(503).send(error));
}
