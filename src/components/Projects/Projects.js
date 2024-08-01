import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import entity from "../../Assets/Projects/entity_resolution.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import youtube from "../../Assets/Projects/youtube_scrapper.jpg";
import finance from "../../Assets/Projects/finance.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={entity}
                          isBlog={false}
                          title="Entity Resolution at Scale with Siemese Networks "
                          description="This project implements a Siamese Neural Network (SNN) for entity resolution, specifically designed to handle complex data matching scenarios. The project is structured to prepare, map, normalize, and process datasets, followed by training a Siamese Neural Network model using TensorFlow."
                          ghLink="https://github.com/draft-club/Entity-Resolution-with-SNNs"
                      // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
                      />
                  </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chat with your PDFs"
                          description="Chat with Your PDFs is a Streamlit-based web application that allows users to upload PDF documents, process their text, and interact with the content using an AI chatbot. The application utilizes FAISS for efficient similarity search, 
                                       OpenAI embeddings for semantic understanding, and Streamlit for the front-end interface."
              ghLink="https://github.com/hicker-coder/Chat_with_Multiple_PDFs_V2"
              demoLink="https://mef-chat-with-pdfs.streamlit.app/"
            />
                  </Col>

           <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={youtube}
                          isBlog={false}
                          title="Youtube Data Scrapper"
                          description="A robust Python tool for the systematic extraction of extensive datasets from YouTube channels, subsequently archiving the data in Excel format. It features an intuitive web-based interface developed with Streamlit, 
                                       facilitating streamlined access for users to concurrently acquire and scrutinize data from multiple YouTube channels."
                          ghLink="https://github.com/draft-club/Youtube_Streamlit_MultiChannel_Scrapper"
                          demoLink="https://youtube-dgi-scrapper.streamlit.app/"
                      />
                  </Col>

           <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={finance}
                          isBlog={false}
                          title="Finance Explorer"
                          description="Finance Explorer is a web application built with Dash, a Python framework for building analytical web applications. 
                                       It allows users to explore stock market data using candlestick charts and Bollinger Bands."
                          ghLink="https://github.com/Mr-StraightFs/Stock_watch_Data_Viz"
                      // demoLink="https://editor.soumya-jit.tech/"              
                      />
           </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Smart Free Auto Translator "
                          description="The Smart Free Auto Translator is a user-friendly application designed for seamless, real-time document translation. Users can easily translate entire documents by simply dragging and dropping them into the interface, 
                                       with the output provided in a convenient text (.txt) format. Powered by the Google Translate API, it supports more than 200 languages, ensuring accurate, context-aware translations through advanced AI and natural language processing technologies."
               // ghLink="https://github.com/draft-club/smart-translator-v2"
               demoLink="https://translate-pdf-and-word-mef-db1.streamlit.app/"
            />
                  </Col>

          <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={suicide}
                          isBlog={false}
                          title="Ai For Social Good"
                          description="Using 'Natural Launguage Processing' for the detection of suicide-related posts 
                                       and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                          ghLink="https://github.com/draft-club/AI-for-Social-Good-V2"
                      //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                      />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
                          ghLink="https://github.com/draft-club/Face_Recognition_with_Emotions_CNNs"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
                  </Col>

               
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
