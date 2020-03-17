import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbum} from "../../store/actions/albumActions";
import {Badge, Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader} from "reactstrap";
import {useLocation, useParams} from "react-router";
import {listenToTheTrack} from "../../store/actions/trackHistoryActions";
import YouTube from "react-youtube";

const AlbumPage = () => {
  const state = useSelector(state => state.album);
  const dispatch = useDispatch();
  const params = useParams();
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  const toggle = () => setModal(!modal);

  const openModal = track => {
    if(track.videoId) {
      setModalInfo(track);
      toggle();
    }
    dispatch(listenToTheTrack(track._id))
  };

  const onReady = e => e.target.pauseVideo();

  useEffect(() => {
    dispatch(fetchAlbum(params.id))
  }, [dispatch, params.id]);
  const query = new URLSearchParams(useLocation().search);
  return state.tracks && (
    <div>
      <h1>{query.get('artist')}</h1>
      <h1>{query.get('album')}</h1>
      <div>
        <ListGroup>
          {state.tracks.map((track, index) => {
            return (
              <ListGroupItem className='d-flex align-items-center' key={track._id}>
                <h5 className='m-0 mr-3 border rounded bg-light p-2'>{index+1}</h5>
                <h3 className='m-0 mr-5'>{track.title}</h3>
                <p className='m-0 mr-1 text-dark'>duration:</p>
                <Badge pill>{track.duration} minutes</Badge>
                <Button
                  className='ml-auto'
                  onClick={() => openModal(track)}
                >listen</Button>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
      {modalInfo && <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{modalInfo.title}</ModalHeader>
        <ModalBody>
          <YouTube
            videoId={ modalInfo.videoId }
            onReady={onReady}
            opts={{
              playerVars: {
                autoplay: 1
              },
              width: '100%'
            }}
          />
        </ModalBody>
      </Modal>}
    </div>
  );
};

export default AlbumPage;