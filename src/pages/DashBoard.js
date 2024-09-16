import {Title} from '../components/Title'
import {Card} from '../components/Card/Card'
export function DashBoard(){
    const mytext = (<h1>sdsdsdsdsdssad</h1>)
    return (
    <main id="main" class="main">
    <Title title="DashBoard"/>
    <section class="section dashboard">
        <div class="row">
            <Card size="col-xxl-3 col-md-5" class="card info-card sales-card" title="Active Applications" time="Today" number="145" showFilter={true} showIcon={true}/>
            <Card size="col-xxl-3 col-md-5" class="card info-card sales-card" title="Saved Jobs" time="Today" number="145" showFilter={true} showIcon={true}/>
            <Card size="col-xxl-3 col-md-5" class="card info-card sales-card" title="Meetups" time="Today" number="145" showFilter={true} showIcon={true}/>
            <Card size="col-xxl-3 col-md-5" class="card info-card sales-card" title="Meetups" time="Today" number="145" showFilter={true} showIcon={true}/>
        </div>
        
        <Card size="col-xxl-12 col-md-12" class="card info-card sales-card" title="Your last applications" time="Today" number="145" showFilter={false} showIcon={false}>
            {mytext}
        </Card>
    </section>

  </main>
    )
}