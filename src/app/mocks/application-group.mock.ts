import { ApplicationGroup } from "../models/application-group";

const applicationGroups: ApplicationGroup[] = [
    {
        id: 1,
        name: "Productivity",
        description: "Tools to help you work more efficiently",
        image: "productivity.jpg",
        applications: [
            {
                id: 1,
                name: "Google Docs",
                description: "Online word processing and document editing",
                image: "google-docs.jpg"
            },
            {
                id: 2,
                name: "Trello",
                description: "Task and project management tool",
                image: "trello.jpg"
            }
        ]
    },
    {
        id: 2,
        name: "Communication",
        description: "Apps for staying in touch with colleagues and clients",
        image: "communication.jpg",
        applications: [
            {
                id: 1,
                name: "Slack",
                description: "Team communication and collaboration tool",
                image: "slack.jpg"
            },
            {
                id: 2,
                name: "Zoom",
                description: "Video conferencing and webinar platform",
                image: "zoom.jpg"
            }
        ]
    }
];