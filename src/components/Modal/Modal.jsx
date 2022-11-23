import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
/*
<Modal><Content /></Modal>
react => children=<Content />

props = {
  children:<Content />
  onModalClose: () => {}
}
*/

const rootModal = document.getElementById('modal-root')

export class Modal extends Component {

  handleBackdropClose = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onModalClose()
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeKey)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeKey)
  }

  handleEscapeKey = event => {
    if (event.key === 'Escape') {
      console.log(event.key);
      this.props.onModalClose()
    }
  }

  render() {
    const { children, onModalClose } = this.props
    return createPortal((
      <>
        <div className="modal-backdrop fade show" />

        <div className="modal fade show" style={{ display: 'block' }} onClick={this.handleBackdropClose}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={onModalClose} />
              </div>

              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
      </>
    ), rootModal)
  }
};

Modal.propType = {
  children: PropTypes.node.isRequired,
};