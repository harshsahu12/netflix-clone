import React, { useCallback, useEffect, useMemo } from 'react';
import './ProfileScreen.css';
import Navbar from '../../components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectImgUrl, logout, setImageUrl } from '../../features/userSlice';
import { useDropzone } from 'react-dropzone';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { imageDb } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const imgUrl = useSelector(selectImgUrl);
  const dispatch = useDispatch();

  const onDrop = useCallback(async (acceptedFiles) => {
    const imageRef = ref(imageDb, `files/${uuidv4()}`);
    await uploadBytes(imageRef, acceptedFiles[0]);
    const imageUrl = await getDownloadURL(imageRef);
    dispatch(setImageUrl({ img: imageUrl }));
  }, [dispatch]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png, image/jpg, image.svg'
  });

  const style = useMemo(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 3,
    borderRadius: 3,
    borderColor: isDragAccept ? '#00e676' : isDragReject ? '#ff1744' : '#eeeeee',
    borderStyle: 'dashed',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out'
  }), [isDragAccept, isDragReject]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(imageDb, 'files');
      const imageList = await listAll(imagesRef);
      const urls = await Promise.all(
        imageList.items.map(async (item) => {
          return getDownloadURL(item);
        })
      );
      urls.forEach((dataUrl) =>
        dispatch(
          setImageUrl({
            img: dataUrl,
          })
        )
      );
    };

    fetchImages();
  }, [dispatch]);

  return (
    <div className='profilescreen'>
      <Navbar />
      <div className="profilescreen_body">
        <h1>{user?.email}</h1>
        <div className='slider'>
          <div className='avatar_container'>
            <img className='slider_img' src={imgUrl?.img} alt="Profile" />
          </div>
          <div {...getRootProps({ style })} className='avatar_container_drop'>
            <span>+</span>
            <input {...getInputProps()} />
          </div>
        </div>
        <div className='btn_div'>
          <span className='save_btn' onClick={() => dispatch(logout())}>logout</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
