import React, { useState } from "react";
import generateTranscript from "../utils/generateTranscript";

// INI PAGE SEMENTARA DOANG, DOWNLOAD TRANSCRIPT DIGABUNG SAMA NAMPILIN DATABASE

function Sign() {
  //   const [data, setData] = useState(null);

  const data = {
    identity: {
      name: "Ceavin Rufus De Prayer Purba",
      nim: 18221162,
    },
    matkul: [
      ["II2221", "Manajemen Proyek STI", 3, "A"],
      ["II3220", "Arsitektur Enterprise", 3, "A"],
      ["II3230", "Keamanan Informasi", 3, "A"],
      ["II3240", "Rekayasa Sistem dan Teknologi Informasi", 3, "A"],
      ["II3260", "Platform dan Pengembangan Aplikasi Mobile", 3, "A"],
      ["II4031", "Kriptografi dan Koding", 2, "A"],
      ["II4035", "Sistem Cerdas", 2, "A"],
      ["II4035", "Manajemen Produk", 2, "A"],
      ["II4472", "Komunikasi Interpersonal", 2, "A"],
    ],
    kaprodi: {
      name: "I Gusti Bagus Baskara",
      sign: "BFc65FFeCD2108CE340B",
    },
  };

  return (
    <div>
      <button onClick={() => generateTranscript(data)}>
        Download Transcript
      </button>
    </div>
  );
}

export default Sign;
