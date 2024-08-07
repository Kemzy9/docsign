'use client'



import { useState } from 'react';
import { GoogleAnalyticsWrapper } from '../UI/googleanaylytics/page';



export default function Uploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0); // State to track progress
  const [pdfUrl, setPdfUrl] = useState<string | null>(null); // State to store the URL of the uploaded PDF file
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null); // State to store the selected file name

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
      setSelectedFileName(null); // Clear the selected file name
    } catch (error) {
      console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
      alert('Upload failed. Please try again later.');
    }
    setUploading(false);
  };

  // Function to handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFile(files[0]);
      setSelectedFileName(files[0].name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-top h-full">
      <GoogleAnalyticsWrapper />

     
      <span className="italic hover:not-italic ml-2" id="websiteTitle">
        TheChatPdf
      </span>
      <div className="mb-4 flex items-center justify-top w-full">
        <div className="flex items-center">
          <label
            htmlFor="pdf_file"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
          >
            Choose File
          </label>
          <input
            type="file"
            id="pdf_file"
            name="pdf_file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          {selectedFileName && (
            <span className="ml-2 font-semibold">Selected: {selectedFileName}</span>
          )}
          <form onSubmit={handleSubmit} className="ml-4">
            {uploading ? (
              <div className="flex items-center">
                <div className="flex items-center justify-center m-[10px]">
                  <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                  <div className="ml-2">Uploading...</div>
                </div>
                <button
                  type="button"
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                  disabled
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="submit"
                disabled={uploading}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Upload
              </button>
            )}
          </form>
        </div>
      </div>
      {/* Display PDF content if URL is available */}
      {pdfUrl && (
        <div className="mt-4">
          <iframe src={pdfUrl} width="100%" height="600px" />
        </div>
      )}
    </div>
  );
}






