
interface AdaptiveCardProps {
    name: string;
    email: string;
    phone: string;
    message: string;
    submittedAt?: string;
}


const buildAdaptiveCard = ({
    name,
    email,
    phone,
    message,
    submittedAt = new Date().toISOString(),
}: AdaptiveCardProps) => {
    return {
        $schema: "https://adaptivecards.io/schemas/adaptive-card.json",
        type: "AdaptiveCard",
        version: "1.5",
        body: [
            {
                type: "TextBlock",
                size: "Large",
                weight: "Bolder",
                text: `Customer Inquiry - ${name} @ ${email}`,
                color: "Accent",
            },
            {
                type: "TextBlock",
                text: `**Customer Name:** ${name}`,
                wrap: true,
            },
            {
                type: "TextBlock",
                text: `**Email:** ${email}`,
                wrap: true,
            },
            {
                type: "TextBlock",
                text: `**Phone:** ${phone}`,
                wrap: true,
            },
            {
                type: "TextBlock",
                text: `**Message:** ${message}`,
                wrap: true,
            },
            {
                type: "FactSet",
                facts: [
                    { title: "Submitted:", value: submittedAt },
                    { title: "Source:", value: "Busymakingmedia.com" },
                ],
            },
        ],
    };
}

export default buildAdaptiveCard