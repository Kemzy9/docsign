'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface UploadFormProps {
  message?: string;
}

const Signature: React.FC<UploadFormProps> = ({ message }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [mergedImageUrl, setMergedImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }
    setUploading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      });
      if (!response.ok) {
        throw new Error('Failed to get pre-signed URL.');
      }
      const { url, fields, objectUrl } = await response.json();
      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append('file', file);
      const uploadResponse = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      if (!uploadResponse.ok) {
        throw new Error('Upload failed.');
      }
      alert('Upload successful!');
      setPdfUrl(objectUrl); // Set the URL of the uploaded file
      setFile(null); // Clear the file input
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      alert('Upload failed. Please try again later.');
    }
    setUploading(false);
  };

  const handleDownloadImage = () => {
    if (mergedImageUrl) {
      const downloadLink = document.createElement('a');
      downloadLink.href = mergedImageUrl;
      downloadLink.download = 'signed_document.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const mergeImages = async (backgroundImage: string, signatureImage: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const background = new Image();
      const signature = new Image();

      background.onload = () => {
        signature.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = background.width;
          canvas.height = background.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get 2D context of canvas'));
            return;
          }
          ctx.drawImage(background, 0, 0);
          ctx.drawImage(signature, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };

        signature.onerror = () => reject(new Error('Failed to load signature image'));
        signature.src = signatureImage;
      };

      background.onerror = () => reject(new Error('Failed to load background image'));
      background.src = backgroundImage;
    });
  };

  return (
    <div className='flex flex-row h-full w-full bg-blue-600'>
      <div className='w-1/2'>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input type="file" name="pdf_file" accept=".pdf" onChange={handleFileChange} />
          <button type="submit" disabled={uploading}>
            {uploading ? (
              <div className='flex items-center justify-center'>
                <div className="bg-indigo-400 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                  <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                    <div className="ml-2">Uploading...</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Upload
              </div>
            )}
          </button>
        </form>
        {pdfUrl && (
          <div>
            <h2>PDF Preview</h2>
            <iframe src={`${pdfUrl}#view=Fit&scrollbar=0&toolbar=0`} width="100%" height="600px" title="PDF Preview"></iframe>
          </div>
        )}
      </div>
      <div className='w-1/2'>
        {pdfUrl && (
          <div>
            <h2>Draw Signature</h2>
            <Image src={pdfUrl} alt="uploaded signature" style={{ display: 'block', margin: '0 auto', width: '100%' }} />
            {mergedImageUrl && (
              <div>
                <button onClick={handleDownloadImage}>Download Signed Document</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Signature;
