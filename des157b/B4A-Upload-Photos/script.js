/* ***********************************
Challenge!

The form on the index.html file now has two additional fields, one for title and one for description.
For this challenge, do each of these steps:

1. Capture the data for title and description and put them in the database
2. Retrieve the title and description from the database and display them on the page
when the image and data have been successfully saved to the database.
3. Clear out the form data once an image and the data has been successfully saved.
************************************* */
//App ID and JS Key from B4A
Parse.initialize("wOBUNDBm8WbOqTOhC9hKBfIeHxpmPgDPaThRcAr3","YBzeZflXfDq6fLWF3Sc3vzmKSlP2ISv55sVhGnMt");
// Parse server
Parse.serverURL = 'https://parseapi.back4app.com/';

document.querySelector('#upload').addEventListener('submit', function(event){
    event.preventDefault();

    const fileUploadControl = document.querySelector('#fileupload');
    // this is a good place to collect data from the other fields
    if (fileUploadControl.files.length > 0) {
        const file = fileUploadControl.files[0];
        const name = fileUploadControl.files[0].name;
        const type = fileUploadControl.files[0].type;
        const size = fileUploadControl.files[0].size;
        if(size < 100000 && type == 'image/jpeg' || type == 'image/png' || type == 'image/webp'){
          uploadPhoto(name, file);
        } else {
          alert('the file is too big or is not a .jpg or .png file');
        }
    }
});

async function uploadPhoto(name, file){
    const newPhoto = new Parse.Object('uploads');
    newPhoto.set('filename', name);
    newPhoto.set('file', new Parse.File(name, file));
    //This is a good place to save data from the other fields to the database
    newPhoto.set('title', document.getElementById('title').value);
    newPhoto.set('description', document.getElementById('description').value);
    console.log(newPhoto, title, description)

    try {
      const result = await newPhoto.save();
      console.log(result.id);
      getNewPhoto(result.id);
    } catch (error) {
      console.error('Error while uploading the photo: ', error);
    }
}

async function getNewPhoto(photoId){
  const records = Parse.Object.extend('uploads');
  const query = new Parse.Query(records);
  query.equalTo("objectId", photoId);
  try{
    const results = await query.find();
    const photoURL = results[0].get('file').url();
    const photoName = results[0].get('filename');
    // This is a good place to get data from the database fields
    const photoTitle = results[0].get('title');
    const photoDescription = results[0].get('description');
    showUploadedPhoto(photoURL, photoName, photoTitle, photoDescription);
    // This is a good place to run a function that clears out the form, which you will write below.
    clearForm();
  } catch (error) {
      console.error('Error while getting photo', error);
  } 
}

function showUploadedPhoto(photoURL, photoName, photoTitle, photoDescription){
  let html = `<p>You just uploaded ${photoName}:</p>`;
  html += `<img src="${photoURL}">`;
  // This is a good place to add more data to the HTML 
  html += `Title: ${photoTitle}`;
  html += `Description: ${photoDescription}`;
  document.querySelector('#uploaded-img').innerHTML = html;
}

// This is a good place to write a function that clears out the form.
function clearForm() {
  document.getElementById('upload').reset();
};