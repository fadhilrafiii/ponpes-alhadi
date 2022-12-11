import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

import { COLORS } from 'constants/colors';
import { headingTypeNews } from 'constants/general';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import parse from 'html-react-parser';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDispatch } from 'react-redux';

import Img from 'components/base/Img';
import LoadingSpinner from 'components/base/LoadingSpinner';
import Input from 'components/Input';
import Select from 'components/Select';

import { createNews } from 'client/news';
import { uploadFile } from 'client/upload-file';

import { showSnackbar } from 'shared/redux/slices/snackbar-slice';
import { convertBytes } from 'shared/utils/file';

import styles from './InputKonten.module.scss';

import CameraIcon from 'public/icons/camera.svg';
import DeleteIcon from 'public/icons/delete-icon.svg';

const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
  loading: () => (
    <div className={styles.editorLoadingContainer}>
      <LoadingSpinner size={40} color={COLORS.PrimaryDark} />
    </div>
  ),
});

const InputBerita = () => {
  const dispatch = useDispatch();
  const [isLoadingUploadBanner, setIsLoadingUploadBanner] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [headingType, setHeadingType] = useState('gambar');
  const [newsTitle, setNewsTitle] = useState('');
  const [bannerUrl, setBannerUrl] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSubmitNews = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      const data = {
        title: newsTitle,
        banner: bannerUrl,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent())),
      };
      const { success, message } = await createNews(data);
      if (success) {
        dispatch(showSnackbar({ message, type: 'success' }));
        setNewsTitle('');
        setBannerUrl('');
        setEditorState(EditorState.createEmpty());
      }
      setIsSubmitting(false);
    },
    [bannerUrl, dispatch, editorState, newsTitle],
  );

  const uploadImgCallback = useCallback(
    async (file) => {
      if (convertBytes(file.size, 'MB') > 1)
        return dispatch(
          showSnackbar({ message: 'Gambar tidak boleh lebih dari 1 MB', type: 'error' }),
        );

      const { success, data } = await uploadFile(file);

      if (!success) return;

      return {
        data: {
          link: data,
        },
      };
    },
    [dispatch],
  );

  const uploadBanner = async (e) => {
    setIsLoadingUploadBanner(true);
    const file = e.target.files[0];
    if (!file) return dispatch(showSnackbar({ message: 'Banner belum diupload', type: 'error' }));

    const { data } = await uploadImgCallback(file);
    if (!data) return;

    setBannerUrl(data?.link);
    setIsLoadingUploadBanner(false);
  };

  const handleChangeHeadingType = (val) => {
    setHeadingType(val);
    setBannerUrl('');
  };

  return (
    <form onSubmit={handleSubmitNews} className={styles.newsForm}>
      <div className={styles.inputNewsContainer}>
        <Input
          value={newsTitle}
          required
          onChange={(e) => setNewsTitle(e.target.value)}
          name="news-title"
          label="Judul Berita"
        />
        <div className={styles.headingTypeSelect}>
          <Select
            label="Jenis Heading"
            name="heading-type"
            required
            value={headingType}
            options={headingTypeNews}
            onChange={handleChangeHeadingType}
          />
        </div>
        {headingType === 'gambar' ? (
          <>
            {!bannerUrl ? (
              <div className={styles.uploadBannerContainer}>
                <label htmlFor="upload-banner" className={styles.uploadBannerBox}>
                  {isLoadingUploadBanner ? (
                    <LoadingSpinner size={44} color={COLORS.Primary} />
                  ) : (
                    <Img layout="fixed" priority width={44} height={44} src={CameraIcon} />
                  )}
                  <div>
                    <span className={styles.uploadBanner}>Unggah Gambar</span>
                    <span className={styles.or}>atau</span>
                    <span>Seret dan Lepas disini</span>
                    <span className={styles.maxFile}>berkas PNG/JPG maksimum 1MB</span>
                  </div>
                </label>

                <input
                  type="file"
                  id="upload-banner"
                  style={{ opacity: 0, height: 0 }}
                  value={bannerUrl ? undefined : ''}
                  accept="image/jpeg, image/png"
                  onChange={uploadBanner}
                  required
                />
                <span className={styles.inputBannerError}>Harus diisi</span>
              </div>
            ) : (
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <Img
                    src={bannerUrl}
                    layout="fill"
                    placeholder="blur"
                    usePlaceholder
                    sizes="(max-width: 768px) 100vw, 60vw"
                    objectFit="contain"
                  />
                </div>
                <div role="button" className={styles.deleteButton} onClick={() => setBannerUrl('')}>
                  <Img src={DeleteIcon} alt="Delete File" layout="fixed" width={20} height={20} />
                  <span>Hapus Banner</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <Input
            label="URL Video Heading"
            required
            value={bannerUrl}
            onChange={(e) => setBannerUrl(e.target.value)}
            placeholder="Masukkan URL Youtube"
          />
        )}
        <div>
          <label className={styles.newsContentLabel}>
            Isi Berita<span style={{ color: 'red' }}>*</span>
          </label>
          <Editor
            toolbar={{
              options: [
                'inline',
                'blockType',
                'fontSize',
                'list',
                'textAlign',
                'image',
                'remove',
                'history',
              ],
              image: {
                uploadEnabled: true,
                uploadCallback: uploadImgCallback,
                alignmentEnabled: false,
                defaultSize: {
                  height: 'auto',
                  width: 360,
                },
              },
            }}
            toolbarClassName="toolbar-class"
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <button
          type="submit"
          value="submit-form"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? <LoadingSpinner /> : 'Submit'}
        </button>
      </div>
      <div className={styles.preview}>
        <h4>Preview Berita</h4>
        <div>{parse(draftToHtml(convertToRaw(editorState.getCurrentContent())))}</div>
      </div>
    </form>
  );
};

export default InputBerita;
