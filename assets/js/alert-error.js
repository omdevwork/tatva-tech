function showError(field, message) {
    if (!message) {
      $("." + field).addClass('is-valid').removeClass('is-invalid').siblings('.invalid-feedback').text();
    } else {
      $("." + field).addClass('is-invalid').removeClass('is-valid').siblings('.invalid-feedback').text(message);
    }
  }
  
  
  function showMessage(type, message) {
    return `<br/><div class="alert alert-theme alert-dismissible fade show" role="alert"'>
    <strong'>${message}</strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  }
  