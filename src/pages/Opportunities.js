import React, { useState, useMemo } from 'react';
import { programs } from '../data/opportunitiesData';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Opportunities = () => {
    const [filters, setFilters] = useState({
        type: 'All',
        location: 'All',
        year: 'All'
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const filteredPrograms = useMemo(() => {
        return programs.filter(program => {
            const typeMatch = filters.type === 'All' || program.type === filters.type;
            const locationMatch = filters.location === 'All' || program.location === filters.location;
            const yearMatch = filters.year === 'All' || program.eligibleYears.includes(parseInt(filters.year));
            return typeMatch && locationMatch && yearMatch;
        });
    }, [filters]);

    const filterOptions = {
        type: ['All', 'Internship', 'Masters', 'PhD', 'Integrated PhD', 'Post-Graduate Diploma'],
        location: ['All', 'Domestic', 'International'],
        year: ['All', '1', '2', '3', '4', '5']
    };

    return (
        <div className="animate-fadeInUp">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Internships & Post-Graduate Programs</h1>
            <p className="text-lg text-text-secondary mb-8">A curated list of research internships, masters, and PhD programs for physics students.</p>

            {/* Filter Controls */}
            <div className="card-base p-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
                    <span className="font-semibold text-text-primary md:text-right">Filter by:</span>
                    {/* Type Filter */}
                    <FilterDropdown name="type" label="Program Type" value={filters.type} options={filterOptions.type} onChange={handleFilterChange} />
                    {/* Location Filter */}
                    <FilterDropdown name="location" label="Location" value={filters.location} options={filterOptions.location} onChange={handleFilterChange} />
                    {/* Year Filter */}
                    <FilterDropdown name="year" label="Eligible Year" value={filters.year} options={filterOptions.year} onChange={handleFilterChange} />
                </div>
            </div>

            {/* Program Grid */}
            {filteredPrograms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPrograms.map((program, index) => (
                        <div key={index} className="card-base flex flex-col overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                            <img src={program.imageUrl} alt={`${program.institute} campus`} className="w-full h-40 object-cover"/>
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold text-text-primary mb-2">{program.name}</h2>
                                <p className="text-sm font-semibold text-text-secondary mb-4">{program.institute}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="text-xs font-semibold bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">{program.type}</span>
                                    <span className="text-xs font-semibold bg-gray-500/10 text-text-secondary px-3 py-1 rounded-full">{program.location}</span>
                                </div>
                                <p className="text-xs text-text-secondary mb-4">Eligible for years: {program.eligibleYears.join(', ')}</p>
                                <div className="mt-auto">
                                    <a href={program.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 w-full justify-center px-4 py-2 bg-accent-primary hover:bg-accent-secondary rounded-md text-white font-semibold transition-colors">
                                        Visit Website <FaExternalLinkAlt size="0.8em" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center card-base p-8">
                    <h3 className="text-xl font-bold text-text-primary">No programs match your filters.</h3>
                    <p className="text-text-secondary mt-2">Try adjusting your selection to find more opportunities.</p>
                </div>
            )}
        </div>
    );
};

const FilterDropdown = ({ name, label, value, options, onChange }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-text-secondary">{label}</label>
        <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-border-color focus:outline-none focus:ring-accent-primary focus:border-accent-primary sm:text-sm rounded-md bg-background-primary text-text-primary"
        >
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
);

export default Opportunities;

