import ListEntryCard from './ListEntryCard';

export default function WorkExperienceCard({ position, company, location, duration, achievements, technologies }) {
    return (
        <ListEntryCard
            title={position}
            subtitle={`${company} - ${location}`}
            duration={duration}
            details={achievements}
            technologies={technologies}
        />
    );
}
