import { useState, useMemo, useCallback } from 'react';

/**
 * Hook for filtering projects by category and technology
 * @param {Object} projectsData - Projects organized by category
 * @returns {Object} Filter state and filtered results
 */
export function useProjectFilter(projectsData) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  // Flatten projects and add category property
  const allProjects = useMemo(() => {
    const projects = [];
    for (const [category, categoryProjects] of Object.entries(projectsData)) {
      for (const project of categoryProjects) {
        projects.push({ ...project, category });
      }
    }
    return projects;
  }, [projectsData]);

  // Get all categories
  const categories = useMemo(() => {
    return ['All', ...Object.keys(projectsData)];
  }, [projectsData]);

  // Get available technologies based on selected category
  const availableTechs = useMemo(() => {
    const projects = selectedCategory === 'All'
      ? allProjects
      : allProjects.filter(p => p.category === selectedCategory);

    const techSet = new Set();
    for (const project of projects) {
      for (const tech of project.technologies) {
        techSet.add(tech);
      }
    }
    return ['All', ...Array.from(techSet).sort()];
  }, [allProjects, selectedCategory]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    let filtered = allProjects;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedTech !== 'All') {
      filtered = filtered.filter(p => p.technologies.includes(selectedTech));
    }

    return filtered;
  }, [allProjects, selectedCategory, selectedTech]);

  // Reset tech filter when category changes
  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
    setSelectedTech('All');
  }, []);

  return {
    selectedCategory,
    setSelectedCategory: handleCategoryChange,
    selectedTech,
    setSelectedTech,
    filteredProjects,
    availableTechs,
    categories,
  };
}
