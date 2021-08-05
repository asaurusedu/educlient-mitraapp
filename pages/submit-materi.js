import React, { Component } from "react";
import dataForm from "../assets/dataForm.json";

class SubmitMateri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      email: "",
      whatsapp: "",
      judulmateri: "",
      kelas: "",
      matapelajaran: "",
      pesan: "",
      submitSuccess: false,
      alreadySubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendAnotherRequest = this.sendAnotherRequest.bind(this);
    this.retryRequest = this.retryRequest.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { nama, email, whatsapp, judulmateri, kelas, matapelajaran, pesan } =
      this.state;

    const res = await fetch("/api/sendToDiscord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama,
        email,
        whatsapp,
        judulmateri,
        kelas,
        matapelajaran,
        pesan,
      }),
    });

    if (res.status === 200) {
      this.setState({ submitSuccess: true, alreadySubmitted: true });
    } else {
      this.setState({ submitSuccess: false, alreadySubmitted: true });
    }
  };

  sendAnotherRequest() {
    window.location.reload();
  }

  retryRequest() {
    this.setState({ submitSuccess: false, alreadySubmitted: false });
  }

  render() {
    let { submitSuccess, alreadySubmitted } = this.state;
    return (
      <div className="antialiased text-gray-900 px-6">
        <div className="mx-auto py-12 max-w-lg">
          <div className="py-6">
            <div className="mt-8 max-w-md">
              <h1 className="text-2xl font-bold">Pengajuan Pembuatan Materi</h1>
              {alreadySubmitted == false ? (
                <p>
                  Silahkan isi formulir di bawah ini untuk melakukan pengajuan
                  pembuatan materi.
                </p>
              ) : submitSuccess ? (
                <p>Permohonan terkirim</p>
              ) : (
                <p>Permohonan gagal untuk dikirim</p>
              )}
            </div>
            {alreadySubmitted == false ? (
              <form
                className="mt-8 max-w-md mb-12"
                onSubmit={this.handleSubmit}
              >
                <div id="datadiri-mitra" className="mt-8 max-w-md mb-6">
                  <h2 className="text-2xl font-bold pb-2">Data Diri Mitra</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                      <span className="text-gray-700">Nama Mitra</span>
                      <input
                        name="nama"
                        type="text"
                        id="nama"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        placeholder="contoh: Arasya Putri Nurhaningsih"
                        onChange={this.handleChange}
                        value={this.state.nama}
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700">Alamat Email</span>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        placeholder="contoh: arasya@sekolahkita.sch.id"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.email}
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700">Nomor WhatsApp</span>
                      <input
                        name="whatsapp"
                        id="whatsapp"
                        type="tel"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        placeholder="contoh: 085743232145"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.whatsapp}
                      />
                    </label>
                  </div>
                </div>

                <div id="informasi-materi" className="mt-8 max-w-md mb-6">
                  <h2 className="text-2xl font-bold pb-2">Informasi Materi</h2>
                  <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                      <span className="text-gray-700">Judul Materi</span>
                      <input
                        name="judulmateri"
                        type="text"
                        id="judulmateri"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        placeholder="contoh: Reaksi Kimia pada Udara"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.judulmateri}
                      />
                    </label>
                    <label className="block">
                      <span className="text-gray-700">Matapelajaran</span>
                      <select
                        name="matapelajaran"
                        className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.matapelajaran}
                      >
                        <option value="">-- Pilih --</option>
                        {dataForm.matpel.map((item) => (
                          <option key={item.id}>{item.nama}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-gray-700">Kelas</span>
                      <select
                        name="kelas"
                        className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        onChange={this.handleChange.bind(this)}
                        value={this.state.kelas}
                      >
                        <option value="">-- Pilih --</option>
                        {dataForm.kelas.map((item) => (
                          <option key={item.id}>{item.nama}</option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-gray-700">Catatan Tambahan</span>
                      <textarea
                        name="pesan"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        rows={2}
                        placeholder="Tuliskan pesan yang ingin kalian sampaikan kepada tim AsaurusEdu terkait permohonan ini."
                        onChange={this.handleChange.bind(this)}
                        value={this.state.pesan}
                      />
                    </label>
                  </div>
                </div>
                <button
                  id="submitmateri"
                  type="submit"
                  className="w-full h-12 bg-blue-500 rounded-md px-6 text-white font-bold hover:bg-blue-700 visited:bg-purple-500"
                >
                  Kirim Permohonan
                </button>
              </form>
            ) : submitSuccess == true ? (
              <>
                <div
                  className="mt-8 overflow-hidden leading-normal rounded-lg"
                  role="alert"
                >
                  <p className="px-4 py-3 font-bold text-purple-100 bg-green-800">
                    Permohonan Sudah Terkirim!
                  </p>
                  <p className="px-4 py-3 text-green-700 bg-green-100 ">
                    Permohonan anda akan segera ditinjau. Anda akan dihubungi
                    melalui kontak yang anda berikan jika permohonan anda
                    diterima. Terima kasih telah mengajukan permohonan.
                  </p>
                </div>
                <button
                  id="reloadform"
                  className="w-full mt-8 h-12 bg-blue-500 rounded-md px-6 text-white font-bold hover:bg-blue-700 visited:bg-purple-500"
                  onClick={this.sendAnotherRequest}
                >
                  Kirim Permohonan Lainnya
                </button>
              </>
            ) : (
              <><div
                    className="mt-8 overflow-hidden leading-normal rounded-lg"
                    role="alert"
                  >
                    <p className="px-4 py-3 font-bold text-purple-100 bg-red-800">
                      Permohonan gagal dikirim.
                    </p>
                    <p className="px-4 py-3 text-red-700 bg-red-100 ">
                      Mohon coba lagi setelah beberapa menit. Jika masih tidak bisa
                      mengirimkan permohonan, hubungi tim AsaurusEdu.
                    </p>
                  </div><button
                    id="reloadform"
                    className="w-full mt-8 h-12 bg-blue-500 rounded-md px-6 text-white font-bold hover:bg-blue-700 visited:bg-purple-500"
                    onClick={this.retryRequest}
                  >
                      Kirim Permohonan Lagi
                    </button></>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitMateri;
