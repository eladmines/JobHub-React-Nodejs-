import { Title } from '../components/Title';
import { Card } from '../components/Card/Card';
import { CardBody } from '../components/Card/CardBody';
import { CardIcon } from '../components/Card/CardIcon';
import { Table } from '../components/Table/Table';
import { TrafficChart } from '../components/TrafficChart';

export function DashBoard() {
    const topCards = [
        { title: "Active Apps", icon: "bi bi-file-earmark-text", class: "active-applications-card" },
        { title: "Next Meetup", icon: "bi bi-people", class: "next-meetup-card" },
        { title: "Saved Jobs", icon: "bi bi-disc", class: "savedjobs-card" }
    ];

    const colsHeader = ["Date", "Company", "Role", "Status"];
    const dataTable = [
        { Date: "15.9.2024", Company: "Microsoft", Role: "Software Engineer", Status: "Active" },
        { Date: "16.9.2024", Company: "Google", Role: "Data Scientist", Status: "Pending" },
        { Date: "17.9.2024", Company: "Amazon", Role: "Product Manager", Status: "Inactive" },
        { Date: "18.9.2024", Company: "Facebook", Role: "UX Designer", Status: "Active" },
        { Date: "19.9.2024", Company: "Apple", Role: "Systems Analyst", Status: "Active" },
        { Date: "20.9.2024", Company: "Netflix", Role: "Software Developer", Status: "Pending" },
        { Date: "21.9.2024", Company: "IBM", Role: "Cloud Engineer", Status: "Inactive" },
        { Date: "22.9.2024", Company: "Intel", Role: "Hardware Engineer", Status: "Active" },
        { Date: "23.9.2024", Company: "Adobe", Role: "Creative Director", Status: "Pending" },
        { Date: "24.9.2024", Company: "Salesforce", Role: "Business Analyst", Status: "Active" }
    ];

    return (
        <main id="main" class="main">
            <Title class="pagetitle" title="DashBoard" size="h1" />
            <section class="section dashboard">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            {topCards.map((item, index) => (
                                <div key={index} class="col-xxl-4 col-md-6">
                                    <Card class={`card info-card ${item.class}`} showFilter={true}>
                                        <CardBody>
                                            <Title class="card-title" title={item.title} size="h5" />
                                            <div class="d-flex align-items-center">
                                                <CardIcon image={item.icon} />
                                                <div class="ps-3">
                                                    <Title class="ps-3" title="146" size="h6" />
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <TrafficChart />
                    </div>
                </div>

                <Card size="col-xxl-12 col-md-12" class="card info-card sales-card" title="Your last applications" time="Today" number="" showFilter={false} showIcon={false} >

                    <CardBody>
                        <Table colsHeader={colsHeader} dataTable={dataTable} />
                    </CardBody>
                </Card>
            </section>
        </main>
    );
}
