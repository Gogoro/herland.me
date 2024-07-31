// HTMX Logic
document.body.addEventListener("htmx:beforeSwap", function (evt) {
  if (evt.detail.xhr.status === 404) {
    // alert the user when a 404 occurs (maybe use a nicer mechanism than alert())
    alert("Error: Could Not Find Resource");
  } else if (evt.detail.xhr.status === 422) {
    // allow 422 responses to swap as we are using this as a signal that
    // a form was submitted with bad data and want to rerender with the
    // errors
    //
      // set isError to false to avoid error logging in console
    evt.detail.shouldSwap = true;
    evt.detail.isError = false;
  } else if (evt.detail.xhr.status === 418) {
    // if the response code 418 (I'm a teapot) is returned, retarget the
    // content of the response to the element with the id `teapot`
    evt.detail.shouldSwap = true;
    evt.detail.target = htmx.find("#teapot");
  }
});


(function() {
  var HOST = "/admin/attachment"

  addEventListener("trix-attachment-add", function(event) {
    if (event.attachment.file) {
      uploadFileAttachment(event.attachment)
    }
  })

  function uploadFileAttachment(attachment) {
    uploadFile(attachment.file, setProgress, setAttributes)

    function setProgress(progress) {
      attachment.setUploadProgress(progress)
    }

    function setAttributes(attributes) {
      attachment.setAttributes(attributes)
    }
  }

  function uploadFile(file, progressCallback, successCallback) {
    var key = createStorageKey(file)
    var formData = createFormData(key, file)
    var xhr = new XMLHttpRequest()

    xhr.open("POST", HOST, true)
    console.log("open", open)

    xhr.upload.addEventListener("progress", function(event) {
      var progress = event.loaded / event.total * 100
      console.log("progress", progress)
      progressCallback(progress)
    })

    xhr.addEventListener("load", function(event) {
      if (xhr.status == 204) {
        var attributes = {
          url: "/static/store/" + key,
          href: "/static/store/" + key + "?content-disposition=attachment"
        }
        console.log("attributes", attributes)
        successCallback(attributes)
      }
    })

    xhr.send(formData)
  }

  function createStorageKey(file) {
    return file.name
  }

  function createFormData(key, file) {
    var data = new FormData()
    data.append("key", key)
    data.append("Content-Type", file.type)
    data.append("file", file)
    return data
  }
})();
