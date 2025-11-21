import ListEntryCard from './ListEntryCard';

export default function EducationCard({ institution, degree, major, date, location, gpa, coursework }) {
    const details = [
        { text: `GPA: ${gpa}`, metrics: [gpa] },
    ];

    return (
        <ListEntryCard
            title={`${degree} in ${major}`}
            subtitle={`${institution} | ${location}`}
            duration={date}
            details={details}
            technologies={coursework}
        />
    );
}
