import React, { useEffect, useState, Fragment } from 'react';
import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return function (props) {
    const [error, setError] = useState(null)
    useEffect(() => {
      let reqInterceptor = axios.interceptors.request.use(req => {
        setError(null)
        return req;
      });
      let resInterceptor = axios.interceptors.response.use(res => res, err => {
        setError(err)
      });
      return () => {
        axios.interceptors.request.eject(reqInterceptor);
        axios.interceptors.response.eject(resInterceptor);
      }
    },[setError])
    const errorConfirmedHandler = () => {
      setError(null)
    };
    return (
      <Fragment>
        <Modal
          modalType="small"
          showBackdrop={error}
          showModal={error}
          modalClosed={() => errorConfirmedHandler()}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Fragment>
    )
  }
}
export default withErrorHandler;