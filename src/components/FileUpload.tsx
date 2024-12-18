import React, { useState } from 'react';
import { Upload, Lock, Shield } from 'lucide-react';
import Button from './common/Button';

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isEncrypting, setIsEncrypting] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsEncrypting(true);
    // Simulate encryption process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsEncrypting(false);
    
    alert('File encrypted and uploaded successfully!');
    setSelectedFile(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800/50 rounded-lg shadow-xl backdrop-blur-sm">
      <form onSubmit={handleUpload} className="space-y-6">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-emerald-500 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-12 h-12 text-gray-400 mb-3" />
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-400">
                Files will be encrypted before upload
              </p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileSelect}
            />
          </label>
        </div>

        {selectedFile && (
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Lock className="w-5 h-5 text-emerald-500" />
              <span className="text-gray-200">{selectedFile.name}</span>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={!selectedFile || isEncrypting}
          icon={Shield}
          className="w-full"
        >
          {isEncrypting ? 'Encrypting...' : 'Encrypt & Upload'}
        </Button>
      </form>
    </div>
  );
}