// Get reference to the form and display area 
const Form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplay = document.getElementById('resumedisplay') as HTMLDivElement;

// Handle form submission 
Form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const profilePicture = document.getElementById('profile-picture') as HTMLInputElement;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const certification1 = (document.getElementById('certification1') as HTMLTextAreaElement).value;
    const certification2 = (document.getElementById('certification2') as HTMLTextAreaElement).value;
    const certification3 = (document.getElementById('certification3') as HTMLTextAreaElement).value;
    const education1 = (document.getElementById('education1') as HTMLTextAreaElement).value;
    const education2 = (document.getElementById('education2') as HTMLTextAreaElement).value;
    const education3 = (document.getElementById('education3') as HTMLTextAreaElement).value;
    const experience1 = (document.getElementById('experience1') as HTMLTextAreaElement).value;
    const experience2 = (document.getElementById('experience2') as HTMLTextAreaElement).value;
    const experience3 = (document.getElementById('experience3') as HTMLTextAreaElement).value;
    const skill1 = (document.getElementById('skill1') as HTMLTextAreaElement).value;
    const skill2 = (document.getElementById('skill2') as HTMLTextAreaElement).value;
    const skill3 = (document.getElementById('skill3') as HTMLTextAreaElement).value;

    const profilePicFile = profilePicture.files?.[0];
  let profilePicURL = ''; // Placeholder for the image URL

  if (profilePicFile) {
    profilePicURL = URL.createObjectURL(profilePicFile);
  }

    // Generate the resume content dynamically 
    const resumeHTML = `
        <html>
            <head>
                <title>Generated Resume</title>
                <style>

            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }

            .main-container {
                margin: 20px auto;
                padding: 20px;
                border: 2px solid black;
                box-sizing: border-box;
                max-width: 900px;
                width: 100%;
            }

            header {
                height: auto;
                width: 100%;
                background-color: rgb(62, 59, 59);
                color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;
                padding: 20px;
                gap: 10px;
                flex-wrap: wrap;
            }
            header h1 {
                color: white;
                font-size: 50px;
                margin: 0;
                padding: 0px;
            }

            h1 {
                font-size: 35px;
                color: white;
                margin: 0;
            }

            h2 {
                margin: 0;
                font-size: 18px;
                color: white;
            }

            p {
                font-family: 'Arial', sans-serif;
                margin: 5px;
            }

            .profile-pic {
                border-radius: 50%;
                height: 120px;
                width: 120px;
            }

            .main-section {
                display: flex;
                gap: 20px;
            }

            .Left-section {
                width: 35%;
                background-color: rgb(189, 183, 183);
                text-align: left;
                padding: 15px;
                box-sizing: border-box;
                margin-top: 5px;
            }

            .right_section {
                width: 65%;
                padding: 10px;
                box-sizing: border-box;
            }

            h3 {
                font-family: 'Arial', sans-serif;
                background-color: rgb(62, 59, 59);
                color: white;
                padding: 8px;
                margin-bottom: 15px;
                margin-top: 0;
            }

            ul li {
                margin-bottom: 7px;
                font-family: 'Arial', sans-serif;
                text-align: left;
            }

            ul {
                padding-left: 24px;
            }

            .personal_info p {
                padding-left: 30px;
            }
                      button {
    margin: auto;
    margin-top: 20px;
    display: block;
    width: 30%;
    background-color: rgb(44, 56, 61);
    color: rgb(255, 251, 251);
    border: none;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    padding: 5px;
    cursor: pointer;
}

button :hover {
    color: rgb(133, 129, 129);
}

@media print {
    button {
        display: none; /* Hide all buttons */
    }
}

            

                </style>
            </head>
            <body>
                <div class="main-container">
                    <header>
                        <div>
                            <h1 >${name}</h1>
                            <h2 style="margin: 0; padding: 0;">Frontend developer</h2>
                        </div>
                         ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profile-pic" />` : ''}
                    </header>
                    <div class="main-section">
                        <aside class="Left-section">
                            <section id="career_objective">
                                <h3>Career Objective</h3>
                                <p>To obtain a fresher position as a frontend developer in a fast-paced organization where technical
                                    skills and creative thinking are useful.
                                    i am highly motivated frontend developer seeking to get a position in a reputed company, where I
                                    can use my skills and knowledge to learn new things and grow as a software developer.</p>
                            </section>

                             <section id="Certification">
                                <h3>Certification</h3>
                                <ul>
                                      <li>${certification1}</li>
                                    <li>${certification2}</li>
                                    <li>${certification3}</li>
                                </ul>
                            </section>
                            <section id="languages">
                                <h3>Languages</h3>
                                <ul>
                                    <li>Urdu</li>
                                    <li>English</li>
                                </ul>
                            </section>
                        </aside>
                        <div class="right_section">
                            <section id="personal_info">
                                <h3>Personal Information</h3>
                                <p><b>Name: </b>${name}</p>
                                <p><b>Phone No: </b>${phone}</p>
                                <p><b>Email: </b>${email}</p>
                            </section>

                            <section id="education">
                                <H3>Education</H3>
                                <ul>
                                    <li>${education1}</li>
                                    <li>${education2}</li>
                                    <li>${education3}</li>
                                </ul>
                            </section>

                            <section id="skills">
                                <H3>Skills</H3>
                                <ul>
                                    <li>${skill1}</li>
                                    <li>${skill2}</li>
                                    <li>${skill3}</li>
                                </ul>
                            </section>

                            <section id="Work_experience">
                                <h3>Work Experience</h3>
                                <ul>
                                    <li>${experience1}</li>
                                    <li>${experience2}</li>
                                    <li>${experience3}</b></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
                <button id="edit-button">Edit Resume</button>
                    <button id="print-button">Print Resume</button>
                    <button id="download-button">Download Resume</button>
                    <button id="share-button">Share Resume</button>

            </body>
        </html>
    `;

    // Display the generated resume in the new window
  // Display the generated resume in the new window
// Display the generated resume in the new window
const newWindow = window.open("", "_blank");

if (newWindow) {
    newWindow.document.open();
    newWindow.document.write(resumeHTML);
    newWindow.document.close();

    // Wait until the content is fully loaded before attaching event listeners
    newWindow.onload = () => {
        // Add event listener for the "Print" button
        const printButton = newWindow.document.getElementById("print-button");
        if (printButton) {
            printButton.addEventListener("click", () => {
                newWindow.print(); // Trigger the print dialog for the new window
            });
        }

        // Add event listener for the "Edit" button
        const edit_button = newWindow.document.getElementById("edit-button");
        if (edit_button) {
            edit_button.addEventListener("click", () => {
                newWindow.close(); // Close the new window
                window.focus(); // Bring focus back to the original form window
            });
        }

        // Add event listener for the "Download" button

const downloadButton = newWindow.document.getElementById("download-button");
if (downloadButton) {
    downloadButton.addEventListener("click", () => {
        // Create a clone of the current HTML content
        const resumeClone = newWindow.document.documentElement.cloneNode(true) as HTMLElement;

        // Remove the buttons from the cloned content
        const buttons = resumeClone.querySelectorAll("button") as NodeListOf<HTMLElement>;
        buttons.forEach((button) => button.remove());

        // Serialize the modified HTML content
        const serializer = new XMLSerializer();
        const resumeHTMLWithoutButtons = serializer.serializeToString(resumeClone);

        // Create a Blob with the HTML content
        const blob = new Blob([resumeHTMLWithoutButtons], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        // Create an anchor element for downloading
        const a = document.createElement("a");
        a.href = url;
        a.download = `${name.replace(/\s+/g, "_")}_Resume.html`;
        a.click();

        // Release the Blob URL after the download
        URL.revokeObjectURL(url);
    });
}

    };

   

// Add event listener for the "Share" button
const shareButton = newWindow.document.getElementById("share-button");
if (shareButton) {
    shareButton.addEventListener("click", () => {
        // Create a Blob from the generated resume HTML content
        const resumeClone = newWindow.document.documentElement.cloneNode(true) as HTMLElement;

        // Remove the buttons from the cloned content (optional)
        const buttons = resumeClone.querySelectorAll("button") as NodeListOf<HTMLElement>;
        buttons.forEach((button) => button.remove());

        // Serialize the modified HTML content
        const serializer = new XMLSerializer();
        const resumeHTMLWithoutButtons = serializer.serializeToString(resumeClone);

        // Create a Blob with the HTML content
        const blob = new Blob([resumeHTMLWithoutButtons], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        // You can now generate a link to this blob URL
        const shareableLink = url; // This is the link you will share

        // Display the link to the user
        alert(`Your shareable link: ${shareableLink}`);

        // Optionally, open the link in a new tab
        // window.open(shareableLink, "_blank");

        // Now you can share this URL with others
        console.log('Generated Shareable Link:', shareableLink);

        // (Optional) You could also store the URL in a database or server for later use
    });
}


} else {
    console.error("Failed to open new window.");
}


});




