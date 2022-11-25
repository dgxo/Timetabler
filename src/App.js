import './App.css';

function App() {
  return (
    <div className="App">      
      <header className="App-header">
        <h1>
          Timetable Editor
        </h1>
        <code className="info">
          Currently work in progress
        </code>
      </header>
      <p>
        Upload your <code>Timetable.html</code>
        <div class="tooltip">
          <span class="material-icons helpicon" tabindex="0">help</span>
          <span class="tooltiptext">You can obtain your Timetable.html from your latest school email, and downloading the file at the bottom, then uploading it here. <a rel="noopener noreferrer" target="_blank" href="https://wa.me/07568949000">Having issues?</a></span>
        </div> below to start customising
      </p>
      {/* <form class="form-container" enctype='multipart/form-data'>
        <div class="upload-files-container">
          <div class="drag-file-area">
            <span class="material-icons-outlined upload-icon"> file_upload </span>
            <br />
            <label class="label"> or <span class="browse-files"> <input type="file" class="default-file-input" /> <span class="browse-files-text">browse file</span> <span>from device</span> </span> </label>
          </div>
          <span class="cannot-upload-message"> <span class="material-icons-outlined">error</span> Please select a file first <span class="material-icons-outlined cancel-alert-button">cancel</span> </span>
          <div class="file-block">
            <div class="file-info"> <span class="material-icons-outlined file-icon">description</span> <span class="file-name"> </span> | <span class="file-size">  </span> </div>
            <span class="material-icons remove-file-icon">delete</span>
            <div class="progress-bar"> </div>
          </div>
          <button type="button" class="upload-button"> Upload </button>
        </div>
      </form> */}
        <input type="file" id="file" />
  <label for="file" class="upload-btn">upload</label>
    </div>
  );
}

export default App;
