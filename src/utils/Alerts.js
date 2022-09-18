import Swal from "sweetalert2"

export const showConfirmation = ({ title = '', text = '', confirmButtonText = 'Si'}) => {
  return (
    Swal.fire({
      title,
      text,
      reverseButtons: true,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#0096C7'
    })
  )
}

export const showSuccess = ({ title = '', text = '' }) => {
  return (
    Swal.fire({
      icon: 'success',
      title,
      text,
    })
  )
}

export const showError = ({ title = '', text = '' }) => {
  return (
    Swal.fire({
      icon: 'error',
      title,
      text,
    })
  )
}