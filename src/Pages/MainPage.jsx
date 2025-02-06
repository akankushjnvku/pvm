import React from "react";
// Images of First research paper
import PubR1 from "../assets/Publication_1/r1.png";
import PubR2 from "../assets/Publication_1/r2.png";
import PubR3 from "../assets/Publication_1/r3.png";
import PubR4 from "../assets/Publication_1/r4.png";
// Images of Second research paper
import Pub2I1 from "../assets/Publication_2/i1.png";
import Pub2I2 from "../assets/Publication_2/i2.png";
import Pub2I3 from "../assets/Publication_2/i3.png";
// Images of Third research paper
import Pub3I1 from "../assets/Publication_3/image1.png";
import Pub3I2 from "../assets/Publication_3/image2.png";
import Pub3I3 from "../assets/Publication_3/image3.png";
import Pub3I4 from "../assets/Publication_3/image4.png";

// Images of first Conference
import Conf1I1 from "../assets/Conference_1/I1.png";
import Conf1I2 from "../assets/Conference_1/I2.png";
import Conf1I3 from "../assets/Conference_1/I3.png";
import Conf1I4 from "../assets/Conference_1/I4.png";
// Images of Second Conference
import Conf2I1 from "../assets/Conference_2/I1.png";
import Conf2I2 from "../assets/Conference_2/I2.png";
// Images of Third Conference
import Conf3I1 from "../assets/Conference_3/I1.png";
import Conf3I2 from "../assets/Conference_3/I2.png";
// Images of First Project
import Pro1I1 from "../assets/Project_1/I1.png";
import Pro1I2 from "../assets/Project_1/I2.png";
import Pro1I3 from "../assets/Project_1/I3.png";
// Images of Second Project
import Pro2I1 from "../assets/Project_2/image1.png";
import Pro2I2 from "../assets/Project_2/image2.png";
// Image of Third Project
import Pro3I1 from "../assets/Project_3/image1.png";
import Pro3I2 from "../assets/Project_3/image2.png";
import Pro3I3 from "../assets/Project_3/image3.png";
import Pro3I4 from "../assets/Project_3/image4.png";
// Image of Fourth Project
import Pro4I1 from "../assets/Project_4/image1.png";
import Pro4I2 from "../assets/Project_4/image2.png";
import Pro4I3 from "../assets/Project_4/image3.png";
import Pro4I4 from "../assets/Project_4/image4.png";
import Pro4I5 from "../assets/Project_4/image5.png";
// Image of Fifth Project
import Pro5I1 from "../assets/Project_5/image.png";
// DOCUMENTS / CERTIFICATES
import Marksheet10 from "../assets/Documents/Marksheet10.pdf";
import Marksheet12 from "../assets/Documents/Marksheet12.pdf";
import NUS from "../assets/Documents/NUS Training Certificate.pdf";
import ANU_Offer from "../assets/Documents/2024_FRT Offer_Prahlada.pdf";
import iitTranscript from "../assets/Documents/iitTranscript.pdf";
import frt_award from "../assets/Documents/frt award.pdf";
import smp from "../assets/Documents/smp_certificate.pdf";
import cv from "../assets/Documents/Prahlada_CV.pdf";
// ICONS
import { MdEmail, MdPhone, MdLink } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const MainPage = ({ sectionRefs }) => {
  return (
    <div className="bg-white flex-1 shadow-lg rounded-lg p-6 overflow-auto text-[1.11rem]">
      {/* About Section */}
      <section id="about" className="mb-8" ref={sectionRefs.about}>
        <h2 className="text-2xl font-bold mb-4">
          WELCOME to Prahlada’s webpage!
        </h2>
        <p className="text-justify text-gray-900 mb-4">
          I'm a final year Integrated Masters (B.Tech. + M. Tech.) student
          at the 
          <a href="https://www.iitr.ac.in/"
          className="text-blue-600 hover:underline"
          > Indian Institute of Technology, Roorkee</a>. Currently, I am
          pursuing my Master’s Thesis Project from the 
          <a href="https://www.anu.edu.au/"
          className="text-blue-600 hover:underline"
          > Australian National
          University</a> under{" "}
          <a
            href="https://earthsciences.anu.edu.au/people/dr-sia-ghelichkhan"
            className="text-blue-600 hover:underline"
          >
            Dr. Sia Ghelichkhan
          </a>{" "}
          and{" "}
          <a
            href="https://earthsciences.anu.edu.au/people/professor-rhodri-davies"
            className="text-blue-600 hover:underline"
          >
            Prof. Rhodri Davies
          </a>
          . I have worked on a variety of research topics, and I am most excited
          by applications of Machine Learning (ML) and Numerical Modelling (NM)
          for interpretation of geophysical phenomena. My interest in research
          is driven by my career goal which is to be a teacher and an active
          researcher.
        </p>
        <p className="text-justify text-gray-900">
          In order to work towards my interests, I strongly wish to secure a
          Doctorate position in a research group that aligns with my field of
          interests and is passionate about research. Research excites me as it
          keeps me challenged and motivated. The undergraduate study at IIT
          Roorkee has given me a very strong foundation in Geophysics,
          Geodynamics, and Machine Learning. Other than the regular coursework
          required, I have substantial research experience. I have worked on
          four research papers, one of which is published by Springer in Natural
          Hazards, and a few research projects based on Geophysics and Machine
          Learning. Through my research experience since my second year of
          undergraduate studies, I have developed my research skills. I have
          learned how to identify useful information, find potential in it, and
          analyze it. My research taught me how to tackle a problem, design the
          algorithm, framework, and methodology. I also learned how to improve
          my work and incorporate changes based on inputs from senior
          researchers and teachers. To know more about me and my work, please
          scroll down! You can find my CV {" "}
          <a href={cv} download className="text-blue-600 hover:underline">
            here
          </a>
          .
        </p>
        <p>
          <h3 className="font-bold mt-2 mb-1">Research Interests : </h3>
          <p>
            Geophysical Modelling, Seismology, Applied Machine Learning,
            Petrophysics, Geodynamics, Risk Assessment 
          </p>
        </p>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" ref={sectionRefs.education} className="mb-12">
        <h2 className="font-bold text-2xl text-gray-900 mb-4">Education</h2>
        <div className="space-y-8 text-gray-800">
          {/* ANU */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              Australian National University (ANU), Australia
              <span className="text-sm text-gray-600 block">
                Jun 2024 – Jun 2025
              </span>
            </h4>
            <p className="text-gray-700">
              Master’s Thesis Project (Exchange) in Geodynamics
            </p>
            <a
              href={ANU_Offer}
              donwload
              className="text-blue-500 hover:underline"
            >
              Certificate
            </a>
          </div>

          {/* IIT Roorkee */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              Indian Institute of Technology Roorkee (IIT), India
              <span className="text-sm text-gray-600 block">
                Aug 2020 – Jun 2025
              </span>
            </h4>
            <p className="text-gray-700">
              Integrated Masters (B.Tech + M.Tech) in Geophysical Technology
            </p>
            <p className="text-gray-700">CGPA – 8.75/10 (Within Top 10%)</p>
            <a
              href={iitTranscript}
              donwload
              className="text-blue-500 hover:underline"
            >
              Transcript
            </a>
          </div>

          {/* NUS */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              National University of Singapore (NUS), Singapore
              <span className="text-sm text-gray-600 block">
                Dec 2022 – Jan 2023
              </span>
            </h4>
            <p className="text-gray-700">
              Academic Internship in Deep Learning and Data Analytics
            </p>
            <p className="text-gray-700">Grade – A (Training by NUS and HPE)</p>
            <a href={NUS} className="text-blue-500 hover:underline">
              Certificate
            </a>
          </div>

          {/* Scholars Academy Grade 12 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              Scholars Academy Roorkee (CBSE), India
              <span className="text-sm text-gray-600 block">Apr 2020</span>
            </h4>
            <p className="text-gray-700">Higher Secondary Education</p>
            <p className="text-gray-700">
              Grade 12 Percentage – 93% (2nd in school)
            </p>
            <a
              href={Marksheet12}
              
              className="text-blue-500 hover:underline"
            >
              Certificate
            </a>
          </div>

          {/* Scholars Academy Grade 10 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              Scholars Academy Roorkee (CBSE), India
              <span className="text-sm text-gray-600 block">Apr 2018</span>
            </h4>
            <p className="text-gray-700">Secondary Education</p>
            <p className="text-gray-700">
              Grade 10 Percentage – 92% (2nd in school)
            </p>
            <a
              href={Marksheet10}
              
              className="text-blue-500 hover:underline"
            >
              Certificate
            </a>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS SECTION */}
      <section
        id="technicalSkills"
        ref={sectionRefs.technicalSkills}
        className="mb-12"
      >
        <h2 className="font-bold text-2xl  text-gray-900 mb-4">
          Technical Skills
        </h2>
        <div className="space-y-8 text-gray-800">
          {/* Programming Languages */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">
              Programming Languages
            </h4>
            <p className="text-gray-700">
              Python (Expert), C++ (Competent), MATLAB (Competent), R (Basics)
            </p>
          </div>

          {/* Softwares and Tools */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">Softwares and Tools</h4>
            <p className="text-gray-700">
              Firedrake, Para-view, Jupyter Notebook, MS Azure, VSCode, LATEX, Excel,
              Orange
            </p>
          </div>

          {/* Python Libraries */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">Python Libraries</h4>
            <p className="text-gray-700">
              OpenCV, Numpy, Pandas, SciPy, Scikit-learn, Matplotlib, Pyvista,
              Pyadjoint, Petsc, Tensorflow
            </p>
          </div>

          {/* Geophysics */}
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-xl mb-2">Geophysics</h4>
            <p className="text-gray-700">
              Gadopt, ObsPy, QGIS, Gmsh, Gplates, Seisan, Res3Dinv, KikNet,
              Geosoft
            </p>
          </div>
        </div>
      </section>

      {/* researchExperience Section */}
      <div
        ref={sectionRefs.researchExperience}
        id="researchExperience"
        className="mb-8"
      >
        <h3 className="text-2xl font-semibold mb-4">Research Experience</h3>

        <div id="journalPapers">
          <h4 className="text-2xl font-bold">- Journal Papers :</h4>

          {/* <p className="text-gray-800 mb-4">
            Below are some of the research papers I have authored or
            co-authored. You can explore my full list of publications on{" "}
            <a
              href="https://scholar.google.com/citations?hl=en&user=VaoQmPUAAAAJ"
              className="text-blue-600 hover:underline"
            >
              Google Scholar
            </a>
            .
          </p> */}

          <ul className="list-none space-y-6">
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  1. Unsupervised learning framework for region-based damage
                  assessment on xBD, a large satellite imagery
                </h4>
                <p className="text-gray-700 mt-2">
                  Prahlada V. Mittal, R Bafna and A Mittal <br/> Natural
                  Hazards 118 (2), Springer Journal, 1619-1643, 2023.
                  <a
                    href="https://doi.org/10.1007/s11069-023-06074-y"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Read Paper
                  </a>
                </p>
                {/* Images of the research paper for breif description */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {/* <div className="flex items-center justify-center gap-3"> */}{" "}
                  
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    Population-based damage assessment using remote sensing data
                    is crucial in disaster management. This paper presents an
                    unsupervised density-based clustering algorithm for damage
                    assessment, which automatically selects the optimum number
                    of clusters based on spatial distribution and assigns damage
                    levels to affected areas.
                  </p>

                  <img
                    src={PubR1}
                    alt="Sample output from framework"
                    className="mt-4 rounded sm:w-6/12 h-auto w-full  shadow-lg"
                  />
                  {/* </div> */}
                  {/* <div className="flex items-center justify-center gap-3"> */}
                  
                  <p className="text-justify text-gray-600 sm:text-lg mt-2 text-lg">
                    In our work, we present an unsupervised density-based
                    clustering algorithm that automatically makes spatial groups
                    of affected regions and assigns the label based on the
                    degree of damage to the region like shown below (a sample
                    output from our framework).
                  </p>
                  {/* </div>
                <div className="flex items-center justify-center gap-3"> */}
                  <img
                    src={PubR2}
                    alt="Second photo of first research paper"
                    className="w-full h-auto sm:w-1/2 rounded  shadow-lg mt-4"
                  />
                  
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The algorithm automatically selects the optimum number of
                    clusters based on the spatial distribution of the data and
                    works well with any shape of the hazard-affected region. The
                    demographic estimate for the affected region is then
                    presented based on the area of the region and the census
                    data. An overview of our approach is shown below.{" "}
                  </p>

                  <img
                    src={PubR3}
                    alt="Third photo of first research paper"
                    className="w-full h-auto sm:w-2.2/3 rounded  shadow-lg mt-4"
                  />
                  {/* </div>
                <div className="flex items-center justify-center gap-3"> */}
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The navigation information is provided with aid of Google
                    maps depicting the overall damage along with possibility of
                    transportation as shown below.
                  </p>

                  <img
                    src={PubR4}
                    alt="Fourth photo of first research paper"
                    className="w-full h-auto sm:w-2/3 rounded shadow-lg mt-4"
                  />
                  {/* </div> */}
                </div>
              </div>
            </li>

            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  2. Machine Learning Models for Mining Social Media Data for
                  Effective Natural Disaster (In Review)
                </h4>
                <p className="text-gray-700 mt-2">
                  Prahlada V. Mittal, S Karki, S Parasher, S Narang, A Mittal
                  <br/>Under Review in Natural Hazards Review, ASCE 
                  <a
                    href="https://doi.org/10.21203/rs.3.rs-3754456/v1"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Read Paper
                  </a>
                </p>
                {/* Images for Second Research Paper */}
                <div>
                  <img
                    src={Pub2I1}
                    alt="First photo of second Research paper"
                    className="w-full h-auto sm:w-2/3 rounded shadow-lg mt-4"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    Satellite technology has emerged as a key tool for effective
                    management and assessment of natural disasters. However, the
                    challenge of accurately estimating impacted populations and
                    assessing building damage, often obscured from aerial views,
                    persists. To address this, the integration of imagery and
                    textual data from social networks offers a promising
                    solution as depicted below.
                  </p>
                  <img
                    src={Pub2I2}
                    alt="First photo of second Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded shadow-lg mt-4"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The sentiment analysis component categorizes
                    disaster-affected individuals' emotions as panic, neutral,
                    or non-panic. We also introduced an Aid analysis model for
                    the classification of tweets based on the aid sought by
                    people through tweets. A broad overview of our approach in
                    which we combined all the information can be seen below.
                    Also, this paper is further research of a conference paper
                    we had submitted earlier.
                  </p>
                  <img
                    src={Pub2I3}
                    alt="First photo of second Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    An important aspect of the research was aid-analysis which
                    could be very useful to the aid-providing organizations and
                    government to provide specialized and focused aid. The
                    framework we used for that can be seen below. Thus, this
                    approach holds potential to significantly enhance disaster
                    relief efficacy.
                  </p>
                </div>
              </div>
            </li>


            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  3. From Field to Diagnosis: Leveraging Farmer Query to 
                  Detect Crop Diseases in a Changing Climate (In Review)
                </h4>
                <p className="text-gray-700 mt-2">
                  DS Rawat, A Agarwal, Prahlada V. Mittal, A Mittal, N Yeril
                  <br/>Under Review in IEEE Transactions on AgriFood Electronics
                
                </p>
                {/* Images for Second Research Paper */}
                <div>
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  Climate change is an escalating global crisis with far-reaching 
                  consequences that extend to every facet of the natural and human 
                  world. One of the most pressing dimensions of climate change is 
                  its profound and multifaceted impact on human livelihoods, 
                  agriculture, and the broader socio-economic fabric. In this study, 
                  we examine the impact of climatic factors on disease and pest 
                  infestations affecting apple orchards in Himachal Pradesh, India. 
                  Utilizing data from the Kisan Call Center, a government-run farmer
                   helpline spanning 2009 to 2022, we analyzed a variety of 
                   farmer-reported issues. 
                  </p>
                  <img
                    src={Pub3I1}
                    alt="First photo of third Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded shadow-lg mt-4"
                  />

            
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  We systematically labelled these queries with 27 distinct 
                  categories using our N-gram AgriLogic Framework, ensuring 
                  each was scientifically accurate and relevant. To provide 
                  timely aid and facilities to the farmers, we built a 
                  classification model to classify the farmer queries. 
                  The following word cloud represents the most sought-after 
                  keywords in the farmer queries. 
                  </p>
              


                  <img
                    src={Pub3I2}
                    alt="Third photo of third Research paper"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                  Our data analysis highlighted the drastic impact of extreme 
                  weather events, such as intense rainfall and hail. We also 
                  performed a temporal analysis, which illuminated the complex 
                  interrelations among various infestations, providing new 
                  insights into the progression of crop diseases. 
                  </p>

                  <img
                    src={Pub3I3}
                    alt="Third photo of third Research paper"
                    className="w-full h-auto sm:w-4.5/8 rounded mt-4 shadow-lg"
                  />

                  <p className="text-justify text-gray-600 text-lg mt-2">
                  The overall flow of the paper can be seen in the figure below. 

                  </p>
                  <img
                    src={Pub3I4}
                    alt="fourth photo of third Research paper"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />

                  <p className="text-justify text-gray-600 text-lg mt-2">
                  Overall, the research offers a comprehensive framework for 
                  forecasting and countering the detrimental effects of 
                  climatic challenges on apple cultivation, enhancing the 
                  resilience and sustainability of agriculture in the region. 
                  </p>
                </div>
              </div>
            </li>



          </ul>
        </div>
        {/* Conferences : SubSection */}
        <div id="conferences" className="mt-4">
          <h4 className="text-2xl font-bold">- Conferences :</h4>
          <ul className="list-none space-y-6">
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  1. Natural Disaster Twitter Data Classification using CNN and
                  Logistic Regression
                </h4>
                <p className="text-gray-700 mt-2">
                  S Parasher, Prahlada V Mittal, S Karki, S Narang, A Mittal <br/>
                  12th International Conference on Soft Computing for Problem Solving
                  (SocProS 2023), Aug 11-13, 2023
                  <a
                    href="https://doi.org/10.1007/978-981-97-3292-0_46"
                    className="text-blue-600 hover:underline ml-2"
                  >
                    Read Paper
                  </a>
                </p>
                {/* Images for Conference 1 */}
                <div>
               
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    Satellite-based natural disaster management and assessment
                    are prevalent.
                  </p>
                  <img
                    src={Conf1I1}
                    alt="First photo of Conference 1"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />

               
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    A significant hurdle is faced in estimating the population
                    affected as well as the internal damage of buildings which
                    cannot be assessed from the top. Social media images and
                    texts can estimate the affected population well. We used
                    Twitter and Flickr datasets for sentiment analysis and
                    classification using SVM, CNN, XGBoost, Logistic Regression,
                    Gradient Boost, etc.
                  </p>
                  <img
                    src={Conf1I2}
                    alt="Second photo of Conference 1"
                    className="w-full h-auto sm:w-4/8 rounded mt-4 shadow-lg"
                  />

                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The sentiment analysis gave us information about the panic
                    situation among the people.
                  </p>

                  <img
                    src={Conf1I3}
                    alt="Third photo of Conference 1"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    We also performed clustering using the DBSCAN algorithm. The
                    following figure represents the spatial distribution of
                    instances within each cluster offering insights into the
                    spatial characteristics and proximity of different aspects
                    of the disaster event.
                  </p>

                  <img
                    src={Conf1I4}
                    alt="Fourth photo of Conference 1"
                    className="w-full h-auto sm:w-2/3 rounded mt-4 shadow-lg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  2. Optimizing Groundwater Management: Integrating GRACE
                  Satellite Data and Machine Learning for Groundwater Level
                  Prediction and Analysis
                </h4>
                <p className="text-gray-700 mt-2">
                  M Sharma, Prahlada V Mittal, K Raj, T
                  Daqiq, A Karunakalage, R Sharma <br/> International
                  Conference on Computations and Data Science (CoDS-2024), March
                  08-10,2024
                </p>
                {/* Images for Conference 2 */}
                <div>
                 
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    In pursuit of a comprehensive analysis of groundwater
                    dynamics in the state of Uttar Pradesh, India, we integrated
                    GRACE satellite data, which is continuous and available
                    round the year and machine learning approaches for
                    groundwater level (GWL) analysis and prediction, charting a
                    progressive course for water resource management. The GWL
                    data is very limited and there are very limited number of
                    groundwater monitoring wells available in India. In this
                    study, we focused our research on the UP region.
                  </p>

                  <img
                    src={Conf2I1}
                    alt="First photo of Conference 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    Moreover, the groundwater monitoring is done only twice a
                    year. So, in this paper, we tried to find correlations and
                    hidden relationships using ML between the GRACE and GWL data
                    so that we can have a good idea of the GWL. Moreover, we
                    tried to provide robust methods for quantifying uncertainty
                    in predictions associated with GWL, an aspect crucial for
                    informed decision-making and risk assessment. The
                    overarching objective was to contribute to the enhancement
                    of sustainable water resources management through the
                    integration of advanced machine-learning techniques and
                    satellite-derived information.
                  </p>
                  <img
                    src={Conf2I2}
                    alt="Second photo of Conference 2"
                    className="w-full  sm:w-2/4 h-auto rounded mt-4 shadow-lg"
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  3. Enhancing Groundwater Data Consistency between GRACE and
                  GRACE-Fo Missions in Uttar Pradesh, India
                </h4>
                <p className="text-gray-700 mt-2">
                  K Raj, Prahlada V Mittal, M Sharma, A
                  Karunakalage, T Daqiq, R Sharma <br/> International
                  Conference on Computations and Data Science (CoDS-2024), March
                  08-10,2024
                </p>
                {/* Images for Conference 3 */}
                <div>
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The monitoring of global mass variations has undergone a
                    transformative evolution with the implementation of the
                    Gravity Recovery and Climate Experiment (GRACE) and its
                    successor, GRACE Follow-On (GRACE-FO). Despite their
                    revolutionary impact, the observational continuity is
                    challenged by inherent gaps, such as the 11-month interval
                    between the two missions between 2017 and 2018. This
                    temporal disruption has impeded seamless observations,
                    affecting the comprehensive analysis and practical
                    application of the valuable data generated by these
                    missions.
                  </p>
                  <img
                    src={Conf3I1}
                    alt="First photo of Conference 3"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    We aimed to bridge the data gap between these two missions
                    and assess the groundwater storage variations (GWSA) in the
                    state of Uttar Pradesh, India. We used GRACE satellite data,
                    specifically Total Water Storage (TWS) measurements.
                    Additionally, TWS data derived from other satellite sources
                    within the same timeframe were incorporated. The primary
                    objective was to train the machine using Machine Learning
                    algorithms such as SVM, Logistic Regression, and CNN to make
                    our model ready firstly, to predict TWS values for the
                    timeframe where GRACE TWS data is unavailable. This extended
                    the utility of the models beyond the initial training
                    period.
                  </p>
                  <img
                    src={Conf3I2}
                    alt="Second photo of Conference 3"
                    className="w-full  sm:w-2/3 h-auto rounded mt-4 shadow-lg"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Research project : Subsection */}
        <div id="researchProjects" className="mt-2">
          <h4 className="text-2xl font-bold">- Research Projects :</h4>
          <ul className="list-none space-y-6">
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  1. Constraining mantle properties by inverting for
                  observations of dynamic topography <br/> Jun 2024 – Jun 2025
                </h4>
                <p className="text-gray-700 mt-2">
                  Dr. Sia Ghelichkhan & Prof. Rhodri Davies (Australian National
                  University, Australia) 
                </p>
                <div>
          
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The topographical shape of the Earth is primarily influenced
                    by density variations within the crust and elastic
                    deformation of the lithosphere. However, a significant
                    portion of the topography is also shaped by dynamic
                    processes within the Earth’s mantle, referred to as “dynamic
                    topography”. Dynamic topography can change relatively
                    rapidly (within a couple of million years or less) due to
                    evolving forces within the mantle.
                  </p>
                  <img
                    src={Pro1I1}
                    alt="First photo of Project 1"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
          
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    Thus, dynamic topography can be used to get information
                    about the temperature and viscosity of the mantle. Using
                    Stokes equations, energy equations and numerical methods
                    such as FEM, we constrain the forces acting on the earth
                    surface to get a synthetic model. Below is a snapshot of the
                    synthetically modelled temperature field.
                  </p>

                  <img
                    src={Pro1I2}
                    alt="Second photo of Project 1"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
               
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    Then we compare this synthetic model with real-earth model
                    to derive adjoint sensitivities with respect to density and
                    viscosity. Then, we can invert for mantle properties, thus
                    creating a model to provide insights about mantle dynamics
                    and surface deformation processes. Below is a graph which
                    plots misfit functions to invert for viscosity and
                    temperature.
                    <img
                    src={Pro1I3}
                    alt="Second photo of Project 1"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  2. Time-series analysis and feature extraction of past LPT
                  signals from Aso Volcano Japan <br/> Apr 2023 – Sept 2023
                </h4>
                <p className="text-gray-700 mt-2">
                  Dr. Teh-Ru Alex Song (University College London, UK) - Remote
                </p>
                <div>
            
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The prediction of volcanic eruptions and the evaluation of
                    associated risks remain a timely and unresolved issue. We
                    tried to work on a methodology to classify seismic events
                    linked to volcanic activity using past Long-Period Tremor
                    signals. As increased seismic activity is an indicator of
                    volcanic unrest, automatic classification of volcano seismic
                    events is of major interest for volcano monitoring. We tried
                    to perform feature extraction and identify relevant features
                    as well as hidden features affecting the volcanic signals.
                    The basic flowchart of the project is given here to give an
                    idea.
                  </p>
                  <img
                    src={Pro2I1}
                    alt="First photo of Project 2"
                    className="w-full h-auto sm:w-4.5/8 rounded mt-4 shadow-lg"
                  />

                  
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    A DBScan cluster result based on some major features.
                  </p>
                  <img
                    src={Pro2I2}
                    alt="Second photo of Project 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  3. Image Super-Resolution Using SRCNN <br/> Dec 2022 – Jan 2023
                </h4>
                <p className="text-gray-700 mt-2">
                  Dr. Amirhassan Monajemi  (National University of Singapore)
                </p>
                <div>
                  <img
                    src={Pro3I1}
                    alt="First photo of Project 3"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The central aim of Super-Resolution (SR) is to generate a
                    higher resolution image from lower resolution images. High
                    resolution image offers a high pixel density and thereby
                    more details about the original scene. The applications of
                    super-resolution are wide and have a use case in medical
                    imaging, remote sensing and security footages. In this
                    project, first we preprocessed the data by degrading
                    initially high-resolution images and then applied our
                    algorithm of SRCNN.
                  </p>
                  <img
                    src={Pro3I2}
                    alt="Second photo of Project 3"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                   <img
                    src={Pro3I3}
                    alt="Third photo of Project 3"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    We also analyzed the image quality metrics using PSNR (Peak
                    Signal to Noise Ratio), MSE (Mean Squared Error) and SSIM
                    (Structural Similarity Index). The basic structure of the
                    preprocessing steps and the model architecture are shown
                    above.
                  </p>
                 

                  <img
                    src={Pro3I4}
                    alt="Fourth photo of Project 3"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    Here are some results on images we tried the model.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  4. Gravity-Magnetic Survey and Modeling of Mohand Anticline
                  <br/> Feb 2023 – May 2023
                </h4>
                <p className="text-gray-700 mt-2">
                  Dr. Ashutosh Chamoli (IIT Roorkee)
                </p>
                <div>
                 
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    The HFT is a major tectonic boundary in the Himalayan
                    Mountain range that separates the Indian subcontinent from
                    the Himalayan foothills. The task in this project was to
                    model the Mohand anticline which basically demarcates the
                    HFT. In this project, we collected the gravity data using
                    the CG-6 gravimeter and the magnetic data using the proton
                    precision magnetometer (PPM) for the Mohand region which is
                    situated in the Anticlinal Ridge of the Himalayan Frontal
                    Thrust (HFT). The stations and regio can be seen in the
                    following figure.
                  </p>
                  <img
                    src={Pro4I1}
                    alt="First photo of Project 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />


          
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    To analyse the gravity survey data, we applied a few gravity
                    corrections such as drift correction, free-air correction
                    and bouger correction. Some of the results we got based on
                    plotting the data are shown below.
                  </p>

                  <img
                    src={Pro4I2}
                    alt="Second photo of Project 2"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I3}
                    alt="Third photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I4}
                    alt="Fourth photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <img
                    src={Pro4I5}
                    alt="Fifth photo of Project 4"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                </div>
              </div>
            </li>

            <li>
              <div className="bg-gray-100 p-4 shadow rounded-lg hover:bg-gray-200 transition">
                <h4 className="text-xl font-semibold">
                  5. RMT and TEM Modelling of HFT Zone Mar 2023 – Apr 2023
                </h4>
                <p className="text-gray-700 mt-2">
                  Prof. Bülent Tezkan  (University of Cologne, Germany) & Prof. Mohd.
                  Israil (IIT Roorkee)
                </p>
                <div>
                  <img
                    src={Pro5I1}
                    alt="First photo of Project 5"
                    className="w-full h-auto sm:w-1/2 rounded mt-4 shadow-lg"
                  />
                  <p className="text-justify text-gray-600 text-lg mt-2">
                    In this project and field training, we used Radio
                    Magnetotellurics (RMT) and Transient Electromagnetic (TEM)
                    methods were to study the Himalayan Frontal Thrust (HFT)
                    zone. In RMT, we used natural electromagnetic fields to
                    investigate the Earth's subsurface conductivity, which is a
                    frequency dependent EM method. In TEM, we measured how
                    induced electromagnetic fields decay over time. These
                    methods were combined to process and model geophysical data,
                    resulting in a detailed 3-D structural model of the HFT
                    zone. Thus, we could get to know shallow as well as deep
                    structures through it and understand the subsurface
                    compositions and the fault structures beneath. The study
                    area of the project is shown below. As the data was
                    confidential, I cannot put out the results.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="mb-8" id="achievements">
        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
        <ol>
          <li>
            1. {" "}   
            <a
              href={frt_award}
              
              className="text-blue-500 hover:underline"
            >
             FRT Award
            </a> – Awarded Future Research Talent Award by the College
            of Science, ANU for Undergraduate research excellence.
            
          </li>
          <li>2. Cleared IIT-JEE with 99.2 %ile</li>
        </ol>
      </div>

      {/* COURSES SECTION */}
      <section id="courses" ref={sectionRefs.courses} className="mb-12">
        <h2 className="font-bold text-3xl text-gray-900 mb-6">Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
          <ul className="list-disc space-y-2 px-4">
            <li className="hover:text-red-500 transition-colors duration-300">
              Computer Programming (C/C++)
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Machine Learning for Engineers
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Digital Image Processing
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Numerical & Inverse Modelling
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Communication Skills
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Signal Processing
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Hydrology
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Probability and Statistics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Multi-variable Calculus
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Seismology & Strong Motion Seismology
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Seismic Prospecting
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Multi-dimensional Mechanics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Economics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Geoinformatics
            </li>
          </ul>
          <ul className="list-disc space-y-2 px-4">
            <li className="hover:text-red-500 transition-colors duration-300">
              Well-logging
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Petrophysics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Plate Tectonics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Mantle Convection and Dynamic Topography
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Electrical & Electromagnetic Prospecting
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Economic Geology
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Field Work
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Marine Geophysics
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Geology of India
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Stratigraphy
            </li>
            <li className="hover:text-red-500 transition-colors duration-300">
              Physical and Structural Geology
            </li>
          </ul>
        </div>
      </section>

      {/* TEACHING AND MENTORSHIP EXPERIENCE */}
      <section
        id="teachingMentorshipExperience"
        ref={sectionRefs.teachingMentorshipExperience}
        className="mb-12"
      >
        <h2 className="font-bold text-2xl text-gray-900 mb-4">
          Teaching & Mentorship Experience
        </h2>
        <div className="space-y-6 text-gray-800">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-xl">
              1. Student Mentor, Student Mentorship Program, IIT Roorkee
              <span className="text-sm text-gray-600 block">
                Sep 2023 – Apr 2024
              </span>
            </h3>
            <p className="text-gray-700">
              Mentoring and guiding freshman year students. {" "}
              <a href={smp}  className="text-blue-500 hover:underline">
                {" "}
                Certificate
              </a>
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-xl">
              2. Education Mentor, Raman Classes, Roorkee
              <span className="text-sm text-gray-600 block">
                Jan 2021 – Jul 2023
              </span>
            </h3>
            <p className="text-gray-700">
              Mentoring and teaching students for IIT JEE and Python
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-xl">
              3. Mentor in Workshops – IIT Roorkee, COER University, KRM
              University
              <span className="text-sm text-gray-600 block">
                Jul 2023 – Jun 2024
              </span>
            </h3>
          </div>
        </div>
      </section>

      {/*   extra curricular section */}
      <section
        id="extraCurricular"
        ref={sectionRefs.extraCurricular}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Sports and Community Participation
        </h3>
        <div className="space-y-6 text-gray-800">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              1. Member, Marketing and Development, Raman Classes, Roorkee
              <span className="text-sm text-gray-600 block">
                Jan 2021 – Aug 2022
              </span>
            </h4>
            <p className="text-gray-700">Marketing, Course Preparation</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              2. Member, National Sports Organization (NSO), IIT Roorkee
              <span className="text-sm text-gray-600 block">
                Dec 2020 – Dec 2021
              </span>
            </h4>
            <p className="text-gray-700">
              Worked to increase youth interest in sports and physical fitness
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              3. Participant, Institute Open Championship, IIT Roorkee
              <span className="text-sm text-gray-600 block">2023, 2024</span>
            </h4>
            <p className="text-gray-700">
              Participant in Badminton Championship - Singles
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              4. Participant, Inter-IIT Trials, IIT Roorkee
              <span className="text-sm text-gray-600 block">2022</span>
            </h4>
            <p className="text-gray-700">Participant in Squash</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-xl">
              5. Participant, Hamrock Cricket Tournament, IIT Roorkee
              <span className="text-sm text-gray-600 block">2024</span>
            </h4>
            <p className="text-gray-700">
              Bowling allrounder – helped team secure a 2nd place finish
            </p>
          </div>
        </div>
      </section>

      {/* REFERENCES SECTION */}
      <section id="references" ref={sectionRefs.references} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">References</h3>
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 shadow-md rounded-lg">
            <p className="text-xl font-bold text-gray-900 mb-2">
              1. Professor Rhodri Davies
            </p>
            <p className="text-gray-800 mb-1">
              Associate Director Research & Engagement, Research School of Earth
              Sciences, ANU, Australia
            </p>
            <p className="flex items-center mb-1">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="text-gray-700">rhodri.davies@anu.edu.au</span>
            </p>
            <p className="flex items-center mb-1">
              <MdPhone className="mr-2 text-green-500" />
              <span className="text-gray-700">+61 2 61253643</span>
            </p>
            <p className="flex items-center mb-1">
              <MdLink className="mr-2 text-purple-500" />
              <a
                href="https://earthsciences.anu.edu.au/people/professor-rhodri-davies"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Link
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaLinkedin className="mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/rhodri-davies-086237aa"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>

          {/* Reference 2 */}
          <div className="bg-gray-100 p-6 shadow-md rounded-lg">
            <p className="text-xl font-bold text-gray-900 mb-2">
              2. Dr Ravi Sharma
            </p>
            <p className="text-gray-800 mb-1">
              Associate Professor, Department of Earth Sciences, IIT Roorkee,
              India
            </p>
            <p className="flex items-center mb-1">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="text-gray-700">ravi.sharma@es.iitr.ac.in</span>
            </p>
            <p className="flex items-center mb-1">
              <MdPhone className="mr-2 text-green-500" />
              <span className="text-gray-700">+91 74176 98677</span>
            </p>
            <p className="flex items-center mb-1">
              <MdLink className="mr-2 text-purple-500" />
              <a
                href="https://iitr.ac.in/Departments/Earth%20Sciences%20Department/People/Faculty/Ravi%20Sharma.html"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Link
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaLinkedin className="mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/ravi-sharma-81011116"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
          {/* Reference 3 */}
          <div className="bg-gray-100 p-6 shadow-md rounded-lg">
            <p className="text-xl font-bold text-gray-900 mb-2">
              3. Professor Anand Joshi
            </p>
            <p className="text-gray-800 mb-1">
              Head of Department, Department of Earth Sciences, IIT Roorkee,
              India
            </p>
            <p className="flex items-center mb-1">
              <MdEmail className="mr-2 text-blue-500" />
              <span className="text-gray-700">joshi.anand@es.iitr.ac.in</span>
            </p>
            <p className="flex items-center mb-1">
              <MdPhone className="mr-2 text-green-500" />
              <span className="text-gray-700">+91 1332 285887</span>
            </p>
            <p className="flex items-center mb-1">
              <MdLink className="mr-2 text-purple-500" />
              <a
                href="https://iitr.ac.in/Departments/Earth%20Sciences%20Department/People/Faculty/100481.html"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Profile Link
              </a>
            </p>
            <p className="flex items-center mb-1">
              <FaLinkedin className="mr-2 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/anand-joshi-405b11b3/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </p>            
          </div>
        </div>
      </section>
      <section id="curriculum"></section>

 
      
      
      {/* Contact Section */}
      <section id="contact" ref={sectionRefs.contact}>
        <h3 className="text-2xl font-semibold mb-4">CV & Contact</h3>
        <p>
          To download my CV, click {" "}
          <a href={cv} download
          className="text-blue-600 hover:underline">
            Prahlada's CV. 
          </a>
        </p>
        <br/>

        <p>
          Email :{" "}
          <a href="mailto: prahlada_vm@es.iitr.ac.in">
            prahlada_vm@es.iitr.ac.in
          </a>
        </p>
        <p>
          Contact : <a href="tel:+91 7217456990"> +91 7217456990</a>
        </p>
        <p>
          Linkedin :{" "}
          <a href="https://www.linkedin.com/in/prahlada-mittal">
            www.linkedin.com/in/prahlada-mittal
          </a>{" "}
        </p>
        <p>Address : 568, Solani Puram Roorkee, Uttarakhand, India (247667)</p>
      </section>
    </div>
  );
};

export default MainPage;
