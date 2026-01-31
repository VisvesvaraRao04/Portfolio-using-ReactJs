import React from 'react'

const Projects = () => {
  return <>
      <div id='projectsDiv'>
  <h1 className='Headings'>Projects</h1>
        <div id='project1_container' className='projects'>
        <h1 id="project_title">Image Caption Generator by using deep learning</h1>
        <p id="aboutmainproject">
           This project is focused on bridging the gap between visual and textual representation through advanced image captioning. The core tool is designed to generate highly accurate and contextually relevant captions for images.
            Current applications often fail to provide accurate captions and struggle with blurry or dark images. Our tool overcomes these limitations, offering demonstrably better performance on low-quality and low-light images than existing solutions.
            Future development includes integrating a voice pack feature to make the tool fully accessible and beneficial for visually impaired users. I led a team of four developers to successfully deliver this project.
        </p>
        <h4 id="keys"><span className="goldcolorspan">Technologies used : </span>ResNet,Inception(for extracting features), RNN and LSTM(for genarating captions)</h4>
        <h5 id="link details"><span className="goldcolorspan">Drive link : </span><a href="https://drive.google.com/drive/folders/1MTnANKfgQ0nnbjhgCkAbG8YyCnzbIeVt?usp=sharing">Click here to get files</a></h5>
    </div>
    <div id="project2_container" className="projects">
        <h1 id="project_title">Restaurent Website</h1>
        <p id="aboutmainproject">
           I developed a modern and user-friendly restaurant web application designed to provide an intuitive and seamless dining experience. The application features a visually appealing UI, a dynamic menu loaded from JSON data,
            and smooth navigation across all sections. Users can explore dishes, view detailed menu items, book tables, and make reservations for special events. The entire site is fully responsive, ensuring a consistent experience
            across mobile and desktop devices. This project demonstrates my ability to build interactive, real-world web applications using HTML, CSS, and JavaScript while focusing on performance, design, and usability.
        </p>
        <h4 id="keys"><span className="goldcolorspan">Technologies used : </span>HTML,css,Java Script</h4>
        <h5 id="link details"><span className="goldcolorspan">Website link : </span><a href="https://visvesvararao04.github.io/Restaurent/" target="_blank">Click here to Open the Website</a></h5>
    </div>
    <div id="project3_container" className="projects">
        <h1 id="project_title">Console based Bank applications</h1>
        <p id="aboutmainproject">
           Developed a console-based banking application that allows users to create accounts, deposit money, withdraw funds, and check account balances. The application follows core banking operations and ensures proper validation for transactions.
        </p>
        <h4 id="keys"><span className="goldcolorspan">Technologies used : </span>Java,jdbc</h4>
    </div>
      </div>
  </>
}

export default Projects;