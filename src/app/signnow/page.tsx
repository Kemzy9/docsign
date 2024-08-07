'use client';

import React, { useState } from 'react';
import axios from 'axios';

interface UploadFormProps {
  message?: string;
}

const Signnow: React.FC<UploadFormProps> = ({ message }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file.');
      return;
    }

    setUploading(true); // Start uploading

    const formData = new FormData();
    formData.append('pdf_file', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/upload/uploader', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully.');
      // Assuming the server response contains the key of the uploaded PDF file
      const uploadedPdfKey = response.data.key;
      setPdfUrl(`https://mydocsignchat.s3.amazonaws.com/${uploadedPdfKey}`); // Construct the URL of the uploaded PDF file
    } catch (error: any) {
      console.error('Error uploading file:', error.message);
      alert('Upload failed. Please try again later.');
    }

    setUploading(false); // Finish uploading
  };

  return (
    <div className='"flex flex-col py-8 pl-6 pr-2 w-24 bg-black flex-shrink-0"'>
      <h1>Upload PDF</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="file" name="pdf_file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
      {/* Display PDF content if URL is available */}
      {pdfUrl && (
        <div>
          <h2>PDF Preview</h2>
          <iframe src={pdfUrl} width="100%" height="600px"></iframe>
        </div>
      )}
    </div>
  );
};

export default Signnow;