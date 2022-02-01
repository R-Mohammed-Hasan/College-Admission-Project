let loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

// Displays particular course which user clicked on home page

function displayCourseFromURL() {
    let searched = new URLSearchParams(location.search);
    let searchedCourseIndex = searched.get("courseIndex");
    if (searchedCourseIndex) {
        courses(searchedCourseIndex);
    }
}
// If the logged-in person is admin, then extra css file will be appended
function adminView() {
    if (loggedIn) {
        if (loggedIn[1] == "admin") {
            let head = document.getElementsByTagName("head")[0];
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "./../assets/css/coursesSub.css";
            head.appendChild(link);
        }
    }
}


// Stores all Courses available in our website. If already exists, then retrieves it and displays in page

let storedData = JSON.parse(localStorage.getItem("allCourses"));

function displayAllCoursesAvailable() {
    var collegeAllCourses = [];
    if (storedData) {
        collegeAllCourses = storedData;
    } else {
        collegeAllCourses = [{
                name: "Mechanical Engineering",
                image: "../assets/images/mechanical.jpg",
                caption: "Our Mechanical Department's Works",
                department: "engineering",
                details: `The department of Mechanical Engineering was established in the year 2007.The department offers B.E (Mechanical Engineering) from the academic year 2007 – 2008,M.E (Manufacturing Engineering) from the academic year 2012 – 2013 and M.E (Energy Engineering) from academic year 2013 – 2014.
            
                                         The department became an approved research centre of Anna University in the year 2012. Our vision is to be an eminent Centre of Excellence in the field of Mechanical Engineering, where teaching, learning and research synergize to deliver technical education and scientific research for public good. Our mission is to create efficient Mechanical Engineers who can compete at the global level.We intend to do this by creating a research hub engaged in contemporary research in association with industries.
                
                                         The projects and hands-on activities are designed to foster a spirit of entrepreneurship among students and to enable a few to launch their own ventures. The department has qualified and experienced faculty members; many of them are with Ph.D. degree.The department regularly organizes technical workshops for the faculty members to expose them to emerging areas. The department has state-of-the art facilities for various laboratories, department library and classrooms to support e-learning. The department has a well equipped centralized workshop facility which caters to the needs of various departments. Guest lectures and industrial visits are periodically arranged for the students to supplement their curriculum. We strive for all round excellence in students, encouraging them in all extracurricular activities .
                
                                         The department has research projects funded by Department of Science and Technology (DST), All India Council for Technical Education (AICTE) , Science and Engineering Research Board and Naval Research Board (NRB) to the tune of around Rs.3.15 Crores for conducting research in Friction Stir Welding, Magnetic Moulding of Composite Materials, Vibration Studies, Robotics, Abrasive Reclamation and Finite Element Analysis of Composites. AICTE sponsored Industry Institute Partnership Cell (IIPC), and Design/Fabrication Labs support additional industry relevant learning. The major research areas are :
             
                * Alternate fuels
                * Computational Fluid Dynamics (CFD)
                * Friction Stir Welding
                * Thermal energy storage
                * Waste Management Technologies`
            },
            {
                name: "Electrical and Electronics Engineering",
                image: "../assets/images/eee.jpg",
                caption: "Our EEE Department's Works",
                department: "engineering",
                details: `The Department of Electrical and Electronics Engineering offers NBA accredited B.E. degree program in Electrical and Electronics Engineering, M.E. degree program in Power Electronics and Drives and Ph.D research program. The department is recognized as an approved research centre by Anna University since 2006. The broad area of research includes Power Systems, Power Electronics & Drives, Special Electrical Machines, Control & Dynamics, Renewable Energy Systems, High Voltage Engineering and Optimization techniques.
            
            The department is equipped with state-of-the-art laboratories like Advanced  Power Electronics lab, Solar Energy Research Lab, High Voltage Lab and System Simulation  Lab with licensed software like MATLAB, MagNet, Labview, PSpice, PSIM, PSCAD, Mipower,   EMTP and Ansys.This department has excellent track records in both research publications and research grants from reputed organizations , and there are currently over 6 active externally funded research projects and completed already 12 projects from various granting agencies.In the past five years, the department has successfully produced more than twenty Ph.D candidate. 
            
            The department has signed MoU with M/s. Danfoss Industries, M/s. Hibrise Technologies and has taken up research projects funded by AICTE, MNRE and NIWE. The Department has organized six International Conferences, seven National Conferences, seven Faculty Development Program sponsored by Anna University, three Short-term Training Program sponsored by AICTE, ISTE and many numbers of Workshops.`
            },
            {
                name: "Electronics and Communication Engineering",
                image: "../assets/images/ECE.jpg",
                caption: "Our  Department's Portfolio",
                department: "engineering",
                details: `The Department of Electronics and Communication Engineering (ECE) was established in 1996 with the vision of developing the department as a Centre of Excellence in R&D, in the field of Electronics and Communication Engineering and make the hardworking students blossom into meritorious and self-disciplined engineers.  Our mission is to develop innovative and simple instructional material to drive the concepts into the minds of students and infuse scientific temper in the students and guide them towards research in communication engineering.
            
            It is also to striving grow a committed group of competent teachers striving for excellence, be it in teaching or research and to develop Collaborative Research and Development linkages with leading organizations in India and abroad. To accomplish this, Dr. Ian F. Akyildiz Ken Byers Chair Professor with the School of Electrical and Computer Engineering at Georgia Institute of Technology has been appointed as distinguished visiting faculty who also offers two one-credit courses to the undergrad and postgrad student of the department.
            
            Accreditation  :
              This ISO9001 certified Department has been accredited by NBA (National Board of Accreditation) in 2003. It also has well-equipped state-of-the-art laboratories. 
              
            Scope of the Department   :

               * To apply the concepts of mathematics, science, and engineering effectively.
               * To design, analyse and interpret data through experiments.
               * To identify, formulate, and solve engineering problems.
               * To understand professional and ethical responsibility.
               * To communicate effectively.
               *  To broaden the education necessary to understand the impact of engineering solutions in a global, economic, environmental, and societal context.
               * To use the techniques, skills, and modern engineering tools necessary for engineering practice.`
            },
            {
                name: "Computer Science Engineering",
                image: "../assets/images/CSE.jpeg",
                caption: "Our Computer Science Department",
                department: "engineering",
                details: `The Department of Computer Science and Engineering (CSE) was established in the year 1996 along with the inception of the college.The primary objective of this department is to provide a high quality computer science education to students from all over India as well as abroad and across all economic strata.The department offers an undergraduate degree program B.E(CSE) and a postgraduate degree program M.E(CSE).In 2006, the department was recognized as a Centre for Research, by Anna University to offer a Ph.D.program.
            
            The undergraduate program B.E (CSE) has been accredited by NBA in 2015 for five years, for the third time. The postgraduate program M.E (CSE) has been accredited by NBA in 2016 for five years for the second time. The department has state-of-the-art laboratory facilities, Wi-Fi enabled class rooms with laptops and overhead projectors to facilitate e-Learning, a well-equipped seminar hall and a well-stocked department library.
            
            Teaching-Learning Process  :

             * The department has thirty four dedicated and highly qualified faculty members who inculcate to students both theoretical knowledge and practical skills in a balanced manner.
             * The department uses the Moodle Learning Management System (LMS) which hosts individual course pages comprising the syllabus, lesson plan, lecture notes and reading materials. The pedagogy used is primarily learner-centric.
             *  The department organizes guest lectures periodically from eminent faculty members of reputed academic institutes or experienced professionals from various top-notch industries.
             * The department organizes several workshops on emerging technologies for the benefit of students to supplement their curriculum. This facilitates our students to enrich their knowledge and also be up-to-date on current industry trends.
             * The department has active student chapters of professional societies such as ACM, CSI and IEEE as well as a CodeChef campus chapter which regularly conduct coding competitions and sessions on open source software development.
             * The department periodically organizes various Short Term Training Programs (STTP), Faculty Development Programs (FDP) and National Seminars sponsored by AICTE, Anna University and ACM Education Committee.
             * The department has organized four international conferences and three national conferences.`
            },
            {
                name: "Information Technology",
                image: "../assets/images/IT.jpg",
                caption: "Our IT Department",
                department: "engineering",
                details: ` The Department of Information Technology was established in the year 1999.Our Mission is to provide quality education to the students and impart IT excellence in them. Apart from making them good technocrats, we also provide individual attention to make them good citizens of our nation to serve the industry and society constructively.
            
            Drawing upon SSNCE’s tradition of teaching excellence, the department with 30 faculty members and  480/600 students of UG, PG, Ph.D/M.S research scholars, JRF and Project Staff work closely together in an open, collegial atmosphere. With Anna University’s curriculum, the department places equal emphasis on theoretical and experimental Information Technology. The department has state-of-art facilities in various labs, a well-equipped seminar hall and a conference room, class rooms to support e-learning and a department library.
            
            Programmes offered by the department are  : 

             * B. Tech. Information Technology
             * M. Tech. Information Technology
             * Ph.D.
             
             Measures to Improve Teaching Learning Process  :
             
             * The teaching and learning process of our department is accredited by the National Board of Accreditation (NBA) in March 2015 for the second consecutive term for 5 years for the period 2015-2020. The department is also ISO 9001:2015 certified.
             * The department regularly organizes Faculty Development Programs (FDPs), Short Term Training Programmes (STTPs), Winter/Summer School Programmes, research seminars and invited talks for our faculty based on the curriculum and the recent trends in IT industries sponsored by Anna University, AICTE-ISTE, IEEE Madras Section, IEEE Computer Society, CSI, CTS, Infosys, Wipro, Navis.com and etc.
             * Periodic guest lectures, hands on training programmes and workshops are conducted for the students to supplement their curriculum, sponsored by our college. This facilitates our students to update their knowledge on par with the industry standards.`
            },
            {
                name: "Chemical Engineering",
                image: "../assets/images/chemical-eng.jpeg",
                caption: "Chemical Engineering Department",
                department: "engineering",
                details: `The department of Chemical Engineering was established in the year 2004. The department offers B.Tech (Chemical Engineering) from the academic year 2004–2005, and M.Tech (Environmental Science and Technology) from the academic year 2014–2015. In 2011, the Department had been recognized as a Centre for Research, by Anna University to offer Ph.D. and M.S.(by Research) programmes in collaboration with Anna University.
            
            Chemical Engineering is one of the most popular branches of engineering which deals with the large-scale production of chemicals. Chemical Engineers apply both the knowledge of chemistry and the principles of engineering in the chemical industry and thus forming a bridge between science and manufacturing.They are involved in a wide variety of activities like equipment designing, process development for chemical manufacturing on a large scale, planning, testing various ways of production and treatment of by-products as well as the supervision of manufacturing activities.
            
            The Chemical Engineers (also called as Process Engineers) work in the various aspects of varieties of industries such as: chemicals, petroleum and petrochemicals, bio-chemicals, food preservation, pharmaceuticals, electronic materials, materials of every day life, energy, environment, etc. 
            
            The education of the chemical engineer includes a strong sequence of chemistry courses in addition to mathematics, physics, and the engineering sciences. Students also study subjects relating to processes, machinery, and plants used in chemical industries. This intensive study of both engineering and science provides  a basis for the graduating student to conduct research, improve processes or materials, develop and design plants, or direct operations of industrial plants involving chemical methods.Chemical Engineering curriculum consists of the following core courses: Chemical Technology, Process Calculations, Thermodynamics, Fluid Mechanics, Mechanical Operations, Heat Transfer, Mass Transfer, Reaction Engineering, Process Control, Economics, Equipment design.`
            },
            {
                name: "Bio-medical Engineering",
                image: "../assets/images/Bio-medical.jpg",
                caption: "Bio-medical Engineering Department's Works",
                department: "engineering",
                details: `The Department of Biomedical Engineering was started in the year 2005 offering a B.E degree in Biomedical Engineering. The department was recognised as a research centre in 2011 and offers Ph.D. degree in Biomedical Engineering. It also offers a Master of Engineering degree in Medical Electronics, since 2014. The department now has a total of 14 faculty members with 10 Ph.D. holders and 4 pursuing Ph.D. The department has a total strength of 200 students, from diverse economic strata, willing to deliver their best, for the welfare of the society.
            
            The Mission of the department is to educate students to understand the human body as an integrated system through quantitative engineering analysis and to use that understanding to design better therapeutic strategies, devices, and diagnostics while serving the society by conducting research that develops quantitative linkages across scales in the human body and uses that development to build new tools to improve human health. At the same time to catalyze interactions between biologists, physical scientists, and engineers to help medicine and human health and create enabling technologies through innovative and evidence-based interventions and practices for the improvement of human health and health care.
            
            The programs offered by the department are B.E. Biomedical Engineering, M E Medical Electronics, and Ph.D. (by Research). The department has well-equipped, state-of-the-art laboratories including  the biomedical instrumentation lab, microbiology and biochemistry lab, diagnostic and therapeutic lab, to meet the requirements of Anna University to the fullest and to enable the students and the  scholars to pursue research in-house. Our research labs are equipped with high-end types of equipment like EMOTIV EEG, Fluorescence microscope, CO2 Incubator etc., design software like  MIMICS Innovation Suite, CREO and 3D printer for faculty and student research.
            
            Highlights of the department include industry-institute interactions with eminent healthcare organisations like Philips India, Perfint Healthcare, Phoenix medical systems, HCL Healthcare, Medtronic India etc. Further, the ethical committee of the institution is managed by the department. Apart from these, our students undergo internships at various government organizations such as IITs, IISC, DRDO and in renowned hospitals like lifeline Hospitals, FORTIS™ Malar Hospitals, Apollo hospitals, PSG Hospitals, Global Hospitals to name a few.`
            },
            {
                name: " Civil Engineering",
                image: "../assets/images/civil.jpg",
                caption: "Civil Engineering Department's Works",
                department: "engineering",
                details: ` Civil Engineering is a branch of engineering involved in the conceptualization,planning, design, construction and operation of systems, facilities and infrastructure needed for maintaining and supporting modern civilization. It is the oldest and broadest of the divisions of engineering which implements a range of public and private projects for improving society’s physical infrastructure and the environment. A civil engineer integrates scientific principles with engineering experience to plan, design, and construct networks of highways and railroads, airports, bridges and dams, environmental pollution control systems, industrial structures, water purification and distribution systems, and urban transportation systems that maintain, protect, and enhance the quality of life.
            
            He or she is also into understanding the geology and plate tectonics, which helps in classifying the land with respect to earthquakes. The Civil Engineering course trains a student in fundamental subjects like mathematics, physics and chemistry as well as essentials of other streams of engineering, making him ready to be the builder of the modern world. The Department of Civil Engineering was started in the academic year 2011-12 with an aim of promoting high-quality  education in the field of Civil Engineering. 
            
            The department has well-equipped laboratory facilities  and highly qualified faculty members having rich experience in teaching and industrial background.The department is aiming to transform itself into a centre of excellence both in academic and research. The department provides the right kind of environment for the students to groom themselves for innovative and challenging near future. It is also actively engaged in cutting edge research, trying to find simple and cost-effective solutions for the construction industry and society as a whole. The department is aiming to transform itself into a centre of excellence, both in academics as well as research.The department takes the best possible efforts to provide its students with the right kind of ambience for their holistic development into future pillars of the nation and society.
            
            Our graduates are currently in employment with companies of national and international repute. We also have a rich heritage of students pursuing higher studies in prestigious institutions and universities, both in India and abroad.The Department of Civil Engineering have signed MoU with various organisations to foster industry-institute interaction and provide practically relevant skills to the students and placement opportunities. The department currently offers post-doctoral fellowships to eligible candidates in various areas. Interested candidates can contact the HOD to know further details.`
            },
            {
                name: "Bachelor of Business Administration",
                image: "../assets/images/BBA.jpg",
                caption: "Bachelor of Business Administration Department",
                department: "arts",
                details: ` BBA is a 3 Years degree program that enables you to bang on in the field of Business and build your neuro pathways according to a Businessman. Almost all those Students who are interested to do business only join BBA. Here you got training in developing good communication skills and pitching your client to generate sales and conversion in your business.
            
            Bachelor of Business Administration also known as BBA is one of the finest courses amongst undergraduate programs.BBA comes from the branches of Business Studies which provide us knowledge of doing business,understanding peoples, managing people, Handling tough and critical customer relationships, and communication skills as well.
            
            This is a readily available course, in which it is easy to get admission, and whose fees are also low, so more and more students can do this course.There is a lot of good colleges in every state for the BBA course,so there is not much competition for the seat. This course is planned in such a way that students learn to manage any business well during these 3 years.After doing this professional course, the chances of getting a job with a good package in a good field and companies are very high.
            
            BBA is a very good job oriented professional course that any student who is interested in the management field can do.Students whose interest is to start their own business later, can also do this course.Or the students  who have to do a good course in less time at less expense, which guarantees a good job and salary, then they can also do this course.`
            },
            {
                name: "Bachelor of Management Science",
                image: "../assets/images/BMS.webp",
                caption: "Bachelor of Management Science Department",
                department: "arts",
                details: `What is BMS ?

             BMS stands for Bachelor of Management Studies which is an undergraduate degree course in the management field. BMS degree is a 3 years degree course offered by various management institutes across the globe. Bachelor of Management degree consists of 6 semesters. Class 12th passed students of commerce, arts and science stream are eligible to apply for BMS admission. Students gain the knowledge of management practises and policies while studying the BMS course. It helps to enhance business, management, problem-solving and negotiation skills.
             
             Advantages of BMS  :

               * Since BMS is a professional degree course, the quality of education is much better than any other regular management course.
               * BMS as a degree is very similar to a BBA degree. The subjects are more or less the same but the average fee of a BBA degree is Rs. 1.5 lakh whereas the average fee of a BMS degree is Rs. 75,000.
               * A BMS course provides an opportunity to learn and understand the field of business and management in a better way.
               * A BMS degree also provides better career prospects along with a higher pay package.`
            },
        ];
        localStorage.setItem("allCourses", JSON.stringify(collegeAllCourses));
    }
}

// Displaying all courses available in local storage passing it's index as parameter

function courses(index) {
    document.getElementsByClassName("content")[0].style.display = 'block';
    let allCoursesStorage = JSON.parse(localStorage.getItem("allCourses"));
    document.getElementById("details").innerText = allCoursesStorage[index].details;
    document.getElementsByClassName("title")[0].innerHTML = "About " + allCoursesStorage[index].name;
    document.getElementById("image").src = allCoursesStorage[index].image;
    document.getElementsByClassName("overwrite")[0].innerHTML = allCoursesStorage[index].caption;

    if (allCoursesStorage[index].fee != undefined) {
        document.getElementById("feeDetails").innerHTML = `<table border = "3" width = '80%' align = 'center' >
            <thead>
            <tr>
                <th> Fee Details </th>
                <th> 1 st Semester </th>
                <th> 2 nd Semester </th>
             </tr>
             </thead>
            <tbody id = "feeDetails">
            <tr>
                <th> 1 st Year </th>
                <td> ${allCoursesStorage[index].fee.firstSemester} </td>
                <td>${ allCoursesStorage[index].fee.secondSemester } </td>
             </tr>
            <tr>
                <th> 2 nd Year </th>
                <td>${allCoursesStorage[index].fee.thirdSemester}</td>
                <td> ${ allCoursesStorage[index].fee.fourthSemester} </td>
            </tr>
            <tr>
                <th> 3 rd Year </th>
                <td>${allCoursesStorage[index].fee.fifthSemester}</td>
                <td> ${allCoursesStorage[index].fee.sixthSemester} </td>
             </tr>
            </tbody>
             </table> `
    } else {
        document.getElementById("feeDetails").innerHTML = '';
    }
}

// Displaying Course Details in right side of page based on category of department.
//  Here the page is same, only the right side of page changes as user clicks on each course

function addingCourse() {
    let parsedCourses = JSON.parse(localStorage.getItem("allCourses"));
    let len = parsedCourses.length;
    let i = 0;
    let arts = ``;
    let engineering = ``;
    let integrated = ``;
    for (i; i < len; i++) {
        let oneCourseDepartment = parsedCourses[i];
        if (oneCourseDepartment.department == "engineering") {
            engineering += ` <dd onclick = "courses(${i})">
            <p> ${ oneCourseDepartment.name } </p>
             <div class = "dropdown" >
            <label for = "dd_button_${i}">
            <img class = "forEditing" src = "./../assets/images/moreIcon.svg" >
            </label>
             <input type = "checkbox" id = "dd_button_${i}" class="editOptionButton">
            <div class = "editContent">
            <button onclick = "editCourse('${oneCourseDepartment.name}')" > Edit </button>
             <button type = "button" onclick = "deleteCourse('${oneCourseDepartment.name}')" > Delete </button>
             </div>
             </div>
             </dd> `;
        }
        if (oneCourseDepartment.department == "arts") {
            arts +=
                ` <dd onclick = "courses(${i})">
                    <p> ${ oneCourseDepartment.name } </p> 
                    <div class = "dropdown">
                        <label for = "dd_button_${i}" >
                        <img class = "forEditing" src = "./../assets/images/moreIcon.svg" >
                        </label> 
                        <input type = "checkbox" id = "dd_button_${i}" class="editOptionButton">
                        <div class = "editContent">
                        <button onclick = "editCourse('${oneCourseDepartment.name}')" > Edit </button> 
                        <button type = "button" onclick = "deleteCourse('${oneCourseDepartment.name}')"> Delete </button> 
                    </div> 
            </div> </dd>`;
        }
        if (oneCourseDepartment.department == "integrated") {
            integrated += `
            <dd onclick="courses(${i})">
                <p> ${oneCourseDepartment.name} </p>
                <div class="dropdown">
                    <label for="dd_button_${i}">
                        <img class="forEditing" src="./../assets/images/moreIcon.svg">
                    </label>
                    <input type="checkbox" id="dd_button_${i}" class="editOptionButton">
                    <div class="editContent">
                    <button onclick="editCourse('${oneCourseDepartment.name}')"> Edit </button>
                        <button type="button" onclick = "deleteCourse(${oneCourseDepartment.name})">Delete</button>
                    </div>
                </div>
            </dd>`;
        }
    }
    document.getElementById("artsCoursesTopics").innerHTML = arts;
    document.getElementById("engineerCoursesTopics").innerHTML = engineering;
    document.getElementById("integratedCoursesTopics").innerHTML = integrated;

}

// Deleting a course by passing name of Course as argument

function deleteCourse(nameOfCourse) {
    for (let i in storedData) {
        if (storedData[i].name == nameOfCourse) {
            storedData.splice(i, 1);
        }
    }
    localStorage.setItem("allCourses", JSON.stringify(storedData));
    addingCourse();
}

/* Passing course name as argument to allow admins edit the course by changing "div" to "textarea"
and after clicking edit button, will change the modified content in local storage.
*/

function editCourse(courseName) {
    let i = 0;
    let detail;
    let currentCourseIndex;
    for (i in storedData) {
        if (courseName == storedData[i].name) {
            detail = document.querySelector("#details");
            currentCourseIndex = i;
            break;
        }
    }
    console.log(currentCourseIndex);
    let button = prerequisiteForEditing(detail);
    button.onclick = () => {
        let editedValue = document.querySelector(".editingCourse").value;
        storedData[currentCourseIndex].details = editedValue;
        console.log(storedData);
        window.location.reload();
        localStorage.setItem("allCourses", JSON.stringify(storedData));
    }

}

// Replaces the "div" to "textarea" tag on content (right side) and returns the edit button

window.addEventListener("click", (event) => {
    let element = event.target;
    let allButtons = document.getElementsByClassName("editOptionButton");
    for (button of allButtons) {
        if (element == button) {
            button.checked = true;
            break;
        } else {
            button.checked = false;
        }
    }
});

function prerequisiteForEditing(detailsOfCourse) {
    // Change div to input type
    let input = document.createElement("textarea");
    let forModDetails = document.createTextNode(detailsOfCourse.innerText);
    // Adding class for editing content 
    input.appendChild(forModDetails);
    input.setAttribute("class", "editingCourse");
    // Replacing content with textarea
    let parent = document.querySelector(".content");
    parent.replaceChild(input, detailsOfCourse);
    // Creating edit button
    let button = document.createElement("button");
    let buttonValue = document.createTextNode("Edit");
    button.setAttribute("class", "edit button");
    button.appendChild(buttonValue);
    // Creating cancel button
    let cancelButton = document.createElement("button");
    let cancelButtonValue = document.createTextNode("Cancel");
    cancelButton.setAttribute("class", "cancel button");
    cancelButton.appendChild(cancelButtonValue);
    parent.appendChild(button);
    parent.appendChild(cancelButton);
    cancelButton.onclick = () => {
        window.location.reload();
    }
    return button
}

adminView();
displayAllCoursesAvailable();
displayCourseFromURL();
addingCourse();