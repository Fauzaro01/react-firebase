import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebase from '../firebase';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const storage = getStorage(firebase);

const PublicProject = () => {
  const { namaResource } = useParams();
  const [htmlContent, setHtmlContent] = useState(null); // Ubah menjadi null
  const [errorMessage, setErrorMessage] = useState(null); // Tambah state untuk pesan kesalahan


  useEffect(() => {
    async function fetchHtmlContent() {
        try {
          const fileRef = ref(storage, "project/" + namaResource);
          const url = await getDownloadURL(fileRef);
          console.log(url)
          const response = await fetch(url);
          const html = await response.text();
          setHtmlContent(html);
        } catch (error) {
            if (error.code === 'storage/object-not-found') {
                console.error('Error fetching HTML content: Objek tidak ditemukan');
                // Atur pesan kesalahan
                setErrorMessage(
                  <div>
                    <h1>404 Page Not Found</h1>
                    <h3>Apalahh nyari yang ga ada </h3>
                  </div>
                );
            } else {
                console.error('Error fetching HTML content:', error);
                // Atur pesan kesalahan
                setErrorMessage(
                  <div>
                    <h1>Error Occurred</h1>
                    <p>{error.message}</p>
                  </div>
                );
            }
        }
        
    }

    fetchHtmlContent();
  }, [namaResource]);

  return (
    <div>
      {errorMessage ? ( // Tampilkan pesan kesalahan jika ada
        <div>{errorMessage}</div>
      ) : (
        htmlContent !== null && ( // Tampilkan konten jika tidak ada pesan kesalahan dan konten sudah dimuat
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )
      )}
    </div>
  );
}

export default PublicProject;