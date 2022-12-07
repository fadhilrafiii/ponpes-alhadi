import { useCallback, useState } from 'react';

import { useDispatch } from 'react-redux';

import LoadingSpinner from 'components/base/LoadingSpinner';
import Input from 'components/Input';

import { updateVideos } from 'client/video';

import { showSnackbar } from 'shared/redux/slices/snackbar-slice';

import styles from './InputKonten.module.scss';

const InputVideo = ({ videos }) => {
  const dispatch = useDispatch();
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const [videoURL1, setVideoURL1] = useState(videos?.video1?.url || '');
  const [videoTitle1, setVideoTitle1] = useState(videos?.video1?.title || '');
  const [videoURL2, setVideoURL2] = useState(videos?.video2?.url || '');
  const [videoTitle2, setVideoTitle2] = useState(videos?.video2?.title || '');
  const [videoURL3, setVideoURL3] = useState(videos.video3.url || '');
  const [videoTitle3, setVideoTitle3] = useState(videos.video3.title || '');
  const [videoURL4, setVideoURL4] = useState(videos.video4.url || '');
  const [videoTitle4, setVideoTitle4] = useState(videos.video4.title || '');
  const [videoURL5, setVideoURL5] = useState(videos.video5.url || '');
  const [videoTitle5, setVideoTitle5] = useState(videos.video5.title || '');

  const submitUpdateVideoURL = useCallback(
    async (e) => {
      e.preventDefault();
      setIsLoadingSubmit(true);
      const updateData = {
        video1: {
          url: videoURL1,
          title: videoTitle1,
        },
        video2: {
          url: videoURL2,
          title: videoTitle2,
        },
        video3: {
          url: videoURL3,
          title: videoTitle3,
        },
        video4: {
          url: videoURL4,
          title: videoTitle4,
        },
        video5: {
          url: videoURL5,
          title: videoURL5,
        },
      };

      const { success, message } = await updateVideos(updateData);
      if (success) {
        dispatch(showSnackbar({ message, type: 'success' }));
      }
      setIsLoadingSubmit(false);
    },
    [
      dispatch,
      videoTitle1,
      videoTitle2,
      videoTitle3,
      videoTitle4,
      videoURL1,
      videoURL2,
      videoURL3,
      videoURL4,
      videoURL5,
    ],
  );

  return (
    <div>
      <form onSubmit={submitUpdateVideoURL}>
        <div className={styles.videoInputContainer}>
          <h4>Video 1</h4>
          <div>
            <Input
              value={videoURL1}
              label="Video URL 1"
              name="video-url-1"
              placeholder="URL video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoURL1(e.target.value)}
            />
            <br />
            <Input
              value={videoTitle1}
              label="Video Title 1"
              name="video-title-1"
              placeholder="Judul video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoTitle1(e.target.value)}
            />
          </div>
          <h4>Video 2</h4>
          <div>
            <Input
              value={videoURL2}
              label="Video URL 2"
              name="video-url-2"
              placeholder="URL video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoURL2(e.target.value)}
            />
            <br />
            <Input
              value={videoTitle2}
              label="Video Title 2"
              name="video-title-2"
              placeholder="Judul video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoTitle2(e.target.value)}
            />
          </div>
          <h4>Video 3</h4>
          <div>
            <Input
              value={videoURL3}
              label="Video URL 3"
              name="video-url-3"
              placeholder="URL video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoURL3(e.target.value)}
            />
            <br />
            <Input
              value={videoTitle3}
              label="Video Title 3"
              name="video-title-3"
              placeholder="Judul video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoTitle3(e.target.value)}
            />
          </div>
          <h4>Video 4</h4>
          <div>
            <Input
              value={videoURL4}
              label="Video URL 4"
              name="video-url-4"
              placeholder="URL video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoURL4(e.target.value)}
            />
            <br />
            <Input
              value={videoTitle4}
              label="Video Title 4"
              name="video-title-4"
              placeholder="Judul video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoTitle4(e.target.value)}
            />
          </div>
          <h4>Video 5</h4>
          <div>
            <Input
              value={videoURL5}
              label="Video URL 5"
              name="video-url-5"
              placeholder="URL video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoURL5(e.target.value)}
            />
            <br />
            <Input
              value={videoTitle5}
              label="Video Title 5"
              name="video-title-5"
              placeholder="Judul video youtube yang akan ditampilkan di halaman utama"
              onChange={(e) => setVideoTitle5(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className={styles.updateButton}>
          {isLoadingSubmit ? <LoadingSpinner /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default InputVideo;
