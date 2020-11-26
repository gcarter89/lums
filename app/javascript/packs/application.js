// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap"

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

require("trix")
require("@rails/actiontext")

// Internal imports:
import { navChange } from '../components/navbar';
import { initLectureSorting } from '../components/tray';

//turbolinks import
document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  initLectureSorting();
  initDropzone();
  navChange();
});

Dropzone.options.submissionUpload = {
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 20, // MB
  timeout: 180000,
  acceptedFiles: ".zip"
};