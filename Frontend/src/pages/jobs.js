import { Card } from "../components/Card/Card"
import { Title } from "../components/Title"
export function Jobs(){
    return(
        <main id="main" class="main">
        <h1>Jobs</h1>
        <a href="#">
        <Card size="col-xxl-12 col-md-12" class="card info-card sales-card" title="Your last applications" time="Today" number="" showFilter={false} showIcon={false} >
            <div class="row">
            <div class="col-lg-2">
            <img
        src="https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }} // Ensures the image fills the parent
        alt="Microsoft Store Logo"
      />
                </div>
                <div class="col-lg-9">
                <Title class="pagetitle" title="Software Engineer - Microsoft" size="h1" />
                <div class="row">
  <div class="col-auto">
    <Title class="pagetitle" title="Location: Yokneam" size="h5" />
  </div>
  <div class="col-auto">
    <Title class="pagetitle" title="Posted: 20.10.2010" size="h5" />
  </div>
</div>
                <div class="row">
                <span>Bachelor’s or Master’s degree in Computer Science, Engineering, or a related field.<br/>Proficiency in object-oriented programming and modern software development frameworks.<br/>Experience with cloud platforms like Azure, AWS, or Google Cloud.<br/>Strong problem-solving and debugging skills, with a passion for building reliable and scalable software.</span>
                </div>
                </div>
                <div class="col-lg-1">
                    <h5>Save Job</h5>
                    <h5>Applied</h5>
                </div>
            </div>
        </Card>
        </a>
        </main>
    )

  
}