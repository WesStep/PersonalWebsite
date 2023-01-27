export default class Resume extends HTMLElement {
    #template = `
    <style>
        /*
          Josh's Custom CSS Reset
          https://www.joshwcomeau.com/css/custom-css-reset/
        */
        *, *::before, *::after {
            box-sizing: border-box;
        }
        
        * {
            margin: 0;
            padding: 0;
            font-family: 'Open Sans', sans-serif;
        }
        
        img, picture, video, canvas, svg {
            display: block;
            max-width: 100%;
        }
        
        input, button, textarea, select {
            font: inherit;
        }
        
        p, h1, h2, h3, h4, h5, h6 {
            overflow-wrap: break-word;
        }
        
        /****************
            END Css Reset
        *****************/
        
        a {
            text-decoration: none;
            color: blue;
        }
        
        .date-range {
            font-style: italic;
            font-size: 0.85rem;
        }
        
        #download-resume-btn {
            background-color: navy;
            border-radius: 0.25rem;
            color: white;
            display: inline-block;
            margin: 0.5rem 0 0 0;
            padding: 0.25rem 0.5rem;
            transition: 0.2s;
        }
        
        #download-resume-btn:hover {
            background-color: #555;
            transition: 0.2s;
        }
        
        #education-section p {
            display: flex;
            justify-content: space-between;
            padding: 0;
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Playfair Display', serif;
        }
        
        h2 {
            margin: 0.5rem 0;
        }
        
        h3 {
            margin-top: 1.5rem;
        }
        
        hr {
            border: none;
            border-top: 1px solid black;
        }
        
        li {
            margin-left: 0.5rem;
        }
        
        section {
            padding: 5.5rem 1rem 0 1rem;
            max-width: 40rem;
            margin: 0 auto;
        }
        
        section p {
            padding: 0.5rem 0;
        }
        
        ul {
            margin: 0.5rem;
        }
        
        .work-experience-entry + .work-experience-entry {
            margin: 1.5rem 0;
        }
    </style>
    
    <section>
        <h2>Resume</h2>
        <div id="experience-section">
            <h3>Web Developer Experience</h3>
            <div class="work-experience-entry">
                <h4>
                    Full Stack Web Developer, Malouf Companies<hr />
                    <span class="date-range">March 2021 - Jan 2023 (1 yr, 11 mos)</span>
                </h4>
                <ul>
                    <li>Participated in re-write of Malouf’s ordering-invoicing-fulfillment software to make it more reliable, profitable, and efficient.</li>
                    <li>Built new features as needed using Laravel, PHP, Vue.js, and JavaScript.</li>
                    <li>Communicated effectively across teams to clearly set expectations, clarify requirements, and handle problems.</li>
                </ul>
            </div>
            <div class="work-experience-entry">
                <h4>
                    Software Developer 2, Fox Pest Control<hr />
                    <span class="date-range">Nov 2020 - March 2021 (5 mos)</span>
                </h4>
                <ul>
                    <li>Created a new “feature request” section on Fox’s checklist application.</li>
                    <li>Re-worked the backend service that used to pull fresh data daily to pull data hourly from Fox’s data collection software to their data warehouse.</li>
                <ul>
            </div>
            <div class="work-experience-entry">
                <h4>
                    Application Support Technician, Journal Technologies<hr />
                    <span class="date-range">Feb 2019 - Nov 2020 (1 yr, 10 mos)</span>
                </h4>
                <ul>
                    <li>Communicated effectively with customers consisting of government agencies and offices.</li>
                    <li>Configured custom scripts, forms, reports, and documents per customer requests.</li>
                    <li>Maintained open and positive communication with manager and coworkers.</li>
                    <li>Accelerated growth of meaningful documentation by contributing to, expanding, and improving Journal Tech's internal wiki.</li>
                </ul>
            </div>
            <div class="work-experience-entry">
                <h4>
                    Back End Web Developer, THG Inc.<hr />
                    <span class="date-range">April 2018 - Nov 2018 (8 mos)</span>
                </h4>
                <ul>
                    <li>Learned new technologies within 4 months of starting such as Laravel and Docker.</li>
                    <li>Converted over 12 poorly working features of the console website to Laravel, saving hundreds of future development hours.</li>
                    <li>Assisted in the creation of 5+ new features on the console website.</li>
                </ul>
            </div>
            <div class="work-experience-entry">
                <h4>
                    Technical Support Rep, THG Inc.<hr />
                    <span class="date-range">Jun 2016 - Apr 2018 (1 yr, 11 mos)</span>
                </h4>
                <ul>
                    <li>Communicated effectively with clients over phone and live chat to provide technical support, receiving letters of happy clients about once a week.</li>
                    <li>Solved 200+ web hosting-related questions from clients and coworkers.</li>
                    <li>Took initiative on documenting steps taken, who was involved, results of efforts, and future recommendations to senior tech support representatives and managers.</li>
                    <li>Wrote several pages of documentation on best practices and principles.</li>
                    <li>Maintained a minimum of 5 meaningful contacts (phone call, live chat, or support ticket response) per hour.</li>
                </ul>
            </div>
            <div class="work-experience-entry">
                <h4>
                    Full Time Volunteer<hr />
                    <span class="date-range">Jun 2013 - Jun 2015 (2 yrs)</span>
                </h4>
                <ul>
                    <li>Led and assisted groups of 8-10 full-time volunteers.</li>
                    <li>Directed weekly and monthly meetings of 15-20 full-time volunteers.</li>

                </ul>
            </div>
        </div>
        <div id="relevant-skills-and-tech-section">
            <h3>Relevant Skills and Technologies</h3>
            <ul>
                <li>CSS</li>
                <li>Docker</li>
                <li>FTP</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Laravel</li>
                <li>Linux CLI</li>
                <li>MVC</li>
                <li>PHP</li>
                <li>SSH</li>
                <li>Agile development</li>
                <li>Jira</li>
                <li>Effective, concise, and positive communication</li>
                <li>Lead others toward established goals</li>
                <li>Proactive in finding meaningful solutions to problems</li>
                <li>Troubleshoot various issues dealing with broken websites and email accounts</li>
            </ul>
        </div>
        <div id="portfolio-section">
            <h3>Portfolio</h3>
            <ul>
                <li><a href="https://resume.wesstep.com">resume.wesstep.com</a> – My resume website. (The one you're reading right now!)</li>
                <li><a href="https://tower.wesstep.com">tower.wesstep.com</a> – Tower of Hanoi game built in JavaScript. Mainly desktop-based.</li>
                <li><a href="https://slider.wesstep.com">slider.wesstep.com</a> – 15-tile slider game designed after the old-fashioned hand-held game. This game is mobile-friendly.</li>
            </ul>
        </div>
        <div id="education-section">
            <h3>Education</h3>
            <p><span>B.S., Management Information Systems</span><span>August 2018</span></p>
            <p><span>Utah State University, Logan, UT</span><span>GPA 3.39</span></p>
        </div>
        <a id="download-resume-btn" href="./assets/files/Resume.pdf" download="Wes_Stephenson_Resume.pdf">Download A Resume Copy</a>
    </section>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
    }
}