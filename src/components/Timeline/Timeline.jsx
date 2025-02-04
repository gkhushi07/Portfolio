import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';


function Timeline() {
    return (
        <div style={{padding: "20px"}}>
            <p style={{margin: "5px",textAlign: "center",fontSize:" 2.5rem", color: "#fff" }}>Experience</p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(39, 40, 41, 0.6)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(39, 40, 41, 0.6)' }}
                    date="2023 - Present"
                    iconStyle={{ background: 'grey', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer</h3>
                    <p>W3Villa Technologies Pvt. Ltd.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(39, 40, 41, 0.6)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(39, 40, 41, 0.6)' }}
                    date="2021 - 2021"
                    iconStyle={{ background: 'grey', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Pre-Sales Intern </h3>
                    <p>Whitehat Jr.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgba(39, 40, 41, 0.6)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgba(39, 40, 41, 0.6)' }}
                    date="2020-2023"
                    iconStyle={{ background: '#333333', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor's of Computer Applications</h3>
                    <p>
                        (BCA)
                    </p>
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                /> */}
            </VerticalTimeline>
        </div>

    )
}

export default Timeline