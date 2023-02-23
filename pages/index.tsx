import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          IMATEPSI | Ikatan Mahasiswa Teknologi Pendidikan Seluruh Indonesia
        </title>
        <meta
          name="description"
          content="IMATEPSI | Ikatan Mahasiswa Teknologi Pendidikan Seluruh Indonesia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 py-6 sm:py-12 mx-auto max-w-5xl">
        <div id="imatepsi-decsription">
          <h1 className="text-xl font-bold">
            IMATEPSI | Ikatan Mahasiswa Teknologi Pendidikan Seluruh Indonesia
          </h1>
          <p className="py-1">
            Laman ini merupakan laman resmi Ikatan Mahasiswa Teknologi
            Pendidikan. Dalam rangka meningkatkan kualitas dan kuantitas
            mahasiswa teknologi pendidikan, IMATEPSI mengadakan berbagai
            kegiatan yang dapat diikuti oleh seluruh mahasiswa teknologi
            pendidikan di Indonesia. Situs web ini akan aktif dalam waktu dekat
            dan akan menyediakan informasi mengenai kegiatan IMATEPSI. Tim
            Hubungan Masyarakat (Humas) IMATEPSI akan mengirimkan informasi
            mengenai kegiatan IMATEPSI melalui email, media sosial serta pada
            situs web ini. Mohon maaf atas ketidaknyamanan yang mungkin terjadi.
          </p>
          <p className="py-1">
            Untuk informasi lebih lanjut, mohon hubungi kami melalui surat
            elektronik{" "}
            <a
              className="underline decoration-blue-500 text-blue-500"
              href="mailto:humas@imatepsi.or.id"
              rel="noopeneer noreferrer"
            >
              humas@imatepsi.or.id
            </a>{" "}
            atau instagram{" "}
            <a
              className="underline decoration-blue-500 text-blue-500"
              href="https://instagram.com/imatepsi"
              rel="noopeneer noreferrer"
            >
              @imatepsi
            </a>
          </p>
        </div>

        <div id="edtechid-dptsi-disclaimer" className="mt-4">
          <p className="font-bold text-lg">
            Direktorat Pengembangan Teknologi dan Sistem Informasi EDTECH-ID
          </p>
          <p className="pb-4">
            Domain ini dikelola secara sementara oleh tim Direktorat
            Pengembangan Teknologi Sistem Informasi (DPTSI) Teknologi Pendidikan
            ID. DPTSI merupakan salah satu Direktorat yang ada di EDTECH-ID yang bertugas melakukan pengembangan teknologi dan sistem informasi yang dapat digunakan oleh tim Teknologi Pendidikan ID serta organisasi yang bekerjasama dengan tim EDTECH-ID. IMATEPSI merupakan salah satu organisasi yang meletakkan salah satu aset teknologi pada infrastruktur EDTECH-ID. DPTSI akan mengelola domain ini hingga organisasi IMATEPSI memiliki infrastruktur mandiri ataupun memiliki operator yang secara khusus akan melakukan pengelolaan terhadap infrastruktur Sistem Informasi hingga tingkat Data ataupun Software. DPTSI ataupun EDTECH-ID tidak bertanggung jawab atas konten yang hadir pada seluruh laman yang terhubung dengan domain ini.
          </p> 
          <div>
            <Image
              src="/edtech.svg"
              alt="EDTEHC-ID Logo"
              className={styles.vercelLogo}
              width={250}
              height={100}
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
