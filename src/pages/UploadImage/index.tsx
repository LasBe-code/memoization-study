import React, { useRef, useState } from 'react';
import { GlassButton } from '../../Components/GlassButton';
import { GlassContainer } from '../../Components/GlassContainer';

const FILE_SIZE_MAX_LIMIT = 1 * 1024 * 1024; // 5MB

export const UploadImage = () => {
  const [imageState, setImageState] = useState<string>();
  const [formState, setFormState] = useState<FormData>();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onChangeUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    if (e.target.files[0].size > FILE_SIZE_MAX_LIMIT) {
      alert('사이즈가 큼');
      return;
    }

    const imgFile = e.target.files[0];
    const fileReader = new FileReader();
    const formData = new FormData();

    formData.append('image', imgFile);
    setFormState(formData);
    console.log(formData.get('image'));

    fileReader.readAsDataURL(imgFile);
    fileReader.onloadend = () => {
      const previewImgUrl = fileReader.result;
      if (previewImgUrl) setImageState(previewImgUrl.toString());
    };
  };

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <GlassContainer>
      <form encType="multipart/form-data" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
        {imageState && (
          <div>
            <img
              src={imageState}
              style={{ maxHeight: '400px', width: '100%', margin: '0 auto', borderRadius: '10px' }}
              alt="prevImg"
            />
          </div>
        )}
        <input type="file" accept="image/*" ref={inputRef} onChange={onChangeUploadImage} style={{ display: 'none' }} />
        <GlassButton onClick={onClickButton}>Upload</GlassButton>
      </form>
    </GlassContainer>
  );
};
