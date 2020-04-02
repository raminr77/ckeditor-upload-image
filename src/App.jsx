import React, { Component } from "react";

// import CKEditor
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import Upload Adapter
import UploadAdapter from "./api/UploadAdapter";

// Server URL
const URL = "http://localhost:8000/api/v1/upload/"; // for example

// Custom Upload Adapter Plugin function
function CustomUploadAdapterPlugin(editor) {
	editor.plugins.get("FileRepository").createUploadAdapter = loader => {
		// Create new object and pass server url
		return new UploadAdapter(loader, URL);
	};
}

export default class App extends Component {
	state = {
		data: ""
	};

	render() {
		// CKEditor Config
		const config = {
			language: "en", // fa - for persian language ( rtl )
			extraPlugins: [CustomUploadAdapterPlugin]
		};

		return (
			<div className="box">
				<h2>Custom Upload Adapter Plugin For CKEditor 5</h2>
				<p>Upload Image With API In React Project</p>

				<CKEditor
					config={config}
					editor={ClassicEditor}
					data={this.state.data}
					onChange={(event, editor) => {
						const data = editor.getData();
						this.setState({ data });
					}}
				/>

				<br/>
				<a href="https://github.com/raminr77">Github</a>
			</div>
		);
	}
}
